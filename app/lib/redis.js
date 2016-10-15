'use strict'

const redis = require('redis')

const RDS_PORT = 6379; //端口号
const RDS_HOST = '127.0.1.1'; //服务器IP
const RDS_OPTS = {}; //设置项
const client = redis.createClient();
// const client = redis.createClient(RDS_PORT, RDS_HOST, RDS_OPTS);

client.on('connect', function () {
    console.log('redis connect');
});

client.on('ready', function (err) {
    console.log('redis ready');
});

async function set(key, value, expire) {
    return new Promise(function (resolve, reject) {
            client.set(key, value, function (err, result) {
                if (err) {
                    console.log(err);
                    reject(err)
                    return;
                }
                if (expire) {
                    client.expire(key, expire);
                }
                resolve(result)
            })
        })
        .catch(function (err) {
            throw new Error(err);
        });
}

async function get(key) {
    return new Promise(function (resolve, reject) {
            client.get(key, function (err, result) {
                if (err) {
                    console.log(err);
                    reject(err)
                    return;
                }
                resolve(result)
            })
        })
        .catch(function (err) {
            throw new Error(err);
        });
}

async function del(key) {
    return new Promise(function (resolve, reject) {
            try {
                client.expire(key, 0);
                resolve('ok')
            } catch (err) {
                reject(err)
            }
        })
        .catch(function (err) {
            throw new Error(err);
        })
}

module.exports = {
    set: set,
    get: get,
    del: del
}