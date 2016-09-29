'use strict'

const User = require('../model/user')
const dbmd = require('../model/dbmd')


async function chat() {
    return new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve('111111111111111')
            }, 200)
        })
        .catch(function (err) {
            throw new Error(err);
        });
}

async function home(ctx, next) {
    let time = await chat()
        // dbmd.user2.sync()
    var dog = await dbmd.user2.create({
        user_name: 'Odie',
        id: 'd-' + Date.now(),
        version: 2
    });
    console.log('created: ' + JSON.stringify(dog));
    let user = await User.findAll()
    let user2 = await dbmd.user2.findAll()
    let uu = user2[0];
    uu.user_name = 'tianez222322225'
    await uu.save()

    // console.log(JSON.parse(JSON.stringify(user2)));

    var n = ctx.session.views || 0;
    ctx.session.views = ++n;
    ctx.render('home', {
        user_name: 'tianez',
        counter: ctx.session.views,
        user: JSON.parse(JSON.stringify(user))[0]
    });
}

module.exports = {
    home: home
}