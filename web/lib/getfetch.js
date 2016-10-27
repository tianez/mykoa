'use strict'

/**
 * param 将要转为URL参数字符串的对象
 * key URL参数字符串的前缀
 * encode true/false 是否进行URL编码,默认为true
 * 
 * return URL参数字符串
 */
var urlEncode = function (param, key, encode) {
    if (param == null) return '';
    var paramStr = '';
    var t = typeof (param);
    if (t == 'string' || t == 'number' || t == 'boolean') {
        paramStr += '&' + key + '=' + ((encode == null || encode) ? encodeURIComponent(param) : param);
    } else {
        for (var i in param) {
            var k = key == null ? i : key + (param instanceof Array ? '[' + i + ']' : '.' + i);
            paramStr += urlEncode(param[i], k, encode);
        }
    }
    return paramStr;
};

function status(response) {
    if (response.ok) {
        if (response.headers.get('token')) {
            localStorage.token = response.headers.get('token')
        }
        return Promise.resolve(response);
    } else {
        return Promise.reject(response);
    }
}

function json(response) {
    return response.json();
}

function catchs(err) {
    Rd.message(err.status + '错误！' + err.statusText)
}
export function getfetch(url, param) {
    let params = urlEncode(param)
    let Request = {}
    Request.credentials = 'include'
    Request.headers = {
        'token': localStorage.token
    }
    return fetch(url + '?' + params, Request)
        .then(status)
        .then(json)
        .catch(catchs)
}

export function postfetch(url, datas, param) {
    var data = new FormData();
    for (var i in datas) {
        data.append(i, datas[i])
    }
    let params = urlEncode(param)
    let Request = {}
    Request.method = 'POST'
    Request.body = data
    Request.headers = {
        'token': localStorage.token
    }
    return fetch(url + '?' + params, Request)
        .then(status)
        .then(json)
        .catch(catchs)
}

export function getfetch2(url, query = {}) {
    return new Promise(function (resolve, reject) {
        request
            .get(url)
            .query(query)
            // .set('Content-Type', 'application/json; charset=utf-8')
            .set('token', localStorage.token)
            .end(function (err, res) {
                if (res.ok) {
                    if (res.headers.token) {
                        localStorage.token = res.headers.token
                    }
                    resolve(JSON.parse(res.text))
                } else {
                    reject(err.response);
                }
            })
    }).catch(catchs2);
}

export function postfetch2(url, data = {}, query = {}, ) {
    return new Promise(function (resolve, reject) {
        request
            .post(url)
            .query(query)
            // .set('Content-Type', 'application/json; charset=utf-8')
            .set('token', localStorage.token)
            .send(data)
            .end(function (err, res) {
                if (res.ok) {
                    if (res.headers.token) {
                        localStorage.token = res.headers.token
                    }
                    resolve(JSON.parse(res.text))
                } else {
                    reject(err.response);
                }
            })
    }).catch(catchs2);
}

function catchs2(err) {
    try {
        let req = JSON.parse(err.text)
        Rd.message(err.status + '错误！' + req.error)
    } catch (err) {
        Rd.message(err.status + '错误！' + err.text)
    }
}