'use strict'

const cookie = require('cookie')

module.exports = {
  async validate (mapping) {
  },
  async redirect ({ mapping, request, response }) {
    request.cookies = cookie.parse(request.headers.cookie || '')
  }
}
