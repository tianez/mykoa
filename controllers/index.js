'use strict'

const User = require('../model/user')
const dbmd = require('../model/dbmd')
const Db = require('./Db')
const bcrypt = require('bcrypt-nodejs')
const md5 = require('crypto').createHash('md5');

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


const multer = require('koa-multer');
const upload = multer({ dest: 'uploads/' });

async function postUpload(ctx, next) {
    // upload.single('avatar')
    console.log(111);

   
    // var files = ctx.request.body
    console.log(ctx.request.files);
    console.log(ctx.request.body);
    // console.log(files);
    ctx.render('upload');
}

module.exports = {
    home: home,
    getUpload: getUpload,
    postUpload: postUpload
}

