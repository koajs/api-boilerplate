
/**
 * Module dependencies.
 */

var debug = require('debug')('api');
var path = require('path');
var fs = require('fs');
var join = path.resolve;
var readdir = fs.readdirSync;

/**
 * Load resources in `root` directory.
 *
 * @param {Application} app
 * @param {String} root
 * @api private
 */

module.exports = function(app, root){
  readdir(root).forEach(function(file){
    var dir = join(root, file);
    var conf = require(dir + '/config.json');
    conf.name = file;
    conf.directory = dir;
    if (conf.routes) route(app, conf);
  });
};

/**
 * Define routes in `conf`.
 */

function route(app, conf) {
  debug('%s routes', conf.name);

  for (var key in conf.routes) {
    var prop = conf.routes[key];
    var method = key.split(' ')[0].toLowerCase();
    var path = key.split(' ')[1];
    debug('%s %s -> %s', method, path, prop);
  }
}