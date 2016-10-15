'use strict'

const io = require('socket.io-emitter')({
    host: '127.0.0.1',
    port: 6379
});

const redis = require('../lib/redis')

async function test(ctx, next) {
    let res = await redis.set('123', 'woshiahaoren', 20)
    let res2 = await redis.set('234', 'woshiahaoren')
    console.log(res);
    // io.emit('system', '1111111')
    // let chat2 = await chat()
    // console.log(chat2);
    // ctx.throw(400, 'name required')
    ctx.body = '1111111133331'
        // ctx.render('home', {
        //     username: 'James'
        // });
}

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

module.exports = test