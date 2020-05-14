'use strict'

const assert = require('assert')

describe('cookie', function () {
  let mocked

  before(async () => {
    mocked = await require('./setup')({
      match: /cookie-1/,
      custom: async request => {
        assert.strictEqual(request.cookies.test, 'value')
      }
    })
  })

  it('parses the cookies', () => mocked.request('GET', '/cookie-1', {
    cookie: 'test=value'
  })
    .then(response => {
      assert.strictEqual(response.statusCode, 200)
      assert.strictEqual(response.toString(), 'Hello World!')
    })
  )
})
