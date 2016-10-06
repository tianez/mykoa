'use strict'

const moment = require('moment')
const User = require('../model/user')
const dbmd = require('../model/dbmd')
const Db = require('./Db')
const bcrypt = require('bcrypt-nodejs')
const md5 = require('crypto').createHash('md5');
const fs = require('fs');
const mime = require('mime');

// bcrypt
async function home(ctx, next) {
    var n = ctx.session.views || 0;
    var hash = bcrypt.hashSync('gebilaowang');
    var yz = bcrypt.compareSync("gebilaowang", hash);
    console.log(yz);
    console.log(bcrypt.hashSync('gebilaowang'));
    ctx.render('home', {
        user_name: 'tianez'
    });
}

async function getUpload(ctx, next) {
    ctx.render('upload');
}

async function postUpload(ctx, next) {
    // var files = ctx.request.body
    // console.log(ctx.request.files);
    // console.log(ctx.request.body);
    // console.log(ctx.request.fields);
    // let floder = './uploads/'
    let floder = './uploads/'
    if (!fs.existsSync(floder)) {
        await fs.mkdir(floder);
    }
    let files = ctx.request.fields.upfile
    let res = []
    for (let i in files) {
        if (files[i].size == 0) {
            return
        }
        let r = {}
            // fs.renameSync(files[i].path, floder + files[i].name);
        let ext = mime.extension(files[i].type);
        let path = floder + ext
        if (!fs.existsSync(path)) {
            await fs.mkdir(path);
        }
        path += moment().format("/YYYYMMDD/")
        if (!fs.existsSync(path)) {
            await fs.mkdir(path);
        }
        let is = fs.createReadStream(files[i].path);
        let os = fs.createWriteStream(path + files[i].name);
        is.pipe(os);
        is.on('end', function () {
            fs.unlinkSync(files[i].path);
        });
        r.name = files[i].name
        r.size = files[i].size
        r.type = files[i].type
        r.ext = ext
        r.lastModifiedDate = files[i].lastModifiedDate
        r.path = path + files[i].name

        res.push(r)
    }
    ctx.type = 'json';
    ctx.body = JSON.stringify(res)
}

module.exports = {
    home: home,
    getUpload: getUpload,
    postUpload: postUpload
}