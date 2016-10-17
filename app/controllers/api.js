'use strict'

async function getHome(ctx, next) {
    ctx.set({
        token: ctx.headers.token
    })
    ctx.body = JSON.stringify({
        token: ctx.headers.token
    })
}

let controller = {
    getHome: getHome,
    postUpload: require('./api/Upload'),
}

Object.assign(
    controller,
    require('./api/AuthController'),
    // require('./api/Field'),
    require('./api/Meun'),
    require('./api/BaseController'),
    require('./api/UserController'),
    require('./api/PermissionsController'),
)

module.exports = controller