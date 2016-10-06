'use strict'

const uuid = require('node-uuid');
const moment = require('moment')

const Db = require('./Db')
const User = require('../model/user')
const dbmd = require('../model/dbmd')

async function getHome(ctx, next) {
    ctx.cookies.set('uuid', uuid.v1());
    let token = ctx.cookies.get('token')
    ctx.body = JSON.stringify({
        token: token
    })
}

async function getUser(ctx, next) {
    const start = new Date().getTime(); // 当前时间
    let users = await new Db('users').where({
        id: 1
    }).get();
    ctx.body = JSON.stringify(users)
    const ms = new Date().getTime() - start; // 耗费时间
    console.log('<-- ' + ctx.request.method + ' ' + ctx.request.url + '  ' + ms + 'ms');
}

async function postUpload(ctx, next) {
    // var files = ctx.request.body
    // console.log(ctx.request.files);
    // console.log(ctx.request.body);
    // console.log(ctx.request.fields);
    let floder = './uploads/' + moment().format("YYYYMMDD/")
    if (!fs.existsSync(floder)) {
        await fs.mkdir(floder);
    }
    let files = ctx.request.fields.upfile
    for (let i in files) {
        if (files[i].size == 0) {
            return
        }
        let is = fs.createReadStream(files[i].path);
        let os = fs.createWriteStream(floder + files[i].name);
        is.pipe(os);
        is.on('end', function () {
            fs.unlinkSync(files[i].path);
        });
    }
    ctx.render('upload');
}

module.exports = {
    getHome: getHome,
    getUser: getUser,
    postUpload: postUpload
}