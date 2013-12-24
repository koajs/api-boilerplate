
/**
 * Module dependencies.
 */

var responseTime = require('koa-response-time');
var ratelimit = require('koa-ratelimit');
var logger = require('koa-logger');
var router = require('koa-router');
var load = require('./lib/load');
var redis = require('redis');
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

  // logging

  if ('test' != env) app.use(logger());

  // x-response-time

  app.use(responseTime());

  // rate limiting

  app.use(ratelimit({
    max: opts.ratelimit,
    duration: opts.duration,
    db: redis.createClient()
  }));

  // routing

  app.use(router(app));

  // boot

  load(app, __dirname + '/api');

  return app;
}
