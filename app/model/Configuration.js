'use strict'
let Configuration = {
    // 添加时间戳属性 (updatedAt, createdAt)
    timestamps: true,
    // 不使用驼峰式命令规则，这样会在使用下划线分隔
    // 这样 updatedAt 的字段名会是 updated_at
    underscored: true,
    // 不从数据库中删除数据，而只是增加一个 deletedAt 标识当前时间
    // paranoid 属性只在启用 timestamps 时适用
    // paranoid: true,
    defaultScope: {
        order: [
            ['id', 'ASC'],
        ]
    }
}

module.exports = Configuration