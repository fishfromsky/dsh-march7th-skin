/**
 * Host-half tests over the built bundle: the asset-route contract that keeps
 * the skin self-contained — method gate, traversal rejection, MIME table, and
 * effect-scoped disposal. Run with `node --test`; imports lib/index.js so the
 * suite always exercises the shipped artifact, not the TypeScript source.
 */
import test from 'node:test'
import assert from 'node:assert/strict'

import { name, inject, apply } from '../lib/index.js'

/** Minimal stand-in for the host cordis context and the webServer registry. */
function boot() {
  const routes = []
  const routeDisposals = []
  const disposers = []
  const ctx = {
    webServer: {
      register(route) {
        routes.push(route)
        return () => routeDisposals.push(route.path)
      },
    },
    effect(fn) {
      disposers.push(fn())
      return disposers.at(-1)
    },
  }
  return { ctx, routes, routeDisposals, disposers }
}

/** Minimal stand-in for the node:http ServerResponse surface the handler uses. */
function resStub() {
  return {
    writeHead(status, headers = {}) {
      this.status = status
      this.headers = headers
    },
    end(body) {
      this.body = body
    },
  }
}

const req = (method, url) => ({ method, url })

test('exports the loader contract fields', () => {
  assert.equal(name, 'dsh-march7th-skin')
  assert.deepEqual(inject, ['webServer'])
})

test('registers one prefix route and disposes it with the effect', () => {
  const { ctx, routes, routeDisposals, disposers } = boot()
  apply(ctx)
  assert.equal(routes.length, 1)
  assert.equal(routes[0].kind, 'prefix')
  assert.equal(routes[0].path, '/skins/march7th')
  assert.equal(routeDisposals.length, 0)
  disposers[0]()
  assert.deepEqual(routeDisposals, ['/skins/march7th'])
})

test('serves a shipped asset with its webp content type', async () => {
  const { ctx, routes } = boot()
  apply(ctx)
  const res = resStub()
  await routes[0].handler(req('GET', '/skins/march7th/background.webp'), res)
  assert.equal(res.status, 200)
  assert.equal(res.headers['content-type'], 'image/webp')
  assert.ok(res.body.length > 0)
})

test('answers 404 for a missing asset', async () => {
  const { ctx, routes } = boot()
  apply(ctx)
  const res = resStub()
  await routes[0].handler(req('GET', '/skins/march7th/no-such.webp'), res)
  assert.equal(res.status, 404)
})

test('rejects path traversal outside the assets root with 403', async () => {
  const { ctx, routes } = boot()
  apply(ctx)
  const res = resStub()
  await routes[0].handler(req('GET', '/skins/march7th/..%2fpackage.json'), res)
  assert.equal(res.status, 403)
  assert.equal(res.body, undefined)
})

test('rejects methods other than GET/HEAD with 405', async () => {
  const { ctx, routes } = boot()
  apply(ctx)
  const res = resStub()
  await routes[0].handler(req('POST', '/skins/march7th/background.webp'), res)
  assert.equal(res.status, 405)
})
