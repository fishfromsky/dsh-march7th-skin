/**
 * March 7th skin plugin, node half.
 *
 * The browser half is a pure skin (alias-token overrides + a global
 * stylesheet) whose CSS references the skin's image assets at
 * `/skins/march7th/*.webp`. This node half owns those assets: it registers a
 * webserver prefix route that serves the package's own `assets/` directory,
 * so the plugin is fully self-contained — no web-app dist wiring required.
 */
import { readFile } from 'node:fs/promises'
import { extname, join, normalize, resolve, sep } from 'node:path'
import { fileURLToPath } from 'node:url'
import type { Context } from '@deepseek-ai/cordis'
// Type-only: brings the `ctx.webServer` Context merge into this program.
import type {} from '@deepseek-ai/dsh-host-webserver'

/** Cordis plugin name (the Loader entry and client bundle id). */
export const name = 'dsh-march7th-skin'

/** Services required before load: the webserver route registry. */
export const inject = ['webServer']

/** URL prefix serving the skin's image assets. */
const ASSET_PREFIX = '/skins/march7th'

/** MIME table for the skin's asset types (.webp is the only shipped type). */
const MIME: Record<string, string> = {
  '.webp': 'image/webp',
}

/**
 * Mount the asset route: serve `<pkg>/assets` under `ASSET_PREFIX`.
 * @param ctx - host cordis context.
 */
export function apply(ctx: Context): void {
  // The assets live beside the built entry: lib/index.js -> <pkg>/assets.
  // fileURLToPath keeps the trailing separator of a directory URL; strip it
  // so the traversal guard can compare against `<root><sep>` below.
  const assetsRoot = fileURLToPath(new URL('../assets/', import.meta.url)).replace(/[\\/]+$/, '')

  ctx.effect(() => {
    const dispose = ctx.webServer.register({
      kind: 'prefix',
      path: ASSET_PREFIX,
      handler: async (req, res) => {
        if (req.method !== 'GET' && req.method !== 'HEAD') {
          res.writeHead(405)
          res.end()
          return
        }
        const pathname = decodeURIComponent(new URL(req.url ?? '/', 'http://x').pathname)
        const relative = pathname.slice(ASSET_PREFIX.length).replace(/^\/+/, '')
        // Traversal rejection: the target must stay under the assets root.
        const target = resolve(normalize(join(assetsRoot, relative)))
        if (target !== assetsRoot && !target.startsWith(assetsRoot + sep)) {
          res.writeHead(403)
          res.end()
          return
        }
        try {
          const body = await readFile(target)
          res.writeHead(200, { 'content-type': MIME[extname(target)] ?? 'application/octet-stream' })
          res.end(body)
        } catch {
          res.writeHead(404)
          res.end()
        }
      },
    })
    return () => {
      dispose()
    }
  }, 'dsh-march7th-skin: asset route')
}
