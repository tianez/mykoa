'use strict'

const db = require('../../model/db')

async function getDetail(ctx, next) {
    let fields = await db.fields.findAll({
        where: {
            module: 'users'
        }
    })
    let data = await db.users.findOne({
        where: {
            id: ctx.params.id
        },
        raw: true
    })
    delete data.password
    ctx.body = JSON.stringify({
        title: '编辑用户',
        fields: fields,
        info: data
    })
}

async function updateDetail(ctx, next) {
    let data = ctx.request.fields
    if (!data.password || !password.trim()) {
        delete data.password
    }
    let res = await db.users.update(data, {
        where: {
            id: data.id
        }
    })
    ctx.body = JSON.stringify({
        msg: '保存成功！'
    })
}

module.exports = {
    getUsers: getDetail,
    updateUsers: updateDetail,
}