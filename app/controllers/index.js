'use strict'

const moment = require('moment')
const db = require('../model/db')
    // const dbmd = require('../model/dbmd')
    // const Db = require('./Db')
const bcrypt = require('bcrypt-nodejs')
const md5 = require('crypto').createHash('md5');
const fs = require('fs');
const mime = require('mime');
const nodemailer = require('nodemailer');

// create reusable transporter object using the default SMTP transport
const transporter = nodemailer.createTransport('smtps://saber_tz%40163.com:tian19870219@smtp.163.com');

// bcrypt
async function home(ctx, next) {
    // dbmd.user2.sync({ force: true })
    // db.User.sync({
    //     force: true
    // });
    var mailOptions = {
        from: '"Fred Foo 👥" <saber_tz@163.com>', // sender address
        to: 'tianjuezhiyi@qq.com', // list of receivers
        subject: 'Hello ✔', // Subject line
        text: 'Hello world 🐴', // plaintext body
        html: '<b>Hello world 🐴</b>' // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: ' + info.response);
    });
    let user = await db.user.findAll({
        raw: true
    });
    console.log(user);
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
    let floder = './../uploads/'
    let path = './uploads/'
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
        floder += ext
        path += ext
        if (!fs.existsSync(floder)) {
            await fs.mkdir(floder);
        }
        let day = moment().format("/YYYYMMDD/")
        floder += day
        path += day
        if (!fs.existsSync(floder)) {
            await fs.mkdir(floder);
        }
        let is = fs.createReadStream(files[i].path);
        let os = fs.createWriteStream(path + files[i].name);
        is.pipe(os);
        is.on('end', function () {
            fs.unlinkSync(files[i].path);
        });
        r.name = files[i].name
        r.size = files[i].size
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