'use strict'

const db = require('../../model/db')

async function getDetail(ctx, next) {
    let fields = await db.fields.findAll({
        where: {
            module: 'permissions'
        }
    })
    let data = await db.permissions.findOne({
        where: {
            id: ctx.params.id
        },
        raw: true
    })
    let roles = await db.role_permissions.findAll({
        where: {
            permission_id: ctx.params.id
        },
        group: 'role_id',
        raw: true
    })
    let role = []
    roles.forEach(function (r) {
        role.push(r.role_id)
    });
    data.roles = role
    ctx.body = JSON.stringify({
        title: '编辑权限',
        fields: fields,
        info: data
    })
}

async function updateDetail(ctx, next) {
    let data = ctx.request.fields
    let res = await db.permissions.update(data, {
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

module.exports = {
    getPermissions: getDetail,
    updatePermissions: updateDetail,
}