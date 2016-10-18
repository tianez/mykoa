'use strict'

const wechat = require('wechat');
const crypto = require('crypto');
const moment = require('moment')

const xml2js = require('xml2js');

const fs = require('fs');

const request = require('superagent')

const config = {
    token: 'weixin',
    appid: 'wxe99ca8d62941e691',
    secret: '42d505a91367458b3313082c8119af55',
    wx_url: 'https://api.weixin.qq.com/cgi-bin/',
    api_url: 'https://api.weixin.qq.com/',
    token_url: 'token',  //获取token
    ip_url: 'getcallbackip', //获取微信服务器IP地址
    create_meun: 'menu/create', //创建自定义菜单
    get_meun: 'menu/get', //获取自定义菜单
    delete_meun: 'menu/delete', //删除自定义菜单
    template: 'template/api_set_industry', //设置行业
};
const WechatAPI = require('wechat-api');
const redis = require('../lib/redis')

async function weixin(ctx, next) {
<<<<<<< HEAD
    console.log(111);
    ctx.body = 'sssss'
        // let signature = ctx.query.signature
        // let timestamp = ctx.query.timestamp
        // let nonce = ctx.query.nonce
        // let echostr = ctx.query.echostr
        // ctx.body = echostr;
        // let token = config.token
        // var arr = [token, timestamp, nonce];
        // arr.sort();
        // var tmpStr = arr.join('');
        // var sha1 = crypto.createHash('sha1');
        // sha1.update(tmpStr);
        // var resStr = sha1.digest('hex');
=======

    // let token = await gettoken()
    let data = {
        "query": "查一下明天从北京到上海的南航机票",
        "city": "北京",
        "category": "flight,hotel",
        "appid": "wxaaaaaaaaaaaaaaaa",
        "uid": "123456"
    }
    let res = await apipostfetch('semantic/semproxy/search')
    ctx.body = res
    // let ip = await getfetch(config.ip_url)
    // console.log(ip);
    // let signature = ctx.query.signature
    // let timestamp = ctx.query.timestamp
    // let nonce = ctx.query.nonce
    // let echostr = ctx.query.echostr
    // ctx.body = echostr;
    // let token = config.token
    // var arr = [token, timestamp, nonce];
    // arr.sort();
    // var tmpStr = arr.join('');
    // var sha1 = crypto.createHash('sha1');
    // sha1.update(tmpStr);
    // var resStr = sha1.digest('hex');
>>>>>>> 79bd24406caeaf2b388eb5f2b20416afb86cdeb0

    // if (resStr === signature) {
    //     ctx.body = echostr;
    // } else {
    //     return false;
    // }
}

async function postweixin(ctx, next) {
    xml2js.parseString(ctx.xml, {
        trim: true
    }, function (err, result) {
        if (err) {
            reject(err);
        }
        console.log(result);
        let message = result.xml
        let res = "<xml>" +
            "<ToUserName><![CDATA[" + message.FromUserName + "]]></ToUserName>" +
            "<FromUserName><![CDATA[haodea]]></FromUserName>" +
            "<CreateTime>" + parseInt(moment() / 1000) + "</CreateTime>" +
            "<MsgType><![CDATA[text]]></MsgType>" +
            "<Content><![CDATA[你好]]></Content>" +
            "</xml>"
        ctx.body = res
    });
}

module.exports = {
    weixin: weixin,
    postweixin: postweixin,
}

async function getfetch(url, query) {
    if (!query) {
        query = {}
    }
    Object.assign(query, {
        access_token: await redis.get('wxtoken')
    })
    return new Promise(function (resolve, reject) {
        request
            .get(config.wx_url + url)
            .query(query)
            .end(function (err, res) {
                if (res.ok) {
                    resolve(JSON.parse(res.text))
                } else {
                    reject(err.response);
                }
            })
    }).catch(function (err) {
        console.log(err);
    });
}

async function postfetch(url, data, query) {
    if (!query) {
        query = {}
    }
    Object.assign(query, {
        access_token: await redis.get('wxtoken')
    })
    return new Promise(function (resolve, reject) {
        request
            .post(config.wx_url + url)
            .query(query)
            .send(data)
            .end(function (err, res) {
                if (res.ok) {
                    resolve(JSON.parse(res.text))
                } else {
                    reject(err.response);
                }
            })
    }).catch(function (err) {
        console.log(err);
    });
}

async function apigetfetch(url, query) {
    if (!query) {
        query = {}
    }
    Object.assign(query, {
        access_token: await redis.get('wxtoken')
    })
    return new Promise(function (resolve, reject) {
        request
            .get(config.api_url + url)
            .query(query)
            .end(function (err, res) {
                if (res.ok) {
                    resolve(JSON.parse(res.text))
                } else {
                    reject(err.response);
                }
            })
    }).catch(function (err) {
        console.log(err);
    });
}

async function apipostfetch(url, data, query) {
    if (!query) {
        query = {}
    }
    Object.assign(query, {
        access_token: await redis.get('wxtoken')
    })
    return new Promise(function (resolve, reject) {
        request
            .post(config.api_url + url)
            .query(query)
            .send(data)
            .end(function (err, res) {
                if (res.ok) {
                    resolve(JSON.parse(res.text))
                } else {
                    reject(err.response);
                }
            })
    }).catch(function (err) {
        console.log(err);
    });
}

async function gettoken() {
    return new Promise(function (resolve, reject) {
        request
            .get(config.wx_url + 'token')
            .query({
                grant_type: 'client_credential',
                appid: config.appid,
                secret: config.secret
            })
            .end(function (err, res) {
                if (res.ok) {
                    let data = JSON.parse(res.text)
                    redis.set('wxtoken', data.access_token, data.expires_in)
                    resolve(data)
                } else {
                    reject(err.response);
                }
            })
    }).catch(function (err) {
        console.log(err);
    });
}