'use strict'
var mysql = require('mysql');
const mysqls = {
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'koa',
    prefix: 'db_'
}
var pool = mysql.createPool(mysqls);

function Db(table) {
    this.querys = ' ';
    this.files = ' * ';
    this.search = '';
    this.p = 0;
    this.limits = 10;
    this.datasheet = mysqls.prefix + table + ' ';
};


Db.prototype.table = function (table) {
    this.datasheet = mysqls.prefix + table + ' ';
    return this;
}

Db.prototype.where = function (where) {
    this.search = ' WHERE ';
    if ('string' == typeof where) {
        this.search = this.search + where + ' ';
    } else if ('object' == typeof where) {
        var s = '';
        for (var key in where) {
            s = s + key + '=' + where[key] + ' and ';
        }
        this.search = this.search + s.substr(0, s.length - 4);
    }
    return this;
}

Db.prototype.page = function (page) {
    if (page != undefined) {
        this.p = page;
    }
    return this;
}

Db.prototype.limit = function (limit) {
    this.limits = limit;
    return this;
}

Db.prototype.orderby = function (orderby) {
    this.query = this.query + orderby;
    return this;
}

Db.prototype.get = function (cb) {
    this.querys = "SELECT" + this.files + "FROM " + this.datasheet + this.search;
    this.pages = "limit " + this.limits * this.p + " , " + this.limits;
    this.querys = this.querys + this.pages;
    return this.query(cb);
}

Db.prototype.add = function (data, cb) {
    var f = "";
    var v = "";
    for (var key in data) {
        f = f + key + ',';
        v = v + "'" + data[key] + "',";
    }
    f = f.substr(0, f.length - 1);
    v = v.substr(0, v.length - 1);
    this.querys = " INSERT INTO " + this.datasheet + " ( " + f + " ) " + " VALUES (" + v + ")";
    return this.query(cb);
}

Db.prototype.insert = function (data, cb) {
    this.query = "INSERT INTO " + this.datasheet + this.files + " VALUES ('Gates', 'Bill', 'Xuanwumen 10', 'Beijing')";
    return this.query(cb);
}

Db.prototype.update = function (data, cb) {
    var i = '';
    for (var key in data) {
        console.log(key);
        i = key + "= '" + data[key] + "',";
    }
    i += "updated_at = " + new Date()
    this.querys = "UPDATE " + this.datasheet + " SET " + i + this.search;
    return this.query(cb);
}

Db.prototype.delete = function (cb) {
    this.querys = "DELETE FROM " + this.datasheet + this.search;
    return this.query(cb);
}

Db.prototype.query = function (data) {
    let query
    let cb
    if (data && 'string' == typeof data) {
        query = data
    } else if (data && 'function' == typeof data) {
        query = this.querys + ';';
        cb = data
    } else {
        query = this.querys + ';';
    }
    return new Promise(function (resolve, reject) {
            console.log(query);
            pool.getConnection(function (err, connection) {
                connection.query(query, function (err, res) {
                    if (err) {
                        reject(err)
                    }
                    if (cb) {
                        cb(res)
                    }
                    resolve(res)
                    connection.release();
                    console.log("查询到" + res.length + "条结果");
                });
            });
        })
        .catch(function (err) {
            throw new Error(err);
        });
}

module.exports = Db;