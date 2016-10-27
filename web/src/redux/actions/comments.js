'use strict'

//评论管理
export function comments(comments) {
    store.dispatch({ type: 'comments', comments });
}

export function comment(comment) {
    comment.type = 'comment'
    store.dispatch(comment);
}

