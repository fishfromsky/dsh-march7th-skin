# dsh-march7th-skin

一个独立的、可插拔的 **三月七（《崩坏：星穹铁道》）** 皮肤插件，用于 dsh 网页 GUI。
它是标准的 [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness)
bundle 层插件：把它加进 web profile 即自动挂载，无需改动 web-app 的源码或前端 dist。

功能：

- 通过 `theme` 服务的覆盖层，将网页 GUI 的语义 alias token 替换为三月七蓝粉配色
  （明暗两套主题均覆盖）。
- 替换对话背景、侧栏、设置页头、输入卡片和输入框两侧的角色立绘；所有图片由插件
  自己的 node 半部分在 `/skins/march7th/*` 下提供——资源随包携带在 `assets/` 里。
- 重设对话滚动容器，使输入框不再遮挡正在阅读的消息。
- 干净卸载：token 覆盖层、样式表、body 门控属性、滚动容器改造在插件销毁时全部还原。

## 安装

与任何 dsh profile bundle 一样安装，两种方式：

1. **插件 CLI**（发布到 registry 之后）：

   ```sh
   dsh plugin --profile web add dsh-march7th-skin
   ```

2. **Tarball**——把 `dsh-march7th-skin-<version>.tgz` 复制到 profile 目录（默认
   `$DSH_HOME/profiles/web`），然后编辑 profile 的 `package.json`：

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

   随后在 profile 目录执行 `pnpm install` 并重启 `dsh web`。

行注册完全自动：包的 `dsh.bundle.patch` 指向自带的 `cordis.patch.yml`，它会向组合后
的 profile 插入 `march7th-skin` 行；profile 自己的 `cordis.patch.yml` 无需提及它。

## 验证

在 `dsh web` 运行状态下：

- `GET /skins/march7th/background.webp` → `200 image/webp`
- `GET /plugins/dsh-march7th-skin/client.js` → `200`（浏览器 bundle）
- GUI 呈现皮肤；`window.__DSH_BOOT__` 的条目中包含 `dsh-march7th-skin`，且
  `inject: ["@deepseek-ai/dsh-client-ui-theme"]`。

## 卸载

从 profile 的 `dsh.profile.bundles` 和 `dependencies` 中移除 `dsh-march7th-skin`，
在 profile 目录执行 `pnpm install`，重启 `dsh web` 即可完全恢复原貌——插件挂载的
每一份样式和属性都由它自己持有，销毁时全部还原。

## 开发

需要在包旁边有一份 `deepseek-harness` 检出（devDependencies 是指向它的 `link:` 路径）。

```sh
pnpm install        # 安装开发链接
pnpm run build      # esbuild：lib/index.js（宿主 ESM）+ lib/client.js（单文件客户端 bundle）
pnpm run test       # 基于 node:test、针对已构建 lib/ 的测试套件（无额外开发依赖）
pnpm run check      # 构建 + 测试
pnpm run dev:sync   # 把 lib/ 与资源推入运行中的 profile 安装目录，热更新无需重启
```

宿主半部分（`src/index.ts`）的改动在下次 `dsh web` 重启后生效；客户端与资源的改动
可通过 `dev:sync` 热应用。

## 许可与素材

代码为 MIT（见 `LICENSE`）。`assets/` 中的图片是取自《崩坏：星穹铁道》
© miHoYo / HoYoverse 的二次创作素材，仅用于个人、非商业用途；商业分发需另行取得
版权方授权。

## 已知限制

- 皮肤配色是固定的，没有设置界面。
- 资产路由只接受 `GET`/`HEAD`（其他方法返回 405），且只提供随包资源类型
  （`.webp` → `image/webp`，其余为 `application/octet-stream`）。
