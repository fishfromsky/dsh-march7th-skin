/**
 * Narrow framework contracts used by this plugin.
 *
 * Keeping these structural types local makes a fresh checkout buildable even
 * while some optional DSH packages are not independently available from the
 * registry. The runtime implementations are supplied by the profile through
 * the peer dependencies declared in package.json.
 */
import type { IncomingMessage, ServerResponse } from 'node:http'

type Disposer = () => void

interface EffectContext {
  effect(setup: () => void | Disposer, label?: string): void
}

interface PrefixRoute {
  kind: 'prefix'
  path: string
  handler(req: IncomingMessage, res: ServerResponse): void | Promise<void>
}

export interface HostContext extends EffectContext {
  webServer: {
    register(route: PrefixRoute): Disposer
  }
}

type ThemeTokenMap = Readonly<Record<string, Readonly<{
  light: string
  dark: string
}>>>

export interface ClientContext extends EffectContext {
  theme: {
    overrideTokens(layer: string, tokens: ThemeTokenMap): Disposer
  }
}
