'use strict'

const fs = require('fs');
const path = require('path');
const mime = require('mime');
const moment = require('moment')

module.exports = async function postUpload(ctx, next) {
    // let floder = __dirname + './../../../uploads/'
    let floder = path.resolve('../uploads');
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
        let filepath = floder + '/' + ext
        if (!fs.existsSync(filepath)) {
            await fs.mkdir(filepath);
        }
        let ctime = moment().format("/YYYYMMDD/")
        filepath += ctime
        if (!fs.existsSync(filepath)) {
            await fs.mkdir(filepath);
        }
        console.log(filepath);
        let is = fs.createReadStream(files[i].path);
        let os = fs.createWriteStream(filepath + files[i].name);
        is.pipe(os);
        is.on('end', function () {
            fs.unlinkSync(files[i].path);
        });
        r.name = files[i].name
        r.size = files[i].size
        r.ext = ext
        r.lastModifiedDate = files[i].lastModifiedDate
        r.path = 'http://localhost:4000/uploads/' + ext + ctime + files[i].name
        console.log(r);
        res.push(r)
    }
    let f = {
        "success": true,
        "msg": "上传成功！",
        "file_path": res[0].path
    }
    ctx.body = JSON.stringify(f)
}