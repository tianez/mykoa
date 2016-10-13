'use strict'

const uuid = require('node-uuid');

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
    ctx.body = JSON.stringify({
        users: 1111
    })
}


const auth = require('./api/Auth')
const field = require('./api/Field')
const meun = require('./api/Meun')

let controller = {
    getHome: getHome,
    getUser: getUser,
    postUpload: require('./api/Upload'),
    auth: auth.AuthToken,
    getToken: auth.CreateToken,
}

Object.assign(controller, field)
Object.assign(controller, meun)
Object.assign(
    controller,
    require('./api/Chat')
)

module.exports = controller