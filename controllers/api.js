'use strict'

const jwt = require('jsonwebtoken');
const uuid = require('node-uuid');

const Db = require('./Db')
const User = require('../model/user')
const dbmd = require('../model/dbmd')

async function getHome(ctx, next) {
    ctx.cookies.set('uuid', uuid.v1());
    let token = ctx.cookies.get('token')
    ctx.body = JSON.stringify({
        token: token
    })
}

async function getUser(ctx, next) {
    let token = ctx.cookies.get('token')
    let users = await new Db('users').where({id:1}).get();
    ctx.body = JSON.stringify(users)
}

module.exports = {
    getHome: getHome,
    getUser: getUser
}