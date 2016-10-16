'use strict'

const moment = require('moment')
const db = require('../model/db')
const bcrypt = require('bcrypt-nodejs')
const md5 = require('crypto').createHash('md5');
const fs = require('fs');
const mime = require('mime');
const nodemailer = require('nodemailer');
const paths = require('path');
const uuid = require('node-uuid');

const gm = require('gm')
const imageMagick = gm.subClass({
    imageMagick: true
});

const images = require("images");

// create reusable transporter object using the default SMTP transport
const transporter = nodemailer.createTransport('smtps://saber_tz%40163.com:tian19870219@smtp.163.com');

// bcrypt
async function home(ctx, next) {
    // dbmd.user2.sync({ force: true })
    // db.User.sync({
    //     force: true
    // });
    // var mailOptions = {
    //     from: '"Fred Foo 👥" <saber_tz@163.com>', // sender address
    //     to: 'tianjuezhiyi@qq.com', // list of receivers
    //     subject: 'Hello ✔', // Subject line
    //     text: 'Hello world 🐴', // plaintext body
    //     html: '<b>Hello world 🐴</b>' // html body
    // };

    // send mail with defined transport object
    // transporter.sendMail(mailOptions, function(error, info) {
    //     if (error) {
    //         return console.log(error);
    //     }
    //     console.log('Message sent: ' + info.response);
    // });
    // let user = await db.user.findAll({
    //     raw: true
    // });
    // console.log(user);
    // db.field.sync({ force: true })
    // var n = ctx.session.views || 0;
    // var hash = bcrypt.hashSync('gebilaowang');
    // var yz = bcrypt.compareSync("gebilaowang", hash);
    // console.log(yz);
    // console.log(bcrypt.hashSync('gebilaowang'));
    let topic = await db.topic.findOne({
        order: [
            ['id', 'DESC']
        ],
        raw: true
    })
    let title = await db.config.findOne({
        where: {
            name: 'title'
        },
        raw: true
    })
    let poster = await db.config.findOne({
        where: {
            name: 'poster'
        },
        raw: true
    })
    let vurl = await db.config.findOne({
        where: {
            name: 'vurl'
        },
        raw: true
    })

    ctx.render('chat', {
        ht: topic.content,
        title: title.value,
        poster: poster.value,
        vurl: vurl.value,
    });
}

async function getAdmin(ctx, next) {
    ctx.render('admin');
}

async function getUpload(ctx, next) {
    ctx.render('upload');
}

async function postUpload(ctx, next) {
    // console.log(ctx.request.files);
    // console.log(ctx.request.body);
    // console.log(ctx.request.fields);
    let floder = __dirname + './../uploads/'
    console.log(floder);
    let path = './uploads/'
    if (!fs.existsSync(floder)) {
        await fs.mkdir(floder);
    }
    let files = ctx.request.fields.file
    let res = []
    for (let i in files) {
        if (files[i].size == 0) {
            return
        }
        let r = {}
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
        let name = uuid.v1() + '-' + files[i].name
        let is = fs.createReadStream(files[i].path);
        let os = fs.createWriteStream(path + name);
        is.pipe(os);
        is.on('end', function () {
            images(path + name)
                .size(400)
                .save(path + 'copy' + name, {
                    quality: 80
                });
            fs.unlinkSync(files[i].path);
        });
        r.name = files[i].name
        r.size = files[i].size
        r.ext = ext
        r.lastModifiedDate = files[i].lastModifiedDate
        r.path = path + 'copy' + name
        res.push(r)
    }
    ctx.type = 'json';
    ctx.body = JSON.stringify(res)
}

let roles = require('../data/role')

async function dataimport(ctx, next) {
    // db.role.sync({
    //     force: true
    // }).then(function () {
    //     db.role.bulkCreate(roles)
    // })
    db.sync()
    ctx.body = 'ok'
}

module.exports = {
    home: home,
    getUpload: getUpload,
    postUpload: postUpload,
    dataimport: dataimport,
    getAdmin: getAdmin
}