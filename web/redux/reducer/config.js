'use strict'

function clone(myObj) {
    if (typeof (myObj) != 'object') return myObj;
    if (myObj == null) return myObj;
    var myNewObj = new Object();
    for (var i in myObj)
        myNewObj[i] = clone(myObj[i]);
    return myNewObj;
}

let init = {
    show: 0,
    login: false,
    islogin: false,
    login_title: '登陆',
    title: 'My React'
}

export function config(state = init, action) {
    switch (action.type) {
        case 'config':
            let config = clone(state)
            config[action.name] = action.value
            return config
        default:
            return state;
    }
}