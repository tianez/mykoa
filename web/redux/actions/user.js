'use strict'

export function user(data) {
    store.dispatch({
        type: 'user',
        data
    });
}

export function getuser() {
    getfetch("admin/user", function (res) {
        console.log(res);
        user(res)
    })
}