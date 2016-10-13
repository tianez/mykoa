"use strict";
const crypto = require('crypto');

const cryptopassword = function (pw) {
    var key = "asdhjwheru*asd123-123"; //加密的秘钥
    var md5 = crypto.createHmac('sha1', key);
    var pw = md5.update(pw).digest('hex');
    return pw;
}

module.exports = cryptopassword;