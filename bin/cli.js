#!/usr/bin/env node
process.env.NODE_ENV = 'producton'
const optimist = require('optimist')
const path = require('path')

const {
  _: [routes],
  help,
  users,
  ...options
} = optimist.usage('Usage: $0 [options] [./db.json]')
.options('users', {
  alias: 'u',
  desc: 'A JSON file containing users',
})
.options('port', {
  alias: 'p',
  desc: 'HTTP port',
  default: 3000,
})
.options('help', {
  alias: 'h',
  desc: 'Print this help'
})
.argv

if (help) {
  optimist.showHelp()
} else {
  require('../index.js')({
    ...options,
    users: users ? require(path.resolve(users)) : null,
    routes,
  })
}
