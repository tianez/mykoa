'use strict'

const router = require('koa-router')();

const controller = require('../controllers');

const uuid = require('node-uuid');
const jwt = require('jsonwebtoken');

router.get('/', controller.home);
router.get('/upload', controller.getUpload);
router.post('/upload', controller.postUpload);


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

router.get('/dd', async(ctx, next) => {

    let chat2 = await chat()


    console.log(chat2);

    ctx.throw(400, 'name required')
    ctx.render('home', {
        username: 'James'
    });
});

module.exports = router;