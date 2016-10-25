import { createStore, applyMiddleware,compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import rootReducer from '../reducers'

// import thunk from './middleware/thunk'
import DevTools from '../containers/dev'

const enhancer = compose(
  //你要使用的中间件，放在前面
  // applyMiddleware(thunk),
  //必须的！启用带有monitors（监视显示）的DevTools
  DevTools.instrument()
)


export default function configureStore(initialState) {
    const store = createStore(
        rootReducer,
        initialState,
        enhancer
        // applyMiddleware(thunkMiddleware, createLogger())
        // applyMiddleware(thunkMiddleware)
    )
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers').default
      store.replaceReducer(nextReducer)
    })
  }

  return store
}

