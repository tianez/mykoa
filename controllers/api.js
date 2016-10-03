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
        // await User.sync()
        // var dog = await User.create({
        //     user_name: 'Odie222222222' + Date.now()
        // });
        // console.log('created: ' + JSON.stringify(dog));
    let user = await User.findAll()
        // let user2 = await dbmd.user2.findAll()
    let uu = user[0];
    uu.user_name = 'haodes22222222222s'
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