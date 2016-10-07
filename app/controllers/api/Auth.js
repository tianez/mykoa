'use strict'

const moment = require('moment')
const jwt = require('jsonwebtoken')

module.exports = async function auth(ctx, next) {
    // global.event.emit('chat','haodeasd');
    let token
    if (ctx.query.token) {
        token = ctx.query.token
    } else if (ctx.headers.token) {
        token = ctx.headers.token
    } else if (ctx.cookies.get('token')) {
        token = ctx.cookies.get('token')
    }
    console.log('当前token：' + token);
    try {
        let decoded = jwt.verify(token, 'shhhhh');
        if (decoded.expre < parseInt(moment() / 1000)) {
            delete decoded.iat
            decoded.exp = parseInt(moment() / 1000) + 3600
            decoded.expre = parseInt(moment() / 1000) + 1800
            let newtoken = jwt.sign(decoded, 'shhhhh');
            ctx.set({
                token: newtoken
            })
        }
        ctx.type = 'json';
        await next();
    } catch (err) {
        ctx.status = err.status || 401;
        ctx.type = 'json';
        ctx.body = JSON.stringify({
            error: err.message
        })
    }
}