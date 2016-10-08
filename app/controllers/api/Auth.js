'use strict'

const moment = require('moment')
const jwt = require('jsonwebtoken')

var cache = require('memory-cache');

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
    if (cache.get(token)) {
        try {
            let decoded = jwt.verify(token, 'shhhhh');
            let curtime = parseInt(moment() / 1000)
            if (decoded.expre < curtime) {
                cache.del(token)
                delete decoded.iat
                decoded.exp = curtime + 3600
                decoded.expre = curtime + 1800
                let newtoken = jwt.sign(decoded, 'shhhhh');
                cache.put(token, true, curtime + 3600);
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
    } else {
        ctx.status = 401;
        ctx.type = 'json';
        ctx.body = JSON.stringify({
            error: '你没有权限访问该页面'
        })
    }
}