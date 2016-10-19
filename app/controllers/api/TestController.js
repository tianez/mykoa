'use strict'

const db = require('../../model/db')

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

async function getDetail(ctx, next) {
    let tests = await db.tests.findOne({
        where: {
            id: ctx.params.id
        },
        raw: true
    })
    let options = await db.tests_option.findAll({
        where: {
            test_id: ctx.params.id
        },
        group: 'role_id',
        raw: true
    })
    tests.options = options
    ctx.body = JSON.stringify({
        title: '编辑题目',
        tests: tests
    })
}

async function postDetail(ctx, next) {
    let data = ctx.request.fields
    let res = await db.tests.update(data, {
        where: {
            id: data.id
        }
    })
    let destroy = await db.role_permission.destroy({
        where: {
            permission_id: data.id
        }
    })
    let permission = []
    data.roles.forEach(function (r) {
        permission.push({
            permission_id: data.id,
            id: r
        })
    });
    await db.role_permission.bulkCreate(permission)
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
    get_List_Test: getList,
    get_Add_Test: getAdd,
    post_Add_Test: postAdd,
    get_Detail_Test: getDetail,
    post_Detail_Test: postDetail,
    get_Delete_Test: getDelete,
}