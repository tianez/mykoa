'use strict'

const moment = require('moment')
const jwt = require('jsonwebtoken')
const cache = require('memory-cache');

const TokenConfig = {
    exp: 3600, //过期时间
    expre: 3600 //刷新时间
}

/**
 * 创建token
 */
async function CreateToken(ctx, next) {
    // console.log(moment().format("YYYY-MM-DD H:mm:ss"));
    let users = await new Db('users').where({
        id: 1
    }).get();
    let data = {
        id: users[0].id,
        user_name: users[0].userr_name
    }
    let curtime = parseInt(moment() / 1000)
    data.exp = curtime + TokenConfig.exp
    data.expre = curtime + TokenConfig.expre
    let token = jwt.sign(data, 'shhhhh');
    cache.put(token, true, curtime + 3600);
    ctx.type = 'json';
    ctx.set({
        token: token
    })
    ctx.body = JSON.stringify({
        token: token
    })
}

/**
 * 验证token
 * 过期销毁旧的token，创建新的token
 * 新token在headers中返回
 */
async function AuthToken(ctx, next) {
    global.event.emit('chat', 'haodeasd');
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
                decoded.exp = curtime + TokenConfig.exp
                decoded.expre = curtime + TokenConfig.expre
                let newtoken = jwt.sign(decoded, 'shhhhh');
                cache.put(token, true, curtime + TokenConfig.exp);
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

module.exports = {
    CreateToken: CreateToken,
    AuthToken: AuthToken
}