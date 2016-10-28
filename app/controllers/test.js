'use strict'

const moment = require('moment')

const redis = require('../lib/redis')
const db2 = require('../lib/adb')

const db = new db2()

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
 
// const monk = require('../lib/monk')

// const products2 = monk('user')

// const mongoose = require('../lib/mongoose').users

async function test(ctx, next) {
    // let mm = new mongoose()
    // mm.username = 'woshihaoren22'
    // mm.save(function (err) {
        // console.log(err);
    // });
    // products2.index('name last')
    // products2.insert({
    //     "name": "orange juice",
    //     "description": "just so so"
    // })
    // products2.find({}, {
    //     limit: 2,
    //     sort: {
    //         _id: -1
    //     }
    // }).then(function (res) {
    //     console.log(res)
    // })

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