
/**
 * Module dependencies.
 */

var responseTime = require('koa-response-time');
var logger = require('koa-logger');
var router = require('koa-router');
var load = require('./lib/load');
var koa = require('koa');

/**
 * Environment.
 */

var env = process.env.NODE_ENV || 'development';

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

  if ('test' != env) app.use(logger());
  app.use(responseTime());
  app.use(router(app));

  // boot

  load(app, __dirname + '/api');

  return app;
}
