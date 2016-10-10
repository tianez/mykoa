'use strict'

const Db = require('../../model/db')

async function getField(ctx, next) {
    let fields = await Db.field.findAll({
        attributes: ['module'],
        groupby:'module'
    })
    console.log(fields);
    ctx.body = JSON.stringify({
        fields: fields
    })
}

module.exports = {
    getField: getField
}