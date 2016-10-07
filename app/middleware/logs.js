'use strict'

const log = async(ctx, next) => {
    const start = new Date().getTime(); // 当前时间
    console.log('--> ' + ctx.request.method + ' ' + ctx.request.url);
    await next(); // 调用下一个middleware
    const ms = new Date().getTime() - start; // 耗费时间
    console.log('<-- ' + ctx.request.method + ' ' + ctx.request.url + '  ' + ms + 'ms');
    // console.log(`Time: ${ms}ms`); // 打印耗费时间
}

module.exports = log;