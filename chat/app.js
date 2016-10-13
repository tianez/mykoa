'use strict'

import {
    createStore
} from 'redux';
import {
    Provider,
    connect
} from 'react-redux'

window.connect = connect

import reducer from './redux/reducer';

window.Rd = require('./redux/actions')

window.request = superagent

import Home from './react/home';

let initialState = {
    config: {
        show: 0,
        login: false,
        islogin: (localStorage.username && localStorage.username != 'undefined') ? true : false,
        login_title: '登陆',
        number: 0
    }
}

window.store = createStore(reducer, initialState);
store.subscribe(() =>
    console.log(store.getState())
);

function mapStateToProps(state) {
    return state
}

const App = connect(mapStateToProps)(Home)

ReactDOM.render(
    React.createElement(Provider, {
            store: store
        },
        React.createElement(App)
    ),
    document.getElementById('app')
);