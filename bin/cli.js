process.env.NODE_ENV = 'producton'
const optimist = require('optimist')

const {
  _: [routes],
  help,
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
    routes,
  })
}
