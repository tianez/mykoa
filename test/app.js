'use strict'

require('./global')
 
//应用中间件
import {
    createStore,
    applyMiddleware
} from 'redux'
import reducer from './redux/reducer';
import thunk from 'redux-thunk'
import log from './redux/middleware';
let createStoreWithLog = applyMiddleware(thunk)(createStore);
window.store = createStoreWithLog(reducer)
store.subscribe(() => {
    let state = store.getState()
    console.log(state);
    window.document.title = state.config.title
})

import {
    Provider,
    connect
} from 'react-redux'

window.connect = connect
window.Rd = require('./redux/actions')

const routers = require('./router')

function render() {
    ReactDOM.render(
        React.createElement(Provider, {
                store: store
            },
            routers),
        document.getElementById('app')
    )
}

render() 

// function Init() {
//     getfetch(curl + "api")
//         .then(function (res) {
//             if (res) {
//                 Rd.config('token', res.token)
//             } else {
//                 Rd.config('token', null)
//             }
//             render()
//         }).catch(function (err) {
//             console.log("Fetch错误:" + err);
//         });
// }

// Init()