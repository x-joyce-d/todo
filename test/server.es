process.env.NODE_ENV = 'development'
const path = require('path')
require('../src/server.es')({
  routes: path.join(__dirname, 'db.json'),
  // users: require('./users.json'),
})
