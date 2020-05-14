'use strict'

module.exports = (...mappings) => require('reserve/mock')({
  port: 8000,
  handlers: {
    biscuit: require('../../index.js')
  },
  mappings: [{
    biscuit: '*'
  }, ...mappings, {
    custom: async (request, response) => {
      response.writeHead(200, {
        'content-type': 'text/plain',
        'content-length': 12
      })
      response.end('Hello World!')
    }
  }]
})
