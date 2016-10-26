'use strict'

const uuid = require('node-uuid');
const moment = require('moment')
const io = require('socket.io-emitter')({
    host: '127.0.0.1',
    port: 6379
});

const db = require('../model/db')

const cryptopassword = require('../middleware/password');

async function getHome(ctx, next) {
    let title = await db.config.findOne({
        where: {
            name: 'title'
        },
        raw: true
    })
    ctx.render('chat', {
        title: title.value
    });
}

async function getList(ctx, next) {
    let chats = await db.chat.findAll({
        attributes: ['id', 'username', 'realname', 'head_img', 'user_id', 'time', 'content'],
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
    // let yesterday = await db.chat_win.findAll({
    //     raw: true,
    //     where: {
    //         created_at: {
    //             $between: [moment().subtract(1, 'days').format('YYYY-MM-DD'), moment().format('YYYY-MM-DD')]
    //         }
    //     }
    // });
    let video = await db.video.findAll({
        attributes: ['id', 'name', 'url', 'poster', 'type'],
        where: {
            status: 0
        },
        order: [
            ['order', 'DESC'],
            ['id', 'ASC'],
        ],
        raw: true
    })
    ctx.body = JSON.stringify({
        chat: chats,
        today: today,
        // yesterday: yesterday,
        video: video
    })
}

async function getWin(ctx, next) {
    console.log(ctx.query.win);
    io.emit('system', {
        content: '恭喜手机号码为' + ctx.query.win + '的用户获得大奖，他将获得由xx提供的奖品一份。',
        username: 'system',
        realname: '<span style="color: #f00;">（系统消息）中奖信息</span>',
        time: parseInt(moment() / 1000),
        user_id: 0,
        head_img: 'uploads/jpeg/20161018/copyff035120-9518-11e6-8296-77df509974f6-07e6a044ad345982a4a810b004f431adcbef84a9.jpg'
    })
    ctx.body = '11111'
}

async function postLogin(ctx, next) {
    let user = await db.users.findOne({
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
        if (!user.realname) {
            let username = user.username
            let pre = username.slice(0, 3)
            let aft = username.slice(7)
            user.realname = pre + '****' + aft
        }
        ctx.body = JSON.stringify(user)
    }
}

async function postRegister(ctx, next) {
    let user = await db.users.findOne({
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
        // let data = {
        //     username: ctx.request.fields.username,
        //     password: ctx.request.fields.password,
        //     realname: ctx.request.fields.realname,
        //     head_img: ctx.request.fields.file
        // }
        let data = ctx.request.fields
        data.head_img = ctx.request.fields.file
        let user = await db.users.create(ctx.request.fields)
        if (!user.realname) {
            let username = user.username
            let pre = username.slice(0, 3)
            let aft = username.slice(7)
            user.realname = pre + '****' + aft
        }
        ctx.body = JSON.stringify(user)
    }
}


let controller = {
    getHome: getHome,
    getList: getList,
    postLogin: postLogin,
    postRegister: postRegister,
    getWin: getWin
}

module.exports = controller