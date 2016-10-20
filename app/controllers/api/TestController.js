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
    let data = await db.tests.findOne({
        attributes: ['id', 'title', 'type', 'answer'],
        where: {
            status: -1
        },
        raw: true
    })
    if (!data) {
        data = await db.tests.create({
            status: -1
        })
        data = data.toJSON()
        delete data.status
        delete data.created_at
        delete data.updated_at
        let option = await db.tests_option.bulkCreate([{
            test_id: data.id,
            content: '正确'
        }, {
            test_id: data.id,
            content: '错误'
        }])
    }
    ctx.body = JSON.stringify({
        info: data
    })
}

/**
 * 新增数据
 */
async function getAddOption(ctx, next) {
    console.log(ctx.query.addnew);
    let notin = ctx.query.addnew

    let where = {
        status: -1,
        content: '',
    }
    if (notin) {
        let notins = []
        if (!isNaN(notin)) {
            notins.push(notin)
        } else {
            notins = notin
        }
        where.id = {
            $notIn: notins
        }
    }
    let data = await db.tests_option.findOne({
        attributes: ['id', 'content'],
        where: where,
        raw: true
    })
    if (!data) {
        data = await db.tests_option.create({
            test_id: ctx.query.test_id,
            status: -1
        })
        data = data.toJSON()
        data.content = ''
        delete data.test_id
        delete data.created_at
        delete data.updated_at
    }
    console.log(data);
    ctx.body = JSON.stringify({
        info: data
    })
}

async function getDetail(ctx, next) {
    let data = await db.tests.findOne({
        attributes: ['id', 'title', 'type', 'answer'],
        where: {
            status: -1
        },
        raw: true
    })
    let options = await db.tests_option.findAll({
        attributes: ['id', 'content', 'status'],
        where: {
            test_id: data.id
        },
        raw: true
    })
    data.options = options
    ctx.body = JSON.stringify({
        title: '编辑题目',
        info: data
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
    get_Add_Test_Option: getAddOption,
    get_Detail_Test: getDetail,
    post_Detail_Test: postDetail,
    get_Delete_Test: getDelete,
}