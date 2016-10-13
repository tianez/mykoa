'use strict'

const db = require('../../model/db')

async function getFields(ctx, next) {
    let fields = await db.field.findAll({
        // attributes: ['module'],
        // group: ['module']
    })
    let thead = {
        id: 'ID',
        key: '字段key',
        name: '字段名称',
        module: '字段模块',
        status: '状态'
    }
    ctx.body = JSON.stringify({
        title: '字段管理',
        data: fields,
        thead: thead
    })
}

async function getField(ctx, next) {
    let fields = await db.field.findAll({
        where: {
            module: ctx.params.name
        },
        attributes: {
            exclude: ['module']
        }
    })
    ctx.body = JSON.stringify({
        fields: fields
    })
}

async function getFieldid(ctx, next) {
    console.log(ctx.params.name);
    let field = await db.field.findAll({
        where: {
            id: ctx.params.id
        },
        attributes: {
            exclude: ['module']
        }
    })
    ctx.body = JSON.stringify({
        field: field
    })
}

module.exports = {
    getFields: getFields,
    getField: getField,
    getFieldid: getFieldid,
}