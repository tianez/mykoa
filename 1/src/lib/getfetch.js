'use strict'

export function getfetch(url, query = {}) {
    return new Promise(function (resolve, reject) {
        request
            .get(curl + url)
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
    }).catch(catchs);
}

export function postfetch(url, data = {}, query = {}, ) {
    return new Promise(function (resolve, reject) {
        request
            .post(curl + url)
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
    }).catch(catchs);
}

function catchs(err) {
    try {
        let req = JSON.parse(err.text)
        if(err.status==403){
            localStorage.token = null
        }
        Rd.message(err.status + '错误！' + req.error)
    } catch (err) {
        Rd.message(err.status + '错误！' + err.text)
    }
}