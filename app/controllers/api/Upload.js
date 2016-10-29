'use strict'

const fs = require('fs');
const mime = require('mime');
const moment = require('moment')

module.exports = async function postUpload(ctx, next) {
    let floder = __dirname + './../../uploads/'
    console.log(floder);
    if (!fs.existsSync(floder)) {
        await fs.mkdir(floder);
    }
    let files = ctx.request.fields.upfile
    let res = []
    for (let i in files) {
        if (files[i].size == 0) {
            return
        }
        let r = {}
        let ext = mime.extension(files[i].type);
        let path = floder + ext
        if (!fs.existsSync(path)) {
            await fs.mkdir(path);
        }
        path += moment().format("/YYYYMMDD/")
        if (!fs.existsSync(path)) {
            await fs.mkdir(path);
        }
        let is = fs.createReadStream(files[i].path);
        let os = fs.createWriteStream(path + files[i].name);
        is.pipe(os);
        is.on('end', function () {
            fs.unlinkSync(files[i].path);
        });
        r.name = files[i].name
        r.size = files[i].size
        r.ext = ext
        r.lastModifiedDate = files[i].lastModifiedDate
        r.path = path + files[i].name
        console.log(r);
        res.push(r)
    }
    ctx.body = JSON.stringify(res)
}