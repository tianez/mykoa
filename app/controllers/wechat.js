'use strict'

const wechat = require('wechat');
const crypto = require('crypto');
const moment = require('moment')

const xml2js = require('xml2js');

const config = {
    token: 'weixin',
    appid: 'wxe99ca8d62941e691',
    encodingAESKey: '42d505a91367458b3313082c8119af55'
};

async function weixin(ctx, next) {
    let signature = ctx.query.signature
    let timestamp = ctx.query.timestamp
    let nonce = ctx.query.nonce
    let echostr = ctx.query.echostr
    let token = config.token
    var arr = [token, timestamp, nonce];
    arr.sort();
    var tmpStr = arr.join('');
    var sha1 = crypto.createHash('sha1');
    sha1.update(tmpStr);
    var resStr = sha1.digest('hex');
    if (resStr === signature) {
        ctx.body = echostr;
    } else {
        return false;
    }
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