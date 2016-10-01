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

function catchs(err) {
    console.log(err);
    // window.history.back()
    Rd.message(err.status + '错误！' + err.text)
}

export function getfetch2(url, query = {}) {
    return new Promise(function (resolve, reject) {
        request
            .get(url)
            .query(query)
            .end(function (err, res) {
                if (res.status == 200) {
                    resolve(JSON.parse(res.text))
                } else {
                    reject(err.response);
                }
            })
    }).catch(catchs);
}

export function postfetch(url, query = {}, data = {}) {
    return new Promise(function (resolve, reject) {
        request
            .post(url)
            .query(query)
            .send(data)
            .end(function (err, res) {
                if (res.status == 200) {
                    resolve(JSON.parse(res.text))
                } else {
                    reject(err.response);
                }
            })
    }).catch(catchs);
}


function status(response) {
    if (response.status == 200) {
        return Promise.resolve(response);
    } else {
        return Promise.reject(new Error(response));
    }
}

function json(response) {
    return response.json();
}

export function getfetch(url, param) {
    let params = urlEncode(param)
    return fetch(url + '?' + params, {
            credentials: "include"
        })
        .then(status)
        .then(json)
        .catch(catchs)
}

export function postfetch2(url, datas, param) {
    var data = new FormData();
    for (var i in datas) {
        data.append(i, datas[i])
    }
    let params = urlEncode(param)
    return fetch(url + '?' + params, {
            credentials: "include",
            body: data
        })
        .then(status)
        .then(json)
        .catch(catchs)
}