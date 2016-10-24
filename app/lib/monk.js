"use strict";

const monk = require('monk');
const wrap = require('co-monk');
const db = monk('localhost:27017/koa');

module.exports = function (table) {
    return db.get(table)
    // return wrap(db.get(table));
}