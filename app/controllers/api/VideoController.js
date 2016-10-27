'use strict'
const db = require('../../model/db')

const theads = {
    video: {
        id: 'ID',
        name: '频道名称',
        url: '视频直播流地址',
        order: '排序'
    }
}

const titles = {
    video: '视频'
}

async function getList(ctx, next) {
    let module = 'video'
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
            ['order','DESC'],
            ['id', 'ASC'],
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

module.exports = {
    getVideos: getList
}