'use strict'

const router = require('koa-router')();

const controller = require('../controllers');

async function chat() {
    return new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve('111111111111111')
                    // reject('1212121')
            }, 200)
        })
        .catch(function (err) {
            throw new Error(err);
        });
}

router.get('/', controller.home);

router.get('/dd', async(ctx, next) => {
    ctx.render('home', {
        username: 'James'
    });
});

module.exports = router;