/**
 * Browser-half tests over the built bundle: mounting stacks the token layer,
 * injects the stylesheet behind the plugin's gate attribute, and promotes the
 * transcript scrollport; disposal reverts every one of those contributions.
 *
 * lib/client.js is the single-file CJS ModuleLoader handshake, so the test
 * reproduces the window handshake and a minimal DOM before loading it — the
 * same contract the dsh web shell fulfils in the browser.
 */
import test from 'node:test'
import assert from 'node:assert/strict'

/** Minimal DOM stand-in covering exactly what the skin's apply touches. */
class FakeElement {
  constructor(tag) {
    this.tag = tag
    this.dataset = {}
    this.textContent = ''
    this.removed = false
  }
  matches() {
    return false
  }
  querySelectorAll() {
    return []
  }
  remove() {
    this.removed = true
  }
}

const bodyAttrs = new Map()
const appended = []
const documentStub = Object.assign(new FakeElement('html'), {
  body: {
    setAttribute(name) {
      bodyAttrs.set(name, true)
    },
    removeAttribute(name) {
      bodyAttrs.delete(name)
    },
  },
  head: {
    appendChild(node) {
      appended.push(node)
    },
  },
  createElement(tag) {
    return new FakeElement(tag)
  },
})

class FakeMutationObserver {
  constructor() {
    this.disconnected = false
  }
  observe() {}
  disconnect() {
    this.disconnected = true
  }
}

// The bundle executes the ModuleLoader handshake immediately on load.
globalThis.Element = FakeElement
globalThis.MutationObserver = FakeMutationObserver
globalThis.document = documentStub
let skin
globalThis.window = {
  __ModuleLoader__: {
    load({ factory }) {
      skin = factory(() => {
        throw new Error('the built bundle must not call require at runtime')
      })
    },
  },
}
await import('../lib/client.js')

/** Minimal stand-in for the client cordis context with the theme service. */
function bootClient() {
  const disposers = []
  const layers = []
  const ctx = {
    theme: {
      overrideTokens(layer, tokens) {
        layers.push({ layer, tokens })
        return () => {
          layers.length = 0
        }
      },
    },
    effect(fn) {
      disposers.push(fn())
      return disposers.at(-1)
    },
  }
  return { ctx, disposers, layers }
}

test('exports the client plugin contract', () => {
  assert.equal(skin.LAYER, 'march7th-skin')
  assert.equal(skin.BODY_ATTR, 'data-march7th-skin')
  assert.equal(skin.CHAT_SCROLL_ATTR, 'data-march7th-chat-scroll')
  assert.deepEqual(skin.inject, ['theme'])
  assert.equal(typeof skin.apply, 'function')
})

test('apply mounts the token layer, the stylesheet, and the gate attribute', () => {
  const { ctx, disposers, layers } = bootClient()
  skin.apply(ctx)
  assert.equal(layers.length, 1)
  assert.equal(layers[0].layer, 'march7th-skin')
  assert.deepEqual(layers[0].tokens['--dsw-alias-bg-base'], {
    light: '#f3f8fd',
    dark: '#0b1020',
  })
  assert.deepEqual(layers[0].tokens['--dsw-alias-brand-primary'], {
    light: '#4e9fdd',
    dark: '#ff8fbd',
  })
  assert.equal(appended.length, 1)
  const tag = appended[0]
  assert.equal(tag.dataset.plugin, 'march7th-skin')
  assert.ok(tag.textContent.includes('body[data-march7th-skin]'))
  assert.ok(tag.textContent.includes('/* ---------- 4d. 深色主题'))
  assert.ok(tag.textContent.includes('--m7-night-0: #0b1020'))
  assert.ok(tag.textContent.includes('--dsw-alias-state-business-primary: #e45b9c'))
  assert.ok(tag.textContent.includes("[data-source='command']"))
  assert.ok(!tag.textContent.includes("[data-source='/ command']"))
  assert.ok(tag.textContent.includes("[role='dialog'][aria-modal='true']:has(> nav)"))
  assert.ok(bodyAttrs.has('data-march7th-skin'))
  assert.equal(disposers.length, 3)
})

test('disposing the effects reverts the token layer, stylesheet, and gate attribute', () => {
  appended.length = 0
  bodyAttrs.clear()
  const { ctx, disposers, layers } = bootClient()
  skin.apply(ctx)
  const styleTag = appended[0]
  disposers[0]()
  assert.equal(layers.length, 0)
  disposers[1]()
  assert.equal(styleTag.removed, true)
  assert.equal(bodyAttrs.has('data-march7th-skin'), false)
  disposers[2]()
})
