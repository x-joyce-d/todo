/*eslint no-console: [0]*/
import path from 'path'
import jsonServer from 'json-server'
import basicAuth from 'express-basic-auth'
import uuidv4 from 'uuid/v4'

const dev = process.env.NODE_ENV === 'development'

module.exports = function ({
  routes = 'db.json',
  port = 3000,
  users = null,
} = {}) {
  const server = jsonServer.create()
  const router = jsonServer.router(path.resolve(routes))

  if (dev) {
    const compiler = require('webpack')(require('../webpack.config'))
    server.use(require('webpack-dev-middleware')(compiler))
  }

  users && server.use(basicAuth({
    users,
    challenge: true,
  }))
  server.use(jsonServer.defaults({
    static: path.join(__dirname, dev ? '../public' : 'public'),
    logger: false,
    noGzip: dev,
  }))
  server.use((req, res, next) => {
    const time = Date.now()
    switch (req.method) {
      case 'POST':
      req.body.id = uuidv4()
      req.body.create_time = time
      case 'PATCH':
      req.body.update_time = time
      break
    }
    next()
  }, router)

  server.listen(port, () => {
    console.log(`http://localhost:${port}/index.html`)
  })
}
