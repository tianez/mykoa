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
    },
    fields: {
        id: 'ID',
        key: '字段key',
        name: '字段名称',
        type: '字段类型',
        module: '所属模块'
    },
    meuns: {
        id: 'ID',
        link: '链接地址',
        title: '链接标题'
    },
    permissions: {
        id: 'ID',
        name: '权限key',
        display_name: '权限名称',
        group: '权限分组'
    },
    roles: {
        id: 'ID',
        name: '用户组key',
        display_name: '用户组名称',
        status: '状态'
    },
    article: {
        id: 'ID',
        title: '文章标题'
    },
    category: {
        id: 'ID',
        name: '分类名称',
        status: '状态'
    },
}

const titles = {
    config: '系统设置',
    users: '用户',
    topic: '直播话题',
    chat: '评论',
    chat_win: '获奖名单',
    fields: '字段',
    meuns: '菜单',
    permissions: '权限',
    roles: '用户组',
    article: '文章',
    category: '分类'
}

async function getList(ctx, next) {
    let module = ctx.params.module
    let cdb = db[module]
    let limit = ctx.query.limit || 15
    let page = ctx.query.page || 1
    let offset = limit * (page - 1)
    let query = Object.assign({}, ctx.query)
    delete query.limit
    delete query.page
    delete query.order
    let data = await cdb.findAll({
        where: query,
        offset: offset,
        limit: limit,
        order: [
            ['id', 'DESC']
        ]
    })
    let total = await cdb.count({
        where: query
    })
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

/**
 * 新增页面
 */
async function getAdd(ctx, next) {
    let module = ctx.params.module
    let fields = await db.fields.findAll({
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

/**
 * 新增数据
 */
async function postAdd(ctx, next) {
    let module = ctx.params.module
    let data = ctx.request.fields
    let res = await db[module].create(data)
    ctx.body = JSON.stringify({
        msg: titles[module] + '新增成功！',
        info: res
    })
}

/**
 * 查询详情
 */
async function getDetail(ctx, next) {
    if (!ctx.params.id) {
        return ctx.body = JSON.stringify({})
    }
    let module = ctx.params.module
    let fields = await db.fields.findAll({
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
        title: titles[module] + '编辑',
        fields: fields,
        info: data
    })
}

/**
 * 更新数据
 */
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

/**
 * 删除数据
 */
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