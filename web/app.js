require('fetch-ie8');
require('./lib/global');

// const React = require('react');
// const render = require('react-dom').render;

import './less/style.less' //webpack编译时导入
import {
    Provider,
    connect
} from 'react-redux'

import {
    createStore,
    applyMiddleware,
    compose
} from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from './redux/reducer'

import DevTools from './lib/DevTools';
const enhancer = compose(

    DevTools.instrument()
)
let createStoreWithLog = applyMiddleware(thunkMiddleware)(createStore);
window.store = createStoreWithLog(
    rootReducer,
    enhancer
)
store.subscribe(() => {
    let state = store.getState()
    console.log(state);
    window.document.title = state.config.title
})
if (module.hot) {
    module.hot.accept('./redux/reducer', () => {
        const nextReducer = require('./redux/reducer').default
        store.replaceReducer(nextReducer)
    })
}

window.connect = connect
window.Rd = require('./redux/actions')
const routers = require('./lib/router')

ReactDOM.render(React.createElement(Provider, {
            store: store
        },
        React.createElement('div', {},
            routers,
            React.createElement(DevTools)
        )
    ),
    document.getElementById('app')
)