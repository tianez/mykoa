'use strict'

const uuid = require('node-uuid');
const moment = require('moment')

const db = require('../model/db')

const cryptopassword = require('../middleware/password');

async function getList(ctx, next) {
    // db.chat_win.sync({
    //     force: true
    // });
    let chats = await db.chat.findAll({
        raw: true,
        limit: 20,
        order: [
            ['id', 'DESC']
        ]
    });
    let today = await db.chat_win.findAll({
        raw: true,
        where: {
            created_at: {
                $between: [moment().format('YYYY-MM-DD'), moment().add(1, 'days').format('YYYY-MM-DD')]
            }
        }
    });
    let yesterday = await db.chat_win.findAll({
        raw: true,
        where: {
            created_at: {
                $between: [moment().subtract(1, 'days').format('YYYY-MM-DD'), moment().format('YYYY-MM-DD')]
            }
        }
    });
    ctx.body = JSON.stringify({
        chat: chats,
        today: today,
        yesterday: yesterday
    })
}

async function postLogin(ctx, next) {
    let user = await db.user.findOne({
        where: {
            username: ctx.request.fields.username
        }
    })
    if (!user) {
        ctx.status = 404
        ctx.body = '该用户不存在'
    } else if (user.password != cryptopassword(ctx.request.fields.password)) {
        ctx.body = '用户名或密码错误！'
    } else {
        ctx.body = JSON.stringify(user)
    }
}

async function postRegister(ctx, next) {
    let user = await db.user.findOne({
        where: {
            username: ctx.request.fields.username
        }
    })
    if (user) {
        ctx.status = 404
        ctx.body = '用户名已存在'
    } else if (!ctx.request.fields.password.trim()) {
        ctx.status = 404
        ctx.body = '密码不能为空'
    } else {
        let data = {
            username: ctx.request.fields.username,
            password: ctx.request.fields.password,
            head_img: ctx.request.fields.file
        }
        let user = await db.user.create(data)
        ctx.body = JSON.stringify(user)
    }
}


let controller = {
    getList: getList,
    postLogin: postLogin,
    postRegister: postRegister
}

module.exports = controller