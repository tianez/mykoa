require('fetch-ie8');

const React = require('react');
const render = require('react-dom').render;
const Provider = require('react-redux').Provider;
const App = require('./containers/App');

import { createStore, applyMiddleware,compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from './reducers'

import DevTools from './containers/dev';
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
    // window.document.title = state.config.title
})
  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const nextReducer = require('./reducers').default
      store.replaceReducer(nextReducer)
    })
  }


render(
  <Provider store={store}>
  <div>
       <App />
      <DevTools />
    </div>
  </Provider>,
  document.getElementById('app')
)
