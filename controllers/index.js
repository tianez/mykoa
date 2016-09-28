'use strict'

async function chat() {
    return new Promise(function(resolve, reject) {
            setTimeout(function() {
                resolve('111111111111111')
            }, 200)
        })
        .catch(function(err) {
            throw new Error(err);
        });
}

async function home(ctx, next) {
    let time = await chat()
    console.log(time);
    var n = ctx.session.views || 0;
    ctx.session.views = ++n;
    ctx.render('home', {
        user_name: 'tianez',
        counter: ctx.session.views
    });
}

module.exports = {
    home: home
}