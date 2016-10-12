'use strict'

const moment = require('moment')
const jwt = require('jsonwebtoken')
const cache = require('memory-cache');

async function CreateToken(ctx, next) {
    // console.log(moment().format("YYYY-MM-DD H:mm:ss"));
    let users = await new Db('users').where({
        id: 1
    }).get();
    let data = users[0]
    delete data.password
    let curtime = parseInt(moment() / 1000)
    data.exp = curtime + 3600
    data.expre = curtime + 1800
    let token = jwt.sign(data, 'shhhhh');
    // ctx.cookies.set('token', token)
    cache.put(token, true, curtime + 3600);
    ctx.type = 'json';
    ctx.set({
        token: token
    })
    ctx.body = JSON.stringify({
        token: token
    })
}

module.exports = CreateToken;