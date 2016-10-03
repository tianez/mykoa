'use strict'

const router = require('koa-router')({
    prefix: '/api'
});

const controller = require('../controllers/api');

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
    ctx.throw(400, 'name required')
    ctx.render('home', {
        username: 'James'
    });
});

module.exports = router;