
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
 * TODO: move api.json (change name?)
 * bootstrapping into an npm module.
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

  var mod = require(conf.directory);

  for (var key in conf.routes) {
    var prop = conf.routes[key];
    var method = key.split(' ')[0];
    var path = key.split(' ')[1];
    debug('%s %s -> .%s', method, path, prop);

    var fn = mod[prop];
    if (!fn) throw new Error(conf.name + ': exports.' + prop + ' is not defined');

    app[method.toLowerCase()](key, fn);
  }
}