/**
 * March 7th skin plugin, browser half: stacks an alias-token override layer
 * on the active theme (both color schemes mandatory) and injects the skin
 * stylesheet gated behind a body attribute the plugin owns, so unloading the
 * plugin fully restores the stock look.
 *
 * The stylesheet lives in a normal CSS file. The browser build loads it as
 * text and keeps it inside the single client bundle, so the plugin can still
 * mount and retract its exact style element during hot switching.
 */
import type { ClientContext } from '../contracts.js'
import SKIN_CSS from './skin.css'

/** Theme-override layer identity (re-registering replaces the same layer). */
export const LAYER = 'march7th-skin'

/** Body attribute gating the skin stylesheet's rules. */
export const BODY_ATTR = 'data-march7th-skin'

/** Marks the ChatView-owned element promoted to the real transcript scrollport. */
export const CHAT_SCROLL_ATTR = 'data-march7th-chat-scroll'

/** March 7th palette over the semantic alias tokens (both schemes mandatory). */
const TOKENS = {
  '--dsw-alias-bg-base': { light: '#f3f8fd', dark: '#0b1020' },
  '--dsw-alias-bg-layer-1': { light: '#f8fbfe', dark: '#11182b' },
  '--dsw-alias-bg-layer-2': { light: '#edf4fb', dark: '#171f36' },
  '--dsw-alias-bg-layer-3': { light: '#e3eef8', dark: '#202a46' },
  '--dsw-alias-bg-overlay': { light: '#dbe9f6', dark: '#293553' },
  '--dsw-alias-bg-module-platform': { light: '#f1f6fb', dark: '#202a46' },
  '--dsw-alias-bg-mask-1': { light: 'rgba(23,35,58,0.28)', dark: 'rgba(4,7,18,0.66)' },
  '--dsw-alias-bg-skeleton': { light: 'rgba(78,159,221,0.10)', dark: 'rgba(141,215,255,0.10)' },
  '--dsw-alias-border-l1': { light: 'rgba(88,140,190,0.16)', dark: 'rgba(164,190,235,0.14)' },
  '--dsw-alias-border-l2': { light: 'rgba(88,140,190,0.26)', dark: 'rgba(180,198,239,0.22)' },
  '--dsw-alias-border-l3': { light: 'rgba(88,140,190,0.36)', dark: 'rgba(195,207,242,0.30)' },
  '--dsw-alias-border-l4': { light: 'rgba(88,140,190,0.46)', dark: 'rgba(211,217,246,0.38)' },
  '--dsw-alias-brand-primary': { light: '#4e9fdd', dark: '#ff8fbd' },
  '--dsw-alias-brand-text': { light: '#1f3a5f', dark: '#ffd9e9' },
  '--dsw-alias-label-primary': { light: '#1c2b45', dark: '#f7f2ff' },
  '--dsw-alias-label-secondary': { light: '#52647e', dark: '#c9c2dc' },
  '--dsw-alias-label-tertiary': { light: '#6b7d96', dark: '#9f98b8' },
  '--dsw-alias-label-dimmed': { light: '#a3b6cc', dark: '#716b8a' },
  '--dsw-alias-label-caption': { light: '#6b7d96', dark: '#aaa2c1' },
  '--dsw-alias-button-primary-fill': { light: '#4e9fdd', dark: '#ea6da8' },
  '--dsw-alias-button-primary-hover': { light: '#3d8cc7', dark: '#f481b5' },
  '--dsw-alias-button-elevated-fill': { light: '#ffffff', dark: '#1b243d' },
  '--dsw-alias-button-floating-fill': { light: 'rgba(255,255,255,0.92)', dark: 'rgba(23,31,54,0.92)' },
  '--dsw-alias-button-floating-hover': { light: '#eaf3fc', dark: '#273250' },
  '--dsw-alias-button-ghost-active-fill': { light: '#e0edf9', dark: '#252f4d' },
  '--dsw-alias-button-ghost-active-hover': { light: '#d6e7f6', dark: '#2d3959' },
  '--dsw-alias-button-info-fill': { light: '#4e9fdd', dark: '#e96ba6' },
  '--dsw-alias-button-info-hover': { light: '#6fb2e6', dark: '#f583b7' },
  '--dsw-alias-interactive-bg-hover': { light: 'rgba(78,159,221,0.10)', dark: 'rgba(141,215,255,0.10)' },
  '--dsw-alias-interactive-bg-active': { light: 'rgba(78,159,221,0.16)', dark: 'rgba(255,143,189,0.16)' },
  '--dsw-alias-interactive-bg-hover-accent': { light: 'rgba(255,143,171,0.18)', dark: 'rgba(255,143,189,0.18)' },
  '--dsw-alias-interactive-bg-hover-solid': { light: '#eaf3fc', dark: '#26314e' },
  '--dsw-specific-sidebar-fill': { light: 'rgba(231,242,252,0.85)', dark: 'rgba(12,17,32,0.88)' },
  '--dsw-specific-sidebar-nav-item-active': { light: '#d9eaf9', dark: '#2a2948' },
  '--dsw-specific-sidebar-nav-item-hover': { light: '#e3f0fb', dark: '#202b46' },
  '--dsw-specific-sidebar-nav-item-active-accent': { light: '#ff8fab', dark: '#ff8fab' },
  '--dsw-specific-bubble': { light: '#e3f0fb', dark: '#202c49' },
  '--dsw-specific-bubble-highlight': { light: '#cde4f7', dark: '#303a61' },
  '--dsw-specific-input-major': { light: '#ffffff', dark: '#151d33' },
  '--dsw-specific-menu': { light: '#f8fbfe', dark: '#202a46' },
  '--dsw-specific-selector': { light: '#eaf3fc', dark: '#202a46' },
  '--dsw-alias-scrollbar-bg-l1': { light: '#cfe1f2', dark: '#303b5b' },
  '--dsw-alias-scrollbar-bg-l2': { light: '#cfe1f2', dark: '#303b5b' },
  '--dsw-alias-scrollbar-hover-l1': { light: '#a9c8e4', dark: '#536181' },
  '--dsw-alias-scrollbar-hover-l2': { light: '#a9c8e4', dark: '#536181' },
  '--dsw-alias-state-success-primary': { light: '#2fbf8f', dark: '#3ed59c' },
  '--dsw-alias-state-success-secondary': { light: '#57d3a5', dark: '#57d3a5' },
  '--dsw-alias-state-success-tertiary': { light: '#ddf6ec', dark: '#123b2e' },
  '--dsw-alias-state-error-primary': { light: '#e5484d', dark: '#f2696e' },
  '--dsw-alias-state-error-secondary': { light: '#f26d6d', dark: '#f26d6d' },
  '--dsw-alias-state-warn-primary': { light: '#f0a33c', dark: '#efaf55' },
  '--dsw-alias-state-warn-secondary': { light: '#f5bc6c', dark: '#f5bc6c' },
  '--dsw-alias-state-warn-tertiary': { light: '#fdf0dc', dark: '#3b2f16' },
  '--dsw-alias-markdown-inline-code': { light: '#e4f0fb', dark: '#222d49' },
  '--dsw-alias-markdown-code-block': { light: '#f4f9fe', dark: '#11182b' },
  '--dsw-alias-markdown-tag': { light: '#eaf3fc', dark: '#242f4c' },
  '--dsw-alias-tooltip-bg': { light: '#33465f', dark: '#252f49' },
  '--dsw-alias-toast-bg': { light: '#3b4e68', dark: '#29344f' },
} as const

/** Required services: the theme registry. */
export const inject = ['theme']

/**
 * Client plugin body: stack the token layer and mount the stylesheet.
 * @param ctx - client root context.
 */
export function apply(ctx: ClientContext): void {
  // 1) 主题 token 覆盖层：overrideTokens 返回 disposer，交给 ctx.effect 管理，
  //    插件卸载（含热替换）时自动撤销，底层主题原样恢复。
  ctx.effect(
    () => ctx.theme.overrideTokens(LAYER, TOKENS),
    'march7th-skin: alias-token layer',
  )

  // 2) 皮肤样式：注入 <style> 并挂上 body 门控属性；disposer 反向还原。
  ctx.effect(() => {
    const tag = document.createElement('style')
    tag.dataset.plugin = 'march7th-skin'
    tag.textContent = SKIN_CSS
    document.head.appendChild(tag)
    document.body.setAttribute(BODY_ATTR, '')
    return () => {
      tag.remove()
      document.body.removeAttribute(BODY_ATTR)
    }
  }, 'march7th-skin: stylesheet and gate attribute')

  // 3) The stock active layout scrolls the transcript and sticky composer in
  //    one box, so the composer necessarily overlays messages while reading.
  //    Promote ChatView's own scroll element instead. Giving it the framework's
  //    data-conversation-scroll marker also makes ChatView resolve all follow,
  //    paging and "back to bottom" operations against this actual scrollport.
  ctx.effect(() => {
    const marked = new Set<HTMLElement>()
    const releases = new Map<HTMLElement, () => void>()

    const markFlow = (flow: Element): void => {
      const scrollport = flow.parentElement
      if (scrollport === null || scrollport.hasAttribute(CHAT_SCROLL_ATTR)) return
      const formerScrollport = scrollport.closest<HTMLElement>('[data-conversation-scroll]')
      scrollport.setAttribute(CHAT_SCROLL_ATTR, '')
      scrollport.setAttribute('data-conversation-scroll', '')
      marked.add(scrollport)

      // A hot swap can leave ChatView's existing scroll listener attached to
      // the former outer scrollport. Forward inner scrolls there; the handler
      // resolves its live element again and therefore reads this new port.
      let pinned = true
      const onScroll = (): void => {
        pinned = scrollport.scrollHeight - scrollport.scrollTop - scrollport.clientHeight <= 25
        formerScrollport?.dispatchEvent(new Event('scroll'))
      }
      scrollport.addEventListener('scroll', onScroll, { passive: true })

      // Growing/shrinking the composer changes the transcript viewport height.
      // Keep the latest message pinned only when the reader was already at the
      // bottom; a reader inspecting older content keeps their position.
      const composer = formerScrollport?.querySelector<HTMLElement>(':scope > [data-composer-seat]')
      const resizeObserver = composer === null || composer === undefined
        ? null
        : new ResizeObserver(() => {
            if (pinned) scrollport.scrollTop = scrollport.scrollHeight
          })
      if (composer !== null && composer !== undefined) resizeObserver?.observe(composer)
      releases.set(scrollport, () => {
        scrollport.removeEventListener('scroll', onScroll)
        resizeObserver?.disconnect()
      })

      // Preserve the expected pinned-to-bottom posture when the skin is hot
      // swapped onto an already-mounted conversation.
      scrollport.scrollTop = scrollport.scrollHeight
    }

    const scan = (root: ParentNode): void => {
      if (root instanceof Element && root.matches('[data-chat-flow]')) markFlow(root)
      for (const flow of root.querySelectorAll('[data-chat-flow]')) markFlow(flow)
    }

    scan(document)
    const observer = new MutationObserver(records => {
      for (const record of records) {
        for (const node of record.addedNodes) {
          if (node instanceof Element) scan(node)
        }
      }
    })
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      observer.disconnect()
      for (const scrollport of marked) {
        releases.get(scrollport)?.()
        scrollport.removeAttribute(CHAT_SCROLL_ATTR)
        scrollport.removeAttribute('data-conversation-scroll')
      }
    }
  }, 'march7th-skin: non-overlapping transcript scrollport')
}
