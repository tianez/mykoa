'use strict'

const uuid = require('node-uuid');

const Db = require('./Db')
const User = require('../model/user')

async function getHome(ctx, next) {
    // ctx.cookies.set('uuid', uuid.v1());
    // let token = ctx.cookies.get('token')
    ctx.set({
        token: ctx.headers.token
    })
    ctx.body = JSON.stringify({
        token: ctx.headers.token
    })
}

async function getUser(ctx, next) {
    const start = new Date().getTime(); // 当前时间
    let users = await new Db('users').where({
        id: 1
    }).get();
    ctx.body = JSON.stringify(users)
    const ms = new Date().getTime() - start; // 耗费时间
    console.log('<-- ' + ctx.request.method + ' ' + ctx.request.url + '  ' + ms + 'ms');
}


const auth = require('./api/Auth')
const field = require('./api/Field')

let controller = {
    getHome: getHome,
    getUser: getUser,
    postUpload: require('./api/Upload'),
    auth: auth.AuthToken,
    getToken: auth.CreateToken,
}

Object.assign(controller, field)

module.exports = controller