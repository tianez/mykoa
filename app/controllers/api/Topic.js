'use strict'

const db = require('../../model/db')

async function getTopics(ctx, next) {
    let limit = ctx.query.limit || 2
    let page = ctx.query.page || 1
    let offset = limit * (page - 1)
    let data = await db.topic.findAll({
        offset: offset,
        limit: limit,
    })
    let total = await db.topic.count()
    let last_page = parseInt(total / limit)
    let thead = {
        id: 'ID',
        title: '标题',
        content: '内容'
    }
    ctx.body = JSON.stringify({
        title: '直播管理',
        data: data,
        thead: thead,
        total: total,
        last_page: last_page,
        current_page: page,
    })
}

async function addTopic(ctx, next) {
    let fields = await db.field.findAll({
        where: {
            module: 'topic'
        }
    })
    ctx.body = JSON.stringify({
        title: '新增话题',
        fields: fields,
        info: {}
    })
}

async function postTopic(ctx, next) {
    let data = ctx.request.fields
    let user = await db.topic.create(data)
    ctx.body = JSON.stringify({
        msg: '新增成功！',
        user: user
    })
}

async function getTopic(ctx, next) {
    let fields = await db.field.findAll({
        where: {
            module: 'topic'
        }
    })
    let data = await db.topic.findOne({
        where: {
            id: ctx.params.id
        }
    })
    ctx.body = JSON.stringify({
        title: '评论管理',
        fields: fields,
        info: data
    })
}

async function updateTopic(ctx, next) {
    console.log(ctx.request.fields);

    let data = await db.topic.update(ctx.request.fields, {
        where: {
            id: ctx.request.fields.id
        }
    })
    ctx.body = JSON.stringify({
        msg: '保存成功！'
    })
}

async function deleteTopic(ctx, next) {
    let data = await db.topic.destroy({
        where: {
            id: ctx.params.id
        }
    })
    ctx.body = JSON.stringify({
        msg: '删除成功！'
    })
}

module.exports = {
    getTopics: getTopics,
    getTopic: getTopic,
    addTopic: addTopic,
    postTopic: postTopic,
    deleteTopic: deleteTopic,
    updateTopic: updateTopic
}