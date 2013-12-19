
/**
 * Module dependencies.
 */

var load = require('./lib/load');
var koa = require('koa');

/**
 * Expose `api()`.
 */

module.exports = api;

/**
 * Initialize an app with the given `opts`.
 *
 * @param {Object} opts
 * @return {Application}
 * @api public
 */

function api(opts) {
  opts = opts || {};
  var app = koa();
  load(app, __dirname + '/api');
  return app;
}
