'use strict'

const moment = require('moment')
const jwt = require('jsonwebtoken')
const cache = require('memory-cache');
const db = require('../../model/db')
const redis = require('../../lib/redis')
const cryptopassword = require('../../middleware/password');
const jwtConfig = {
    exp: 3600 * 3, //过期时间
    expre: 3600 * 2, //刷新时间
    key: 'shhhhh', //加密key
}

/**
 * 创建token
 */
async function createToken(ctx, next) {
    if (ctx.request.fields.username != 'admin') {
        ctx.status = 401
        ctx.body = '你无权访问该页面'
        return
    }
    let user = await db.user.findOne({
        where: {
            username: ctx.request.fields.username
        }
    })
    if (!user) {
        ctx.status = 404
        ctx.body = '该用户不存在'
    } else if (user.password != cryptopassword(ctx.request.fields.password)) {
        ctx.status = 403
        ctx.body = '用户名或密码错误！'
    } else {
        ctx.body = JSON.stringify(user)
        let data = {
            id: user.id,
            username: user.username
        }
        let curtime = parseInt(moment() / 1000)
        data.exp = curtime + jwtConfig.exp
        let token = jwt.sign(data, jwtConfig.key);
        await redis.set(token, true, jwtConfig.exp)
            // cache.put(token, true, curtime + 3600);
        ctx.type = 'json';
        ctx.set({
            token: token
        })
        ctx.body = JSON.stringify({
            token: token
        })
    }

}

async function getToken(ctx, next) {
    ctx.set({
        token: ctx.headers.token
    })
    ctx.body = JSON.stringify({
        token: ctx.headers.token
    })
}

async function removeToken(ctx, next) {
    let token
    if (ctx.query.token) {
        token = ctx.query.token
    } else if (ctx.headers.token) {
        token = ctx.headers.token
    } else if (ctx.cookies.get('token')) {
        token = ctx.cookies.get('token')
    }
    console.log('当前token：' + token);
    let redistoken = await redis.get(token)
    if (redistoken) {
        await redis.del(token)
    }
    ctx.body = JSON.stringify({
        msg: '登出成功！'
    })
}

/**
 * 验证token
 * 过期销毁旧的token，创建新的token
 * 新token在headers中返回
 */
async function authToken(ctx, next) {
    let token
    if (ctx.query.token) {
        token = ctx.query.token
    } else if (ctx.headers.token) {
        token = ctx.headers.token
    } else if (ctx.cookies.get('token')) {
        token = ctx.cookies.get('token')
    }
    let redistoken = await redis.get(token)
    if (redistoken) {
        try {
            let decoded = jwt.verify(token, jwtConfig.key);
            let curtime = parseInt(moment() / 1000)
            if (decoded.expre < curtime) {
                await redis.del(token)
                delete decoded.iat
                decoded.exp = curtime + jwtConfig.exp
                decoded.expre = curtime + jwtnConfig.expre
                let newtoken = jwt.sign(decoded, jwtConfig.key);
                await redis.set(newtoken, true, jwtConfig.exp)
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
    createToken: createToken,
    getToken: getToken,
    removeToken: removeToken,
    authToken: authToken
}