'use strict'

const db = require('../../model/db')

async function getFields(ctx, next) {
    let fields = await db.field.findAll({
        attributes: ['module'],
        group: ['module']
    })
    console.log(fields);
    ctx.body = JSON.stringify({
        fields: fields
    })
}

async function getField(ctx, next) {
    console.log(ctx.params.name);
     let fields = await db.field.findAll({
         where:{
             module:ctx.params.name
         },
        attributes: { exclude: ['module'] }
    })
    console.log(fields);
    ctx.body = JSON.stringify({
        fields: fields
    })
}

async function getFieldid(ctx, next) {
    console.log(ctx.params.name);
     let field = await db.field.findAll({
         where:{ 
             id:ctx.params.id
         },
        attributes: { exclude: ['module'] }
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