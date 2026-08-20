/**
 * Single-file client + ESM host build for dsh-march7th-skin.
 *
 * The web server serves exactly one file per plugin (/plugins/dsh-march7th-skin/client.js),
 * so the client half is one CJS bundle wrapped in the ModuleLoader factory
 * handshake; @deepseek-ai/dsh-* stay external (the profile's node_modules and
 * the app's module system provide them). The host half is plain ESM for Node,
 * externalizing @deepseek-ai/dsh-* while keeping node builtins bundled.
 */
import { build } from 'esbuild'
import { mkdirSync } from 'node:fs'

mkdirSync('lib', { recursive: true })

const dshExternal = ['@deepseek-ai/cordis', '@deepseek-ai/dsh-*']

await build({
  entryPoints: ['src/index.ts'],
  outfile: 'lib/index.js',
  bundle: true,
  format: 'esm',
  platform: 'node',
  target: ['node22'],
  sourcemap: true,
  external: dshExternal,
  logLevel: 'info',
})

await build({
  entryPoints: ['src/client/index.ts'],
  outfile: 'lib/client.js',
  bundle: true,
  format: 'cjs',
  platform: 'browser',
  target: ['es2022'],
  sourcemap: true,
  external: dshExternal,
  // Keep CSS authored as a real stylesheet while preserving the loader's
  // single-client.js delivery contract. The client entry owns style mounting
  // and cleanup, so the CSS is imported as text rather than emitted separately.
  loader: { '.css': 'text' },
  banner: {
    js: "window.__ModuleLoader__.load({ id: 'dsh-march7th-skin', factory: (require) => { var module = { exports: {} }; var exports = module.exports;",
  },
  footer: {
    js: 'return module.exports; } });',
  },
  logLevel: 'info',
})
