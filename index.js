
/**
 * Module dependencies.
 */

var logger = require('koa-logger');
var router = require('koa-router');
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

  // middleware

  app.use(logger());
  app.use(router(app));

  // boot

  load(app, __dirname + '/api');

  return app;
}
