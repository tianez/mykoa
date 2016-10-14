'use strict'

const db = require('../../model/db')

const theads = {
    config: {
        id: 'ID',
        name: '设置名',
        value: '设置值'
    },
    users: {
        id: 'ID',
        username: '用户名'
    }
}

const titles = {
    config: '系统设置',
    users: '用户',
}

async function getList(ctx, next) {
    let module = ctx.params.module
    let cdb = db[module]
    let limit = ctx.query.limit || 2
    let page = ctx.query.page || 1
    let offset = limit * (page - 1)
    let data = await cdb.findAll({
        offset: offset,
        limit: limit,
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
        }
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
        }
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