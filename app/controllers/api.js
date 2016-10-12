'use strict'

const uuid = require('node-uuid');

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
    ctx.body = JSON.stringify({users:1111})
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