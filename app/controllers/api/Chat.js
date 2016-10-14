'use strict'

const db = require('../../model/db')

async function getChats(ctx, next) {
    let limit = ctx.query.limit || 20
    let page = ctx.query.page || 1
    let offset = limit * (page - 1)
    let data = await db.chat.findAll({
        // attributes: ['module'],
        // group: ['module']
        offset: offset,
        limit: limit,
        order: [
            ['id', 'DESC']
        ] 
    })
    let total = await db.chat.count()
    let last_page = parseInt(total / limit)
    let thead = {
        id: 'ID',
        content: '评论内容',
        username: '用户名'
    }
    ctx.body = JSON.stringify({
        title: '评论管理',
        data: data,
        thead: thead,
        total: total,
        last_page: last_page,
        current_page: page,
    })
}

async function addChat(ctx, next) {
    let fields = await db.field.findAll({
        where: {
            module: 'chat'
        }
    })
    ctx.body = JSON.stringify({
        title: '新增评论',
        fields: fields,
        info: {}
    })
}

async function postChat(ctx, next) {
    let data = ctx.request.fields
    let info = await db.chat.create(data)
    ctx.body = JSON.stringify({
        title: '新增评论',
        info: info
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

async function deleteChat(ctx, next) {
    let data = await db.chat.destroy({
        where: {
            id: ctx.params.id
        }
    })
    ctx.body = JSON.stringify({
        title: '删除评论'
    })
}

module.exports = {
    getChats: getChats,
    getChat: getChat,
    addChat: addChat,
    postChat: postChat,
    deleteChat: deleteChat
}