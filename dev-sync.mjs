/**
 * dev-sync: rebuild the standalone skin and push the client bundle into the
 * live web profile install, so the HMR chain hot-applies it WITHOUT a server
 * restart or page refresh. Image assets are copied as well, so newly added
 * WebP files become available to the already-installed development package.
 *
 *   pnpm run dev:sync
 *
 * The profile install path resolves through DSH_HOME (default ~/.dsh).
 * Host-half changes (src/index.ts) still need a server restart.
 */
import { execFileSync } from 'node:child_process'
import { createHash } from 'node:crypto'
import { copyFileSync, existsSync, mkdirSync, readFileSync, readdirSync } from 'node:fs'
import { homedir } from 'node:os'
import { join } from 'node:path'

// 1) Rebuild lib/ (host ESM + client CJS) — same as `pnpm run build`.
execFileSync(process.execPath, ['build.mjs'], { cwd: process.cwd(), stdio: 'inherit' })

// 2) Locate the live profile install.
const dshHome = process.env.DSH_HOME ?? join(homedir(), '.dsh')
const libDir = join(dshHome, 'profiles', 'web', 'node_modules', 'dsh-march7th-skin', 'lib')
if (!existsSync(libDir)) {
  console.error(`dev-sync: no install at ${libDir} — run "pnpm pack", copy the tarball into the profile and "pnpm install" there first`)
  process.exit(1)
}

// 3) Push the client bundle (the HMR poll watches exactly this file).
mkdirSync(libDir, { recursive: true })
for (const file of ['client.js', 'client.js.map']) {
  copyFileSync(join('lib', file), join(libDir, file))
  console.log(`dev-sync: pushed lib/${file}`)
}

// 4) Push image assets used by the stylesheet. The profile package is a
//    regular directory rather than a symlink to this checkout, so a newly
//    uploaded image would otherwise return 404 even though the CSS is live.
const sourceAssetsDir = join(process.cwd(), 'assets')
const targetAssetsDir = join(libDir, '..', 'assets')
mkdirSync(targetAssetsDir, { recursive: true })
for (const file of readdirSync(sourceAssetsDir)) {
  if (!file.toLowerCase().endsWith('.webp')) continue
  copyFileSync(join(sourceAssetsDir, file), join(targetAssetsDir, file))
  console.log(`dev-sync: pushed assets/${file}`)
}

// 5) Report the new bundle revision (the manifest rev / HMR frame id).
const bytes = readFileSync(join(libDir, 'client.js'))
const rev = createHash('sha1').update(bytes).digest('hex').slice(0, 12)
console.log(`dev-sync: client bundle rev = ${rev} (page hot-reloads automatically)`)
