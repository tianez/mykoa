'use strict'

const moment = require('moment')
const jwt = require('jsonwebtoken')
const Db = require('../Db')

async function getToken(ctx, next) {
    console.log(moment().format("YYYY-MM-DD H:mm:ss"));
    let users = await new Db('users').where({
        id: 1
    }).get();
    let data = users[0]
    delete data.password
    data.exp = parseInt(moment() / 1000) + 3600
    data.expre = parseInt(moment() / 1000) + 1800
    console.log(data);
    let token = jwt.sign(data, 'shhhhh');
    // ctx.cookies.set('token', token)
    ctx.type = 'json';
    ctx.body = JSON.stringify({
        token: token
    })
}

module.exports = getToken;