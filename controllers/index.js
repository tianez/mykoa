'use strict'

const User = require('../model/user')
const dbmd = require('../model/dbmd')
const Db = require('./Db')
const bcrypt = require('bcrypt-nodejs')
const md5 = require('crypto').createHash('md5');

// bcrypt
async function home(ctx, next) {
    var n = ctx.session.views || 0;
    // let users = await new Db('users').where({id:1}).get();
    // console.log(users);

    // console.log(md5('sssssssssss'));
    var hash = bcrypt.hashSync('gebilaowang');
    var yz = bcrypt.compareSync("gebilaowang", hash);
    console.log(yz);
    console.log(bcrypt.hashSync('gebilaowang'));
    ctx.render('home', {
        user_name: 'tianez'
    });
}

module.exports = {
    home: home
}