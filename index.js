'use strict';

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _jsonServer = require('json-server');

var _jsonServer2 = _interopRequireDefault(_jsonServer);

var _expressBasicAuth = require('express-basic-auth');

var _expressBasicAuth2 = _interopRequireDefault(_expressBasicAuth);

var _v = require('uuid/v4');

var _v2 = _interopRequireDefault(_v);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*eslint no-console: [0]*/
var dev = process.env.NODE_ENV === 'development';

module.exports = function () {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$routes = _ref.routes,
      routes = _ref$routes === undefined ? 'db.json' : _ref$routes,
      _ref$port = _ref.port,
      port = _ref$port === undefined ? 3000 : _ref$port,
      _ref$users = _ref.users,
      users = _ref$users === undefined ? null : _ref$users;

  var server = _jsonServer2.default.create();
  var router = _jsonServer2.default.router(_path2.default.resolve(routes));

  if (dev) {
    var compiler = require('webpack')(require('../webpack.config'));
    server.use(require('webpack-dev-middleware')(compiler));
  }

  users && server.use((0, _expressBasicAuth2.default)({
    users: users,
    challenge: true
  }));
  server.use(_jsonServer2.default.defaults({
    static: _path2.default.join(__dirname, dev ? '../public' : 'public'),
    logger: false,
    noGzip: dev
  }));
  server.use(function (req, res, next) {
    var time = Date.now();
    switch (req.method) {
      case 'POST':
        req.body.id = (0, _v2.default)();
        req.body.create_time = time;
      case 'PATCH':
        req.body.update_time = time;
        break;
    }
    next();
  }, router);

  server.listen(port, function () {
    console.log('http://localhost:' + port + '/index.html');
  });
};
