
/**
 * This file illustrates how you may map
 * single routes using config.json instead
 * of resoure based routing.
 */

var stats = {
  requests: 100000,
  average_duration: 52,
  uptime: 123123132
};

/**
 * GET all stats.
 */

exports.all = function *(){
  this.body = stats;
};

/**
 * GET a single stat.
 */

exports.get = function *(){
  this.body = stats[this.params.name];
};