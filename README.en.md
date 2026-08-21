# dsh-march7th-skin · Honkai: Star Rail March 7th skin

[简体中文](README.md) | English

A standalone, pluggable **March 7th (Honkai: Star Rail)** skin for the dsh web GUI.
It is a normal [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness)
bundle-layer plugin: add it to a web profile and it mounts itself — no web-app
source or dist wiring required. `apply()` overrides the web GUI's semantic alias
tokens with a March 7th blue-pink palette (light and dark schemes) through the
`theme` service's override layer, serves the conversation background, sidebar,
settings header, input card, and flanking character art from its own node half
under `/skins/march7th/*`, and reparents the transcript scrollport so the
composer never overlaps messages. The effect disposer reverts the token layer,
the stylesheet, the body gate attribute, and the scrollport promotion; it injects
no services, emits no Cordis events, and never touches a model request.

## Preview

Click an image to view it at full size.

| Light mode | Dark mode |
|---|---|
| [![March 7th skin · light mode](preview/light.webp)](preview/light.webp) | [![March 7th skin · dark mode](preview/dark.webp)](preview/dark.webp) |

## Features

- March 7th blue-pink palette across both light and dark schemes (via the
  `theme` service's override layer)
- Conversation background, sidebar, settings header, input card, and flanking
  character art, every image shipped in `assets/`
- Transcript scrollport reparented so the composer never overlaps messages
- Clean unload: the plugin owns every style and attribute it mounts and reverts
  them all on disposal

## Install

The plugin is installed like any dsh profile bundle. Two ways:

1. **Plugin CLI** (once published to a registry):

   ```sh
   dsh plugin --profile web add dsh-march7th-skin
   ```

2. **Tarball** — copy `dsh-march7th-skin-<version>.tgz` into the profile directory
   (`$DSH_HOME/profiles/web` by default), then edit the profile `package.json`:

   ```json
   {
     "dsh": {
       "profile": {
         "bundles": ["@deepseek-ai/dsh-base", "@deepseek-ai/dsh-web-app", "dsh-march7th-skin"]
       }
     },
     "dependencies": {
       "dsh-march7th-skin": "file:dsh-march7th-skin-0.2.0.tgz"
     }
   }
   ```

   Then run `pnpm install` in the profile directory and restart `dsh web`.

The row registration is fully automatic: the package's `dsh.bundle.patch` points
at its own `cordis.patch.yml`, which inserts the `march7th-skin` row into the
composed profile. The profile's own `cordis.patch.yml` does not need to mention it.

Load-and-go, unload-and-restore: remove the package from the profile's
`dsh.profile.bundles` and `dependencies`, run `pnpm install`, and restart — the
stock look returns in full.

## License and assets

The code is released under **MIT** (see `LICENSE`). The image assets in `assets/`
are edited fan material derived from *Honkai: Star Rail* © miHoYo / HoYoverse,
included for personal, non-commercial use only; re-distributing them commercially
requires the right holder's permission.

## Development

Requires a checkout of `deepseek-harness` beside this package (the dev
dependencies are `link:` paths into it).

```sh
pnpm install        # install dev links
pnpm run build      # esbuild: lib/index.js (host ESM) + lib/client.js (single-file client bundle)
pnpm run test       # node:test suite over the built lib/ (no extra dev deps)
pnpm run check      # build + test
pnpm run dev:sync   # push lib/ + assets into the live profile install for hot reload (no restart)
```

Host-half changes (`src/index.ts`) take effect on the next `dsh web` restart;
client-half and asset changes hot-apply through `dev:sync`.

## Verify

With `dsh web` running:

- `GET /skins/march7th/background.webp` → `200 image/webp`
- `GET /plugins/dsh-march7th-skin/client.js` → `200` (the browser bundle)
- The GUI shows the skin; `window.__DSH_BOOT__` lists `dsh-march7th-skin` among its
  entries with `inject: ["@deepseek-ai/dsh-client-ui-theme"]`

## Known limitations

- The skin's palette is fixed; there is no settings UI.
- The asset route serves only `GET`/`HEAD` (405 otherwise) and only the shipped
  asset types (`.webp` → `image/webp`, everything else `application/octet-stream`).

## License

Code is MIT; the assets are fan material of *Honkai: Star Rail* © miHoYo /
HoYoverse, for personal, non-commercial use only. See `LICENSE`.
