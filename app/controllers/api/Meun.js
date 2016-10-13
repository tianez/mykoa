'use strict'

const db = require('../../model/db')

async function getMeun(ctx, next) {
    let meuns = await db.meun.findAll()
    ctx.body = JSON.stringify(meuns)
}

module.exports = {
    getMeun: getMeun
}