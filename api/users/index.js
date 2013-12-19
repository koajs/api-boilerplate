
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

exports.show = function *(name){
  this.body = users[name];
};

