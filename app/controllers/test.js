'use strict'

const io = require('socket.io-emitter')({
    host: '127.0.0.1',
    port: 6379
});

const redis = require('../lib/redis')

// // 载入模块
// var Segment = require('segment');
// // 创建实例
// var segment = new Segment();
// // 使用默认的识别模块及字典，载入字典文件需要1秒，仅初始化时执行一次即可
// segment.useDefault();
// //转换同义词，载入同义词词典
// // segment.loadSynonymDict('./synonym.txt');
// // 开始分词

// let text = '这是一个基于Node.js的中文分词模块。什么时候我也开始夜夜无法入睡'
// var result = segment.doSegment(text, {
//     simple: true, //不返回词性
//     stripPunctuation: true, //去除标点符号
//     convertSynonym: true, //转换同义词
// });
// console.log(result);
// var rd = require('rd');

// // 异步列出目录下的所有文件
// rd.read('./data', function (err, files) {
//     if (err) throw err;
//     console.log(files);
//     // files是一个数组，里面是目录/tmp目录下的所有文件（包括子目录）
// });

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