require('fetch-ie8');
require('./global')
    // window.React = require('react');
    // const ReactDOM = require('react-dom');
import './less/style.less' //webpack编译时导入

import {
    createStore,
    applyMiddleware,
    compose
} from 'redux'
import {
    Provider,
    connect
} from 'react-redux'
import thunkMiddleware from 'redux-thunk'

import reducer from './redux/reducer';
import DevTools from './lib/DevTools'
const enhancer = compose(
    DevTools.instrument()
)
let createStoreWithLog = applyMiddleware(thunkMiddleware)(createStore);
window.store = createStoreWithLog(
    reducer,
    enhancer
)
store.subscribe(() => {
    let state = store.getState()
    console.log(state);
    window.document.title = state.config.title
})
if (module.hot) {
    module
        .hot
        .accept('./redux/reducer', () => {
            const nextReducer = require('./redux/reducer').default
            store.replaceReducer(nextReducer)
        })
}

window.connect = connect
window.Rd = require('./redux/actions')

const routers = require('./lib/router')

ReactDOM.render( <
    Provider store = {
        store
    } >
    <
    div > {
        routers
    } <
    DevTools / >
    <
    /div> <
    /Provider>,
    document.getElementById('app')
)

// ReactDOM.render(React.createElement(Provider, {
//             store: store
//         }, 
//         React.createElement('div', {},
//             routers,
//             React.createElement(DevTools)
//         )
//     ),
//     document.getElementById('app')
// )