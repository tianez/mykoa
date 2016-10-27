'use strict'

export function user(data) {
    store.dispatch({
        type: 'user',
        data
    });
}

export function getuser() {
    Rd.message(111111)
    setTimeout(function(){
        Rd.message(22222222222222)
    },3000)
    // getfetch("admin/user", function (res) {
    //     console.log(res);
        
    //     user(res)
    // })
}