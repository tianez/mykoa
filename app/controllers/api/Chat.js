'use strict'

const db = require('../../model/db')

async function getChats(ctx, next) {
    let data = await db.chat.findAll({
        // attributes: ['module'],
        // group: ['module']
        limit: 20
    })
    let thead = {
        id: 'ID',
        content: '评论内容',
        username: '用户名'
    }
    ctx.body = JSON.stringify({
        title: '评论管理',
        data: data,
        thead: thead
    })
}

async function getChat(ctx, next) {
    let fields = await db.field.findAll({
        where: {
            module: 'chat'
        }
    })
    let data = await db.chat.findOne({
        where: {
            id: ctx.params.id
        }
    })
    ctx.body = JSON.stringify({
        title: '评论管理',
        fields: fields,
        info: data
    })
}

module.exports = {
    getChats: getChats,
    getChat: getChat
}