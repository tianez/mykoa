'use strict'

async function getHome(ctx, next) {
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

let controller = {
    getHome: getHome,
    getUser: getUser,
    postUpload: require('./api/Upload'),
}

Object.assign(
    controller,
    require('./api/AuthController'),
    // require('./api/Field'),
    require('./api/Meun'),
    require('./api/BaseController'),
    require('./api/UserController'),
)

module.exports = controller