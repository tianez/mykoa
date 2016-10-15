'use strict'

const db = require('../../model/db')

const theads = {
    config: {
        id: 'ID',
        name: '设置名',
        value: '设置值'
    },
    user: {
        id: 'ID',
        username: '用户名'
    },
    topic: {
        id: 'ID',
        title: '标题',
        content: '内容'
    },
    chat: {
        id: 'ID',
        content: '评论内容',
        username: '用户名'
    },
    chat_win: {
        id: 'ID',
        phone: '获奖电话',
        created_at: '获奖时间'
    }
}

const titles = {
    config: '系统设置',
    user: '用户',
    topic: '直播话题',
    chat: '评论',
    chat_win: '获奖名单'
}

async function getList(ctx, next) {
    let module = ctx.params.module
    let cdb = db[module]
    let limit = ctx.query.limit || 20
    let page = ctx.query.page || 1
    let offset = limit * (page - 1)
    let data = await cdb.findAll({
        offset: offset,
        limit: limit,
        order: [
            ['id', 'DESC']
        ]
    })
    let total = await cdb.count()
    let last_page = Math.ceil(total / limit)
    let thead = theads[module]
    let title = titles[module]
    ctx.body = JSON.stringify({
        title: title + '管理',
        data: data,
        thead: thead,
        total: total,
        last_page: last_page,
        current_page: page,
    })
}

async function getAdd(ctx, next) {
    let module = ctx.params.module
    let fields = await db.field.findAll({
        where: {
            module: module
        },
        order: [
            ['order', 'ASC']
        ]
    })
    ctx.body = JSON.stringify({
        title: '新增' + titles[module],
        fields: fields,
        info: {}
    })
}

async function postAdd(ctx, next) {
    let module = ctx.params.module
    let data = ctx.request.fields
    let res = await db[module].create(data)
    ctx.body = JSON.stringify({
        msg: titles[module] + '新增成功！',
        info: res
    })
}


async function getDetail(ctx, next) {
    let module = ctx.params.module
    let fields = await db.field.findAll({
        where: {
            module: module
        },
        order: [
            ['order', 'ASC']
        ]
    })
    let data = await db[module].findOne({
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

async function updateDetail(ctx, next) {
    let module = ctx.params.module
    let data = await db[module].update(ctx.request.fields, {
        where: {
            id: ctx.request.fields.id
        }
    })
    ctx.body = JSON.stringify({
        msg: '保存成功！'
    })
}

async function getDelete(ctx, next) {
    let module = ctx.params.module
    let data = await db[module].destroy({
        where: {
            id: ctx.params.id
        }
    })
    ctx.body = JSON.stringify({
        msg: '删除成功！'
    })
}

module.exports = {
    getList: getList,
    getAdd: getAdd,
    postAdd: postAdd,
    getDetail: getDetail,
    updateDetail: updateDetail,
    getDelete: getDelete
}