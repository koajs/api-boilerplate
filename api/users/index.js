
/**
 * Module dependencies.
 */

var parse = require('co-body');

/**
 * This file illustrates using resourceful
 * routing using the koa-router module.
 */

var users = {
  tobi: {
    name: 'tobi',
    age: 3,
    species: 'ferret'
  },

  loki: {
    name: 'loki',
    age: 2,
    species: 'ferret'
  },

  jane: {
    name: 'jane',
    age: 7,
    species: 'ferret'
  }
};

/**
 * GET all users.
 */

exports.index = function *(){
  this.body = users;
};

/**
 * GET user by :name.
 */

exports.show = function *(){
  this.body = users[this.params.user];
};

/**
 * POST a new user.
 */

exports.create = function *(name){
  var body = yield parse(this);
  if (!body.name) this.throw(400, '.name required');
  users[body.name] = body;
  this.status = 201;
  this.body = 'added!';
};

