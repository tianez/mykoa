'use strict'

const db = require('../../model/db')

async function getMeun(ctx, next) {
    let data = await db.meuns.findAll()
    ctx.body = JSON.stringify(data)
}

async function getRole(ctx, next) {
    let data = await db.roles.findAll()
    let out = []
    data.forEach(function (role) {
        let r = {
            title: role.display_name,
            value: role.id
        }
        out.push(r)
    });
    ctx.body = JSON.stringify(out)
}

module.exports = {
    getMeun: getMeun,
    getRole: getRole
}