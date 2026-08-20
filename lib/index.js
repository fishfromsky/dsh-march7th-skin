// src/index.ts
import { readFile } from "node:fs/promises";
import { extname, join, normalize, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";
var name = "dsh-march7th-skin";
var inject = ["webServer"];
var ASSET_PREFIX = "/skins/march7th";
var MIME = {
  ".webp": "image/webp"
};
function apply(ctx) {
  const assetsRoot = fileURLToPath(new URL("../assets/", import.meta.url)).replace(/[\\/]+$/, "");
  ctx.effect(() => {
    const dispose = ctx.webServer.register({
      kind: "prefix",
      path: ASSET_PREFIX,
      handler: async (req, res) => {
        if (req.method !== "GET" && req.method !== "HEAD") {
          res.writeHead(405);
          res.end();
          return;
        }
        const pathname = decodeURIComponent(new URL(req.url ?? "/", "http://x").pathname);
        const relative = pathname.slice(ASSET_PREFIX.length).replace(/^\/+/, "");
        const target = resolve(normalize(join(assetsRoot, relative)));
        if (target !== assetsRoot && !target.startsWith(assetsRoot + sep)) {
          res.writeHead(403);
          res.end();
          return;
        }
        try {
          const body = await readFile(target);
          res.writeHead(200, { "content-type": MIME[extname(target)] ?? "application/octet-stream" });
          res.end(body);
        } catch {
          res.writeHead(404);
          res.end();
        }
      }
    });
    return () => {
      dispose();
    };
  }, "dsh-march7th-skin: asset route");
}
export {
  apply,
  inject,
  name
};
//# sourceMappingURL=index.js.map
