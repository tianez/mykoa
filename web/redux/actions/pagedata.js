'use strict'

//列表分页数据
export function pagedata(data) {
    store.dispatch({ type: 'pagedata', data });
}