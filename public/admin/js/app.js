/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// const React = require('react');
	// const ReactDOM = require('react-dom');
	// const ReactRouter = require('react-router');
	// import './less/style.less' //webpack编译时导入

	var _redux = __webpack_require__(1);

	var _reducer = __webpack_require__(16);

	var _reducer2 = _interopRequireDefault(_reducer);

	var _reduxThunk = __webpack_require__(27);

	var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

	var _middleware = __webpack_require__(28);

	var _middleware2 = _interopRequireDefault(_middleware);

	var _reactRedux = __webpack_require__(29);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	__webpack_require__(70);

	//应用中间件

	var createStoreWithLog = (0, _redux.applyMiddleware)(_reduxThunk2.default)(_redux.createStore);
	window.store = createStoreWithLog(_reducer2.default);
	store.subscribe(function () {
	    var state = store.getState();
	    console.log(state);

	    window.document.title = state.config.title;
	});

	window.connect = _reactRedux.connect;
	window.Rd = __webpack_require__(77);

	var routers = __webpack_require__(83);

	function render() {
	    ReactDOM.render(React.createElement(_reactRedux.Provider, {
	        store: store
	    }, routers), document.getElementById('app'));
	}

	function Init() {
	    getfetch("api").then(function (res) {
	        if (res) {
	            Rd.config('token', res.token);
	        } else {
	            Rd.config('token', null);
	        }
	        render();
	    }).catch(function (err) {
	        console.log("Fetch错误:" + err);
	    });
	}

	Init();

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;
	exports.compose = exports.applyMiddleware = exports.bindActionCreators = exports.combineReducers = exports.createStore = undefined;

	var _createStore = __webpack_require__(3);

	var _createStore2 = _interopRequireDefault(_createStore);

	var _combineReducers = __webpack_require__(11);

	var _combineReducers2 = _interopRequireDefault(_combineReducers);

	var _bindActionCreators = __webpack_require__(13);

	var _bindActionCreators2 = _interopRequireDefault(_bindActionCreators);

	var _applyMiddleware = __webpack_require__(14);

	var _applyMiddleware2 = _interopRequireDefault(_applyMiddleware);

	var _compose = __webpack_require__(15);

	var _compose2 = _interopRequireDefault(_compose);

	var _warning = __webpack_require__(12);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}

	/*
	* This is a dummy function to check if the function name has been altered by minification.
	* If the function has been minified and NODE_ENV !== 'production', warn the user.
	*/
	function isCrushed() {}

	if (process.env.NODE_ENV !== 'production' && typeof isCrushed.name === 'string' && isCrushed.name !== 'isCrushed') {
	  (0, _warning2['default'])('You are currently using minified code outside of NODE_ENV === \'production\'. ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or DefinePlugin for webpack (http://stackoverflow.com/questions/30030031) ' + 'to ensure you have the correct code for your production build.');
	}

	exports.createStore = _createStore2['default'];
	exports.combineReducers = _combineReducers2['default'];
	exports.bindActionCreators = _bindActionCreators2['default'];
	exports.applyMiddleware = _applyMiddleware2['default'];
	exports.compose = _compose2['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	// shim for using process in browser
	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout() {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	})();
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch (e) {
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch (e) {
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e) {
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e) {
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while (len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () {
	    return '/';
	};
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function () {
	    return 0;
	};

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	exports.__esModule = true;
	exports.ActionTypes = undefined;
	exports['default'] = createStore;

	var _isPlainObject = __webpack_require__(4);

	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

	var _symbolObservable = __webpack_require__(8);

	var _symbolObservable2 = _interopRequireDefault(_symbolObservable);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}

	/**
	 * These are private action types reserved by Redux.
	 * For any unknown actions, you must return the current state.
	 * If the current state is undefined, you must return the initial state.
	 * Do not reference these action types directly in your code.
	 */
	var ActionTypes = exports.ActionTypes = {
	  INIT: '@@redux/INIT'
	};

	/**
	 * Creates a Redux store that holds the state tree.
	 * The only way to change the data in the store is to call `dispatch()` on it.
	 *
	 * There should only be a single store in your app. To specify how different
	 * parts of the state tree respond to actions, you may combine several reducers
	 * into a single reducer function by using `combineReducers`.
	 *
	 * @param {Function} reducer A function that returns the next state tree, given
	 * the current state tree and the action to handle.
	 *
	 * @param {any} [preloadedState] The initial state. You may optionally specify it
	 * to hydrate the state from the server in universal apps, or to restore a
	 * previously serialized user session.
	 * If you use `combineReducers` to produce the root reducer function, this must be
	 * an object with the same shape as `combineReducers` keys.
	 *
	 * @param {Function} enhancer The store enhancer. You may optionally specify it
	 * to enhance the store with third-party capabilities such as middleware,
	 * time travel, persistence, etc. The only store enhancer that ships with Redux
	 * is `applyMiddleware()`.
	 *
	 * @returns {Store} A Redux store that lets you read the state, dispatch actions
	 * and subscribe to changes.
	 */
	function createStore(reducer, preloadedState, enhancer) {
	  var _ref2;

	  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
	    enhancer = preloadedState;
	    preloadedState = undefined;
	  }

	  if (typeof enhancer !== 'undefined') {
	    if (typeof enhancer !== 'function') {
	      throw new Error('Expected the enhancer to be a function.');
	    }

	    return enhancer(createStore)(reducer, preloadedState);
	  }

	  if (typeof reducer !== 'function') {
	    throw new Error('Expected the reducer to be a function.');
	  }

	  var currentReducer = reducer;
	  var currentState = preloadedState;
	  var currentListeners = [];
	  var nextListeners = currentListeners;
	  var isDispatching = false;

	  function ensureCanMutateNextListeners() {
	    if (nextListeners === currentListeners) {
	      nextListeners = currentListeners.slice();
	    }
	  }

	  /**
	   * Reads the state tree managed by the store.
	   *
	   * @returns {any} The current state tree of your application.
	   */
	  function getState() {
	    return currentState;
	  }

	  /**
	   * Adds a change listener. It will be called any time an action is dispatched,
	   * and some part of the state tree may potentially have changed. You may then
	   * call `getState()` to read the current state tree inside the callback.
	   *
	   * You may call `dispatch()` from a change listener, with the following
	   * caveats:
	   *
	   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
	   * If you subscribe or unsubscribe while the listeners are being invoked, this
	   * will not have any effect on the `dispatch()` that is currently in progress.
	   * However, the next `dispatch()` call, whether nested or not, will use a more
	   * recent snapshot of the subscription list.
	   *
	   * 2. The listener should not expect to see all state changes, as the state
	   * might have been updated multiple times during a nested `dispatch()` before
	   * the listener is called. It is, however, guaranteed that all subscribers
	   * registered before the `dispatch()` started will be called with the latest
	   * state by the time it exits.
	   *
	   * @param {Function} listener A callback to be invoked on every dispatch.
	   * @returns {Function} A function to remove this change listener.
	   */
	  function subscribe(listener) {
	    if (typeof listener !== 'function') {
	      throw new Error('Expected listener to be a function.');
	    }

	    var isSubscribed = true;

	    ensureCanMutateNextListeners();
	    nextListeners.push(listener);

	    return function unsubscribe() {
	      if (!isSubscribed) {
	        return;
	      }

	      isSubscribed = false;

	      ensureCanMutateNextListeners();
	      var index = nextListeners.indexOf(listener);
	      nextListeners.splice(index, 1);
	    };
	  }

	  /**
	   * Dispatches an action. It is the only way to trigger a state change.
	   *
	   * The `reducer` function, used to create the store, will be called with the
	   * current state tree and the given `action`. Its return value will
	   * be considered the **next** state of the tree, and the change listeners
	   * will be notified.
	   *
	   * The base implementation only supports plain object actions. If you want to
	   * dispatch a Promise, an Observable, a thunk, or something else, you need to
	   * wrap your store creating function into the corresponding middleware. For
	   * example, see the documentation for the `redux-thunk` package. Even the
	   * middleware will eventually dispatch plain object actions using this method.
	   *
	   * @param {Object} action A plain object representing “what changed”. It is
	   * a good idea to keep actions serializable so you can record and replay user
	   * sessions, or use the time travelling `redux-devtools`. An action must have
	   * a `type` property which may not be `undefined`. It is a good idea to use
	   * string constants for action types.
	   *
	   * @returns {Object} For convenience, the same action object you dispatched.
	   *
	   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
	   * return something else (for example, a Promise you can await).
	   */
	  function dispatch(action) {
	    if (!(0, _isPlainObject2['default'])(action)) {
	      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
	    }

	    if (typeof action.type === 'undefined') {
	      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
	    }

	    if (isDispatching) {
	      throw new Error('Reducers may not dispatch actions.');
	    }

	    try {
	      isDispatching = true;
	      currentState = currentReducer(currentState, action);
	    } finally {
	      isDispatching = false;
	    }

	    var listeners = currentListeners = nextListeners;
	    for (var i = 0; i < listeners.length; i++) {
	      listeners[i]();
	    }

	    return action;
	  }

	  /**
	   * Replaces the reducer currently used by the store to calculate the state.
	   *
	   * You might need this if your app implements code splitting and you want to
	   * load some of the reducers dynamically. You might also need this if you
	   * implement a hot reloading mechanism for Redux.
	   *
	   * @param {Function} nextReducer The reducer for the store to use instead.
	   * @returns {void}
	   */
	  function replaceReducer(nextReducer) {
	    if (typeof nextReducer !== 'function') {
	      throw new Error('Expected the nextReducer to be a function.');
	    }

	    currentReducer = nextReducer;
	    dispatch({ type: ActionTypes.INIT });
	  }

	  /**
	   * Interoperability point for observable/reactive libraries.
	   * @returns {observable} A minimal observable of state changes.
	   * For more information, see the observable proposal:
	   * https://github.com/zenparsing/es-observable
	   */
	  function observable() {
	    var _ref;

	    var outerSubscribe = subscribe;
	    return _ref = {
	      /**
	       * The minimal observable subscription method.
	       * @param {Object} observer Any object that can be used as an observer.
	       * The observer object should have a `next` method.
	       * @returns {subscription} An object with an `unsubscribe` method that can
	       * be used to unsubscribe the observable from the store, and prevent further
	       * emission of values from the observable.
	       */
	      subscribe: function subscribe(observer) {
	        if ((typeof observer === 'undefined' ? 'undefined' : _typeof(observer)) !== 'object') {
	          throw new TypeError('Expected the observer to be an object.');
	        }

	        function observeState() {
	          if (observer.next) {
	            observer.next(getState());
	          }
	        }

	        observeState();
	        var unsubscribe = outerSubscribe(observeState);
	        return { unsubscribe: unsubscribe };
	      }
	    }, _ref[_symbolObservable2['default']] = function () {
	      return this;
	    }, _ref;
	  }

	  // When a store is created, an "INIT" action is dispatched so that every
	  // reducer returns their initial state. This effectively populates
	  // the initial state tree.
	  dispatch({ type: ActionTypes.INIT });

	  return _ref2 = {
	    dispatch: dispatch,
	    subscribe: subscribe,
	    getState: getState,
	    replaceReducer: replaceReducer
	  }, _ref2[_symbolObservable2['default']] = observable, _ref2;
	}

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var getPrototype = __webpack_require__(5),
	    isObjectLike = __webpack_require__(7);

	/** `Object#toString` result references. */
	var objectTag = '[object Object]';

	/** Used for built-in method references. */
	var funcProto = Function.prototype,
	    objectProto = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/** Used to infer the `Object` constructor. */
	var objectCtorString = funcToString.call(Object);

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/**
	 * Checks if `value` is a plain object, that is, an object created by the
	 * `Object` constructor or one with a `[[Prototype]]` of `null`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.8.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 * }
	 *
	 * _.isPlainObject(new Foo);
	 * // => false
	 *
	 * _.isPlainObject([1, 2, 3]);
	 * // => false
	 *
	 * _.isPlainObject({ 'x': 0, 'y': 0 });
	 * // => true
	 *
	 * _.isPlainObject(Object.create(null));
	 * // => true
	 */
	function isPlainObject(value) {
	  if (!isObjectLike(value) || objectToString.call(value) != objectTag) {
	    return false;
	  }
	  var proto = getPrototype(value);
	  if (proto === null) {
	    return true;
	  }
	  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
	  return typeof Ctor == 'function' && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
	}

	module.exports = isPlainObject;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var overArg = __webpack_require__(6);

	/** Built-in value references. */
	var getPrototype = overArg(Object.getPrototypeOf, Object);

	module.exports = getPrototype;

/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";

	/**
	 * Creates a unary function that invokes `func` with its argument transformed.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {Function} transform The argument transform.
	 * @returns {Function} Returns the new function.
	 */
	function overArg(func, transform) {
	  return function (arg) {
	    return func(transform(arg));
	  };
	}

	module.exports = overArg;

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return value != null && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'object';
	}

	module.exports = isObjectLike;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(9);

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _ponyfill = __webpack_require__(10);

	var _ponyfill2 = _interopRequireDefault(_ponyfill);

	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : { 'default': obj };
	}

	var root = undefined; /* global window */

	if (typeof global !== 'undefined') {
		root = global;
	} else if (typeof window !== 'undefined') {
		root = window;
	}

	var result = (0, _ponyfill2['default'])(root);
	exports['default'] = result;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 10 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports['default'] = symbolObservablePonyfill;
	function symbolObservablePonyfill(root) {
		var result;
		var _Symbol = root.Symbol;

		if (typeof _Symbol === 'function') {
			if (_Symbol.observable) {
				result = _Symbol.observable;
			} else {
				result = _Symbol('observable');
				_Symbol.observable = result;
			}
		} else {
			result = '@@observable';
		}

		return result;
	};

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;
	exports['default'] = combineReducers;

	var _createStore = __webpack_require__(3);

	var _isPlainObject = __webpack_require__(4);

	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

	var _warning = __webpack_require__(12);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}

	function getUndefinedStateErrorMessage(key, action) {
	  var actionType = action && action.type;
	  var actionName = actionType && '"' + actionType.toString() + '"' || 'an action';

	  return 'Given action ' + actionName + ', reducer "' + key + '" returned undefined. ' + 'To ignore an action, you must explicitly return the previous state.';
	}

	function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
	  var reducerKeys = Object.keys(reducers);
	  var argumentName = action && action.type === _createStore.ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

	  if (reducerKeys.length === 0) {
	    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
	  }

	  if (!(0, _isPlainObject2['default'])(inputState)) {
	    return 'The ' + argumentName + ' has unexpected type of "' + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + '". Expected argument to be an object with the following ' + ('keys: "' + reducerKeys.join('", "') + '"');
	  }

	  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
	    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
	  });

	  unexpectedKeys.forEach(function (key) {
	    unexpectedKeyCache[key] = true;
	  });

	  if (unexpectedKeys.length > 0) {
	    return 'Unexpected ' + (unexpectedKeys.length > 1 ? 'keys' : 'key') + ' ' + ('"' + unexpectedKeys.join('", "') + '" found in ' + argumentName + '. ') + 'Expected to find one of the known reducer keys instead: ' + ('"' + reducerKeys.join('", "') + '". Unexpected keys will be ignored.');
	  }
	}

	function assertReducerSanity(reducers) {
	  Object.keys(reducers).forEach(function (key) {
	    var reducer = reducers[key];
	    var initialState = reducer(undefined, { type: _createStore.ActionTypes.INIT });

	    if (typeof initialState === 'undefined') {
	      throw new Error('Reducer "' + key + '" returned undefined during initialization. ' + 'If the state passed to the reducer is undefined, you must ' + 'explicitly return the initial state. The initial state may ' + 'not be undefined.');
	    }

	    var type = '@@redux/PROBE_UNKNOWN_ACTION_' + Math.random().toString(36).substring(7).split('').join('.');
	    if (typeof reducer(undefined, { type: type }) === 'undefined') {
	      throw new Error('Reducer "' + key + '" returned undefined when probed with a random type. ' + ('Don\'t try to handle ' + _createStore.ActionTypes.INIT + ' or other actions in "redux/*" ') + 'namespace. They are considered private. Instead, you must return the ' + 'current state for any unknown actions, unless it is undefined, ' + 'in which case you must return the initial state, regardless of the ' + 'action type. The initial state may not be undefined.');
	    }
	  });
	}

	/**
	 * Turns an object whose values are different reducer functions, into a single
	 * reducer function. It will call every child reducer, and gather their results
	 * into a single state object, whose keys correspond to the keys of the passed
	 * reducer functions.
	 *
	 * @param {Object} reducers An object whose values correspond to different
	 * reducer functions that need to be combined into one. One handy way to obtain
	 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
	 * undefined for any action. Instead, they should return their initial state
	 * if the state passed to them was undefined, and the current state for any
	 * unrecognized action.
	 *
	 * @returns {Function} A reducer function that invokes every reducer inside the
	 * passed object, and builds a state object with the same shape.
	 */
	function combineReducers(reducers) {
	  var reducerKeys = Object.keys(reducers);
	  var finalReducers = {};
	  for (var i = 0; i < reducerKeys.length; i++) {
	    var key = reducerKeys[i];

	    if (process.env.NODE_ENV !== 'production') {
	      if (typeof reducers[key] === 'undefined') {
	        (0, _warning2['default'])('No reducer provided for key "' + key + '"');
	      }
	    }

	    if (typeof reducers[key] === 'function') {
	      finalReducers[key] = reducers[key];
	    }
	  }
	  var finalReducerKeys = Object.keys(finalReducers);

	  if (process.env.NODE_ENV !== 'production') {
	    var unexpectedKeyCache = {};
	  }

	  var sanityError;
	  try {
	    assertReducerSanity(finalReducers);
	  } catch (e) {
	    sanityError = e;
	  }

	  return function combination() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var action = arguments[1];

	    if (sanityError) {
	      throw sanityError;
	    }

	    if (process.env.NODE_ENV !== 'production') {
	      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);
	      if (warningMessage) {
	        (0, _warning2['default'])(warningMessage);
	      }
	    }

	    var hasChanged = false;
	    var nextState = {};
	    for (var i = 0; i < finalReducerKeys.length; i++) {
	      var key = finalReducerKeys[i];
	      var reducer = finalReducers[key];
	      var previousStateForKey = state[key];
	      var nextStateForKey = reducer(previousStateForKey, action);
	      if (typeof nextStateForKey === 'undefined') {
	        var errorMessage = getUndefinedStateErrorMessage(key, action);
	        throw new Error(errorMessage);
	      }
	      nextState[key] = nextStateForKey;
	      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
	    }
	    return hasChanged ? nextState : state;
	  };
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 12 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = warning;
	/**
	 * Prints a warning in the console if it exists.
	 *
	 * @param {String} message The warning message.
	 * @returns {void}
	 */
	function warning(message) {
	  /* eslint-disable no-console */
	  if (typeof console !== 'undefined' && typeof console.error === 'function') {
	    console.error(message);
	  }
	  /* eslint-enable no-console */
	  try {
	    // This error was thrown as a convenience so that if you enable
	    // "break on all exceptions" in your console,
	    // it would pause the execution at this line.
	    throw new Error(message);
	    /* eslint-disable no-empty */
	  } catch (e) {}
	  /* eslint-enable no-empty */
	}

/***/ },
/* 13 */
/***/ function(module, exports) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	exports.__esModule = true;
	exports['default'] = bindActionCreators;
	function bindActionCreator(actionCreator, dispatch) {
	  return function () {
	    return dispatch(actionCreator.apply(undefined, arguments));
	  };
	}

	/**
	 * Turns an object whose values are action creators, into an object with the
	 * same keys, but with every function wrapped into a `dispatch` call so they
	 * may be invoked directly. This is just a convenience method, as you can call
	 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
	 *
	 * For convenience, you can also pass a single function as the first argument,
	 * and get a function in return.
	 *
	 * @param {Function|Object} actionCreators An object whose values are action
	 * creator functions. One handy way to obtain it is to use ES6 `import * as`
	 * syntax. You may also pass a single function.
	 *
	 * @param {Function} dispatch The `dispatch` function available on your Redux
	 * store.
	 *
	 * @returns {Function|Object} The object mimicking the original object, but with
	 * every action creator wrapped into the `dispatch` call. If you passed a
	 * function as `actionCreators`, the return value will also be a single
	 * function.
	 */
	function bindActionCreators(actionCreators, dispatch) {
	  if (typeof actionCreators === 'function') {
	    return bindActionCreator(actionCreators, dispatch);
	  }

	  if ((typeof actionCreators === 'undefined' ? 'undefined' : _typeof(actionCreators)) !== 'object' || actionCreators === null) {
	    throw new Error('bindActionCreators expected an object or a function, instead received ' + (actionCreators === null ? 'null' : typeof actionCreators === 'undefined' ? 'undefined' : _typeof(actionCreators)) + '. ' + 'Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
	  }

	  var keys = Object.keys(actionCreators);
	  var boundActionCreators = {};
	  for (var i = 0; i < keys.length; i++) {
	    var key = keys[i];
	    var actionCreator = actionCreators[key];
	    if (typeof actionCreator === 'function') {
	      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
	    }
	  }
	  return boundActionCreators;
	}

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};

	exports['default'] = applyMiddleware;

	var _compose = __webpack_require__(15);

	var _compose2 = _interopRequireDefault(_compose);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}

	/**
	 * Creates a store enhancer that applies middleware to the dispatch method
	 * of the Redux store. This is handy for a variety of tasks, such as expressing
	 * asynchronous actions in a concise manner, or logging every action payload.
	 *
	 * See `redux-thunk` package as an example of the Redux middleware.
	 *
	 * Because middleware is potentially asynchronous, this should be the first
	 * store enhancer in the composition chain.
	 *
	 * Note that each middleware will be given the `dispatch` and `getState` functions
	 * as named arguments.
	 *
	 * @param {...Function} middlewares The middleware chain to be applied.
	 * @returns {Function} A store enhancer applying the middleware.
	 */
	function applyMiddleware() {
	  for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
	    middlewares[_key] = arguments[_key];
	  }

	  return function (createStore) {
	    return function (reducer, preloadedState, enhancer) {
	      var store = createStore(reducer, preloadedState, enhancer);
	      var _dispatch = store.dispatch;
	      var chain = [];

	      var middlewareAPI = {
	        getState: store.getState,
	        dispatch: function dispatch(action) {
	          return _dispatch(action);
	        }
	      };
	      chain = middlewares.map(function (middleware) {
	        return middleware(middlewareAPI);
	      });
	      _dispatch = _compose2['default'].apply(undefined, chain)(store.dispatch);

	      return _extends({}, store, {
	        dispatch: _dispatch
	      });
	    };
	  };
	}

/***/ },
/* 15 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports["default"] = compose;
	/**
	 * Composes single-argument functions from right to left. The rightmost
	 * function can take multiple arguments as it provides the signature for
	 * the resulting composite function.
	 *
	 * @param {...Function} funcs The functions to compose.
	 * @returns {Function} A function obtained by composing the argument functions
	 * from right to left. For example, compose(f, g, h) is identical to doing
	 * (...args) => f(g(h(...args))).
	 */

	function compose() {
	  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
	    funcs[_key] = arguments[_key];
	  }

	  if (funcs.length === 0) {
	    return function (arg) {
	      return arg;
	    };
	  }

	  if (funcs.length === 1) {
	    return funcs[0];
	  }

	  var last = funcs[funcs.length - 1];
	  var rest = funcs.slice(0, -1);
	  return function () {
	    return rest.reduceRight(function (composed, f) {
	      return f(composed);
	    }, last.apply(undefined, arguments));
	  };
	}

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _redux = __webpack_require__(1);

	var _reactRouterRedux = __webpack_require__(17);

	var _config = __webpack_require__(22);

	var _user = __webpack_require__(23);

	var _comments = __webpack_require__(24);

	var _pagedata = __webpack_require__(25);

	var _message = __webpack_require__(26);

	var reducer = (0, _redux.combineReducers)({
	    config: _config.config,
	    user: _user.user,
	    comments: _comments.comments,
	    pagedata: _pagedata.pagedata,
	    message: _message.message,
	    routing: _reactRouterRedux.routerReducer
	});

	exports.default = reducer;

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.routerMiddleware = exports.routerActions = exports.goForward = exports.goBack = exports.go = exports.replace = exports.push = exports.CALL_HISTORY_METHOD = exports.routerReducer = exports.LOCATION_CHANGE = exports.syncHistoryWithStore = undefined;

	var _reducer = __webpack_require__(18);

	Object.defineProperty(exports, 'LOCATION_CHANGE', {
	  enumerable: true,
	  get: function get() {
	    return _reducer.LOCATION_CHANGE;
	  }
	});
	Object.defineProperty(exports, 'routerReducer', {
	  enumerable: true,
	  get: function get() {
	    return _reducer.routerReducer;
	  }
	});

	var _actions = __webpack_require__(19);

	Object.defineProperty(exports, 'CALL_HISTORY_METHOD', {
	  enumerable: true,
	  get: function get() {
	    return _actions.CALL_HISTORY_METHOD;
	  }
	});
	Object.defineProperty(exports, 'push', {
	  enumerable: true,
	  get: function get() {
	    return _actions.push;
	  }
	});
	Object.defineProperty(exports, 'replace', {
	  enumerable: true,
	  get: function get() {
	    return _actions.replace;
	  }
	});
	Object.defineProperty(exports, 'go', {
	  enumerable: true,
	  get: function get() {
	    return _actions.go;
	  }
	});
	Object.defineProperty(exports, 'goBack', {
	  enumerable: true,
	  get: function get() {
	    return _actions.goBack;
	  }
	});
	Object.defineProperty(exports, 'goForward', {
	  enumerable: true,
	  get: function get() {
	    return _actions.goForward;
	  }
	});
	Object.defineProperty(exports, 'routerActions', {
	  enumerable: true,
	  get: function get() {
	    return _actions.routerActions;
	  }
	});

	var _sync = __webpack_require__(20);

	var _sync2 = _interopRequireDefault(_sync);

	var _middleware = __webpack_require__(21);

	var _middleware2 = _interopRequireDefault(_middleware);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}

	exports.syncHistoryWithStore = _sync2['default'];
	exports.routerMiddleware = _middleware2['default'];

/***/ },
/* 18 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};

	exports.routerReducer = routerReducer;
	/**
	 * This action type will be dispatched when your history
	 * receives a location change.
	 */
	var LOCATION_CHANGE = exports.LOCATION_CHANGE = '@@router/LOCATION_CHANGE';

	var initialState = {
	  locationBeforeTransitions: null
	};

	/**
	 * This reducer will update the state with the most recent location history
	 * has transitioned to. This may not be in sync with the router, particularly
	 * if you have asynchronously-loaded routes, so reading from and relying on
	 * this state is discouraged.
	 */
	function routerReducer() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];

	  var _ref = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	  var type = _ref.type;
	  var payload = _ref.payload;

	  if (type === LOCATION_CHANGE) {
	    return _extends({}, state, { locationBeforeTransitions: payload });
	  }

	  return state;
	}

/***/ },
/* 19 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * This action type will be dispatched by the history actions below.
	 * If you're writing a middleware to watch for navigation events, be sure to
	 * look for actions of this type.
	 */
	var CALL_HISTORY_METHOD = exports.CALL_HISTORY_METHOD = '@@router/CALL_HISTORY_METHOD';

	function updateLocation(method) {
	  return function () {
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return {
	      type: CALL_HISTORY_METHOD,
	      payload: { method: method, args: args }
	    };
	  };
	}

	/**
	 * These actions correspond to the history API.
	 * The associated routerMiddleware will capture these events before they get to
	 * your reducer and reissue them as the matching function on your history.
	 */
	var push = exports.push = updateLocation('push');
	var replace = exports.replace = updateLocation('replace');
	var go = exports.go = updateLocation('go');
	var goBack = exports.goBack = updateLocation('goBack');
	var goForward = exports.goForward = updateLocation('goForward');

	var routerActions = exports.routerActions = { push: push, replace: replace, go: go, goBack: goBack, goForward: goForward };

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};

	exports['default'] = syncHistoryWithStore;

	var _reducer = __webpack_require__(18);

	var defaultSelectLocationState = function defaultSelectLocationState(state) {
	  return state.routing;
	};

	/**
	 * This function synchronizes your history state with the Redux store.
	 * Location changes flow from history to the store. An enhanced history is
	 * returned with a listen method that responds to store updates for location.
	 *
	 * When this history is provided to the router, this means the location data
	 * will flow like this:
	 * history.push -> store.dispatch -> enhancedHistory.listen -> router
	 * This ensures that when the store state changes due to a replay or other
	 * event, the router will be updated appropriately and can transition to the
	 * correct router state.
	 */
	function syncHistoryWithStore(history, store) {
	  var _ref = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

	  var _ref$selectLocationSt = _ref.selectLocationState;
	  var selectLocationState = _ref$selectLocationSt === undefined ? defaultSelectLocationState : _ref$selectLocationSt;
	  var _ref$adjustUrlOnRepla = _ref.adjustUrlOnReplay;
	  var adjustUrlOnReplay = _ref$adjustUrlOnRepla === undefined ? true : _ref$adjustUrlOnRepla;

	  // Ensure that the reducer is mounted on the store and functioning properly.
	  if (typeof selectLocationState(store.getState()) === 'undefined') {
	    throw new Error('Expected the routing state to be available either as `state.routing` ' + 'or as the custom expression you can specify as `selectLocationState` ' + 'in the `syncHistoryWithStore()` options. ' + 'Ensure you have added the `routerReducer` to your store\'s ' + 'reducers via `combineReducers` or whatever method you use to isolate ' + 'your reducers.');
	  }

	  var initialLocation = void 0;
	  var isTimeTraveling = void 0;
	  var unsubscribeFromStore = void 0;
	  var unsubscribeFromHistory = void 0;
	  var currentLocation = void 0;

	  // What does the store say about current location?
	  var getLocationInStore = function getLocationInStore(useInitialIfEmpty) {
	    var locationState = selectLocationState(store.getState());
	    return locationState.locationBeforeTransitions || (useInitialIfEmpty ? initialLocation : undefined);
	  };

	  // Init initialLocation with potential location in store
	  initialLocation = getLocationInStore();

	  // If the store is replayed, update the URL in the browser to match.
	  if (adjustUrlOnReplay) {
	    var handleStoreChange = function handleStoreChange() {
	      var locationInStore = getLocationInStore(true);
	      if (currentLocation === locationInStore || initialLocation === locationInStore) {
	        return;
	      }

	      // Update address bar to reflect store state
	      isTimeTraveling = true;
	      currentLocation = locationInStore;
	      history.transitionTo(_extends({}, locationInStore, {
	        action: 'PUSH'
	      }));
	      isTimeTraveling = false;
	    };

	    unsubscribeFromStore = store.subscribe(handleStoreChange);
	    handleStoreChange();
	  }

	  // Whenever location changes, dispatch an action to get it in the store
	  var handleLocationChange = function handleLocationChange(location) {
	    // ... unless we just caused that location change
	    if (isTimeTraveling) {
	      return;
	    }

	    // Remember where we are
	    currentLocation = location;

	    // Are we being called for the first time?
	    if (!initialLocation) {
	      // Remember as a fallback in case state is reset
	      initialLocation = location;

	      // Respect persisted location, if any
	      if (getLocationInStore()) {
	        return;
	      }
	    }

	    // Tell the store to update by dispatching an action
	    store.dispatch({
	      type: _reducer.LOCATION_CHANGE,
	      payload: location
	    });
	  };
	  unsubscribeFromHistory = history.listen(handleLocationChange);

	  // The enhanced history uses store as source of truth
	  return _extends({}, history, {
	    // The listeners are subscribed to the store instead of history
	    listen: function listen(listener) {
	      // Copy of last location.
	      var lastPublishedLocation = getLocationInStore(true);

	      // Keep track of whether we unsubscribed, as Redux store
	      // only applies changes in subscriptions on next dispatch
	      var unsubscribed = false;
	      var unsubscribeFromStore = store.subscribe(function () {
	        var currentLocation = getLocationInStore(true);
	        if (currentLocation === lastPublishedLocation) {
	          return;
	        }
	        lastPublishedLocation = currentLocation;
	        if (!unsubscribed) {
	          listener(lastPublishedLocation);
	        }
	      });

	      // History listeners expect a synchronous call. Make the first call to the
	      // listener after subscribing to the store, in case the listener causes a
	      // location change (e.g. when it redirects)
	      listener(lastPublishedLocation);

	      // Let user unsubscribe later
	      return function () {
	        unsubscribed = true;
	        unsubscribeFromStore();
	      };
	    },

	    // It also provides a way to destroy internal listeners
	    unsubscribe: function unsubscribe() {
	      if (adjustUrlOnReplay) {
	        unsubscribeFromStore();
	      }
	      unsubscribeFromHistory();
	    }
	  });
	}

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports['default'] = routerMiddleware;

	var _actions = __webpack_require__(19);

	function _toConsumableArray(arr) {
	  if (Array.isArray(arr)) {
	    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
	      arr2[i] = arr[i];
	    }return arr2;
	  } else {
	    return Array.from(arr);
	  }
	}

	/**
	 * This middleware captures CALL_HISTORY_METHOD actions to redirect to the
	 * provided history object. This will prevent these actions from reaching your
	 * reducer or any middleware that comes after this one.
	 */
	function routerMiddleware(history) {
	  return function () {
	    return function (next) {
	      return function (action) {
	        if (action.type !== _actions.CALL_HISTORY_METHOD) {
	          return next(action);
	        }

	        var _action$payload = action.payload;
	        var method = _action$payload.method;
	        var args = _action$payload.args;

	        history[method].apply(history, _toConsumableArray(args));
	      };
	    };
	  };
	}

/***/ },
/* 22 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	exports.config = config;
	function clone(myObj) {
	    if ((typeof myObj === 'undefined' ? 'undefined' : _typeof(myObj)) != 'object') return myObj;
	    if (myObj == null) return myObj;
	    var myNewObj = new Object();
	    for (var i in myObj) {
	        myNewObj[i] = clone(myObj[i]);
	    }return myNewObj;
	}

	var init = {
	    show: 0,
	    login: false,
	    islogin: false,
	    login_title: '登陆',
	    title: 'My React'
	};

	function config() {
	    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : init;
	    var action = arguments[1];

	    switch (action.type) {
	        case 'config':
	            var _config = clone(state);
	            _config[action.name] = action.value;
	            return _config;
	        default:
	            return state;
	    }
	}

/***/ },
/* 23 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.user = user;
	function user() {
	    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	    var action = arguments[1];

	    switch (action.type) {
	        case 'user':
	            return action.data;
	        default:
	            return state;
	    }
	}

/***/ },
/* 24 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.comments = comments;

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	function comments() {
	    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	    var action = arguments[1];

	    switch (action.type) {
	        case 'comment':
	            return [action].concat(_toConsumableArray(state));
	        case 'comments':
	            return action.comments;
	        default:
	            return state;
	    }
	}

/***/ },
/* 25 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.pagedata = pagedata;
	var init = {
	    pages: {
	        total: 0,
	        last_page: 0,
	        current_page: 1
	    }
	};

	function pagedata() {
	    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : init;
	    var action = arguments[1];

	    switch (action.type) {
	        case 'pagedata':
	            return action.data;
	        default:
	            return state;
	    }
	}

/***/ },
/* 26 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.message = message;
	function message() {
	    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
	    var action = arguments[1];

	    switch (action.type) {
	        case 'message':
	            return {
	                msg: action.data,
	                time: new Date()
	            };
	        default:
	            return state;
	    }
	}

/***/ },
/* 27 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	function createThunkMiddleware(extraArgument) {
	  return function (_ref) {
	    var dispatch = _ref.dispatch;
	    var getState = _ref.getState;
	    return function (next) {
	      return function (action) {
	        if (typeof action === 'function') {
	          return action(dispatch, getState, extraArgument);
	        }

	        return next(action);
	      };
	    };
	  };
	}

	var thunk = createThunkMiddleware();
	thunk.withExtraArgument = createThunkMiddleware;

	exports['default'] = thunk;

/***/ },
/* 28 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	exports.default = function (_ref) {
	    var getState = _ref.getState;
	    var dispatch = _ref.dispatch;

	    return function (next) {
	        return function (action) {
	            console.log('pre', getState());
	            // 调用 middleware 链中下一个 middleware 的 dispatch。
	            next(action);
	            console.log('after', getState());
	        };
	    };
	};

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.connect = exports.Provider = undefined;

	var _Provider = __webpack_require__(30);

	var _Provider2 = _interopRequireDefault(_Provider);

	var _connect = __webpack_require__(65);

	var _connect2 = _interopRequireDefault(_connect);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { "default": obj };
	}

	exports.Provider = _Provider2["default"];
	exports.connect = _connect2["default"];

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	exports.__esModule = true;
	exports["default"] = undefined;

	var _react = __webpack_require__(31);

	var _storeShape = __webpack_require__(63);

	var _storeShape2 = _interopRequireDefault(_storeShape);

	var _warning = __webpack_require__(64);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { "default": obj };
	}

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	var didWarnAboutReceivingStore = false;
	function warnAboutReceivingStore() {
	  if (didWarnAboutReceivingStore) {
	    return;
	  }
	  didWarnAboutReceivingStore = true;

	  (0, _warning2["default"])('<Provider> does not support changing `store` on the fly. ' + 'It is most likely that you see this error because you updated to ' + 'Redux 2.x and React Redux 2.x which no longer hot reload reducers ' + 'automatically. See https://github.com/reactjs/react-redux/releases/' + 'tag/v2.0.0 for the migration instructions.');
	}

	var Provider = function (_Component) {
	  _inherits(Provider, _Component);

	  Provider.prototype.getChildContext = function getChildContext() {
	    return { store: this.store };
	  };

	  function Provider(props, context) {
	    _classCallCheck(this, Provider);

	    var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

	    _this.store = props.store;
	    return _this;
	  }

	  Provider.prototype.render = function render() {
	    var children = this.props.children;

	    return _react.Children.only(children);
	  };

	  return Provider;
	}(_react.Component);

	exports["default"] = Provider;

	if (process.env.NODE_ENV !== 'production') {
	  Provider.prototype.componentWillReceiveProps = function (nextProps) {
	    var store = this.store;
	    var nextStore = nextProps.store;

	    if (store !== nextStore) {
	      warnAboutReceivingStore();
	    }
	  };
	}

	Provider.propTypes = {
	  store: _storeShape2["default"].isRequired,
	  children: _react.PropTypes.element.isRequired
	};
	Provider.childContextTypes = {
	  store: _storeShape2["default"].isRequired
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(32);

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule React
	 */

	'use strict';

	var _assign = __webpack_require__(33);

	var ReactChildren = __webpack_require__(34);
	var ReactComponent = __webpack_require__(46);
	var ReactPureComponent = __webpack_require__(49);
	var ReactClass = __webpack_require__(50);
	var ReactDOMFactories = __webpack_require__(55);
	var ReactElement = __webpack_require__(38);
	var ReactPropTypes = __webpack_require__(60);
	var ReactVersion = __webpack_require__(61);

	var onlyChild = __webpack_require__(62);
	var warning = __webpack_require__(40);

	var createElement = ReactElement.createElement;
	var createFactory = ReactElement.createFactory;
	var cloneElement = ReactElement.cloneElement;

	if (process.env.NODE_ENV !== 'production') {
	  var ReactElementValidator = __webpack_require__(56);
	  createElement = ReactElementValidator.createElement;
	  createFactory = ReactElementValidator.createFactory;
	  cloneElement = ReactElementValidator.cloneElement;
	}

	var __spread = _assign;

	if (process.env.NODE_ENV !== 'production') {
	  var warned = false;
	  __spread = function __spread() {
	    process.env.NODE_ENV !== 'production' ? warning(warned, 'React.__spread is deprecated and should not be used. Use ' + 'Object.assign directly or another helper function with similar ' + 'semantics. You may be seeing this warning due to your compiler. ' + 'See https://fb.me/react-spread-deprecation for more details.') : void 0;
	    warned = true;
	    return _assign.apply(null, arguments);
	  };
	}

	var React = {

	  // Modern

	  Children: {
	    map: ReactChildren.map,
	    forEach: ReactChildren.forEach,
	    count: ReactChildren.count,
	    toArray: ReactChildren.toArray,
	    only: onlyChild
	  },

	  Component: ReactComponent,
	  PureComponent: ReactPureComponent,

	  createElement: createElement,
	  cloneElement: cloneElement,
	  isValidElement: ReactElement.isValidElement,

	  // Classic

	  PropTypes: ReactPropTypes,
	  createClass: ReactClass.createClass,
	  createFactory: createFactory,
	  createMixin: function createMixin(mixin) {
	    // Currently a noop. Will be used to validate and trace mixins.
	    return mixin;
	  },

	  // This looks DOM specific but these are actually isomorphic helpers
	  // since they are just generating DOM strings.
	  DOM: ReactDOMFactories,

	  version: ReactVersion,

	  // Deprecated hook for JSX spread, don't use this for anything.
	  __spread: __spread
	};

	module.exports = React;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 33 */
/***/ function(module, exports) {

	'use strict';
	/* eslint-disable no-unused-vars */

	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}

			// Detect buggy property enumeration order in older V8 versions.

			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc'); // eslint-disable-line
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
				return false;
			}

			return true;
		} catch (e) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}

	module.exports = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;

		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);

			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}

			if (Object.getOwnPropertySymbols) {
				symbols = Object.getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}

		return to;
	};

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactChildren
	 */

	'use strict';

	var PooledClass = __webpack_require__(35);
	var ReactElement = __webpack_require__(38);

	var emptyFunction = __webpack_require__(41);
	var traverseAllChildren = __webpack_require__(43);

	var twoArgumentPooler = PooledClass.twoArgumentPooler;
	var fourArgumentPooler = PooledClass.fourArgumentPooler;

	var userProvidedKeyEscapeRegex = /\/+/g;
	function escapeUserProvidedKey(text) {
	  return ('' + text).replace(userProvidedKeyEscapeRegex, '$&/');
	}

	/**
	 * PooledClass representing the bookkeeping associated with performing a child
	 * traversal. Allows avoiding binding callbacks.
	 *
	 * @constructor ForEachBookKeeping
	 * @param {!function} forEachFunction Function to perform traversal with.
	 * @param {?*} forEachContext Context to perform context with.
	 */
	function ForEachBookKeeping(forEachFunction, forEachContext) {
	  this.func = forEachFunction;
	  this.context = forEachContext;
	  this.count = 0;
	}
	ForEachBookKeeping.prototype.destructor = function () {
	  this.func = null;
	  this.context = null;
	  this.count = 0;
	};
	PooledClass.addPoolingTo(ForEachBookKeeping, twoArgumentPooler);

	function forEachSingleChild(bookKeeping, child, name) {
	  var func = bookKeeping.func;
	  var context = bookKeeping.context;

	  func.call(context, child, bookKeeping.count++);
	}

	/**
	 * Iterates through children that are typically specified as `props.children`.
	 *
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.foreach
	 *
	 * The provided forEachFunc(child, index) will be called for each
	 * leaf child.
	 *
	 * @param {?*} children Children tree container.
	 * @param {function(*, int)} forEachFunc
	 * @param {*} forEachContext Context for forEachContext.
	 */
	function forEachChildren(children, forEachFunc, forEachContext) {
	  if (children == null) {
	    return children;
	  }
	  var traverseContext = ForEachBookKeeping.getPooled(forEachFunc, forEachContext);
	  traverseAllChildren(children, forEachSingleChild, traverseContext);
	  ForEachBookKeeping.release(traverseContext);
	}

	/**
	 * PooledClass representing the bookkeeping associated with performing a child
	 * mapping. Allows avoiding binding callbacks.
	 *
	 * @constructor MapBookKeeping
	 * @param {!*} mapResult Object containing the ordered map of results.
	 * @param {!function} mapFunction Function to perform mapping with.
	 * @param {?*} mapContext Context to perform mapping with.
	 */
	function MapBookKeeping(mapResult, keyPrefix, mapFunction, mapContext) {
	  this.result = mapResult;
	  this.keyPrefix = keyPrefix;
	  this.func = mapFunction;
	  this.context = mapContext;
	  this.count = 0;
	}
	MapBookKeeping.prototype.destructor = function () {
	  this.result = null;
	  this.keyPrefix = null;
	  this.func = null;
	  this.context = null;
	  this.count = 0;
	};
	PooledClass.addPoolingTo(MapBookKeeping, fourArgumentPooler);

	function mapSingleChildIntoContext(bookKeeping, child, childKey) {
	  var result = bookKeeping.result;
	  var keyPrefix = bookKeeping.keyPrefix;
	  var func = bookKeeping.func;
	  var context = bookKeeping.context;

	  var mappedChild = func.call(context, child, bookKeeping.count++);
	  if (Array.isArray(mappedChild)) {
	    mapIntoWithKeyPrefixInternal(mappedChild, result, childKey, emptyFunction.thatReturnsArgument);
	  } else if (mappedChild != null) {
	    if (ReactElement.isValidElement(mappedChild)) {
	      mappedChild = ReactElement.cloneAndReplaceKey(mappedChild,
	      // Keep both the (mapped) and old keys if they differ, just as
	      // traverseAllChildren used to do for objects as children
	      keyPrefix + (mappedChild.key && (!child || child.key !== mappedChild.key) ? escapeUserProvidedKey(mappedChild.key) + '/' : '') + childKey);
	    }
	    result.push(mappedChild);
	  }
	}

	function mapIntoWithKeyPrefixInternal(children, array, prefix, func, context) {
	  var escapedPrefix = '';
	  if (prefix != null) {
	    escapedPrefix = escapeUserProvidedKey(prefix) + '/';
	  }
	  var traverseContext = MapBookKeeping.getPooled(array, escapedPrefix, func, context);
	  traverseAllChildren(children, mapSingleChildIntoContext, traverseContext);
	  MapBookKeeping.release(traverseContext);
	}

	/**
	 * Maps children that are typically specified as `props.children`.
	 *
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.map
	 *
	 * The provided mapFunction(child, key, index) will be called for each
	 * leaf child.
	 *
	 * @param {?*} children Children tree container.
	 * @param {function(*, int)} func The map function.
	 * @param {*} context Context for mapFunction.
	 * @return {object} Object containing the ordered map of results.
	 */
	function mapChildren(children, func, context) {
	  if (children == null) {
	    return children;
	  }
	  var result = [];
	  mapIntoWithKeyPrefixInternal(children, result, null, func, context);
	  return result;
	}

	function forEachSingleChildDummy(traverseContext, child, name) {
	  return null;
	}

	/**
	 * Count the number of children that are typically specified as
	 * `props.children`.
	 *
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.count
	 *
	 * @param {?*} children Children tree container.
	 * @return {number} The number of children.
	 */
	function countChildren(children, context) {
	  return traverseAllChildren(children, forEachSingleChildDummy, null);
	}

	/**
	 * Flatten a children object (typically specified as `props.children`) and
	 * return an array with appropriately re-keyed children.
	 *
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.toarray
	 */
	function toArray(children) {
	  var result = [];
	  mapIntoWithKeyPrefixInternal(children, result, null, emptyFunction.thatReturnsArgument);
	  return result;
	}

	var ReactChildren = {
	  forEach: forEachChildren,
	  map: mapChildren,
	  mapIntoWithKeyPrefixInternal: mapIntoWithKeyPrefixInternal,
	  count: countChildren,
	  toArray: toArray
	};

	module.exports = ReactChildren;

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule PooledClass
	 */

	'use strict';

	var _prodInvariant = __webpack_require__(36);

	var invariant = __webpack_require__(37);

	/**
	 * Static poolers. Several custom versions for each potential number of
	 * arguments. A completely generic pooler is easy to implement, but would
	 * require accessing the `arguments` object. In each of these, `this` refers to
	 * the Class itself, not an instance. If any others are needed, simply add them
	 * here, or in their own files.
	 */
	var oneArgumentPooler = function oneArgumentPooler(copyFieldsFrom) {
	  var Klass = this;
	  if (Klass.instancePool.length) {
	    var instance = Klass.instancePool.pop();
	    Klass.call(instance, copyFieldsFrom);
	    return instance;
	  } else {
	    return new Klass(copyFieldsFrom);
	  }
	};

	var twoArgumentPooler = function twoArgumentPooler(a1, a2) {
	  var Klass = this;
	  if (Klass.instancePool.length) {
	    var instance = Klass.instancePool.pop();
	    Klass.call(instance, a1, a2);
	    return instance;
	  } else {
	    return new Klass(a1, a2);
	  }
	};

	var threeArgumentPooler = function threeArgumentPooler(a1, a2, a3) {
	  var Klass = this;
	  if (Klass.instancePool.length) {
	    var instance = Klass.instancePool.pop();
	    Klass.call(instance, a1, a2, a3);
	    return instance;
	  } else {
	    return new Klass(a1, a2, a3);
	  }
	};

	var fourArgumentPooler = function fourArgumentPooler(a1, a2, a3, a4) {
	  var Klass = this;
	  if (Klass.instancePool.length) {
	    var instance = Klass.instancePool.pop();
	    Klass.call(instance, a1, a2, a3, a4);
	    return instance;
	  } else {
	    return new Klass(a1, a2, a3, a4);
	  }
	};

	var fiveArgumentPooler = function fiveArgumentPooler(a1, a2, a3, a4, a5) {
	  var Klass = this;
	  if (Klass.instancePool.length) {
	    var instance = Klass.instancePool.pop();
	    Klass.call(instance, a1, a2, a3, a4, a5);
	    return instance;
	  } else {
	    return new Klass(a1, a2, a3, a4, a5);
	  }
	};

	var standardReleaser = function standardReleaser(instance) {
	  var Klass = this;
	  !(instance instanceof Klass) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Trying to release an instance into a pool of a different type.') : _prodInvariant('25') : void 0;
	  instance.destructor();
	  if (Klass.instancePool.length < Klass.poolSize) {
	    Klass.instancePool.push(instance);
	  }
	};

	var DEFAULT_POOL_SIZE = 10;
	var DEFAULT_POOLER = oneArgumentPooler;

	/**
	 * Augments `CopyConstructor` to be a poolable class, augmenting only the class
	 * itself (statically) not adding any prototypical fields. Any CopyConstructor
	 * you give this may have a `poolSize` property, and will look for a
	 * prototypical `destructor` on instances.
	 *
	 * @param {Function} CopyConstructor Constructor that can be used to reset.
	 * @param {Function} pooler Customizable pooler.
	 */
	var addPoolingTo = function addPoolingTo(CopyConstructor, pooler) {
	  var NewKlass = CopyConstructor;
	  NewKlass.instancePool = [];
	  NewKlass.getPooled = pooler || DEFAULT_POOLER;
	  if (!NewKlass.poolSize) {
	    NewKlass.poolSize = DEFAULT_POOL_SIZE;
	  }
	  NewKlass.release = standardReleaser;
	  return NewKlass;
	};

	var PooledClass = {
	  addPoolingTo: addPoolingTo,
	  oneArgumentPooler: oneArgumentPooler,
	  twoArgumentPooler: twoArgumentPooler,
	  threeArgumentPooler: threeArgumentPooler,
	  fourArgumentPooler: fourArgumentPooler,
	  fiveArgumentPooler: fiveArgumentPooler
	};

	module.exports = PooledClass;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 36 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule reactProdInvariant
	 * 
	 */
	'use strict';

	/**
	 * WARNING: DO NOT manually require this module.
	 * This is a replacement for `invariant(...)` used by the error code system
	 * and will _only_ be required by the corresponding babel pass.
	 * It always throws.
	 */

	function reactProdInvariant(code) {
	  var argCount = arguments.length - 1;

	  var message = 'Minified React error #' + code + '; visit ' + 'http://facebook.github.io/react/docs/error-decoder.html?invariant=' + code;

	  for (var argIdx = 0; argIdx < argCount; argIdx++) {
	    message += '&args[]=' + encodeURIComponent(arguments[argIdx + 1]);
	  }

	  message += ' for the full message or use the non-minified dev environment' + ' for full errors and additional helpful warnings.';

	  var error = new Error(message);
	  error.name = 'Invariant Violation';
	  error.framesToPop = 1; // we don't care about reactProdInvariant's own frame

	  throw error;
	}

	module.exports = reactProdInvariant;

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */

	function invariant(condition, format, a, b, c, d, e, f) {
	  if (process.env.NODE_ENV !== 'production') {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  }

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(format.replace(/%s/g, function () {
	        return args[argIndex++];
	      }));
	      error.name = 'Invariant Violation';
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	}

	module.exports = invariant;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2014-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactElement
	 */

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _assign = __webpack_require__(33);

	var ReactCurrentOwner = __webpack_require__(39);

	var warning = __webpack_require__(40);
	var canDefineProperty = __webpack_require__(42);
	var hasOwnProperty = Object.prototype.hasOwnProperty;

	// The Symbol used to tag the ReactElement type. If there is no native Symbol
	// nor polyfill, then a plain number is used for performance.
	var REACT_ELEMENT_TYPE = typeof Symbol === 'function' && Symbol['for'] && Symbol['for']('react.element') || 0xeac7;

	var RESERVED_PROPS = {
	  key: true,
	  ref: true,
	  __self: true,
	  __source: true
	};

	var specialPropKeyWarningShown, specialPropRefWarningShown;

	function hasValidRef(config) {
	  if (process.env.NODE_ENV !== 'production') {
	    if (hasOwnProperty.call(config, 'ref')) {
	      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;
	      if (getter && getter.isReactWarning) {
	        return false;
	      }
	    }
	  }
	  return config.ref !== undefined;
	}

	function hasValidKey(config) {
	  if (process.env.NODE_ENV !== 'production') {
	    if (hasOwnProperty.call(config, 'key')) {
	      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;
	      if (getter && getter.isReactWarning) {
	        return false;
	      }
	    }
	  }
	  return config.key !== undefined;
	}

	function defineKeyPropWarningGetter(props, displayName) {
	  var warnAboutAccessingKey = function warnAboutAccessingKey() {
	    if (!specialPropKeyWarningShown) {
	      specialPropKeyWarningShown = true;
	      process.env.NODE_ENV !== 'production' ? warning(false, '%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName) : void 0;
	    }
	  };
	  warnAboutAccessingKey.isReactWarning = true;
	  Object.defineProperty(props, 'key', {
	    get: warnAboutAccessingKey,
	    configurable: true
	  });
	}

	function defineRefPropWarningGetter(props, displayName) {
	  var warnAboutAccessingRef = function warnAboutAccessingRef() {
	    if (!specialPropRefWarningShown) {
	      specialPropRefWarningShown = true;
	      process.env.NODE_ENV !== 'production' ? warning(false, '%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName) : void 0;
	    }
	  };
	  warnAboutAccessingRef.isReactWarning = true;
	  Object.defineProperty(props, 'ref', {
	    get: warnAboutAccessingRef,
	    configurable: true
	  });
	}

	/**
	 * Factory method to create a new React element. This no longer adheres to
	 * the class pattern, so do not use new to call it. Also, no instanceof check
	 * will work. Instead test $$typeof field against Symbol.for('react.element') to check
	 * if something is a React Element.
	 *
	 * @param {*} type
	 * @param {*} key
	 * @param {string|object} ref
	 * @param {*} self A *temporary* helper to detect places where `this` is
	 * different from the `owner` when React.createElement is called, so that we
	 * can warn. We want to get rid of owner and replace string `ref`s with arrow
	 * functions, and as long as `this` and owner are the same, there will be no
	 * change in behavior.
	 * @param {*} source An annotation object (added by a transpiler or otherwise)
	 * indicating filename, line number, and/or other information.
	 * @param {*} owner
	 * @param {*} props
	 * @internal
	 */
	var ReactElement = function ReactElement(type, key, ref, self, source, owner, props) {
	  var element = {
	    // This tag allow us to uniquely identify this as a React Element
	    $$typeof: REACT_ELEMENT_TYPE,

	    // Built-in properties that belong on the element
	    type: type,
	    key: key,
	    ref: ref,
	    props: props,

	    // Record the component responsible for creating this element.
	    _owner: owner
	  };

	  if (process.env.NODE_ENV !== 'production') {
	    // The validation flag is currently mutative. We put it on
	    // an external backing store so that we can freeze the whole object.
	    // This can be replaced with a WeakMap once they are implemented in
	    // commonly used development environments.
	    element._store = {};
	    var shadowChildren = Array.isArray(props.children) ? props.children.slice(0) : props.children;

	    // To make comparing ReactElements easier for testing purposes, we make
	    // the validation flag non-enumerable (where possible, which should
	    // include every environment we run tests in), so the test framework
	    // ignores it.
	    if (canDefineProperty) {
	      Object.defineProperty(element._store, 'validated', {
	        configurable: false,
	        enumerable: false,
	        writable: true,
	        value: false
	      });
	      // self and source are DEV only properties.
	      Object.defineProperty(element, '_self', {
	        configurable: false,
	        enumerable: false,
	        writable: false,
	        value: self
	      });
	      Object.defineProperty(element, '_shadowChildren', {
	        configurable: false,
	        enumerable: false,
	        writable: false,
	        value: shadowChildren
	      });
	      // Two elements created in two different places should be considered
	      // equal for testing purposes and therefore we hide it from enumeration.
	      Object.defineProperty(element, '_source', {
	        configurable: false,
	        enumerable: false,
	        writable: false,
	        value: source
	      });
	    } else {
	      element._store.validated = false;
	      element._self = self;
	      element._shadowChildren = shadowChildren;
	      element._source = source;
	    }
	    if (Object.freeze) {
	      Object.freeze(element.props);
	      Object.freeze(element);
	    }
	  }

	  return element;
	};

	/**
	 * Create and return a new ReactElement of the given type.
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.createelement
	 */
	ReactElement.createElement = function (type, config, children) {
	  var propName;

	  // Reserved names are extracted
	  var props = {};

	  var key = null;
	  var ref = null;
	  var self = null;
	  var source = null;

	  if (config != null) {
	    if (hasValidRef(config)) {
	      ref = config.ref;
	    }
	    if (hasValidKey(config)) {
	      key = '' + config.key;
	    }

	    self = config.__self === undefined ? null : config.__self;
	    source = config.__source === undefined ? null : config.__source;
	    // Remaining properties are added to a new props object
	    for (propName in config) {
	      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
	        props[propName] = config[propName];
	      }
	    }
	  }

	  // Children can be more than one argument, and those are transferred onto
	  // the newly allocated props object.
	  var childrenLength = arguments.length - 2;
	  if (childrenLength === 1) {
	    props.children = children;
	  } else if (childrenLength > 1) {
	    var childArray = Array(childrenLength);
	    for (var i = 0; i < childrenLength; i++) {
	      childArray[i] = arguments[i + 2];
	    }
	    props.children = childArray;
	  }

	  // Resolve default props
	  if (type && type.defaultProps) {
	    var defaultProps = type.defaultProps;
	    for (propName in defaultProps) {
	      if (props[propName] === undefined) {
	        props[propName] = defaultProps[propName];
	      }
	    }
	  }
	  if (process.env.NODE_ENV !== 'production') {
	    if (key || ref) {
	      if (typeof props.$$typeof === 'undefined' || props.$$typeof !== REACT_ELEMENT_TYPE) {
	        var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;
	        if (key) {
	          defineKeyPropWarningGetter(props, displayName);
	        }
	        if (ref) {
	          defineRefPropWarningGetter(props, displayName);
	        }
	      }
	    }
	  }
	  return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
	};

	/**
	 * Return a function that produces ReactElements of a given type.
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.createfactory
	 */
	ReactElement.createFactory = function (type) {
	  var factory = ReactElement.createElement.bind(null, type);
	  // Expose the type on the factory and the prototype so that it can be
	  // easily accessed on elements. E.g. `<Foo />.type === Foo`.
	  // This should not be named `constructor` since this may not be the function
	  // that created the element, and it may not even be a constructor.
	  // Legacy hook TODO: Warn if this is accessed
	  factory.type = type;
	  return factory;
	};

	ReactElement.cloneAndReplaceKey = function (oldElement, newKey) {
	  var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);

	  return newElement;
	};

	/**
	 * Clone and return a new ReactElement using element as the starting point.
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.cloneelement
	 */
	ReactElement.cloneElement = function (element, config, children) {
	  var propName;

	  // Original props are copied
	  var props = _assign({}, element.props);

	  // Reserved names are extracted
	  var key = element.key;
	  var ref = element.ref;
	  // Self is preserved since the owner is preserved.
	  var self = element._self;
	  // Source is preserved since cloneElement is unlikely to be targeted by a
	  // transpiler, and the original source is probably a better indicator of the
	  // true owner.
	  var source = element._source;

	  // Owner will be preserved, unless ref is overridden
	  var owner = element._owner;

	  if (config != null) {
	    if (hasValidRef(config)) {
	      // Silently steal the ref from the parent.
	      ref = config.ref;
	      owner = ReactCurrentOwner.current;
	    }
	    if (hasValidKey(config)) {
	      key = '' + config.key;
	    }

	    // Remaining properties override existing props
	    var defaultProps;
	    if (element.type && element.type.defaultProps) {
	      defaultProps = element.type.defaultProps;
	    }
	    for (propName in config) {
	      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
	        if (config[propName] === undefined && defaultProps !== undefined) {
	          // Resolve default props
	          props[propName] = defaultProps[propName];
	        } else {
	          props[propName] = config[propName];
	        }
	      }
	    }
	  }

	  // Children can be more than one argument, and those are transferred onto
	  // the newly allocated props object.
	  var childrenLength = arguments.length - 2;
	  if (childrenLength === 1) {
	    props.children = children;
	  } else if (childrenLength > 1) {
	    var childArray = Array(childrenLength);
	    for (var i = 0; i < childrenLength; i++) {
	      childArray[i] = arguments[i + 2];
	    }
	    props.children = childArray;
	  }

	  return ReactElement(element.type, key, ref, self, source, owner, props);
	};

	/**
	 * Verifies the object is a ReactElement.
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.isvalidelement
	 * @param {?object} object
	 * @return {boolean} True if `object` is a valid component.
	 * @final
	 */
	ReactElement.isValidElement = function (object) {
	  return (typeof object === 'undefined' ? 'undefined' : _typeof(object)) === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
	};

	ReactElement.REACT_ELEMENT_TYPE = REACT_ELEMENT_TYPE;

	module.exports = ReactElement;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 39 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactCurrentOwner
	 */

	'use strict';

	/**
	 * Keeps track of the current owner.
	 *
	 * The current owner is the component who should own any components that are
	 * currently being constructed.
	 */

	var ReactCurrentOwner = {

	  /**
	   * @internal
	   * @type {ReactComponent}
	   */
	  current: null

	};

	module.exports = ReactCurrentOwner;

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	var emptyFunction = __webpack_require__(41);

	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */

	var warning = emptyFunction;

	if (process.env.NODE_ENV !== 'production') {
	  (function () {
	    var printWarning = function printWarning(format) {
	      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        args[_key - 1] = arguments[_key];
	      }

	      var argIndex = 0;
	      var message = 'Warning: ' + format.replace(/%s/g, function () {
	        return args[argIndex++];
	      });
	      if (typeof console !== 'undefined') {
	        console.error(message);
	      }
	      try {
	        // --- Welcome to debugging React ---
	        // This error was thrown as a convenience so that you can use this stack
	        // to find the callsite that caused this warning to fire.
	        throw new Error(message);
	      } catch (x) {}
	    };

	    warning = function warning(condition, format) {
	      if (format === undefined) {
	        throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
	      }

	      if (format.indexOf('Failed Composite propType: ') === 0) {
	        return; // Ignore CompositeComponent proptype check.
	      }

	      if (!condition) {
	        for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
	          args[_key2 - 2] = arguments[_key2];
	        }

	        printWarning.apply(undefined, [format].concat(args));
	      }
	    };
	  })();
	}

	module.exports = warning;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 41 */
/***/ function(module, exports) {

	"use strict";

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */

	function makeEmptyFunction(arg) {
	  return function () {
	    return arg;
	  };
	}

	/**
	 * This function accepts and discards inputs; it has no side effects. This is
	 * primarily useful idiomatically for overridable function endpoints which
	 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
	 */
	var emptyFunction = function emptyFunction() {};

	emptyFunction.thatReturns = makeEmptyFunction;
	emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
	emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
	emptyFunction.thatReturnsNull = makeEmptyFunction(null);
	emptyFunction.thatReturnsThis = function () {
	  return this;
	};
	emptyFunction.thatReturnsArgument = function (arg) {
	  return arg;
	};

	module.exports = emptyFunction;

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule canDefineProperty
	 */

	'use strict';

	var canDefineProperty = false;
	if (process.env.NODE_ENV !== 'production') {
	  try {
	    Object.defineProperty({}, 'x', { get: function get() {} });
	    canDefineProperty = true;
	  } catch (x) {
	    // IE will fail on defineProperty
	  }
	}

	module.exports = canDefineProperty;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule traverseAllChildren
	 */

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _prodInvariant = __webpack_require__(36);

	var ReactCurrentOwner = __webpack_require__(39);
	var ReactElement = __webpack_require__(38);

	var getIteratorFn = __webpack_require__(44);
	var invariant = __webpack_require__(37);
	var KeyEscapeUtils = __webpack_require__(45);
	var warning = __webpack_require__(40);

	var SEPARATOR = '.';
	var SUBSEPARATOR = ':';

	/**
	 * TODO: Test that a single child and an array with one item have the same key
	 * pattern.
	 */

	var didWarnAboutMaps = false;

	/**
	 * Generate a key string that identifies a component within a set.
	 *
	 * @param {*} component A component that could contain a manual key.
	 * @param {number} index Index that is used if a manual key is not provided.
	 * @return {string}
	 */
	function getComponentKey(component, index) {
	  // Do some typechecking here since we call this blindly. We want to ensure
	  // that we don't block potential future ES APIs.
	  if (component && (typeof component === 'undefined' ? 'undefined' : _typeof(component)) === 'object' && component.key != null) {
	    // Explicit key
	    return KeyEscapeUtils.escape(component.key);
	  }
	  // Implicit key determined by the index in the set
	  return index.toString(36);
	}

	/**
	 * @param {?*} children Children tree container.
	 * @param {!string} nameSoFar Name of the key path so far.
	 * @param {!function} callback Callback to invoke with each child found.
	 * @param {?*} traverseContext Used to pass information throughout the traversal
	 * process.
	 * @return {!number} The number of children in this subtree.
	 */
	function traverseAllChildrenImpl(children, nameSoFar, callback, traverseContext) {
	  var type = typeof children === 'undefined' ? 'undefined' : _typeof(children);

	  if (type === 'undefined' || type === 'boolean') {
	    // All of the above are perceived as null.
	    children = null;
	  }

	  if (children === null || type === 'string' || type === 'number' || ReactElement.isValidElement(children)) {
	    callback(traverseContext, children,
	    // If it's the only child, treat the name as if it was wrapped in an array
	    // so that it's consistent if the number of children grows.
	    nameSoFar === '' ? SEPARATOR + getComponentKey(children, 0) : nameSoFar);
	    return 1;
	  }

	  var child;
	  var nextName;
	  var subtreeCount = 0; // Count of children found in the current subtree.
	  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

	  if (Array.isArray(children)) {
	    for (var i = 0; i < children.length; i++) {
	      child = children[i];
	      nextName = nextNamePrefix + getComponentKey(child, i);
	      subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
	    }
	  } else {
	    var iteratorFn = getIteratorFn(children);
	    if (iteratorFn) {
	      var iterator = iteratorFn.call(children);
	      var step;
	      if (iteratorFn !== children.entries) {
	        var ii = 0;
	        while (!(step = iterator.next()).done) {
	          child = step.value;
	          nextName = nextNamePrefix + getComponentKey(child, ii++);
	          subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
	        }
	      } else {
	        if (process.env.NODE_ENV !== 'production') {
	          var mapsAsChildrenAddendum = '';
	          if (ReactCurrentOwner.current) {
	            var mapsAsChildrenOwnerName = ReactCurrentOwner.current.getName();
	            if (mapsAsChildrenOwnerName) {
	              mapsAsChildrenAddendum = ' Check the render method of `' + mapsAsChildrenOwnerName + '`.';
	            }
	          }
	          process.env.NODE_ENV !== 'production' ? warning(didWarnAboutMaps, 'Using Maps as children is not yet fully supported. It is an ' + 'experimental feature that might be removed. Convert it to a ' + 'sequence / iterable of keyed ReactElements instead.%s', mapsAsChildrenAddendum) : void 0;
	          didWarnAboutMaps = true;
	        }
	        // Iterator will provide entry [k,v] tuples rather than values.
	        while (!(step = iterator.next()).done) {
	          var entry = step.value;
	          if (entry) {
	            child = entry[1];
	            nextName = nextNamePrefix + KeyEscapeUtils.escape(entry[0]) + SUBSEPARATOR + getComponentKey(child, 0);
	            subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
	          }
	        }
	      }
	    } else if (type === 'object') {
	      var addendum = '';
	      if (process.env.NODE_ENV !== 'production') {
	        addendum = ' If you meant to render a collection of children, use an array ' + 'instead or wrap the object using createFragment(object) from the ' + 'React add-ons.';
	        if (children._isReactElement) {
	          addendum = ' It looks like you\'re using an element created by a different ' + 'version of React. Make sure to use only one copy of React.';
	        }
	        if (ReactCurrentOwner.current) {
	          var name = ReactCurrentOwner.current.getName();
	          if (name) {
	            addendum += ' Check the render method of `' + name + '`.';
	          }
	        }
	      }
	      var childrenString = String(children);
	       true ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Objects are not valid as a React child (found: %s).%s', childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString, addendum) : _prodInvariant('31', childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString, addendum) : void 0;
	    }
	  }

	  return subtreeCount;
	}

	/**
	 * Traverses children that are typically specified as `props.children`, but
	 * might also be specified through attributes:
	 *
	 * - `traverseAllChildren(this.props.children, ...)`
	 * - `traverseAllChildren(this.props.leftPanelChildren, ...)`
	 *
	 * The `traverseContext` is an optional argument that is passed through the
	 * entire traversal. It can be used to store accumulations or anything else that
	 * the callback might find relevant.
	 *
	 * @param {?*} children Children tree object.
	 * @param {!function} callback To invoke upon traversing each child.
	 * @param {?*} traverseContext Context for traversal.
	 * @return {!number} The number of children in this subtree.
	 */
	function traverseAllChildren(children, callback, traverseContext) {
	  if (children == null) {
	    return 0;
	  }

	  return traverseAllChildrenImpl(children, '', callback, traverseContext);
	}

	module.exports = traverseAllChildren;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 44 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule getIteratorFn
	 * 
	 */

	'use strict';

	/* global Symbol */

	var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
	var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

	/**
	 * Returns the iterator method function contained on the iterable object.
	 *
	 * Be sure to invoke the function with the iterable as context:
	 *
	 *     var iteratorFn = getIteratorFn(myIterable);
	 *     if (iteratorFn) {
	 *       var iterator = iteratorFn.call(myIterable);
	 *       ...
	 *     }
	 *
	 * @param {?object} maybeIterable
	 * @return {?function}
	 */
	function getIteratorFn(maybeIterable) {
	  var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
	  if (typeof iteratorFn === 'function') {
	    return iteratorFn;
	  }
	}

	module.exports = getIteratorFn;

/***/ },
/* 45 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule KeyEscapeUtils
	 * 
	 */

	'use strict';

	/**
	 * Escape and wrap key so it is safe to use as a reactid
	 *
	 * @param {string} key to be escaped.
	 * @return {string} the escaped key.
	 */

	function escape(key) {
	  var escapeRegex = /[=:]/g;
	  var escaperLookup = {
	    '=': '=0',
	    ':': '=2'
	  };
	  var escapedString = ('' + key).replace(escapeRegex, function (match) {
	    return escaperLookup[match];
	  });

	  return '$' + escapedString;
	}

	/**
	 * Unescape and unwrap key for human-readable display
	 *
	 * @param {string} key to unescape.
	 * @return {string} the unescaped key.
	 */
	function unescape(key) {
	  var unescapeRegex = /(=0|=2)/g;
	  var unescaperLookup = {
	    '=0': '=',
	    '=2': ':'
	  };
	  var keySubstring = key[0] === '.' && key[1] === '$' ? key.substring(2) : key.substring(1);

	  return ('' + keySubstring).replace(unescapeRegex, function (match) {
	    return unescaperLookup[match];
	  });
	}

	var KeyEscapeUtils = {
	  escape: escape,
	  unescape: unescape
	};

	module.exports = KeyEscapeUtils;

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactComponent
	 */

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _prodInvariant = __webpack_require__(36);

	var ReactNoopUpdateQueue = __webpack_require__(47);

	var canDefineProperty = __webpack_require__(42);
	var emptyObject = __webpack_require__(48);
	var invariant = __webpack_require__(37);
	var warning = __webpack_require__(40);

	/**
	 * Base class helpers for the updating state of a component.
	 */
	function ReactComponent(props, context, updater) {
	  this.props = props;
	  this.context = context;
	  this.refs = emptyObject;
	  // We initialize the default updater but the real one gets injected by the
	  // renderer.
	  this.updater = updater || ReactNoopUpdateQueue;
	}

	ReactComponent.prototype.isReactComponent = {};

	/**
	 * Sets a subset of the state. Always use this to mutate
	 * state. You should treat `this.state` as immutable.
	 *
	 * There is no guarantee that `this.state` will be immediately updated, so
	 * accessing `this.state` after calling this method may return the old value.
	 *
	 * There is no guarantee that calls to `setState` will run synchronously,
	 * as they may eventually be batched together.  You can provide an optional
	 * callback that will be executed when the call to setState is actually
	 * completed.
	 *
	 * When a function is provided to setState, it will be called at some point in
	 * the future (not synchronously). It will be called with the up to date
	 * component arguments (state, props, context). These values can be different
	 * from this.* because your function may be called after receiveProps but before
	 * shouldComponentUpdate, and this new state, props, and context will not yet be
	 * assigned to this.
	 *
	 * @param {object|function} partialState Next partial state or function to
	 *        produce next partial state to be merged with current state.
	 * @param {?function} callback Called after state is updated.
	 * @final
	 * @protected
	 */
	ReactComponent.prototype.setState = function (partialState, callback) {
	  !((typeof partialState === 'undefined' ? 'undefined' : _typeof(partialState)) === 'object' || typeof partialState === 'function' || partialState == null) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'setState(...): takes an object of state variables to update or a function which returns an object of state variables.') : _prodInvariant('85') : void 0;
	  this.updater.enqueueSetState(this, partialState);
	  if (callback) {
	    this.updater.enqueueCallback(this, callback, 'setState');
	  }
	};

	/**
	 * Forces an update. This should only be invoked when it is known with
	 * certainty that we are **not** in a DOM transaction.
	 *
	 * You may want to call this when you know that some deeper aspect of the
	 * component's state has changed but `setState` was not called.
	 *
	 * This will not invoke `shouldComponentUpdate`, but it will invoke
	 * `componentWillUpdate` and `componentDidUpdate`.
	 *
	 * @param {?function} callback Called after update is complete.
	 * @final
	 * @protected
	 */
	ReactComponent.prototype.forceUpdate = function (callback) {
	  this.updater.enqueueForceUpdate(this);
	  if (callback) {
	    this.updater.enqueueCallback(this, callback, 'forceUpdate');
	  }
	};

	/**
	 * Deprecated APIs. These APIs used to exist on classic React classes but since
	 * we would like to deprecate them, we're not going to move them over to this
	 * modern base class. Instead, we define a getter that warns if it's accessed.
	 */
	if (process.env.NODE_ENV !== 'production') {
	  var deprecatedAPIs = {
	    isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
	    replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
	  };
	  var defineDeprecationWarning = function defineDeprecationWarning(methodName, info) {
	    if (canDefineProperty) {
	      Object.defineProperty(ReactComponent.prototype, methodName, {
	        get: function get() {
	          process.env.NODE_ENV !== 'production' ? warning(false, '%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]) : void 0;
	          return undefined;
	        }
	      });
	    }
	  };
	  for (var fnName in deprecatedAPIs) {
	    if (deprecatedAPIs.hasOwnProperty(fnName)) {
	      defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
	    }
	  }
	}

	module.exports = ReactComponent;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2015-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactNoopUpdateQueue
	 */

	'use strict';

	var warning = __webpack_require__(40);

	function warnNoop(publicInstance, callerName) {
	  if (process.env.NODE_ENV !== 'production') {
	    var constructor = publicInstance.constructor;
	    process.env.NODE_ENV !== 'production' ? warning(false, '%s(...): Can only update a mounted or mounting component. ' + 'This usually means you called %s() on an unmounted component. ' + 'This is a no-op. Please check the code for the %s component.', callerName, callerName, constructor && (constructor.displayName || constructor.name) || 'ReactClass') : void 0;
	  }
	}

	/**
	 * This is the abstract API for an update queue.
	 */
	var ReactNoopUpdateQueue = {

	  /**
	   * Checks whether or not this composite component is mounted.
	   * @param {ReactClass} publicInstance The instance we want to test.
	   * @return {boolean} True if mounted, false otherwise.
	   * @protected
	   * @final
	   */
	  isMounted: function isMounted(publicInstance) {
	    return false;
	  },

	  /**
	   * Enqueue a callback that will be executed after all the pending updates
	   * have processed.
	   *
	   * @param {ReactClass} publicInstance The instance to use as `this` context.
	   * @param {?function} callback Called after state is updated.
	   * @internal
	   */
	  enqueueCallback: function enqueueCallback(publicInstance, callback) {},

	  /**
	   * Forces an update. This should only be invoked when it is known with
	   * certainty that we are **not** in a DOM transaction.
	   *
	   * You may want to call this when you know that some deeper aspect of the
	   * component's state has changed but `setState` was not called.
	   *
	   * This will not invoke `shouldComponentUpdate`, but it will invoke
	   * `componentWillUpdate` and `componentDidUpdate`.
	   *
	   * @param {ReactClass} publicInstance The instance that should rerender.
	   * @internal
	   */
	  enqueueForceUpdate: function enqueueForceUpdate(publicInstance) {
	    warnNoop(publicInstance, 'forceUpdate');
	  },

	  /**
	   * Replaces all of the state. Always use this or `setState` to mutate state.
	   * You should treat `this.state` as immutable.
	   *
	   * There is no guarantee that `this.state` will be immediately updated, so
	   * accessing `this.state` after calling this method may return the old value.
	   *
	   * @param {ReactClass} publicInstance The instance that should rerender.
	   * @param {object} completeState Next state.
	   * @internal
	   */
	  enqueueReplaceState: function enqueueReplaceState(publicInstance, completeState) {
	    warnNoop(publicInstance, 'replaceState');
	  },

	  /**
	   * Sets a subset of the state. This only exists because _pendingState is
	   * internal. This provides a merging strategy that is not available to deep
	   * properties which is confusing. TODO: Expose pendingState or don't use it
	   * during the merge.
	   *
	   * @param {ReactClass} publicInstance The instance that should rerender.
	   * @param {object} partialState Next partial state to be merged with state.
	   * @internal
	   */
	  enqueueSetState: function enqueueSetState(publicInstance, partialState) {
	    warnNoop(publicInstance, 'setState');
	  }
	};

	module.exports = ReactNoopUpdateQueue;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	var emptyObject = {};

	if (process.env.NODE_ENV !== 'production') {
	  Object.freeze(emptyObject);
	}

	module.exports = emptyObject;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactPureComponent
	 */

	'use strict';

	var _assign = __webpack_require__(33);

	var ReactComponent = __webpack_require__(46);
	var ReactNoopUpdateQueue = __webpack_require__(47);

	var emptyObject = __webpack_require__(48);

	/**
	 * Base class helpers for the updating state of a component.
	 */
	function ReactPureComponent(props, context, updater) {
	  // Duplicated from ReactComponent.
	  this.props = props;
	  this.context = context;
	  this.refs = emptyObject;
	  // We initialize the default updater but the real one gets injected by the
	  // renderer.
	  this.updater = updater || ReactNoopUpdateQueue;
	}

	function ComponentDummy() {}
	ComponentDummy.prototype = ReactComponent.prototype;
	ReactPureComponent.prototype = new ComponentDummy();
	ReactPureComponent.prototype.constructor = ReactPureComponent;
	// Avoid an extra prototype jump for these methods.
	_assign(ReactPureComponent.prototype, ReactComponent.prototype);
	ReactPureComponent.prototype.isPureReactComponent = true;

	module.exports = ReactPureComponent;

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactClass
	 */

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _prodInvariant = __webpack_require__(36),
	    _assign = __webpack_require__(33);

	var ReactComponent = __webpack_require__(46);
	var ReactElement = __webpack_require__(38);
	var ReactPropTypeLocations = __webpack_require__(51);
	var ReactPropTypeLocationNames = __webpack_require__(53);
	var ReactNoopUpdateQueue = __webpack_require__(47);

	var emptyObject = __webpack_require__(48);
	var invariant = __webpack_require__(37);
	var keyMirror = __webpack_require__(52);
	var keyOf = __webpack_require__(54);
	var warning = __webpack_require__(40);

	var MIXINS_KEY = keyOf({ mixins: null });

	/**
	 * Policies that describe methods in `ReactClassInterface`.
	 */
	var SpecPolicy = keyMirror({
	  /**
	   * These methods may be defined only once by the class specification or mixin.
	   */
	  DEFINE_ONCE: null,
	  /**
	   * These methods may be defined by both the class specification and mixins.
	   * Subsequent definitions will be chained. These methods must return void.
	   */
	  DEFINE_MANY: null,
	  /**
	   * These methods are overriding the base class.
	   */
	  OVERRIDE_BASE: null,
	  /**
	   * These methods are similar to DEFINE_MANY, except we assume they return
	   * objects. We try to merge the keys of the return values of all the mixed in
	   * functions. If there is a key conflict we throw.
	   */
	  DEFINE_MANY_MERGED: null
	});

	var injectedMixins = [];

	/**
	 * Composite components are higher-level components that compose other composite
	 * or host components.
	 *
	 * To create a new type of `ReactClass`, pass a specification of
	 * your new class to `React.createClass`. The only requirement of your class
	 * specification is that you implement a `render` method.
	 *
	 *   var MyComponent = React.createClass({
	 *     render: function() {
	 *       return <div>Hello World</div>;
	 *     }
	 *   });
	 *
	 * The class specification supports a specific protocol of methods that have
	 * special meaning (e.g. `render`). See `ReactClassInterface` for
	 * more the comprehensive protocol. Any other properties and methods in the
	 * class specification will be available on the prototype.
	 *
	 * @interface ReactClassInterface
	 * @internal
	 */
	var ReactClassInterface = {

	  /**
	   * An array of Mixin objects to include when defining your component.
	   *
	   * @type {array}
	   * @optional
	   */
	  mixins: SpecPolicy.DEFINE_MANY,

	  /**
	   * An object containing properties and methods that should be defined on
	   * the component's constructor instead of its prototype (static methods).
	   *
	   * @type {object}
	   * @optional
	   */
	  statics: SpecPolicy.DEFINE_MANY,

	  /**
	   * Definition of prop types for this component.
	   *
	   * @type {object}
	   * @optional
	   */
	  propTypes: SpecPolicy.DEFINE_MANY,

	  /**
	   * Definition of context types for this component.
	   *
	   * @type {object}
	   * @optional
	   */
	  contextTypes: SpecPolicy.DEFINE_MANY,

	  /**
	   * Definition of context types this component sets for its children.
	   *
	   * @type {object}
	   * @optional
	   */
	  childContextTypes: SpecPolicy.DEFINE_MANY,

	  // ==== Definition methods ====

	  /**
	   * Invoked when the component is mounted. Values in the mapping will be set on
	   * `this.props` if that prop is not specified (i.e. using an `in` check).
	   *
	   * This method is invoked before `getInitialState` and therefore cannot rely
	   * on `this.state` or use `this.setState`.
	   *
	   * @return {object}
	   * @optional
	   */
	  getDefaultProps: SpecPolicy.DEFINE_MANY_MERGED,

	  /**
	   * Invoked once before the component is mounted. The return value will be used
	   * as the initial value of `this.state`.
	   *
	   *   getInitialState: function() {
	   *     return {
	   *       isOn: false,
	   *       fooBaz: new BazFoo()
	   *     }
	   *   }
	   *
	   * @return {object}
	   * @optional
	   */
	  getInitialState: SpecPolicy.DEFINE_MANY_MERGED,

	  /**
	   * @return {object}
	   * @optional
	   */
	  getChildContext: SpecPolicy.DEFINE_MANY_MERGED,

	  /**
	   * Uses props from `this.props` and state from `this.state` to render the
	   * structure of the component.
	   *
	   * No guarantees are made about when or how often this method is invoked, so
	   * it must not have side effects.
	   *
	   *   render: function() {
	   *     var name = this.props.name;
	   *     return <div>Hello, {name}!</div>;
	   *   }
	   *
	   * @return {ReactComponent}
	   * @nosideeffects
	   * @required
	   */
	  render: SpecPolicy.DEFINE_ONCE,

	  // ==== Delegate methods ====

	  /**
	   * Invoked when the component is initially created and about to be mounted.
	   * This may have side effects, but any external subscriptions or data created
	   * by this method must be cleaned up in `componentWillUnmount`.
	   *
	   * @optional
	   */
	  componentWillMount: SpecPolicy.DEFINE_MANY,

	  /**
	   * Invoked when the component has been mounted and has a DOM representation.
	   * However, there is no guarantee that the DOM node is in the document.
	   *
	   * Use this as an opportunity to operate on the DOM when the component has
	   * been mounted (initialized and rendered) for the first time.
	   *
	   * @param {DOMElement} rootNode DOM element representing the component.
	   * @optional
	   */
	  componentDidMount: SpecPolicy.DEFINE_MANY,

	  /**
	   * Invoked before the component receives new props.
	   *
	   * Use this as an opportunity to react to a prop transition by updating the
	   * state using `this.setState`. Current props are accessed via `this.props`.
	   *
	   *   componentWillReceiveProps: function(nextProps, nextContext) {
	   *     this.setState({
	   *       likesIncreasing: nextProps.likeCount > this.props.likeCount
	   *     });
	   *   }
	   *
	   * NOTE: There is no equivalent `componentWillReceiveState`. An incoming prop
	   * transition may cause a state change, but the opposite is not true. If you
	   * need it, you are probably looking for `componentWillUpdate`.
	   *
	   * @param {object} nextProps
	   * @optional
	   */
	  componentWillReceiveProps: SpecPolicy.DEFINE_MANY,

	  /**
	   * Invoked while deciding if the component should be updated as a result of
	   * receiving new props, state and/or context.
	   *
	   * Use this as an opportunity to `return false` when you're certain that the
	   * transition to the new props/state/context will not require a component
	   * update.
	   *
	   *   shouldComponentUpdate: function(nextProps, nextState, nextContext) {
	   *     return !equal(nextProps, this.props) ||
	   *       !equal(nextState, this.state) ||
	   *       !equal(nextContext, this.context);
	   *   }
	   *
	   * @param {object} nextProps
	   * @param {?object} nextState
	   * @param {?object} nextContext
	   * @return {boolean} True if the component should update.
	   * @optional
	   */
	  shouldComponentUpdate: SpecPolicy.DEFINE_ONCE,

	  /**
	   * Invoked when the component is about to update due to a transition from
	   * `this.props`, `this.state` and `this.context` to `nextProps`, `nextState`
	   * and `nextContext`.
	   *
	   * Use this as an opportunity to perform preparation before an update occurs.
	   *
	   * NOTE: You **cannot** use `this.setState()` in this method.
	   *
	   * @param {object} nextProps
	   * @param {?object} nextState
	   * @param {?object} nextContext
	   * @param {ReactReconcileTransaction} transaction
	   * @optional
	   */
	  componentWillUpdate: SpecPolicy.DEFINE_MANY,

	  /**
	   * Invoked when the component's DOM representation has been updated.
	   *
	   * Use this as an opportunity to operate on the DOM when the component has
	   * been updated.
	   *
	   * @param {object} prevProps
	   * @param {?object} prevState
	   * @param {?object} prevContext
	   * @param {DOMElement} rootNode DOM element representing the component.
	   * @optional
	   */
	  componentDidUpdate: SpecPolicy.DEFINE_MANY,

	  /**
	   * Invoked when the component is about to be removed from its parent and have
	   * its DOM representation destroyed.
	   *
	   * Use this as an opportunity to deallocate any external resources.
	   *
	   * NOTE: There is no `componentDidUnmount` since your component will have been
	   * destroyed by that point.
	   *
	   * @optional
	   */
	  componentWillUnmount: SpecPolicy.DEFINE_MANY,

	  // ==== Advanced methods ====

	  /**
	   * Updates the component's currently mounted DOM representation.
	   *
	   * By default, this implements React's rendering and reconciliation algorithm.
	   * Sophisticated clients may wish to override this.
	   *
	   * @param {ReactReconcileTransaction} transaction
	   * @internal
	   * @overridable
	   */
	  updateComponent: SpecPolicy.OVERRIDE_BASE

	};

	/**
	 * Mapping from class specification keys to special processing functions.
	 *
	 * Although these are declared like instance properties in the specification
	 * when defining classes using `React.createClass`, they are actually static
	 * and are accessible on the constructor instead of the prototype. Despite
	 * being static, they must be defined outside of the "statics" key under
	 * which all other static methods are defined.
	 */
	var RESERVED_SPEC_KEYS = {
	  displayName: function displayName(Constructor, _displayName) {
	    Constructor.displayName = _displayName;
	  },
	  mixins: function mixins(Constructor, _mixins) {
	    if (_mixins) {
	      for (var i = 0; i < _mixins.length; i++) {
	        mixSpecIntoComponent(Constructor, _mixins[i]);
	      }
	    }
	  },
	  childContextTypes: function childContextTypes(Constructor, _childContextTypes) {
	    if (process.env.NODE_ENV !== 'production') {
	      validateTypeDef(Constructor, _childContextTypes, ReactPropTypeLocations.childContext);
	    }
	    Constructor.childContextTypes = _assign({}, Constructor.childContextTypes, _childContextTypes);
	  },
	  contextTypes: function contextTypes(Constructor, _contextTypes) {
	    if (process.env.NODE_ENV !== 'production') {
	      validateTypeDef(Constructor, _contextTypes, ReactPropTypeLocations.context);
	    }
	    Constructor.contextTypes = _assign({}, Constructor.contextTypes, _contextTypes);
	  },
	  /**
	   * Special case getDefaultProps which should move into statics but requires
	   * automatic merging.
	   */
	  getDefaultProps: function getDefaultProps(Constructor, _getDefaultProps) {
	    if (Constructor.getDefaultProps) {
	      Constructor.getDefaultProps = createMergedResultFunction(Constructor.getDefaultProps, _getDefaultProps);
	    } else {
	      Constructor.getDefaultProps = _getDefaultProps;
	    }
	  },
	  propTypes: function propTypes(Constructor, _propTypes) {
	    if (process.env.NODE_ENV !== 'production') {
	      validateTypeDef(Constructor, _propTypes, ReactPropTypeLocations.prop);
	    }
	    Constructor.propTypes = _assign({}, Constructor.propTypes, _propTypes);
	  },
	  statics: function statics(Constructor, _statics) {
	    mixStaticSpecIntoComponent(Constructor, _statics);
	  },
	  autobind: function autobind() {} };

	// noop
	function validateTypeDef(Constructor, typeDef, location) {
	  for (var propName in typeDef) {
	    if (typeDef.hasOwnProperty(propName)) {
	      // use a warning instead of an invariant so components
	      // don't show up in prod but only in __DEV__
	      process.env.NODE_ENV !== 'production' ? warning(typeof typeDef[propName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'React.PropTypes.', Constructor.displayName || 'ReactClass', ReactPropTypeLocationNames[location], propName) : void 0;
	    }
	  }
	}

	function validateMethodOverride(isAlreadyDefined, name) {
	  var specPolicy = ReactClassInterface.hasOwnProperty(name) ? ReactClassInterface[name] : null;

	  // Disallow overriding of base class methods unless explicitly allowed.
	  if (ReactClassMixin.hasOwnProperty(name)) {
	    !(specPolicy === SpecPolicy.OVERRIDE_BASE) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactClassInterface: You are attempting to override `%s` from your class specification. Ensure that your method names do not overlap with React methods.', name) : _prodInvariant('73', name) : void 0;
	  }

	  // Disallow defining methods more than once unless explicitly allowed.
	  if (isAlreadyDefined) {
	    !(specPolicy === SpecPolicy.DEFINE_MANY || specPolicy === SpecPolicy.DEFINE_MANY_MERGED) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactClassInterface: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.', name) : _prodInvariant('74', name) : void 0;
	  }
	}

	/**
	 * Mixin helper which handles policy validation and reserved
	 * specification keys when building React classes.
	 */
	function mixSpecIntoComponent(Constructor, spec) {
	  if (!spec) {
	    if (process.env.NODE_ENV !== 'production') {
	      var typeofSpec = typeof spec === 'undefined' ? 'undefined' : _typeof(spec);
	      var isMixinValid = typeofSpec === 'object' && spec !== null;

	      process.env.NODE_ENV !== 'production' ? warning(isMixinValid, '%s: You\'re attempting to include a mixin that is either null ' + 'or not an object. Check the mixins included by the component, ' + 'as well as any mixins they include themselves. ' + 'Expected object but got %s.', Constructor.displayName || 'ReactClass', spec === null ? null : typeofSpec) : void 0;
	    }

	    return;
	  }

	  !(typeof spec !== 'function') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactClass: You\'re attempting to use a component class or function as a mixin. Instead, just use a regular object.') : _prodInvariant('75') : void 0;
	  !!ReactElement.isValidElement(spec) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactClass: You\'re attempting to use a component as a mixin. Instead, just use a regular object.') : _prodInvariant('76') : void 0;

	  var proto = Constructor.prototype;
	  var autoBindPairs = proto.__reactAutoBindPairs;

	  // By handling mixins before any other properties, we ensure the same
	  // chaining order is applied to methods with DEFINE_MANY policy, whether
	  // mixins are listed before or after these methods in the spec.
	  if (spec.hasOwnProperty(MIXINS_KEY)) {
	    RESERVED_SPEC_KEYS.mixins(Constructor, spec.mixins);
	  }

	  for (var name in spec) {
	    if (!spec.hasOwnProperty(name)) {
	      continue;
	    }

	    if (name === MIXINS_KEY) {
	      // We have already handled mixins in a special case above.
	      continue;
	    }

	    var property = spec[name];
	    var isAlreadyDefined = proto.hasOwnProperty(name);
	    validateMethodOverride(isAlreadyDefined, name);

	    if (RESERVED_SPEC_KEYS.hasOwnProperty(name)) {
	      RESERVED_SPEC_KEYS[name](Constructor, property);
	    } else {
	      // Setup methods on prototype:
	      // The following member methods should not be automatically bound:
	      // 1. Expected ReactClass methods (in the "interface").
	      // 2. Overridden methods (that were mixed in).
	      var isReactClassMethod = ReactClassInterface.hasOwnProperty(name);
	      var isFunction = typeof property === 'function';
	      var shouldAutoBind = isFunction && !isReactClassMethod && !isAlreadyDefined && spec.autobind !== false;

	      if (shouldAutoBind) {
	        autoBindPairs.push(name, property);
	        proto[name] = property;
	      } else {
	        if (isAlreadyDefined) {
	          var specPolicy = ReactClassInterface[name];

	          // These cases should already be caught by validateMethodOverride.
	          !(isReactClassMethod && (specPolicy === SpecPolicy.DEFINE_MANY_MERGED || specPolicy === SpecPolicy.DEFINE_MANY)) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactClass: Unexpected spec policy %s for key %s when mixing in component specs.', specPolicy, name) : _prodInvariant('77', specPolicy, name) : void 0;

	          // For methods which are defined more than once, call the existing
	          // methods before calling the new property, merging if appropriate.
	          if (specPolicy === SpecPolicy.DEFINE_MANY_MERGED) {
	            proto[name] = createMergedResultFunction(proto[name], property);
	          } else if (specPolicy === SpecPolicy.DEFINE_MANY) {
	            proto[name] = createChainedFunction(proto[name], property);
	          }
	        } else {
	          proto[name] = property;
	          if (process.env.NODE_ENV !== 'production') {
	            // Add verbose displayName to the function, which helps when looking
	            // at profiling tools.
	            if (typeof property === 'function' && spec.displayName) {
	              proto[name].displayName = spec.displayName + '_' + name;
	            }
	          }
	        }
	      }
	    }
	  }
	}

	function mixStaticSpecIntoComponent(Constructor, statics) {
	  if (!statics) {
	    return;
	  }
	  for (var name in statics) {
	    var property = statics[name];
	    if (!statics.hasOwnProperty(name)) {
	      continue;
	    }

	    var isReserved = name in RESERVED_SPEC_KEYS;
	    !!isReserved ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactClass: You are attempting to define a reserved property, `%s`, that shouldn\'t be on the "statics" key. Define it as an instance property instead; it will still be accessible on the constructor.', name) : _prodInvariant('78', name) : void 0;

	    var isInherited = name in Constructor;
	    !!isInherited ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactClass: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.', name) : _prodInvariant('79', name) : void 0;
	    Constructor[name] = property;
	  }
	}

	/**
	 * Merge two objects, but throw if both contain the same key.
	 *
	 * @param {object} one The first object, which is mutated.
	 * @param {object} two The second object
	 * @return {object} one after it has been mutated to contain everything in two.
	 */
	function mergeIntoWithNoDuplicateKeys(one, two) {
	  !(one && two && (typeof one === 'undefined' ? 'undefined' : _typeof(one)) === 'object' && (typeof two === 'undefined' ? 'undefined' : _typeof(two)) === 'object') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.') : _prodInvariant('80') : void 0;

	  for (var key in two) {
	    if (two.hasOwnProperty(key)) {
	      !(one[key] === undefined) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'mergeIntoWithNoDuplicateKeys(): Tried to merge two objects with the same key: `%s`. This conflict may be due to a mixin; in particular, this may be caused by two getInitialState() or getDefaultProps() methods returning objects with clashing keys.', key) : _prodInvariant('81', key) : void 0;
	      one[key] = two[key];
	    }
	  }
	  return one;
	}

	/**
	 * Creates a function that invokes two functions and merges their return values.
	 *
	 * @param {function} one Function to invoke first.
	 * @param {function} two Function to invoke second.
	 * @return {function} Function that invokes the two argument functions.
	 * @private
	 */
	function createMergedResultFunction(one, two) {
	  return function mergedResult() {
	    var a = one.apply(this, arguments);
	    var b = two.apply(this, arguments);
	    if (a == null) {
	      return b;
	    } else if (b == null) {
	      return a;
	    }
	    var c = {};
	    mergeIntoWithNoDuplicateKeys(c, a);
	    mergeIntoWithNoDuplicateKeys(c, b);
	    return c;
	  };
	}

	/**
	 * Creates a function that invokes two functions and ignores their return vales.
	 *
	 * @param {function} one Function to invoke first.
	 * @param {function} two Function to invoke second.
	 * @return {function} Function that invokes the two argument functions.
	 * @private
	 */
	function createChainedFunction(one, two) {
	  return function chainedFunction() {
	    one.apply(this, arguments);
	    two.apply(this, arguments);
	  };
	}

	/**
	 * Binds a method to the component.
	 *
	 * @param {object} component Component whose method is going to be bound.
	 * @param {function} method Method to be bound.
	 * @return {function} The bound method.
	 */
	function bindAutoBindMethod(component, method) {
	  var boundMethod = method.bind(component);
	  if (process.env.NODE_ENV !== 'production') {
	    boundMethod.__reactBoundContext = component;
	    boundMethod.__reactBoundMethod = method;
	    boundMethod.__reactBoundArguments = null;
	    var componentName = component.constructor.displayName;
	    var _bind = boundMethod.bind;
	    boundMethod.bind = function (newThis) {
	      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        args[_key - 1] = arguments[_key];
	      }

	      // User is trying to bind() an autobound method; we effectively will
	      // ignore the value of "this" that the user is trying to use, so
	      // let's warn.
	      if (newThis !== component && newThis !== null) {
	        process.env.NODE_ENV !== 'production' ? warning(false, 'bind(): React component methods may only be bound to the ' + 'component instance. See %s', componentName) : void 0;
	      } else if (!args.length) {
	        process.env.NODE_ENV !== 'production' ? warning(false, 'bind(): You are binding a component method to the component. ' + 'React does this for you automatically in a high-performance ' + 'way, so you can safely remove this call. See %s', componentName) : void 0;
	        return boundMethod;
	      }
	      var reboundMethod = _bind.apply(boundMethod, arguments);
	      reboundMethod.__reactBoundContext = component;
	      reboundMethod.__reactBoundMethod = method;
	      reboundMethod.__reactBoundArguments = args;
	      return reboundMethod;
	    };
	  }
	  return boundMethod;
	}

	/**
	 * Binds all auto-bound methods in a component.
	 *
	 * @param {object} component Component whose method is going to be bound.
	 */
	function bindAutoBindMethods(component) {
	  var pairs = component.__reactAutoBindPairs;
	  for (var i = 0; i < pairs.length; i += 2) {
	    var autoBindKey = pairs[i];
	    var method = pairs[i + 1];
	    component[autoBindKey] = bindAutoBindMethod(component, method);
	  }
	}

	/**
	 * Add more to the ReactClass base class. These are all legacy features and
	 * therefore not already part of the modern ReactComponent.
	 */
	var ReactClassMixin = {

	  /**
	   * TODO: This will be deprecated because state should always keep a consistent
	   * type signature and the only use case for this, is to avoid that.
	   */
	  replaceState: function replaceState(newState, callback) {
	    this.updater.enqueueReplaceState(this, newState);
	    if (callback) {
	      this.updater.enqueueCallback(this, callback, 'replaceState');
	    }
	  },

	  /**
	   * Checks whether or not this composite component is mounted.
	   * @return {boolean} True if mounted, false otherwise.
	   * @protected
	   * @final
	   */
	  isMounted: function isMounted() {
	    return this.updater.isMounted(this);
	  }
	};

	var ReactClassComponent = function ReactClassComponent() {};
	_assign(ReactClassComponent.prototype, ReactComponent.prototype, ReactClassMixin);

	/**
	 * Module for creating composite components.
	 *
	 * @class ReactClass
	 */
	var ReactClass = {

	  /**
	   * Creates a composite component class given a class specification.
	   * See https://facebook.github.io/react/docs/top-level-api.html#react.createclass
	   *
	   * @param {object} spec Class specification (which must define `render`).
	   * @return {function} Component constructor function.
	   * @public
	   */
	  createClass: function createClass(spec) {
	    var Constructor = function Constructor(props, context, updater) {
	      // This constructor gets overridden by mocks. The argument is used
	      // by mocks to assert on what gets mounted.

	      if (process.env.NODE_ENV !== 'production') {
	        process.env.NODE_ENV !== 'production' ? warning(this instanceof Constructor, 'Something is calling a React component directly. Use a factory or ' + 'JSX instead. See: https://fb.me/react-legacyfactory') : void 0;
	      }

	      // Wire up auto-binding
	      if (this.__reactAutoBindPairs.length) {
	        bindAutoBindMethods(this);
	      }

	      this.props = props;
	      this.context = context;
	      this.refs = emptyObject;
	      this.updater = updater || ReactNoopUpdateQueue;

	      this.state = null;

	      // ReactClasses doesn't have constructors. Instead, they use the
	      // getInitialState and componentWillMount methods for initialization.

	      var initialState = this.getInitialState ? this.getInitialState() : null;
	      if (process.env.NODE_ENV !== 'production') {
	        // We allow auto-mocks to proceed as if they're returning null.
	        if (initialState === undefined && this.getInitialState._isMockFunction) {
	          // This is probably bad practice. Consider warning here and
	          // deprecating this convenience.
	          initialState = null;
	        }
	      }
	      !((typeof initialState === 'undefined' ? 'undefined' : _typeof(initialState)) === 'object' && !Array.isArray(initialState)) ? process.env.NODE_ENV !== 'production' ? invariant(false, '%s.getInitialState(): must return an object or null', Constructor.displayName || 'ReactCompositeComponent') : _prodInvariant('82', Constructor.displayName || 'ReactCompositeComponent') : void 0;

	      this.state = initialState;
	    };
	    Constructor.prototype = new ReactClassComponent();
	    Constructor.prototype.constructor = Constructor;
	    Constructor.prototype.__reactAutoBindPairs = [];

	    injectedMixins.forEach(mixSpecIntoComponent.bind(null, Constructor));

	    mixSpecIntoComponent(Constructor, spec);

	    // Initialize the defaultProps property after all mixins have been merged.
	    if (Constructor.getDefaultProps) {
	      Constructor.defaultProps = Constructor.getDefaultProps();
	    }

	    if (process.env.NODE_ENV !== 'production') {
	      // This is a tag to indicate that the use of these method names is ok,
	      // since it's used with createClass. If it's not, then it's likely a
	      // mistake so we'll warn you to use the static property, property
	      // initializer or constructor respectively.
	      if (Constructor.getDefaultProps) {
	        Constructor.getDefaultProps.isReactClassApproved = {};
	      }
	      if (Constructor.prototype.getInitialState) {
	        Constructor.prototype.getInitialState.isReactClassApproved = {};
	      }
	    }

	    !Constructor.prototype.render ? process.env.NODE_ENV !== 'production' ? invariant(false, 'createClass(...): Class specification must implement a `render` method.') : _prodInvariant('83') : void 0;

	    if (process.env.NODE_ENV !== 'production') {
	      process.env.NODE_ENV !== 'production' ? warning(!Constructor.prototype.componentShouldUpdate, '%s has a method called ' + 'componentShouldUpdate(). Did you mean shouldComponentUpdate()? ' + 'The name is phrased as a question because the function is ' + 'expected to return a value.', spec.displayName || 'A component') : void 0;
	      process.env.NODE_ENV !== 'production' ? warning(!Constructor.prototype.componentWillRecieveProps, '%s has a method called ' + 'componentWillRecieveProps(). Did you mean componentWillReceiveProps()?', spec.displayName || 'A component') : void 0;
	    }

	    // Reduce time spent doing lookups by setting these on the prototype.
	    for (var methodName in ReactClassInterface) {
	      if (!Constructor.prototype[methodName]) {
	        Constructor.prototype[methodName] = null;
	      }
	    }

	    return Constructor;
	  },

	  injection: {
	    injectMixin: function injectMixin(mixin) {
	      injectedMixins.push(mixin);
	    }
	  }

	};

	module.exports = ReactClass;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactPropTypeLocations
	 */

	'use strict';

	var keyMirror = __webpack_require__(52);

	var ReactPropTypeLocations = keyMirror({
	  prop: null,
	  context: null,
	  childContext: null
	});

	module.exports = ReactPropTypeLocations;

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks static-only
	 */

	'use strict';

	var invariant = __webpack_require__(37);

	/**
	 * Constructs an enumeration with keys equal to their value.
	 *
	 * For example:
	 *
	 *   var COLORS = keyMirror({blue: null, red: null});
	 *   var myColor = COLORS.blue;
	 *   var isColorValid = !!COLORS[myColor];
	 *
	 * The last line could not be performed if the values of the generated enum were
	 * not equal to their keys.
	 *
	 *   Input:  {key1: val1, key2: val2}
	 *   Output: {key1: key1, key2: key2}
	 *
	 * @param {object} obj
	 * @return {object}
	 */
	var keyMirror = function keyMirror(obj) {
	  var ret = {};
	  var key;
	  !(obj instanceof Object && !Array.isArray(obj)) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'keyMirror(...): Argument must be an object.') : invariant(false) : void 0;
	  for (key in obj) {
	    if (!obj.hasOwnProperty(key)) {
	      continue;
	    }
	    ret[key] = key;
	  }
	  return ret;
	};

	module.exports = keyMirror;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactPropTypeLocationNames
	 */

	'use strict';

	var ReactPropTypeLocationNames = {};

	if (process.env.NODE_ENV !== 'production') {
	  ReactPropTypeLocationNames = {
	    prop: 'prop',
	    context: 'context',
	    childContext: 'child context'
	  };
	}

	module.exports = ReactPropTypeLocationNames;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 54 */
/***/ function(module, exports) {

	"use strict";

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	/**
	 * Allows extraction of a minified key. Let's the build system minify keys
	 * without losing the ability to dynamically use key strings as values
	 * themselves. Pass in an object with a single key/val pair and it will return
	 * you the string key of that single record. Suppose you want to grab the
	 * value for a key 'className' inside of an object. Key/val minification may
	 * have aliased that key to be 'xa12'. keyOf({className: null}) will return
	 * 'xa12' in that case. Resolve keys you want to use once at startup time, then
	 * reuse those resolutions.
	 */

	var keyOf = function keyOf(oneKeyObj) {
	  var key;
	  for (key in oneKeyObj) {
	    if (!oneKeyObj.hasOwnProperty(key)) {
	      continue;
	    }
	    return key;
	  }
	  return null;
	};

	module.exports = keyOf;

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactDOMFactories
	 */

	'use strict';

	var ReactElement = __webpack_require__(38);

	/**
	 * Create a factory that creates HTML tag elements.
	 *
	 * @private
	 */
	var createDOMFactory = ReactElement.createFactory;
	if (process.env.NODE_ENV !== 'production') {
	  var ReactElementValidator = __webpack_require__(56);
	  createDOMFactory = ReactElementValidator.createFactory;
	}

	/**
	 * Creates a mapping from supported HTML tags to `ReactDOMComponent` classes.
	 * This is also accessible via `React.DOM`.
	 *
	 * @public
	 */
	var ReactDOMFactories = {
	  a: createDOMFactory('a'),
	  abbr: createDOMFactory('abbr'),
	  address: createDOMFactory('address'),
	  area: createDOMFactory('area'),
	  article: createDOMFactory('article'),
	  aside: createDOMFactory('aside'),
	  audio: createDOMFactory('audio'),
	  b: createDOMFactory('b'),
	  base: createDOMFactory('base'),
	  bdi: createDOMFactory('bdi'),
	  bdo: createDOMFactory('bdo'),
	  big: createDOMFactory('big'),
	  blockquote: createDOMFactory('blockquote'),
	  body: createDOMFactory('body'),
	  br: createDOMFactory('br'),
	  button: createDOMFactory('button'),
	  canvas: createDOMFactory('canvas'),
	  caption: createDOMFactory('caption'),
	  cite: createDOMFactory('cite'),
	  code: createDOMFactory('code'),
	  col: createDOMFactory('col'),
	  colgroup: createDOMFactory('colgroup'),
	  data: createDOMFactory('data'),
	  datalist: createDOMFactory('datalist'),
	  dd: createDOMFactory('dd'),
	  del: createDOMFactory('del'),
	  details: createDOMFactory('details'),
	  dfn: createDOMFactory('dfn'),
	  dialog: createDOMFactory('dialog'),
	  div: createDOMFactory('div'),
	  dl: createDOMFactory('dl'),
	  dt: createDOMFactory('dt'),
	  em: createDOMFactory('em'),
	  embed: createDOMFactory('embed'),
	  fieldset: createDOMFactory('fieldset'),
	  figcaption: createDOMFactory('figcaption'),
	  figure: createDOMFactory('figure'),
	  footer: createDOMFactory('footer'),
	  form: createDOMFactory('form'),
	  h1: createDOMFactory('h1'),
	  h2: createDOMFactory('h2'),
	  h3: createDOMFactory('h3'),
	  h4: createDOMFactory('h4'),
	  h5: createDOMFactory('h5'),
	  h6: createDOMFactory('h6'),
	  head: createDOMFactory('head'),
	  header: createDOMFactory('header'),
	  hgroup: createDOMFactory('hgroup'),
	  hr: createDOMFactory('hr'),
	  html: createDOMFactory('html'),
	  i: createDOMFactory('i'),
	  iframe: createDOMFactory('iframe'),
	  img: createDOMFactory('img'),
	  input: createDOMFactory('input'),
	  ins: createDOMFactory('ins'),
	  kbd: createDOMFactory('kbd'),
	  keygen: createDOMFactory('keygen'),
	  label: createDOMFactory('label'),
	  legend: createDOMFactory('legend'),
	  li: createDOMFactory('li'),
	  link: createDOMFactory('link'),
	  main: createDOMFactory('main'),
	  map: createDOMFactory('map'),
	  mark: createDOMFactory('mark'),
	  menu: createDOMFactory('menu'),
	  menuitem: createDOMFactory('menuitem'),
	  meta: createDOMFactory('meta'),
	  meter: createDOMFactory('meter'),
	  nav: createDOMFactory('nav'),
	  noscript: createDOMFactory('noscript'),
	  object: createDOMFactory('object'),
	  ol: createDOMFactory('ol'),
	  optgroup: createDOMFactory('optgroup'),
	  option: createDOMFactory('option'),
	  output: createDOMFactory('output'),
	  p: createDOMFactory('p'),
	  param: createDOMFactory('param'),
	  picture: createDOMFactory('picture'),
	  pre: createDOMFactory('pre'),
	  progress: createDOMFactory('progress'),
	  q: createDOMFactory('q'),
	  rp: createDOMFactory('rp'),
	  rt: createDOMFactory('rt'),
	  ruby: createDOMFactory('ruby'),
	  s: createDOMFactory('s'),
	  samp: createDOMFactory('samp'),
	  script: createDOMFactory('script'),
	  section: createDOMFactory('section'),
	  select: createDOMFactory('select'),
	  small: createDOMFactory('small'),
	  source: createDOMFactory('source'),
	  span: createDOMFactory('span'),
	  strong: createDOMFactory('strong'),
	  style: createDOMFactory('style'),
	  sub: createDOMFactory('sub'),
	  summary: createDOMFactory('summary'),
	  sup: createDOMFactory('sup'),
	  table: createDOMFactory('table'),
	  tbody: createDOMFactory('tbody'),
	  td: createDOMFactory('td'),
	  textarea: createDOMFactory('textarea'),
	  tfoot: createDOMFactory('tfoot'),
	  th: createDOMFactory('th'),
	  thead: createDOMFactory('thead'),
	  time: createDOMFactory('time'),
	  title: createDOMFactory('title'),
	  tr: createDOMFactory('tr'),
	  track: createDOMFactory('track'),
	  u: createDOMFactory('u'),
	  ul: createDOMFactory('ul'),
	  'var': createDOMFactory('var'),
	  video: createDOMFactory('video'),
	  wbr: createDOMFactory('wbr'),

	  // SVG
	  circle: createDOMFactory('circle'),
	  clipPath: createDOMFactory('clipPath'),
	  defs: createDOMFactory('defs'),
	  ellipse: createDOMFactory('ellipse'),
	  g: createDOMFactory('g'),
	  image: createDOMFactory('image'),
	  line: createDOMFactory('line'),
	  linearGradient: createDOMFactory('linearGradient'),
	  mask: createDOMFactory('mask'),
	  path: createDOMFactory('path'),
	  pattern: createDOMFactory('pattern'),
	  polygon: createDOMFactory('polygon'),
	  polyline: createDOMFactory('polyline'),
	  radialGradient: createDOMFactory('radialGradient'),
	  rect: createDOMFactory('rect'),
	  stop: createDOMFactory('stop'),
	  svg: createDOMFactory('svg'),
	  text: createDOMFactory('text'),
	  tspan: createDOMFactory('tspan')
	};

	module.exports = ReactDOMFactories;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2014-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactElementValidator
	 */

	/**
	 * ReactElementValidator provides a wrapper around a element factory
	 * which validates the props passed to the element. This is intended to be
	 * used only in DEV and could be replaced by a static type checker for languages
	 * that support it.
	 */

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var ReactCurrentOwner = __webpack_require__(39);
	var ReactComponentTreeHook = __webpack_require__(57);
	var ReactElement = __webpack_require__(38);
	var ReactPropTypeLocations = __webpack_require__(51);

	var checkReactTypeSpec = __webpack_require__(58);

	var canDefineProperty = __webpack_require__(42);
	var getIteratorFn = __webpack_require__(44);
	var warning = __webpack_require__(40);

	function getDeclarationErrorAddendum() {
	  if (ReactCurrentOwner.current) {
	    var name = ReactCurrentOwner.current.getName();
	    if (name) {
	      return ' Check the render method of `' + name + '`.';
	    }
	  }
	  return '';
	}

	/**
	 * Warn if there's no key explicitly set on dynamic arrays of children or
	 * object keys are not valid. This allows us to keep track of children between
	 * updates.
	 */
	var ownerHasKeyUseWarning = {};

	function getCurrentComponentErrorInfo(parentType) {
	  var info = getDeclarationErrorAddendum();

	  if (!info) {
	    var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;
	    if (parentName) {
	      info = ' Check the top-level render call using <' + parentName + '>.';
	    }
	  }
	  return info;
	}

	/**
	 * Warn if the element doesn't have an explicit key assigned to it.
	 * This element is in an array. The array could grow and shrink or be
	 * reordered. All children that haven't already been validated are required to
	 * have a "key" property assigned to it. Error statuses are cached so a warning
	 * will only be shown once.
	 *
	 * @internal
	 * @param {ReactElement} element Element that requires a key.
	 * @param {*} parentType element's parent's type.
	 */
	function validateExplicitKey(element, parentType) {
	  if (!element._store || element._store.validated || element.key != null) {
	    return;
	  }
	  element._store.validated = true;

	  var memoizer = ownerHasKeyUseWarning.uniqueKey || (ownerHasKeyUseWarning.uniqueKey = {});

	  var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
	  if (memoizer[currentComponentErrorInfo]) {
	    return;
	  }
	  memoizer[currentComponentErrorInfo] = true;

	  // Usually the current owner is the offender, but if it accepts children as a
	  // property, it may be the creator of the child that's responsible for
	  // assigning it a key.
	  var childOwner = '';
	  if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
	    // Give the component that originally created this child.
	    childOwner = ' It was passed a child from ' + element._owner.getName() + '.';
	  }

	  process.env.NODE_ENV !== 'production' ? warning(false, 'Each child in an array or iterator should have a unique "key" prop.' + '%s%s See https://fb.me/react-warning-keys for more information.%s', currentComponentErrorInfo, childOwner, ReactComponentTreeHook.getCurrentStackAddendum(element)) : void 0;
	}

	/**
	 * Ensure that every element either is passed in a static location, in an
	 * array with an explicit keys property defined, or in an object literal
	 * with valid key property.
	 *
	 * @internal
	 * @param {ReactNode} node Statically passed child of any type.
	 * @param {*} parentType node's parent's type.
	 */
	function validateChildKeys(node, parentType) {
	  if ((typeof node === 'undefined' ? 'undefined' : _typeof(node)) !== 'object') {
	    return;
	  }
	  if (Array.isArray(node)) {
	    for (var i = 0; i < node.length; i++) {
	      var child = node[i];
	      if (ReactElement.isValidElement(child)) {
	        validateExplicitKey(child, parentType);
	      }
	    }
	  } else if (ReactElement.isValidElement(node)) {
	    // This element was passed in a valid location.
	    if (node._store) {
	      node._store.validated = true;
	    }
	  } else if (node) {
	    var iteratorFn = getIteratorFn(node);
	    // Entry iterators provide implicit keys.
	    if (iteratorFn) {
	      if (iteratorFn !== node.entries) {
	        var iterator = iteratorFn.call(node);
	        var step;
	        while (!(step = iterator.next()).done) {
	          if (ReactElement.isValidElement(step.value)) {
	            validateExplicitKey(step.value, parentType);
	          }
	        }
	      }
	    }
	  }
	}

	/**
	 * Given an element, validate that its props follow the propTypes definition,
	 * provided by the type.
	 *
	 * @param {ReactElement} element
	 */
	function validatePropTypes(element) {
	  var componentClass = element.type;
	  if (typeof componentClass !== 'function') {
	    return;
	  }
	  var name = componentClass.displayName || componentClass.name;
	  if (componentClass.propTypes) {
	    checkReactTypeSpec(componentClass.propTypes, element.props, ReactPropTypeLocations.prop, name, element, null);
	  }
	  if (typeof componentClass.getDefaultProps === 'function') {
	    process.env.NODE_ENV !== 'production' ? warning(componentClass.getDefaultProps.isReactClassApproved, 'getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.') : void 0;
	  }
	}

	var ReactElementValidator = {

	  createElement: function createElement(type, props, children) {
	    var validType = typeof type === 'string' || typeof type === 'function';
	    // We warn in this case but don't throw. We expect the element creation to
	    // succeed and there will likely be errors in render.
	    if (!validType) {
	      process.env.NODE_ENV !== 'production' ? warning(false, 'React.createElement: type should not be null, undefined, boolean, or ' + 'number. It should be a string (for DOM elements) or a ReactClass ' + '(for composite components).%s', getDeclarationErrorAddendum()) : void 0;
	    }

	    var element = ReactElement.createElement.apply(this, arguments);

	    // The result can be nullish if a mock or a custom function is used.
	    // TODO: Drop this when these are no longer allowed as the type argument.
	    if (element == null) {
	      return element;
	    }

	    // Skip key warning if the type isn't valid since our key validation logic
	    // doesn't expect a non-string/function type and can throw confusing errors.
	    // We don't want exception behavior to differ between dev and prod.
	    // (Rendering will throw with a helpful message and as soon as the type is
	    // fixed, the key warnings will appear.)
	    if (validType) {
	      for (var i = 2; i < arguments.length; i++) {
	        validateChildKeys(arguments[i], type);
	      }
	    }

	    validatePropTypes(element);

	    return element;
	  },

	  createFactory: function createFactory(type) {
	    var validatedFactory = ReactElementValidator.createElement.bind(null, type);
	    // Legacy hook TODO: Warn if this is accessed
	    validatedFactory.type = type;

	    if (process.env.NODE_ENV !== 'production') {
	      if (canDefineProperty) {
	        Object.defineProperty(validatedFactory, 'type', {
	          enumerable: false,
	          get: function get() {
	            process.env.NODE_ENV !== 'production' ? warning(false, 'Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.') : void 0;
	            Object.defineProperty(this, 'type', {
	              value: type
	            });
	            return type;
	          }
	        });
	      }
	    }

	    return validatedFactory;
	  },

	  cloneElement: function cloneElement(element, props, children) {
	    var newElement = ReactElement.cloneElement.apply(this, arguments);
	    for (var i = 2; i < arguments.length; i++) {
	      validateChildKeys(arguments[i], newElement.type);
	    }
	    validatePropTypes(newElement);
	    return newElement;
	  }

	};

	module.exports = ReactElementValidator;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2016-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactComponentTreeHook
	 */

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _prodInvariant = __webpack_require__(36);

	var ReactCurrentOwner = __webpack_require__(39);

	var invariant = __webpack_require__(37);
	var warning = __webpack_require__(40);

	function isNative(fn) {
	  // Based on isNative() from Lodash
	  var funcToString = Function.prototype.toString;
	  var hasOwnProperty = Object.prototype.hasOwnProperty;
	  var reIsNative = RegExp('^' + funcToString
	  // Take an example native function source for comparison
	  .call(hasOwnProperty)
	  // Strip regex characters so we can use it for regex
	  .replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
	  // Remove hasOwnProperty from the template to make it generic
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
	  try {
	    var source = funcToString.call(fn);
	    return reIsNative.test(source);
	  } catch (err) {
	    return false;
	  }
	}

	var canUseCollections =
	// Array.from
	typeof Array.from === 'function' &&
	// Map
	typeof Map === 'function' && isNative(Map) &&
	// Map.prototype.keys
	Map.prototype != null && typeof Map.prototype.keys === 'function' && isNative(Map.prototype.keys) &&
	// Set
	typeof Set === 'function' && isNative(Set) &&
	// Set.prototype.keys
	Set.prototype != null && typeof Set.prototype.keys === 'function' && isNative(Set.prototype.keys);

	var itemMap;
	var rootIDSet;

	var itemByKey;
	var rootByKey;

	if (canUseCollections) {
	  itemMap = new Map();
	  rootIDSet = new Set();
	} else {
	  itemByKey = {};
	  rootByKey = {};
	}

	var unmountedIDs = [];

	// Use non-numeric keys to prevent V8 performance issues:
	// https://github.com/facebook/react/pull/7232
	function getKeyFromID(id) {
	  return '.' + id;
	}
	function getIDFromKey(key) {
	  return parseInt(key.substr(1), 10);
	}

	function get(id) {
	  if (canUseCollections) {
	    return itemMap.get(id);
	  } else {
	    var key = getKeyFromID(id);
	    return itemByKey[key];
	  }
	}

	function remove(id) {
	  if (canUseCollections) {
	    itemMap['delete'](id);
	  } else {
	    var key = getKeyFromID(id);
	    delete itemByKey[key];
	  }
	}

	function create(id, element, parentID) {
	  var item = {
	    element: element,
	    parentID: parentID,
	    text: null,
	    childIDs: [],
	    isMounted: false,
	    updateCount: 0
	  };

	  if (canUseCollections) {
	    itemMap.set(id, item);
	  } else {
	    var key = getKeyFromID(id);
	    itemByKey[key] = item;
	  }
	}

	function addRoot(id) {
	  if (canUseCollections) {
	    rootIDSet.add(id);
	  } else {
	    var key = getKeyFromID(id);
	    rootByKey[key] = true;
	  }
	}

	function removeRoot(id) {
	  if (canUseCollections) {
	    rootIDSet['delete'](id);
	  } else {
	    var key = getKeyFromID(id);
	    delete rootByKey[key];
	  }
	}

	function getRegisteredIDs() {
	  if (canUseCollections) {
	    return Array.from(itemMap.keys());
	  } else {
	    return Object.keys(itemByKey).map(getIDFromKey);
	  }
	}

	function getRootIDs() {
	  if (canUseCollections) {
	    return Array.from(rootIDSet.keys());
	  } else {
	    return Object.keys(rootByKey).map(getIDFromKey);
	  }
	}

	function purgeDeep(id) {
	  var item = get(id);
	  if (item) {
	    var childIDs = item.childIDs;

	    remove(id);
	    childIDs.forEach(purgeDeep);
	  }
	}

	function describeComponentFrame(name, source, ownerName) {
	  return '\n    in ' + name + (source ? ' (at ' + source.fileName.replace(/^.*[\\\/]/, '') + ':' + source.lineNumber + ')' : ownerName ? ' (created by ' + ownerName + ')' : '');
	}

	function _getDisplayName(element) {
	  if (element == null) {
	    return '#empty';
	  } else if (typeof element === 'string' || typeof element === 'number') {
	    return '#text';
	  } else if (typeof element.type === 'string') {
	    return element.type;
	  } else {
	    return element.type.displayName || element.type.name || 'Unknown';
	  }
	}

	function describeID(id) {
	  var name = ReactComponentTreeHook.getDisplayName(id);
	  var element = ReactComponentTreeHook.getElement(id);
	  var ownerID = ReactComponentTreeHook.getOwnerID(id);
	  var ownerName;
	  if (ownerID) {
	    ownerName = ReactComponentTreeHook.getDisplayName(ownerID);
	  }
	  process.env.NODE_ENV !== 'production' ? warning(element, 'ReactComponentTreeHook: Missing React element for debugID %s when ' + 'building stack', id) : void 0;
	  return describeComponentFrame(name, element && element._source, ownerName);
	}

	var ReactComponentTreeHook = {
	  onSetChildren: function onSetChildren(id, nextChildIDs) {
	    var item = get(id);
	    item.childIDs = nextChildIDs;

	    for (var i = 0; i < nextChildIDs.length; i++) {
	      var nextChildID = nextChildIDs[i];
	      var nextChild = get(nextChildID);
	      !nextChild ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Expected hook events to fire for the child before its parent includes it in onSetChildren().') : _prodInvariant('140') : void 0;
	      !(nextChild.childIDs != null || _typeof(nextChild.element) !== 'object' || nextChild.element == null) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Expected onSetChildren() to fire for a container child before its parent includes it in onSetChildren().') : _prodInvariant('141') : void 0;
	      !nextChild.isMounted ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Expected onMountComponent() to fire for the child before its parent includes it in onSetChildren().') : _prodInvariant('71') : void 0;
	      if (nextChild.parentID == null) {
	        nextChild.parentID = id;
	        // TODO: This shouldn't be necessary but mounting a new root during in
	        // componentWillMount currently causes not-yet-mounted components to
	        // be purged from our tree data so their parent ID is missing.
	      }
	      !(nextChild.parentID === id) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Expected onBeforeMountComponent() parent and onSetChildren() to be consistent (%s has parents %s and %s).', nextChildID, nextChild.parentID, id) : _prodInvariant('142', nextChildID, nextChild.parentID, id) : void 0;
	    }
	  },
	  onBeforeMountComponent: function onBeforeMountComponent(id, element, parentID) {
	    create(id, element, parentID);
	  },
	  onBeforeUpdateComponent: function onBeforeUpdateComponent(id, element) {
	    var item = get(id);
	    if (!item || !item.isMounted) {
	      // We may end up here as a result of setState() in componentWillUnmount().
	      // In this case, ignore the element.
	      return;
	    }
	    item.element = element;
	  },
	  onMountComponent: function onMountComponent(id) {
	    var item = get(id);
	    item.isMounted = true;
	    var isRoot = item.parentID === 0;
	    if (isRoot) {
	      addRoot(id);
	    }
	  },
	  onUpdateComponent: function onUpdateComponent(id) {
	    var item = get(id);
	    if (!item || !item.isMounted) {
	      // We may end up here as a result of setState() in componentWillUnmount().
	      // In this case, ignore the element.
	      return;
	    }
	    item.updateCount++;
	  },
	  onUnmountComponent: function onUnmountComponent(id) {
	    var item = get(id);
	    if (item) {
	      // We need to check if it exists.
	      // `item` might not exist if it is inside an error boundary, and a sibling
	      // error boundary child threw while mounting. Then this instance never
	      // got a chance to mount, but it still gets an unmounting event during
	      // the error boundary cleanup.
	      item.isMounted = false;
	      var isRoot = item.parentID === 0;
	      if (isRoot) {
	        removeRoot(id);
	      }
	    }
	    unmountedIDs.push(id);
	  },
	  purgeUnmountedComponents: function purgeUnmountedComponents() {
	    if (ReactComponentTreeHook._preventPurging) {
	      // Should only be used for testing.
	      return;
	    }

	    for (var i = 0; i < unmountedIDs.length; i++) {
	      var id = unmountedIDs[i];
	      purgeDeep(id);
	    }
	    unmountedIDs.length = 0;
	  },
	  isMounted: function isMounted(id) {
	    var item = get(id);
	    return item ? item.isMounted : false;
	  },
	  getCurrentStackAddendum: function getCurrentStackAddendum(topElement) {
	    var info = '';
	    if (topElement) {
	      var type = topElement.type;
	      var name = typeof type === 'function' ? type.displayName || type.name : type;
	      var owner = topElement._owner;
	      info += describeComponentFrame(name || 'Unknown', topElement._source, owner && owner.getName());
	    }

	    var currentOwner = ReactCurrentOwner.current;
	    var id = currentOwner && currentOwner._debugID;

	    info += ReactComponentTreeHook.getStackAddendumByID(id);
	    return info;
	  },
	  getStackAddendumByID: function getStackAddendumByID(id) {
	    var info = '';
	    while (id) {
	      info += describeID(id);
	      id = ReactComponentTreeHook.getParentID(id);
	    }
	    return info;
	  },
	  getChildIDs: function getChildIDs(id) {
	    var item = get(id);
	    return item ? item.childIDs : [];
	  },
	  getDisplayName: function getDisplayName(id) {
	    var element = ReactComponentTreeHook.getElement(id);
	    if (!element) {
	      return null;
	    }
	    return _getDisplayName(element);
	  },
	  getElement: function getElement(id) {
	    var item = get(id);
	    return item ? item.element : null;
	  },
	  getOwnerID: function getOwnerID(id) {
	    var element = ReactComponentTreeHook.getElement(id);
	    if (!element || !element._owner) {
	      return null;
	    }
	    return element._owner._debugID;
	  },
	  getParentID: function getParentID(id) {
	    var item = get(id);
	    return item ? item.parentID : null;
	  },
	  getSource: function getSource(id) {
	    var item = get(id);
	    var element = item ? item.element : null;
	    var source = element != null ? element._source : null;
	    return source;
	  },
	  getText: function getText(id) {
	    var element = ReactComponentTreeHook.getElement(id);
	    if (typeof element === 'string') {
	      return element;
	    } else if (typeof element === 'number') {
	      return '' + element;
	    } else {
	      return null;
	    }
	  },
	  getUpdateCount: function getUpdateCount(id) {
	    var item = get(id);
	    return item ? item.updateCount : 0;
	  },

	  getRegisteredIDs: getRegisteredIDs,

	  getRootIDs: getRootIDs
	};

	module.exports = ReactComponentTreeHook;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule checkReactTypeSpec
	 */

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _prodInvariant = __webpack_require__(36);

	var ReactPropTypeLocationNames = __webpack_require__(53);
	var ReactPropTypesSecret = __webpack_require__(59);

	var invariant = __webpack_require__(37);
	var warning = __webpack_require__(40);

	var ReactComponentTreeHook;

	if (typeof process !== 'undefined' && process.env && process.env.NODE_ENV === 'test') {
	  // Temporary hack.
	  // Inline requires don't work well with Jest:
	  // https://github.com/facebook/react/issues/7240
	  // Remove the inline requires when we don't need them anymore:
	  // https://github.com/facebook/react/pull/7178
	  ReactComponentTreeHook = __webpack_require__(57);
	}

	var loggedTypeFailures = {};

	/**
	 * Assert that the values match with the type specs.
	 * Error messages are memorized and will only be shown once.
	 *
	 * @param {object} typeSpecs Map of name to a ReactPropType
	 * @param {object} values Runtime values that need to be type-checked
	 * @param {string} location e.g. "prop", "context", "child context"
	 * @param {string} componentName Name of the component for error messages.
	 * @param {?object} element The React element that is being type-checked
	 * @param {?number} debugID The React component instance that is being type-checked
	 * @private
	 */
	function checkReactTypeSpec(typeSpecs, values, location, componentName, element, debugID) {
	  for (var typeSpecName in typeSpecs) {
	    if (typeSpecs.hasOwnProperty(typeSpecName)) {
	      var error;
	      // Prop type validation may throw. In case they do, we don't want to
	      // fail the render phase where it didn't fail before. So we log it.
	      // After these have been cleaned up, we'll let them throw.
	      try {
	        // This is intentionally an invariant that gets caught. It's the same
	        // behavior as without this statement except with a better message.
	        !(typeof typeSpecs[typeSpecName] === 'function') ? process.env.NODE_ENV !== 'production' ? invariant(false, '%s: %s type `%s` is invalid; it must be a function, usually from React.PropTypes.', componentName || 'React class', ReactPropTypeLocationNames[location], typeSpecName) : _prodInvariant('84', componentName || 'React class', ReactPropTypeLocationNames[location], typeSpecName) : void 0;
	        error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
	      } catch (ex) {
	        error = ex;
	      }
	      process.env.NODE_ENV !== 'production' ? warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', ReactPropTypeLocationNames[location], typeSpecName, typeof error === 'undefined' ? 'undefined' : _typeof(error)) : void 0;
	      if (error instanceof Error && !(error.message in loggedTypeFailures)) {
	        // Only monitor this failure once because there tends to be a lot of the
	        // same error.
	        loggedTypeFailures[error.message] = true;

	        var componentStackInfo = '';

	        if (process.env.NODE_ENV !== 'production') {
	          if (!ReactComponentTreeHook) {
	            ReactComponentTreeHook = __webpack_require__(57);
	          }
	          if (debugID !== null) {
	            componentStackInfo = ReactComponentTreeHook.getStackAddendumByID(debugID);
	          } else if (element !== null) {
	            componentStackInfo = ReactComponentTreeHook.getCurrentStackAddendum(element);
	          }
	        }

	        process.env.NODE_ENV !== 'production' ? warning(false, 'Failed %s type: %s%s', location, error.message, componentStackInfo) : void 0;
	      }
	    }
	  }
	}

	module.exports = checkReactTypeSpec;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 59 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactPropTypesSecret
	 */

	'use strict';

	var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

	module.exports = ReactPropTypesSecret;

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactPropTypes
	 */

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var ReactElement = __webpack_require__(38);
	var ReactPropTypeLocationNames = __webpack_require__(53);
	var ReactPropTypesSecret = __webpack_require__(59);

	var emptyFunction = __webpack_require__(41);
	var getIteratorFn = __webpack_require__(44);
	var warning = __webpack_require__(40);

	/**
	 * Collection of methods that allow declaration and validation of props that are
	 * supplied to React components. Example usage:
	 *
	 *   var Props = require('ReactPropTypes');
	 *   var MyArticle = React.createClass({
	 *     propTypes: {
	 *       // An optional string prop named "description".
	 *       description: Props.string,
	 *
	 *       // A required enum prop named "category".
	 *       category: Props.oneOf(['News','Photos']).isRequired,
	 *
	 *       // A prop named "dialog" that requires an instance of Dialog.
	 *       dialog: Props.instanceOf(Dialog).isRequired
	 *     },
	 *     render: function() { ... }
	 *   });
	 *
	 * A more formal specification of how these methods are used:
	 *
	 *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
	 *   decl := ReactPropTypes.{type}(.isRequired)?
	 *
	 * Each and every declaration produces a function with the same signature. This
	 * allows the creation of custom validation functions. For example:
	 *
	 *  var MyLink = React.createClass({
	 *    propTypes: {
	 *      // An optional string or URI prop named "href".
	 *      href: function(props, propName, componentName) {
	 *        var propValue = props[propName];
	 *        if (propValue != null && typeof propValue !== 'string' &&
	 *            !(propValue instanceof URI)) {
	 *          return new Error(
	 *            'Expected a string or an URI for ' + propName + ' in ' +
	 *            componentName
	 *          );
	 *        }
	 *      }
	 *    },
	 *    render: function() {...}
	 *  });
	 *
	 * @internal
	 */

	var ANONYMOUS = '<<anonymous>>';

	var ReactPropTypes = {
	  array: createPrimitiveTypeChecker('array'),
	  bool: createPrimitiveTypeChecker('boolean'),
	  func: createPrimitiveTypeChecker('function'),
	  number: createPrimitiveTypeChecker('number'),
	  object: createPrimitiveTypeChecker('object'),
	  string: createPrimitiveTypeChecker('string'),
	  symbol: createPrimitiveTypeChecker('symbol'),

	  any: createAnyTypeChecker(),
	  arrayOf: createArrayOfTypeChecker,
	  element: createElementTypeChecker(),
	  instanceOf: createInstanceTypeChecker,
	  node: createNodeChecker(),
	  objectOf: createObjectOfTypeChecker,
	  oneOf: createEnumTypeChecker,
	  oneOfType: createUnionTypeChecker,
	  shape: createShapeTypeChecker
	};

	/**
	 * inlined Object.is polyfill to avoid requiring consumers ship their own
	 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	 */
	/*eslint-disable no-self-compare*/
	function is(x, y) {
	  // SameValue algorithm
	  if (x === y) {
	    // Steps 1-5, 7-10
	    // Steps 6.b-6.e: +0 != -0
	    return x !== 0 || 1 / x === 1 / y;
	  } else {
	    // Step 6.a: NaN == NaN
	    return x !== x && y !== y;
	  }
	}
	/*eslint-enable no-self-compare*/

	/**
	 * We use an Error-like object for backward compatibility as people may call
	 * PropTypes directly and inspect their output. However we don't use real
	 * Errors anymore. We don't inspect their stack anyway, and creating them
	 * is prohibitively expensive if they are created too often, such as what
	 * happens in oneOfType() for any type before the one that matched.
	 */
	function PropTypeError(message) {
	  this.message = message;
	  this.stack = '';
	}
	// Make `instanceof Error` still work for returned errors.
	PropTypeError.prototype = Error.prototype;

	function createChainableTypeChecker(validate) {
	  if (process.env.NODE_ENV !== 'production') {
	    var manualPropTypeCallCache = {};
	  }
	  function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
	    componentName = componentName || ANONYMOUS;
	    propFullName = propFullName || propName;
	    if (process.env.NODE_ENV !== 'production') {
	      if (secret !== ReactPropTypesSecret && typeof console !== 'undefined') {
	        var cacheKey = componentName + ':' + propName;
	        if (!manualPropTypeCallCache[cacheKey]) {
	          process.env.NODE_ENV !== 'production' ? warning(false, 'You are manually calling a React.PropTypes validation ' + 'function for the `%s` prop on `%s`. This is deprecated ' + 'and will not work in the next major version. You may be ' + 'seeing this warning due to a third-party PropTypes library. ' + 'See https://fb.me/react-warning-dont-call-proptypes for details.', propFullName, componentName) : void 0;
	          manualPropTypeCallCache[cacheKey] = true;
	        }
	      }
	    }
	    if (props[propName] == null) {
	      var locationName = ReactPropTypeLocationNames[location];
	      if (isRequired) {
	        return new PropTypeError('Required ' + locationName + ' `' + propFullName + '` was not specified in ' + ('`' + componentName + '`.'));
	      }
	      return null;
	    } else {
	      return validate(props, propName, componentName, location, propFullName);
	    }
	  }

	  var chainedCheckType = checkType.bind(null, false);
	  chainedCheckType.isRequired = checkType.bind(null, true);

	  return chainedCheckType;
	}

	function createPrimitiveTypeChecker(expectedType) {
	  function validate(props, propName, componentName, location, propFullName, secret) {
	    var propValue = props[propName];
	    var propType = getPropType(propValue);
	    if (propType !== expectedType) {
	      var locationName = ReactPropTypeLocationNames[location];
	      // `propValue` being instance of, say, date/regexp, pass the 'object'
	      // check, but we can offer a more precise error message here rather than
	      // 'of type `object`'.
	      var preciseType = getPreciseType(propValue);

	      return new PropTypeError('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
	    }
	    return null;
	  }
	  return createChainableTypeChecker(validate);
	}

	function createAnyTypeChecker() {
	  return createChainableTypeChecker(emptyFunction.thatReturns(null));
	}

	function createArrayOfTypeChecker(typeChecker) {
	  function validate(props, propName, componentName, location, propFullName) {
	    if (typeof typeChecker !== 'function') {
	      return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
	    }
	    var propValue = props[propName];
	    if (!Array.isArray(propValue)) {
	      var locationName = ReactPropTypeLocationNames[location];
	      var propType = getPropType(propValue);
	      return new PropTypeError('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
	    }
	    for (var i = 0; i < propValue.length; i++) {
	      var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
	      if (error instanceof Error) {
	        return error;
	      }
	    }
	    return null;
	  }
	  return createChainableTypeChecker(validate);
	}

	function createElementTypeChecker() {
	  function validate(props, propName, componentName, location, propFullName) {
	    var propValue = props[propName];
	    if (!ReactElement.isValidElement(propValue)) {
	      var locationName = ReactPropTypeLocationNames[location];
	      var propType = getPropType(propValue);
	      return new PropTypeError('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
	    }
	    return null;
	  }
	  return createChainableTypeChecker(validate);
	}

	function createInstanceTypeChecker(expectedClass) {
	  function validate(props, propName, componentName, location, propFullName) {
	    if (!(props[propName] instanceof expectedClass)) {
	      var locationName = ReactPropTypeLocationNames[location];
	      var expectedClassName = expectedClass.name || ANONYMOUS;
	      var actualClassName = getClassName(props[propName]);
	      return new PropTypeError('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
	    }
	    return null;
	  }
	  return createChainableTypeChecker(validate);
	}

	function createEnumTypeChecker(expectedValues) {
	  if (!Array.isArray(expectedValues)) {
	    process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
	    return emptyFunction.thatReturnsNull;
	  }

	  function validate(props, propName, componentName, location, propFullName) {
	    var propValue = props[propName];
	    for (var i = 0; i < expectedValues.length; i++) {
	      if (is(propValue, expectedValues[i])) {
	        return null;
	      }
	    }

	    var locationName = ReactPropTypeLocationNames[location];
	    var valuesString = JSON.stringify(expectedValues);
	    return new PropTypeError('Invalid ' + locationName + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
	  }
	  return createChainableTypeChecker(validate);
	}

	function createObjectOfTypeChecker(typeChecker) {
	  function validate(props, propName, componentName, location, propFullName) {
	    if (typeof typeChecker !== 'function') {
	      return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
	    }
	    var propValue = props[propName];
	    var propType = getPropType(propValue);
	    if (propType !== 'object') {
	      var locationName = ReactPropTypeLocationNames[location];
	      return new PropTypeError('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
	    }
	    for (var key in propValue) {
	      if (propValue.hasOwnProperty(key)) {
	        var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	        if (error instanceof Error) {
	          return error;
	        }
	      }
	    }
	    return null;
	  }
	  return createChainableTypeChecker(validate);
	}

	function createUnionTypeChecker(arrayOfTypeCheckers) {
	  if (!Array.isArray(arrayOfTypeCheckers)) {
	    process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
	    return emptyFunction.thatReturnsNull;
	  }

	  function validate(props, propName, componentName, location, propFullName) {
	    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	      var checker = arrayOfTypeCheckers[i];
	      if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
	        return null;
	      }
	    }

	    var locationName = ReactPropTypeLocationNames[location];
	    return new PropTypeError('Invalid ' + locationName + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
	  }
	  return createChainableTypeChecker(validate);
	}

	function createNodeChecker() {
	  function validate(props, propName, componentName, location, propFullName) {
	    if (!isNode(props[propName])) {
	      var locationName = ReactPropTypeLocationNames[location];
	      return new PropTypeError('Invalid ' + locationName + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
	    }
	    return null;
	  }
	  return createChainableTypeChecker(validate);
	}

	function createShapeTypeChecker(shapeTypes) {
	  function validate(props, propName, componentName, location, propFullName) {
	    var propValue = props[propName];
	    var propType = getPropType(propValue);
	    if (propType !== 'object') {
	      var locationName = ReactPropTypeLocationNames[location];
	      return new PropTypeError('Invalid ' + locationName + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	    }
	    for (var key in shapeTypes) {
	      var checker = shapeTypes[key];
	      if (!checker) {
	        continue;
	      }
	      var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	      if (error) {
	        return error;
	      }
	    }
	    return null;
	  }
	  return createChainableTypeChecker(validate);
	}

	function isNode(propValue) {
	  switch (typeof propValue === 'undefined' ? 'undefined' : _typeof(propValue)) {
	    case 'number':
	    case 'string':
	    case 'undefined':
	      return true;
	    case 'boolean':
	      return !propValue;
	    case 'object':
	      if (Array.isArray(propValue)) {
	        return propValue.every(isNode);
	      }
	      if (propValue === null || ReactElement.isValidElement(propValue)) {
	        return true;
	      }

	      var iteratorFn = getIteratorFn(propValue);
	      if (iteratorFn) {
	        var iterator = iteratorFn.call(propValue);
	        var step;
	        if (iteratorFn !== propValue.entries) {
	          while (!(step = iterator.next()).done) {
	            if (!isNode(step.value)) {
	              return false;
	            }
	          }
	        } else {
	          // Iterator will provide entry [k,v] tuples rather than values.
	          while (!(step = iterator.next()).done) {
	            var entry = step.value;
	            if (entry) {
	              if (!isNode(entry[1])) {
	                return false;
	              }
	            }
	          }
	        }
	      } else {
	        return false;
	      }

	      return true;
	    default:
	      return false;
	  }
	}

	function isSymbol(propType, propValue) {
	  // Native Symbol.
	  if (propType === 'symbol') {
	    return true;
	  }

	  // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
	  if (propValue['@@toStringTag'] === 'Symbol') {
	    return true;
	  }

	  // Fallback for non-spec compliant Symbols which are polyfilled.
	  if (typeof Symbol === 'function' && propValue instanceof Symbol) {
	    return true;
	  }

	  return false;
	}

	// Equivalent of `typeof` but with special handling for array and regexp.
	function getPropType(propValue) {
	  var propType = typeof propValue === 'undefined' ? 'undefined' : _typeof(propValue);
	  if (Array.isArray(propValue)) {
	    return 'array';
	  }
	  if (propValue instanceof RegExp) {
	    // Old webkits (at least until Android 4.0) return 'function' rather than
	    // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
	    // passes PropTypes.object.
	    return 'object';
	  }
	  if (isSymbol(propType, propValue)) {
	    return 'symbol';
	  }
	  return propType;
	}

	// This handles more types than `getPropType`. Only used for error messages.
	// See `createPrimitiveTypeChecker`.
	function getPreciseType(propValue) {
	  var propType = getPropType(propValue);
	  if (propType === 'object') {
	    if (propValue instanceof Date) {
	      return 'date';
	    } else if (propValue instanceof RegExp) {
	      return 'regexp';
	    }
	  }
	  return propType;
	}

	// Returns class name of the object, if any.
	function getClassName(propValue) {
	  if (!propValue.constructor || !propValue.constructor.name) {
	    return ANONYMOUS;
	  }
	  return propValue.constructor.name;
	}

	module.exports = ReactPropTypes;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 61 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactVersion
	 */

	'use strict';

	module.exports = '15.3.2';

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule onlyChild
	 */
	'use strict';

	var _prodInvariant = __webpack_require__(36);

	var ReactElement = __webpack_require__(38);

	var invariant = __webpack_require__(37);

	/**
	 * Returns the first child in a collection of children and verifies that there
	 * is only one child in the collection.
	 *
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.only
	 *
	 * The current implementation of this function assumes that a single child gets
	 * passed without a wrapper, but the purpose of this helper function is to
	 * abstract away the particular structure of children.
	 *
	 * @param {?object} children Child collection structure.
	 * @return {ReactElement} The first and only `ReactElement` contained in the
	 * structure.
	 */
	function onlyChild(children) {
	  !ReactElement.isValidElement(children) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'React.Children.only expected to receive a single React element child.') : _prodInvariant('143') : void 0;
	  return children;
	}

	module.exports = onlyChild;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _react = __webpack_require__(31);

	exports["default"] = _react.PropTypes.shape({
	  subscribe: _react.PropTypes.func.isRequired,
	  dispatch: _react.PropTypes.func.isRequired,
	  getState: _react.PropTypes.func.isRequired
	});

/***/ },
/* 64 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports["default"] = warning;
	/**
	 * Prints a warning in the console if it exists.
	 *
	 * @param {String} message The warning message.
	 * @returns {void}
	 */
	function warning(message) {
	  /* eslint-disable no-console */
	  if (typeof console !== 'undefined' && typeof console.error === 'function') {
	    console.error(message);
	  }
	  /* eslint-enable no-console */
	  try {
	    // This error was thrown as a convenience so that you can use this stack
	    // to find the callsite that caused this warning to fire.
	    throw new Error(message);
	    /* eslint-disable no-empty */
	  } catch (e) {}
	  /* eslint-enable no-empty */
	}

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};

	exports.__esModule = true;
	exports["default"] = connect;

	var _react = __webpack_require__(31);

	var _storeShape = __webpack_require__(63);

	var _storeShape2 = _interopRequireDefault(_storeShape);

	var _shallowEqual = __webpack_require__(66);

	var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

	var _wrapActionCreators = __webpack_require__(67);

	var _wrapActionCreators2 = _interopRequireDefault(_wrapActionCreators);

	var _warning = __webpack_require__(64);

	var _warning2 = _interopRequireDefault(_warning);

	var _isPlainObject = __webpack_require__(4);

	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

	var _hoistNonReactStatics = __webpack_require__(68);

	var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

	var _invariant = __webpack_require__(69);

	var _invariant2 = _interopRequireDefault(_invariant);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { "default": obj };
	}

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	var defaultMapStateToProps = function defaultMapStateToProps(state) {
	  return {};
	}; // eslint-disable-line no-unused-vars
	var defaultMapDispatchToProps = function defaultMapDispatchToProps(dispatch) {
	  return { dispatch: dispatch };
	};
	var defaultMergeProps = function defaultMergeProps(stateProps, dispatchProps, parentProps) {
	  return _extends({}, parentProps, stateProps, dispatchProps);
	};

	function getDisplayName(WrappedComponent) {
	  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
	}

	var errorObject = { value: null };
	function tryCatch(fn, ctx) {
	  try {
	    return fn.apply(ctx);
	  } catch (e) {
	    errorObject.value = e;
	    return errorObject;
	  }
	}

	// Helps track hot reloading.
	var nextVersion = 0;

	function connect(mapStateToProps, mapDispatchToProps, mergeProps) {
	  var options = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];

	  var shouldSubscribe = Boolean(mapStateToProps);
	  var mapState = mapStateToProps || defaultMapStateToProps;

	  var mapDispatch = undefined;
	  if (typeof mapDispatchToProps === 'function') {
	    mapDispatch = mapDispatchToProps;
	  } else if (!mapDispatchToProps) {
	    mapDispatch = defaultMapDispatchToProps;
	  } else {
	    mapDispatch = (0, _wrapActionCreators2["default"])(mapDispatchToProps);
	  }

	  var finalMergeProps = mergeProps || defaultMergeProps;
	  var _options$pure = options.pure;
	  var pure = _options$pure === undefined ? true : _options$pure;
	  var _options$withRef = options.withRef;
	  var withRef = _options$withRef === undefined ? false : _options$withRef;

	  var checkMergedEquals = pure && finalMergeProps !== defaultMergeProps;

	  // Helps track hot reloading.
	  var version = nextVersion++;

	  return function wrapWithConnect(WrappedComponent) {
	    var connectDisplayName = 'Connect(' + getDisplayName(WrappedComponent) + ')';

	    function checkStateShape(props, methodName) {
	      if (!(0, _isPlainObject2["default"])(props)) {
	        (0, _warning2["default"])(methodName + '() in ' + connectDisplayName + ' must return a plain object. ' + ('Instead received ' + props + '.'));
	      }
	    }

	    function computeMergedProps(stateProps, dispatchProps, parentProps) {
	      var mergedProps = finalMergeProps(stateProps, dispatchProps, parentProps);
	      if (process.env.NODE_ENV !== 'production') {
	        checkStateShape(mergedProps, 'mergeProps');
	      }
	      return mergedProps;
	    }

	    var Connect = function (_Component) {
	      _inherits(Connect, _Component);

	      Connect.prototype.shouldComponentUpdate = function shouldComponentUpdate() {
	        return !pure || this.haveOwnPropsChanged || this.hasStoreStateChanged;
	      };

	      function Connect(props, context) {
	        _classCallCheck(this, Connect);

	        var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

	        _this.version = version;
	        _this.store = props.store || context.store;

	        (0, _invariant2["default"])(_this.store, 'Could not find "store" in either the context or ' + ('props of "' + connectDisplayName + '". ') + 'Either wrap the root component in a <Provider>, ' + ('or explicitly pass "store" as a prop to "' + connectDisplayName + '".'));

	        var storeState = _this.store.getState();
	        _this.state = { storeState: storeState };
	        _this.clearCache();
	        return _this;
	      }

	      Connect.prototype.computeStateProps = function computeStateProps(store, props) {
	        if (!this.finalMapStateToProps) {
	          return this.configureFinalMapState(store, props);
	        }

	        var state = store.getState();
	        var stateProps = this.doStatePropsDependOnOwnProps ? this.finalMapStateToProps(state, props) : this.finalMapStateToProps(state);

	        if (process.env.NODE_ENV !== 'production') {
	          checkStateShape(stateProps, 'mapStateToProps');
	        }
	        return stateProps;
	      };

	      Connect.prototype.configureFinalMapState = function configureFinalMapState(store, props) {
	        var mappedState = mapState(store.getState(), props);
	        var isFactory = typeof mappedState === 'function';

	        this.finalMapStateToProps = isFactory ? mappedState : mapState;
	        this.doStatePropsDependOnOwnProps = this.finalMapStateToProps.length !== 1;

	        if (isFactory) {
	          return this.computeStateProps(store, props);
	        }

	        if (process.env.NODE_ENV !== 'production') {
	          checkStateShape(mappedState, 'mapStateToProps');
	        }
	        return mappedState;
	      };

	      Connect.prototype.computeDispatchProps = function computeDispatchProps(store, props) {
	        if (!this.finalMapDispatchToProps) {
	          return this.configureFinalMapDispatch(store, props);
	        }

	        var dispatch = store.dispatch;

	        var dispatchProps = this.doDispatchPropsDependOnOwnProps ? this.finalMapDispatchToProps(dispatch, props) : this.finalMapDispatchToProps(dispatch);

	        if (process.env.NODE_ENV !== 'production') {
	          checkStateShape(dispatchProps, 'mapDispatchToProps');
	        }
	        return dispatchProps;
	      };

	      Connect.prototype.configureFinalMapDispatch = function configureFinalMapDispatch(store, props) {
	        var mappedDispatch = mapDispatch(store.dispatch, props);
	        var isFactory = typeof mappedDispatch === 'function';

	        this.finalMapDispatchToProps = isFactory ? mappedDispatch : mapDispatch;
	        this.doDispatchPropsDependOnOwnProps = this.finalMapDispatchToProps.length !== 1;

	        if (isFactory) {
	          return this.computeDispatchProps(store, props);
	        }

	        if (process.env.NODE_ENV !== 'production') {
	          checkStateShape(mappedDispatch, 'mapDispatchToProps');
	        }
	        return mappedDispatch;
	      };

	      Connect.prototype.updateStatePropsIfNeeded = function updateStatePropsIfNeeded() {
	        var nextStateProps = this.computeStateProps(this.store, this.props);
	        if (this.stateProps && (0, _shallowEqual2["default"])(nextStateProps, this.stateProps)) {
	          return false;
	        }

	        this.stateProps = nextStateProps;
	        return true;
	      };

	      Connect.prototype.updateDispatchPropsIfNeeded = function updateDispatchPropsIfNeeded() {
	        var nextDispatchProps = this.computeDispatchProps(this.store, this.props);
	        if (this.dispatchProps && (0, _shallowEqual2["default"])(nextDispatchProps, this.dispatchProps)) {
	          return false;
	        }

	        this.dispatchProps = nextDispatchProps;
	        return true;
	      };

	      Connect.prototype.updateMergedPropsIfNeeded = function updateMergedPropsIfNeeded() {
	        var nextMergedProps = computeMergedProps(this.stateProps, this.dispatchProps, this.props);
	        if (this.mergedProps && checkMergedEquals && (0, _shallowEqual2["default"])(nextMergedProps, this.mergedProps)) {
	          return false;
	        }

	        this.mergedProps = nextMergedProps;
	        return true;
	      };

	      Connect.prototype.isSubscribed = function isSubscribed() {
	        return typeof this.unsubscribe === 'function';
	      };

	      Connect.prototype.trySubscribe = function trySubscribe() {
	        if (shouldSubscribe && !this.unsubscribe) {
	          this.unsubscribe = this.store.subscribe(this.handleChange.bind(this));
	          this.handleChange();
	        }
	      };

	      Connect.prototype.tryUnsubscribe = function tryUnsubscribe() {
	        if (this.unsubscribe) {
	          this.unsubscribe();
	          this.unsubscribe = null;
	        }
	      };

	      Connect.prototype.componentDidMount = function componentDidMount() {
	        this.trySubscribe();
	      };

	      Connect.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	        if (!pure || !(0, _shallowEqual2["default"])(nextProps, this.props)) {
	          this.haveOwnPropsChanged = true;
	        }
	      };

	      Connect.prototype.componentWillUnmount = function componentWillUnmount() {
	        this.tryUnsubscribe();
	        this.clearCache();
	      };

	      Connect.prototype.clearCache = function clearCache() {
	        this.dispatchProps = null;
	        this.stateProps = null;
	        this.mergedProps = null;
	        this.haveOwnPropsChanged = true;
	        this.hasStoreStateChanged = true;
	        this.haveStatePropsBeenPrecalculated = false;
	        this.statePropsPrecalculationError = null;
	        this.renderedElement = null;
	        this.finalMapDispatchToProps = null;
	        this.finalMapStateToProps = null;
	      };

	      Connect.prototype.handleChange = function handleChange() {
	        if (!this.unsubscribe) {
	          return;
	        }

	        var storeState = this.store.getState();
	        var prevStoreState = this.state.storeState;
	        if (pure && prevStoreState === storeState) {
	          return;
	        }

	        if (pure && !this.doStatePropsDependOnOwnProps) {
	          var haveStatePropsChanged = tryCatch(this.updateStatePropsIfNeeded, this);
	          if (!haveStatePropsChanged) {
	            return;
	          }
	          if (haveStatePropsChanged === errorObject) {
	            this.statePropsPrecalculationError = errorObject.value;
	          }
	          this.haveStatePropsBeenPrecalculated = true;
	        }

	        this.hasStoreStateChanged = true;
	        this.setState({ storeState: storeState });
	      };

	      Connect.prototype.getWrappedInstance = function getWrappedInstance() {
	        (0, _invariant2["default"])(withRef, 'To access the wrapped instance, you need to specify ' + '{ withRef: true } as the fourth argument of the connect() call.');

	        return this.refs.wrappedInstance;
	      };

	      Connect.prototype.render = function render() {
	        var haveOwnPropsChanged = this.haveOwnPropsChanged;
	        var hasStoreStateChanged = this.hasStoreStateChanged;
	        var haveStatePropsBeenPrecalculated = this.haveStatePropsBeenPrecalculated;
	        var statePropsPrecalculationError = this.statePropsPrecalculationError;
	        var renderedElement = this.renderedElement;

	        this.haveOwnPropsChanged = false;
	        this.hasStoreStateChanged = false;
	        this.haveStatePropsBeenPrecalculated = false;
	        this.statePropsPrecalculationError = null;

	        if (statePropsPrecalculationError) {
	          throw statePropsPrecalculationError;
	        }

	        var shouldUpdateStateProps = true;
	        var shouldUpdateDispatchProps = true;
	        if (pure && renderedElement) {
	          shouldUpdateStateProps = hasStoreStateChanged || haveOwnPropsChanged && this.doStatePropsDependOnOwnProps;
	          shouldUpdateDispatchProps = haveOwnPropsChanged && this.doDispatchPropsDependOnOwnProps;
	        }

	        var haveStatePropsChanged = false;
	        var haveDispatchPropsChanged = false;
	        if (haveStatePropsBeenPrecalculated) {
	          haveStatePropsChanged = true;
	        } else if (shouldUpdateStateProps) {
	          haveStatePropsChanged = this.updateStatePropsIfNeeded();
	        }
	        if (shouldUpdateDispatchProps) {
	          haveDispatchPropsChanged = this.updateDispatchPropsIfNeeded();
	        }

	        var haveMergedPropsChanged = true;
	        if (haveStatePropsChanged || haveDispatchPropsChanged || haveOwnPropsChanged) {
	          haveMergedPropsChanged = this.updateMergedPropsIfNeeded();
	        } else {
	          haveMergedPropsChanged = false;
	        }

	        if (!haveMergedPropsChanged && renderedElement) {
	          return renderedElement;
	        }

	        if (withRef) {
	          this.renderedElement = (0, _react.createElement)(WrappedComponent, _extends({}, this.mergedProps, {
	            ref: 'wrappedInstance'
	          }));
	        } else {
	          this.renderedElement = (0, _react.createElement)(WrappedComponent, this.mergedProps);
	        }

	        return this.renderedElement;
	      };

	      return Connect;
	    }(_react.Component);

	    Connect.displayName = connectDisplayName;
	    Connect.WrappedComponent = WrappedComponent;
	    Connect.contextTypes = {
	      store: _storeShape2["default"]
	    };
	    Connect.propTypes = {
	      store: _storeShape2["default"]
	    };

	    if (process.env.NODE_ENV !== 'production') {
	      Connect.prototype.componentWillUpdate = function componentWillUpdate() {
	        if (this.version === version) {
	          return;
	        }

	        // We are hot reloading!
	        this.version = version;
	        this.trySubscribe();
	        this.clearCache();
	      };
	    }

	    return (0, _hoistNonReactStatics2["default"])(Connect, WrappedComponent);
	  };
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 66 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports["default"] = shallowEqual;
	function shallowEqual(objA, objB) {
	  if (objA === objB) {
	    return true;
	  }

	  var keysA = Object.keys(objA);
	  var keysB = Object.keys(objB);

	  if (keysA.length !== keysB.length) {
	    return false;
	  }

	  // Test for A's keys different from B.
	  var hasOwn = Object.prototype.hasOwnProperty;
	  for (var i = 0; i < keysA.length; i++) {
	    if (!hasOwn.call(objB, keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
	      return false;
	    }
	  }

	  return true;
	}

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports["default"] = wrapActionCreators;

	var _redux = __webpack_require__(1);

	function wrapActionCreators(actionCreators) {
	  return function (dispatch) {
	    return (0, _redux.bindActionCreators)(actionCreators, dispatch);
	  };
	}

/***/ },
/* 68 */
/***/ function(module, exports) {

	/**
	 * Copyright 2015, Yahoo! Inc.
	 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
	 */
	'use strict';

	var REACT_STATICS = {
	    childContextTypes: true,
	    contextTypes: true,
	    defaultProps: true,
	    displayName: true,
	    getDefaultProps: true,
	    mixins: true,
	    propTypes: true,
	    type: true
	};

	var KNOWN_STATICS = {
	    name: true,
	    length: true,
	    prototype: true,
	    caller: true,
	    arguments: true,
	    arity: true
	};

	var isGetOwnPropertySymbolsAvailable = typeof Object.getOwnPropertySymbols === 'function';

	module.exports = function hoistNonReactStatics(targetComponent, sourceComponent, customStatics) {
	    if (typeof sourceComponent !== 'string') {
	        // don't hoist over string (html) components
	        var keys = Object.getOwnPropertyNames(sourceComponent);

	        /* istanbul ignore else */
	        if (isGetOwnPropertySymbolsAvailable) {
	            keys = keys.concat(Object.getOwnPropertySymbols(sourceComponent));
	        }

	        for (var i = 0; i < keys.length; ++i) {
	            if (!REACT_STATICS[keys[i]] && !KNOWN_STATICS[keys[i]] && (!customStatics || !customStatics[keys[i]])) {
	                try {
	                    targetComponent[keys[i]] = sourceComponent[keys[i]];
	                } catch (error) {}
	            }
	        }
	    }

	    return targetComponent;
	};

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */

	var invariant = function invariant(condition, format, a, b, c, d, e, f) {
	  if (process.env.NODE_ENV !== 'production') {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  }

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(format.replace(/%s/g, function () {
	        return args[argIndex++];
	      }));
	      error.name = 'Invariant Violation';
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	};

	module.exports = invariant;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _getfetch = __webpack_require__(71);

	/** 
	 * 请求数据
	 */
	window.request = __webpack_require__(72);

	//获取url参数数组
	window.get = function (url) {
	    if (!url) {
	        var url = window.document.location.href.toString();
	    }
	    var u = url.split("?");
	    if (typeof u[1] == "string") {
	        u = u[1].split("&");
	        var get = {};
	        for (var i in u) {
	            var j = u[i].split("=");
	            get[j[0]] = j[1];
	        }
	        return get;
	    } else {
	        return {};
	    }
	};

	//2个对象合并
	window.extend = function (o, n, override) {
	    for (var p in n) {
	        if (n.hasOwnProperty(p) && (!o.hasOwnProperty(p) || override)) o[p] = n[p];
	    }
	};

	window.GetRequest = function GetRequest() {
	    var url = location.search; //获取url中"?"符后的字串
	    var theRequest = new Object();
	    if (url.indexOf("?") != -1) {
	        var str = url.substr(1);
	        strs = str.split("&");
	        for (var i = 0; i < strs.length; i++) {
	            theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
	        }
	    }
	    return theRequest;
	};

	window.getfetch = _getfetch.getfetch2;
	window.postfetch = _getfetch.postfetch2;

/***/ },
/* 71 */
/***/ function(module, exports) {

	'use strict';

	/**
	 * param 将要转为URL参数字符串的对象
	 * key URL参数字符串的前缀
	 * encode true/false 是否进行URL编码,默认为true
	 * 
	 * return URL参数字符串
	 */

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	exports.getfetch = getfetch;
	exports.postfetch = postfetch;
	exports.getfetch2 = getfetch2;
	exports.postfetch2 = postfetch2;
	var urlEncode = function urlEncode(param, key, encode) {
	    if (param == null) return '';
	    var paramStr = '';
	    var t = typeof param === 'undefined' ? 'undefined' : _typeof(param);
	    if (t == 'string' || t == 'number' || t == 'boolean') {
	        paramStr += '&' + key + '=' + (encode == null || encode ? encodeURIComponent(param) : param);
	    } else {
	        for (var i in param) {
	            var k = key == null ? i : key + (param instanceof Array ? '[' + i + ']' : '.' + i);
	            paramStr += urlEncode(param[i], k, encode);
	        }
	    }
	    return paramStr;
	};

	function status(response) {
	    if (response.ok) {
	        if (response.headers.get('token')) {
	            localStorage.token = response.headers.get('token');
	        }
	        return Promise.resolve(response);
	    } else {
	        return Promise.reject(response);
	    }
	}

	function json(response) {
	    return response.json();
	}

	function catchs(err) {
	    Rd.message(err.status + '错误！' + err.statusText);
	}
	function getfetch(url, param) {
	    var params = urlEncode(param);
	    var Request = {};
	    Request.credentials = 'include';
	    Request.headers = {
	        'token': localStorage.token
	    };
	    return fetch(url + '?' + params, Request).then(status).then(json).catch(catchs);
	}

	function postfetch(url, datas, param) {
	    var data = new FormData();
	    for (var i in datas) {
	        data.append(i, datas[i]);
	    }
	    var params = urlEncode(param);
	    var Request = {};
	    Request.method = 'POST';
	    Request.body = data;
	    Request.headers = {
	        'token': localStorage.token
	    };
	    return fetch(url + '?' + params, Request).then(status).then(json).catch(catchs);
	}

	function getfetch2(url) {
	    var query = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	    return new Promise(function (resolve, reject) {
	        request.get(url).query(query)
	        // .set('Content-Type', 'application/json; charset=utf-8')
	        .set('token', localStorage.token).end(function (err, res) {
	            if (res.ok) {
	                if (res.headers.token) {
	                    localStorage.token = res.headers.token;
	                }
	                resolve(JSON.parse(res.text));
	            } else {
	                reject(err.response);
	            }
	        });
	    }).catch(catchs2);
	}

	function postfetch2(url) {
	    var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	    var query = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

	    return new Promise(function (resolve, reject) {
	        request.post(url).query(query)
	        // .set('Content-Type', 'application/json; charset=utf-8')
	        .set('token', localStorage.token).send(data).end(function (err, res) {
	            if (res.ok) {
	                if (res.headers.token) {
	                    localStorage.token = res.headers.token;
	                }
	                resolve(JSON.parse(res.text));
	            } else {
	                reject(err.response);
	            }
	        });
	    }).catch(catchs2);
	}

	function catchs2(err) {
	    try {
	        var req = JSON.parse(err.text);
	        Rd.message(err.status + '错误！' + req.error);
	    } catch (err) {
	        Rd.message(err.status + '错误！' + err.text);
	    }
	    // let req = JSON.parse(err.text)
	    // Rd.message(err.status + '错误！' + req.error)
	    // Rd.message(err.status + '错误！' + err.text)
	}

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Root reference for iframes.
	 */

	var root;
	if (typeof window !== 'undefined') {
	  // Browser window
	  root = window;
	} else if (typeof self !== 'undefined') {
	  // Web Worker
	  root = self;
	} else {
	  // Other environments
	  console.warn("Using browser-only version of superagent in non-browser environment");
	  root = undefined;
	}

	var Emitter = __webpack_require__(73);
	var requestBase = __webpack_require__(74);
	var isObject = __webpack_require__(75);

	/**
	 * Noop.
	 */

	function noop() {};

	/**
	 * Expose `request`.
	 */

	var request = module.exports = __webpack_require__(76).bind(null, Request);

	/**
	 * Determine XHR.
	 */

	request.getXHR = function () {
	  if (root.XMLHttpRequest && (!root.location || 'file:' != root.location.protocol || !root.ActiveXObject)) {
	    return new XMLHttpRequest();
	  } else {
	    try {
	      return new ActiveXObject('Microsoft.XMLHTTP');
	    } catch (e) {}
	    try {
	      return new ActiveXObject('Msxml2.XMLHTTP.6.0');
	    } catch (e) {}
	    try {
	      return new ActiveXObject('Msxml2.XMLHTTP.3.0');
	    } catch (e) {}
	    try {
	      return new ActiveXObject('Msxml2.XMLHTTP');
	    } catch (e) {}
	  }
	  throw Error("Browser-only verison of superagent could not find XHR");
	};

	/**
	 * Removes leading and trailing whitespace, added to support IE.
	 *
	 * @param {String} s
	 * @return {String}
	 * @api private
	 */

	var trim = ''.trim ? function (s) {
	  return s.trim();
	} : function (s) {
	  return s.replace(/(^\s*|\s*$)/g, '');
	};

	/**
	 * Serialize the given `obj`.
	 *
	 * @param {Object} obj
	 * @return {String}
	 * @api private
	 */

	function serialize(obj) {
	  if (!isObject(obj)) return obj;
	  var pairs = [];
	  for (var key in obj) {
	    pushEncodedKeyValuePair(pairs, key, obj[key]);
	  }
	  return pairs.join('&');
	}

	/**
	 * Helps 'serialize' with serializing arrays.
	 * Mutates the pairs array.
	 *
	 * @param {Array} pairs
	 * @param {String} key
	 * @param {Mixed} val
	 */

	function pushEncodedKeyValuePair(pairs, key, val) {
	  if (val != null) {
	    if (Array.isArray(val)) {
	      val.forEach(function (v) {
	        pushEncodedKeyValuePair(pairs, key, v);
	      });
	    } else if (isObject(val)) {
	      for (var subkey in val) {
	        pushEncodedKeyValuePair(pairs, key + '[' + subkey + ']', val[subkey]);
	      }
	    } else {
	      pairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(val));
	    }
	  } else if (val === null) {
	    pairs.push(encodeURIComponent(key));
	  }
	}

	/**
	 * Expose serialization method.
	 */

	request.serializeObject = serialize;

	/**
	 * Parse the given x-www-form-urlencoded `str`.
	 *
	 * @param {String} str
	 * @return {Object}
	 * @api private
	 */

	function parseString(str) {
	  var obj = {};
	  var pairs = str.split('&');
	  var pair;
	  var pos;

	  for (var i = 0, len = pairs.length; i < len; ++i) {
	    pair = pairs[i];
	    pos = pair.indexOf('=');
	    if (pos == -1) {
	      obj[decodeURIComponent(pair)] = '';
	    } else {
	      obj[decodeURIComponent(pair.slice(0, pos))] = decodeURIComponent(pair.slice(pos + 1));
	    }
	  }

	  return obj;
	}

	/**
	 * Expose parser.
	 */

	request.parseString = parseString;

	/**
	 * Default MIME type map.
	 *
	 *     superagent.types.xml = 'application/xml';
	 *
	 */

	request.types = {
	  html: 'text/html',
	  json: 'application/json',
	  xml: 'application/xml',
	  urlencoded: 'application/x-www-form-urlencoded',
	  'form': 'application/x-www-form-urlencoded',
	  'form-data': 'application/x-www-form-urlencoded'
	};

	/**
	 * Default serialization map.
	 *
	 *     superagent.serialize['application/xml'] = function(obj){
	 *       return 'generated xml here';
	 *     };
	 *
	 */

	request.serialize = {
	  'application/x-www-form-urlencoded': serialize,
	  'application/json': JSON.stringify
	};

	/**
	 * Default parsers.
	 *
	 *     superagent.parse['application/xml'] = function(str){
	 *       return { object parsed from str };
	 *     };
	 *
	 */

	request.parse = {
	  'application/x-www-form-urlencoded': parseString,
	  'application/json': JSON.parse
	};

	/**
	 * Parse the given header `str` into
	 * an object containing the mapped fields.
	 *
	 * @param {String} str
	 * @return {Object}
	 * @api private
	 */

	function parseHeader(str) {
	  var lines = str.split(/\r?\n/);
	  var fields = {};
	  var index;
	  var line;
	  var field;
	  var val;

	  lines.pop(); // trailing CRLF

	  for (var i = 0, len = lines.length; i < len; ++i) {
	    line = lines[i];
	    index = line.indexOf(':');
	    field = line.slice(0, index).toLowerCase();
	    val = trim(line.slice(index + 1));
	    fields[field] = val;
	  }

	  return fields;
	}

	/**
	 * Check if `mime` is json or has +json structured syntax suffix.
	 *
	 * @param {String} mime
	 * @return {Boolean}
	 * @api private
	 */

	function isJSON(mime) {
	  return (/[\/+]json\b/.test(mime)
	  );
	}

	/**
	 * Return the mime type for the given `str`.
	 *
	 * @param {String} str
	 * @return {String}
	 * @api private
	 */

	function type(str) {
	  return str.split(/ *; */).shift();
	};

	/**
	 * Return header field parameters.
	 *
	 * @param {String} str
	 * @return {Object}
	 * @api private
	 */

	function params(str) {
	  return str.split(/ *; */).reduce(function (obj, str) {
	    var parts = str.split(/ *= */),
	        key = parts.shift(),
	        val = parts.shift();

	    if (key && val) obj[key] = val;
	    return obj;
	  }, {});
	};

	/**
	 * Initialize a new `Response` with the given `xhr`.
	 *
	 *  - set flags (.ok, .error, etc)
	 *  - parse header
	 *
	 * Examples:
	 *
	 *  Aliasing `superagent` as `request` is nice:
	 *
	 *      request = superagent;
	 *
	 *  We can use the promise-like API, or pass callbacks:
	 *
	 *      request.get('/').end(function(res){});
	 *      request.get('/', function(res){});
	 *
	 *  Sending data can be chained:
	 *
	 *      request
	 *        .post('/user')
	 *        .send({ name: 'tj' })
	 *        .end(function(res){});
	 *
	 *  Or passed to `.send()`:
	 *
	 *      request
	 *        .post('/user')
	 *        .send({ name: 'tj' }, function(res){});
	 *
	 *  Or passed to `.post()`:
	 *
	 *      request
	 *        .post('/user', { name: 'tj' })
	 *        .end(function(res){});
	 *
	 * Or further reduced to a single call for simple cases:
	 *
	 *      request
	 *        .post('/user', { name: 'tj' }, function(res){});
	 *
	 * @param {XMLHTTPRequest} xhr
	 * @param {Object} options
	 * @api private
	 */

	function Response(req, options) {
	  options = options || {};
	  this.req = req;
	  this.xhr = this.req.xhr;
	  // responseText is accessible only if responseType is '' or 'text' and on older browsers
	  this.text = this.req.method != 'HEAD' && (this.xhr.responseType === '' || this.xhr.responseType === 'text') || typeof this.xhr.responseType === 'undefined' ? this.xhr.responseText : null;
	  this.statusText = this.req.xhr.statusText;
	  this._setStatusProperties(this.xhr.status);
	  this.header = this.headers = parseHeader(this.xhr.getAllResponseHeaders());
	  // getAllResponseHeaders sometimes falsely returns "" for CORS requests, but
	  // getResponseHeader still works. so we get content-type even if getting
	  // other headers fails.
	  this.header['content-type'] = this.xhr.getResponseHeader('content-type');
	  this._setHeaderProperties(this.header);
	  this.body = this.req.method != 'HEAD' ? this._parseBody(this.text ? this.text : this.xhr.response) : null;
	}

	/**
	 * Get case-insensitive `field` value.
	 *
	 * @param {String} field
	 * @return {String}
	 * @api public
	 */

	Response.prototype.get = function (field) {
	  return this.header[field.toLowerCase()];
	};

	/**
	 * Set header related properties:
	 *
	 *   - `.type` the content type without params
	 *
	 * A response of "Content-Type: text/plain; charset=utf-8"
	 * will provide you with a `.type` of "text/plain".
	 *
	 * @param {Object} header
	 * @api private
	 */

	Response.prototype._setHeaderProperties = function (header) {
	  // content-type
	  var ct = this.header['content-type'] || '';
	  this.type = type(ct);

	  // params
	  var obj = params(ct);
	  for (var key in obj) {
	    this[key] = obj[key];
	  }
	};

	/**
	 * Parse the given body `str`.
	 *
	 * Used for auto-parsing of bodies. Parsers
	 * are defined on the `superagent.parse` object.
	 *
	 * @param {String} str
	 * @return {Mixed}
	 * @api private
	 */

	Response.prototype._parseBody = function (str) {
	  var parse = request.parse[this.type];
	  if (!parse && isJSON(this.type)) {
	    parse = request.parse['application/json'];
	  }
	  return parse && str && (str.length || str instanceof Object) ? parse(str) : null;
	};

	/**
	 * Set flags such as `.ok` based on `status`.
	 *
	 * For example a 2xx response will give you a `.ok` of __true__
	 * whereas 5xx will be __false__ and `.error` will be __true__. The
	 * `.clientError` and `.serverError` are also available to be more
	 * specific, and `.statusType` is the class of error ranging from 1..5
	 * sometimes useful for mapping respond colors etc.
	 *
	 * "sugar" properties are also defined for common cases. Currently providing:
	 *
	 *   - .noContent
	 *   - .badRequest
	 *   - .unauthorized
	 *   - .notAcceptable
	 *   - .notFound
	 *
	 * @param {Number} status
	 * @api private
	 */

	Response.prototype._setStatusProperties = function (status) {
	  // handle IE9 bug: http://stackoverflow.com/questions/10046972/msie-returns-status-code-of-1223-for-ajax-request
	  if (status === 1223) {
	    status = 204;
	  }

	  var type = status / 100 | 0;

	  // status / class
	  this.status = this.statusCode = status;
	  this.statusType = type;

	  // basics
	  this.info = 1 == type;
	  this.ok = 2 == type;
	  this.clientError = 4 == type;
	  this.serverError = 5 == type;
	  this.error = 4 == type || 5 == type ? this.toError() : false;

	  // sugar
	  this.accepted = 202 == status;
	  this.noContent = 204 == status;
	  this.badRequest = 400 == status;
	  this.unauthorized = 401 == status;
	  this.notAcceptable = 406 == status;
	  this.notFound = 404 == status;
	  this.forbidden = 403 == status;
	};

	/**
	 * Return an `Error` representative of this response.
	 *
	 * @return {Error}
	 * @api public
	 */

	Response.prototype.toError = function () {
	  var req = this.req;
	  var method = req.method;
	  var url = req.url;

	  var msg = 'cannot ' + method + ' ' + url + ' (' + this.status + ')';
	  var err = new Error(msg);
	  err.status = this.status;
	  err.method = method;
	  err.url = url;

	  return err;
	};

	/**
	 * Expose `Response`.
	 */

	request.Response = Response;

	/**
	 * Initialize a new `Request` with the given `method` and `url`.
	 *
	 * @param {String} method
	 * @param {String} url
	 * @api public
	 */

	function Request(method, url) {
	  var self = this;
	  this._query = this._query || [];
	  this.method = method;
	  this.url = url;
	  this.header = {}; // preserves header name case
	  this._header = {}; // coerces header names to lowercase
	  this.on('end', function () {
	    var err = null;
	    var res = null;

	    try {
	      res = new Response(self);
	    } catch (e) {
	      err = new Error('Parser is unable to parse the response');
	      err.parse = true;
	      err.original = e;
	      // issue #675: return the raw response if the response parsing fails
	      err.rawResponse = self.xhr && self.xhr.responseText ? self.xhr.responseText : null;
	      // issue #876: return the http status code if the response parsing fails
	      err.statusCode = self.xhr && self.xhr.status ? self.xhr.status : null;
	      return self.callback(err);
	    }

	    self.emit('response', res);

	    var new_err;
	    try {
	      if (res.status < 200 || res.status >= 300) {
	        new_err = new Error(res.statusText || 'Unsuccessful HTTP response');
	        new_err.original = err;
	        new_err.response = res;
	        new_err.status = res.status;
	      }
	    } catch (e) {
	      new_err = e; // #985 touching res may cause INVALID_STATE_ERR on old Android
	    }

	    // #1000 don't catch errors from the callback to avoid double calling it
	    if (new_err) {
	      self.callback(new_err, res);
	    } else {
	      self.callback(null, res);
	    }
	  });
	}

	/**
	 * Mixin `Emitter` and `requestBase`.
	 */

	Emitter(Request.prototype);
	for (var key in requestBase) {
	  Request.prototype[key] = requestBase[key];
	}

	/**
	 * Set Content-Type to `type`, mapping values from `request.types`.
	 *
	 * Examples:
	 *
	 *      superagent.types.xml = 'application/xml';
	 *
	 *      request.post('/')
	 *        .type('xml')
	 *        .send(xmlstring)
	 *        .end(callback);
	 *
	 *      request.post('/')
	 *        .type('application/xml')
	 *        .send(xmlstring)
	 *        .end(callback);
	 *
	 * @param {String} type
	 * @return {Request} for chaining
	 * @api public
	 */

	Request.prototype.type = function (type) {
	  this.set('Content-Type', request.types[type] || type);
	  return this;
	};

	/**
	 * Set responseType to `val`. Presently valid responseTypes are 'blob' and
	 * 'arraybuffer'.
	 *
	 * Examples:
	 *
	 *      req.get('/')
	 *        .responseType('blob')
	 *        .end(callback);
	 *
	 * @param {String} val
	 * @return {Request} for chaining
	 * @api public
	 */

	Request.prototype.responseType = function (val) {
	  this._responseType = val;
	  return this;
	};

	/**
	 * Set Accept to `type`, mapping values from `request.types`.
	 *
	 * Examples:
	 *
	 *      superagent.types.json = 'application/json';
	 *
	 *      request.get('/agent')
	 *        .accept('json')
	 *        .end(callback);
	 *
	 *      request.get('/agent')
	 *        .accept('application/json')
	 *        .end(callback);
	 *
	 * @param {String} accept
	 * @return {Request} for chaining
	 * @api public
	 */

	Request.prototype.accept = function (type) {
	  this.set('Accept', request.types[type] || type);
	  return this;
	};

	/**
	 * Set Authorization field value with `user` and `pass`.
	 *
	 * @param {String} user
	 * @param {String} pass
	 * @param {Object} options with 'type' property 'auto' or 'basic' (default 'basic')
	 * @return {Request} for chaining
	 * @api public
	 */

	Request.prototype.auth = function (user, pass, options) {
	  if (!options) {
	    options = {
	      type: 'basic'
	    };
	  }

	  switch (options.type) {
	    case 'basic':
	      var str = btoa(user + ':' + pass);
	      this.set('Authorization', 'Basic ' + str);
	      break;

	    case 'auto':
	      this.username = user;
	      this.password = pass;
	      break;
	  }
	  return this;
	};

	/**
	* Add query-string `val`.
	*
	* Examples:
	*
	*   request.get('/shoes')
	*     .query('size=10')
	*     .query({ color: 'blue' })
	*
	* @param {Object|String} val
	* @return {Request} for chaining
	* @api public
	*/

	Request.prototype.query = function (val) {
	  if ('string' != typeof val) val = serialize(val);
	  if (val) this._query.push(val);
	  return this;
	};

	/**
	 * Queue the given `file` as an attachment to the specified `field`,
	 * with optional `filename`.
	 *
	 * ``` js
	 * request.post('/upload')
	 *   .attach('content', new Blob(['<a id="a"><b id="b">hey!</b></a>'], { type: "text/html"}))
	 *   .end(callback);
	 * ```
	 *
	 * @param {String} field
	 * @param {Blob|File} file
	 * @param {String} filename
	 * @return {Request} for chaining
	 * @api public
	 */

	Request.prototype.attach = function (field, file, filename) {
	  this._getFormData().append(field, file, filename || file.name);
	  return this;
	};

	Request.prototype._getFormData = function () {
	  if (!this._formData) {
	    this._formData = new root.FormData();
	  }
	  return this._formData;
	};

	/**
	 * Invoke the callback with `err` and `res`
	 * and handle arity check.
	 *
	 * @param {Error} err
	 * @param {Response} res
	 * @api private
	 */

	Request.prototype.callback = function (err, res) {
	  var fn = this._callback;
	  this.clearTimeout();
	  fn(err, res);
	};

	/**
	 * Invoke callback with x-domain error.
	 *
	 * @api private
	 */

	Request.prototype.crossDomainError = function () {
	  var err = new Error('Request has been terminated\nPossible causes: the network is offline, Origin is not allowed by Access-Control-Allow-Origin, the page is being unloaded, etc.');
	  err.crossDomain = true;

	  err.status = this.status;
	  err.method = this.method;
	  err.url = this.url;

	  this.callback(err);
	};

	/**
	 * Invoke callback with timeout error.
	 *
	 * @api private
	 */

	Request.prototype._timeoutError = function () {
	  var timeout = this._timeout;
	  var err = new Error('timeout of ' + timeout + 'ms exceeded');
	  err.timeout = timeout;
	  this.callback(err);
	};

	/**
	 * Compose querystring to append to req.url
	 *
	 * @api private
	 */

	Request.prototype._appendQueryString = function () {
	  var query = this._query.join('&');
	  if (query) {
	    this.url += ~this.url.indexOf('?') ? '&' + query : '?' + query;
	  }
	};

	/**
	 * Initiate request, invoking callback `fn(res)`
	 * with an instanceof `Response`.
	 *
	 * @param {Function} fn
	 * @return {Request} for chaining
	 * @api public
	 */

	Request.prototype.end = function (fn) {
	  var self = this;
	  var xhr = this.xhr = request.getXHR();
	  var timeout = this._timeout;
	  var data = this._formData || this._data;

	  // store callback
	  this._callback = fn || noop;

	  // state change
	  xhr.onreadystatechange = function () {
	    if (4 != xhr.readyState) return;

	    // In IE9, reads to any property (e.g. status) off of an aborted XHR will
	    // result in the error "Could not complete the operation due to error c00c023f"
	    var status;
	    try {
	      status = xhr.status;
	    } catch (e) {
	      status = 0;
	    }

	    if (0 == status) {
	      if (self.timedout) return self._timeoutError();
	      if (self._aborted) return;
	      return self.crossDomainError();
	    }
	    self.emit('end');
	  };

	  // progress
	  var handleProgress = function handleProgress(direction, e) {
	    if (e.total > 0) {
	      e.percent = e.loaded / e.total * 100;
	    }
	    e.direction = direction;
	    self.emit('progress', e);
	  };
	  if (this.hasListeners('progress')) {
	    try {
	      xhr.onprogress = handleProgress.bind(null, 'download');
	      if (xhr.upload) {
	        xhr.upload.onprogress = handleProgress.bind(null, 'upload');
	      }
	    } catch (e) {
	      // Accessing xhr.upload fails in IE from a web worker, so just pretend it doesn't exist.
	      // Reported here:
	      // https://connect.microsoft.com/IE/feedback/details/837245/xmlhttprequest-upload-throws-invalid-argument-when-used-from-web-worker-context
	    }
	  }

	  // timeout
	  if (timeout && !this._timer) {
	    this._timer = setTimeout(function () {
	      self.timedout = true;
	      self.abort();
	    }, timeout);
	  }

	  // querystring
	  this._appendQueryString();

	  // initiate request
	  if (this.username && this.password) {
	    xhr.open(this.method, this.url, true, this.username, this.password);
	  } else {
	    xhr.open(this.method, this.url, true);
	  }

	  // CORS
	  if (this._withCredentials) xhr.withCredentials = true;

	  // body
	  if ('GET' != this.method && 'HEAD' != this.method && 'string' != typeof data && !this._isHost(data)) {
	    // serialize stuff
	    var contentType = this._header['content-type'];
	    var serialize = this._serializer || request.serialize[contentType ? contentType.split(';')[0] : ''];
	    if (!serialize && isJSON(contentType)) serialize = request.serialize['application/json'];
	    if (serialize) data = serialize(data);
	  }

	  // set header fields
	  for (var field in this.header) {
	    if (null == this.header[field]) continue;
	    xhr.setRequestHeader(field, this.header[field]);
	  }

	  if (this._responseType) {
	    xhr.responseType = this._responseType;
	  }

	  // send stuff
	  this.emit('request', this);

	  // IE11 xhr.send(undefined) sends 'undefined' string as POST payload (instead of nothing)
	  // We need null here if data is undefined
	  xhr.send(typeof data !== 'undefined' ? data : null);
	  return this;
	};

	/**
	 * Expose `Request`.
	 */

	request.Request = Request;

	/**
	 * GET `url` with optional callback `fn(res)`.
	 *
	 * @param {String} url
	 * @param {Mixed|Function} [data] or fn
	 * @param {Function} [fn]
	 * @return {Request}
	 * @api public
	 */

	request.get = function (url, data, fn) {
	  var req = request('GET', url);
	  if ('function' == typeof data) fn = data, data = null;
	  if (data) req.query(data);
	  if (fn) req.end(fn);
	  return req;
	};

	/**
	 * HEAD `url` with optional callback `fn(res)`.
	 *
	 * @param {String} url
	 * @param {Mixed|Function} [data] or fn
	 * @param {Function} [fn]
	 * @return {Request}
	 * @api public
	 */

	request.head = function (url, data, fn) {
	  var req = request('HEAD', url);
	  if ('function' == typeof data) fn = data, data = null;
	  if (data) req.send(data);
	  if (fn) req.end(fn);
	  return req;
	};

	/**
	 * OPTIONS query to `url` with optional callback `fn(res)`.
	 *
	 * @param {String} url
	 * @param {Mixed|Function} [data] or fn
	 * @param {Function} [fn]
	 * @return {Request}
	 * @api public
	 */

	request.options = function (url, data, fn) {
	  var req = request('OPTIONS', url);
	  if ('function' == typeof data) fn = data, data = null;
	  if (data) req.send(data);
	  if (fn) req.end(fn);
	  return req;
	};

	/**
	 * DELETE `url` with optional callback `fn(res)`.
	 *
	 * @param {String} url
	 * @param {Function} [fn]
	 * @return {Request}
	 * @api public
	 */

	function del(url, fn) {
	  var req = request('DELETE', url);
	  if (fn) req.end(fn);
	  return req;
	};

	request['del'] = del;
	request['delete'] = del;

	/**
	 * PATCH `url` with optional `data` and callback `fn(res)`.
	 *
	 * @param {String} url
	 * @param {Mixed} [data]
	 * @param {Function} [fn]
	 * @return {Request}
	 * @api public
	 */

	request.patch = function (url, data, fn) {
	  var req = request('PATCH', url);
	  if ('function' == typeof data) fn = data, data = null;
	  if (data) req.send(data);
	  if (fn) req.end(fn);
	  return req;
	};

	/**
	 * POST `url` with optional `data` and callback `fn(res)`.
	 *
	 * @param {String} url
	 * @param {Mixed} [data]
	 * @param {Function} [fn]
	 * @return {Request}
	 * @api public
	 */

	request.post = function (url, data, fn) {
	  var req = request('POST', url);
	  if ('function' == typeof data) fn = data, data = null;
	  if (data) req.send(data);
	  if (fn) req.end(fn);
	  return req;
	};

	/**
	 * PUT `url` with optional `data` and callback `fn(res)`.
	 *
	 * @param {String} url
	 * @param {Mixed|Function} [data] or fn
	 * @param {Function} [fn]
	 * @return {Request}
	 * @api public
	 */

	request.put = function (url, data, fn) {
	  var req = request('PUT', url);
	  if ('function' == typeof data) fn = data, data = null;
	  if (data) req.send(data);
	  if (fn) req.end(fn);
	  return req;
	};

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Expose `Emitter`.
	 */

	if (true) {
	  module.exports = Emitter;
	}

	/**
	 * Initialize a new `Emitter`.
	 *
	 * @api public
	 */

	function Emitter(obj) {
	  if (obj) return mixin(obj);
	};

	/**
	 * Mixin the emitter properties.
	 *
	 * @param {Object} obj
	 * @return {Object}
	 * @api private
	 */

	function mixin(obj) {
	  for (var key in Emitter.prototype) {
	    obj[key] = Emitter.prototype[key];
	  }
	  return obj;
	}

	/**
	 * Listen on the given `event` with `fn`.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */

	Emitter.prototype.on = Emitter.prototype.addEventListener = function (event, fn) {
	  this._callbacks = this._callbacks || {};
	  (this._callbacks['$' + event] = this._callbacks['$' + event] || []).push(fn);
	  return this;
	};

	/**
	 * Adds an `event` listener that will be invoked a single
	 * time then automatically removed.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */

	Emitter.prototype.once = function (event, fn) {
	  function on() {
	    this.off(event, on);
	    fn.apply(this, arguments);
	  }

	  on.fn = fn;
	  this.on(event, on);
	  return this;
	};

	/**
	 * Remove the given callback for `event` or all
	 * registered callbacks.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */

	Emitter.prototype.off = Emitter.prototype.removeListener = Emitter.prototype.removeAllListeners = Emitter.prototype.removeEventListener = function (event, fn) {
	  this._callbacks = this._callbacks || {};

	  // all
	  if (0 == arguments.length) {
	    this._callbacks = {};
	    return this;
	  }

	  // specific event
	  var callbacks = this._callbacks['$' + event];
	  if (!callbacks) return this;

	  // remove all handlers
	  if (1 == arguments.length) {
	    delete this._callbacks['$' + event];
	    return this;
	  }

	  // remove specific handler
	  var cb;
	  for (var i = 0; i < callbacks.length; i++) {
	    cb = callbacks[i];
	    if (cb === fn || cb.fn === fn) {
	      callbacks.splice(i, 1);
	      break;
	    }
	  }
	  return this;
	};

	/**
	 * Emit `event` with the given args.
	 *
	 * @param {String} event
	 * @param {Mixed} ...
	 * @return {Emitter}
	 */

	Emitter.prototype.emit = function (event) {
	  this._callbacks = this._callbacks || {};
	  var args = [].slice.call(arguments, 1),
	      callbacks = this._callbacks['$' + event];

	  if (callbacks) {
	    callbacks = callbacks.slice(0);
	    for (var i = 0, len = callbacks.length; i < len; ++i) {
	      callbacks[i].apply(this, args);
	    }
	  }

	  return this;
	};

	/**
	 * Return array of callbacks for `event`.
	 *
	 * @param {String} event
	 * @return {Array}
	 * @api public
	 */

	Emitter.prototype.listeners = function (event) {
	  this._callbacks = this._callbacks || {};
	  return this._callbacks['$' + event] || [];
	};

	/**
	 * Check if this emitter has `event` handlers.
	 *
	 * @param {String} event
	 * @return {Boolean}
	 * @api public
	 */

	Emitter.prototype.hasListeners = function (event) {
	  return !!this.listeners(event).length;
	};

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Module of mixed-in functions shared between node and client code
	 */
	var isObject = __webpack_require__(75);

	/**
	 * Clear previous timeout.
	 *
	 * @return {Request} for chaining
	 * @api public
	 */

	exports.clearTimeout = function _clearTimeout() {
	  this._timeout = 0;
	  clearTimeout(this._timer);
	  return this;
	};

	/**
	 * Override default response body parser
	 *
	 * This function will be called to convert incoming data into request.body
	 *
	 * @param {Function}
	 * @api public
	 */

	exports.parse = function parse(fn) {
	  this._parser = fn;
	  return this;
	};

	/**
	 * Override default request body serializer
	 *
	 * This function will be called to convert data set via .send or .attach into payload to send
	 *
	 * @param {Function}
	 * @api public
	 */

	exports.serialize = function serialize(fn) {
	  this._serializer = fn;
	  return this;
	};

	/**
	 * Set timeout to `ms`.
	 *
	 * @param {Number} ms
	 * @return {Request} for chaining
	 * @api public
	 */

	exports.timeout = function timeout(ms) {
	  this._timeout = ms;
	  return this;
	};

	/**
	 * Promise support
	 *
	 * @param {Function} resolve
	 * @param {Function} reject
	 * @return {Request}
	 */

	exports.then = function then(resolve, reject) {
	  if (!this._fullfilledPromise) {
	    var self = this;
	    this._fullfilledPromise = new Promise(function (innerResolve, innerReject) {
	      self.end(function (err, res) {
	        if (err) innerReject(err);else innerResolve(res);
	      });
	    });
	  }
	  return this._fullfilledPromise.then(resolve, reject);
	};

	exports.catch = function (cb) {
	  return this.then(undefined, cb);
	};

	/**
	 * Allow for extension
	 */

	exports.use = function use(fn) {
	  fn(this);
	  return this;
	};

	/**
	 * Get request header `field`.
	 * Case-insensitive.
	 *
	 * @param {String} field
	 * @return {String}
	 * @api public
	 */

	exports.get = function (field) {
	  return this._header[field.toLowerCase()];
	};

	/**
	 * Get case-insensitive header `field` value.
	 * This is a deprecated internal API. Use `.get(field)` instead.
	 *
	 * (getHeader is no longer used internally by the superagent code base)
	 *
	 * @param {String} field
	 * @return {String}
	 * @api private
	 * @deprecated
	 */

	exports.getHeader = exports.get;

	/**
	 * Set header `field` to `val`, or multiple fields with one object.
	 * Case-insensitive.
	 *
	 * Examples:
	 *
	 *      req.get('/')
	 *        .set('Accept', 'application/json')
	 *        .set('X-API-Key', 'foobar')
	 *        .end(callback);
	 *
	 *      req.get('/')
	 *        .set({ Accept: 'application/json', 'X-API-Key': 'foobar' })
	 *        .end(callback);
	 *
	 * @param {String|Object} field
	 * @param {String} val
	 * @return {Request} for chaining
	 * @api public
	 */

	exports.set = function (field, val) {
	  if (isObject(field)) {
	    for (var key in field) {
	      this.set(key, field[key]);
	    }
	    return this;
	  }
	  this._header[field.toLowerCase()] = val;
	  this.header[field] = val;
	  return this;
	};

	/**
	 * Remove header `field`.
	 * Case-insensitive.
	 *
	 * Example:
	 *
	 *      req.get('/')
	 *        .unset('User-Agent')
	 *        .end(callback);
	 *
	 * @param {String} field
	 */
	exports.unset = function (field) {
	  delete this._header[field.toLowerCase()];
	  delete this.header[field];
	  return this;
	};

	/**
	 * Write the field `name` and `val`, or multiple fields with one object
	 * for "multipart/form-data" request bodies.
	 *
	 * ``` js
	 * request.post('/upload')
	 *   .field('foo', 'bar')
	 *   .end(callback);
	 *
	 * request.post('/upload')
	 *   .field({ foo: 'bar', baz: 'qux' })
	 *   .end(callback);
	 * ```
	 *
	 * @param {String|Object} name
	 * @param {String|Blob|File|Buffer|fs.ReadStream} val
	 * @return {Request} for chaining
	 * @api public
	 */
	exports.field = function (name, val) {

	  // name should be either a string or an object.
	  if (null === name || undefined === name) {
	    throw new Error('.field(name, val) name can not be empty');
	  }

	  if (isObject(name)) {
	    for (var key in name) {
	      this.field(key, name[key]);
	    }
	    return this;
	  }

	  // val should be defined now
	  if (null === val || undefined === val) {
	    throw new Error('.field(name, val) val can not be empty');
	  }
	  this._getFormData().append(name, val);
	  return this;
	};

	/**
	 * Abort the request, and clear potential timeout.
	 *
	 * @return {Request}
	 * @api public
	 */
	exports.abort = function () {
	  if (this._aborted) {
	    return this;
	  }
	  this._aborted = true;
	  this.xhr && this.xhr.abort(); // browser
	  this.req && this.req.abort(); // node
	  this.clearTimeout();
	  this.emit('abort');
	  return this;
	};

	/**
	 * Enable transmission of cookies with x-domain requests.
	 *
	 * Note that for this to work the origin must not be
	 * using "Access-Control-Allow-Origin" with a wildcard,
	 * and also must set "Access-Control-Allow-Credentials"
	 * to "true".
	 *
	 * @api public
	 */

	exports.withCredentials = function () {
	  // This is browser-only functionality. Node side is no-op.
	  this._withCredentials = true;
	  return this;
	};

	/**
	 * Set the max redirects to `n`. Does noting in browser XHR implementation.
	 *
	 * @param {Number} n
	 * @return {Request} for chaining
	 * @api public
	 */

	exports.redirects = function (n) {
	  this._maxRedirects = n;
	  return this;
	};

	/**
	 * Convert to a plain javascript object (not JSON string) of scalar properties.
	 * Note as this method is designed to return a useful non-this value,
	 * it cannot be chained.
	 *
	 * @return {Object} describing method, url, and data of this request
	 * @api public
	 */

	exports.toJSON = function () {
	  return {
	    method: this.method,
	    url: this.url,
	    data: this._data,
	    headers: this._header
	  };
	};

	/**
	 * Check if `obj` is a host object,
	 * we don't want to serialize these :)
	 *
	 * TODO: future proof, move to compoent land
	 *
	 * @param {Object} obj
	 * @return {Boolean}
	 * @api private
	 */

	exports._isHost = function _isHost(obj) {
	  var str = {}.toString.call(obj);

	  switch (str) {
	    case '[object File]':
	    case '[object Blob]':
	    case '[object FormData]':
	      return true;
	    default:
	      return false;
	  }
	};

	/**
	 * Send `data` as the request body, defaulting the `.type()` to "json" when
	 * an object is given.
	 *
	 * Examples:
	 *
	 *       // manual json
	 *       request.post('/user')
	 *         .type('json')
	 *         .send('{"name":"tj"}')
	 *         .end(callback)
	 *
	 *       // auto json
	 *       request.post('/user')
	 *         .send({ name: 'tj' })
	 *         .end(callback)
	 *
	 *       // manual x-www-form-urlencoded
	 *       request.post('/user')
	 *         .type('form')
	 *         .send('name=tj')
	 *         .end(callback)
	 *
	 *       // auto x-www-form-urlencoded
	 *       request.post('/user')
	 *         .type('form')
	 *         .send({ name: 'tj' })
	 *         .end(callback)
	 *
	 *       // defaults to x-www-form-urlencoded
	 *      request.post('/user')
	 *        .send('name=tobi')
	 *        .send('species=ferret')
	 *        .end(callback)
	 *
	 * @param {String|Object} data
	 * @return {Request} for chaining
	 * @api public
	 */

	exports.send = function (data) {
	  var obj = isObject(data);
	  var type = this._header['content-type'];

	  // merge
	  if (obj && isObject(this._data)) {
	    for (var key in data) {
	      this._data[key] = data[key];
	    }
	  } else if ('string' == typeof data) {
	    // default to x-www-form-urlencoded
	    if (!type) this.type('form');
	    type = this._header['content-type'];
	    if ('application/x-www-form-urlencoded' == type) {
	      this._data = this._data ? this._data + '&' + data : data;
	    } else {
	      this._data = (this._data || '') + data;
	    }
	  } else {
	    this._data = data;
	  }

	  if (!obj || this._isHost(data)) return this;

	  // default to json
	  if (!type) this.type('json');
	  return this;
	};

/***/ },
/* 75 */
/***/ function(module, exports) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	/**
	 * Check if `obj` is an object.
	 *
	 * @param {Object} obj
	 * @return {Boolean}
	 * @api private
	 */

	function isObject(obj) {
	  return null !== obj && 'object' === (typeof obj === 'undefined' ? 'undefined' : _typeof(obj));
	}

	module.exports = isObject;

/***/ },
/* 76 */
/***/ function(module, exports) {

	'use strict';

	// The node and browser modules expose versions of this with the
	// appropriate constructor function bound as first argument
	/**
	 * Issue a request:
	 *
	 * Examples:
	 *
	 *    request('GET', '/users').end(callback)
	 *    request('/users').end(callback)
	 *    request('/users', callback)
	 *
	 * @param {String} method
	 * @param {String|Function} url or callback
	 * @return {Request}
	 * @api public
	 */

	function request(RequestConstructor, method, url) {
	  // callback
	  if ('function' == typeof url) {
	    return new RequestConstructor('GET', method).end(url);
	  }

	  // url first
	  if (2 == arguments.length) {
	    return new RequestConstructor('GET', method);
	  }

	  return new RequestConstructor(method, url);
	}

	module.exports = request;

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _config = __webpack_require__(78);

	var _comments = __webpack_require__(79);

	var _user = __webpack_require__(80);

	var _pagedata = __webpack_require__(81);

	var _message = __webpack_require__(82);

	module.exports = {
	    config: _config.config,
	    comment: _comments.comment,
	    comments: _comments.comments,
	    user: _user.user,
	    getuser: _user.getuser,
	    pagedata: _pagedata.pagedata,
	    message: _message.message
	};

/***/ },
/* 78 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.config = config;
	function config(name, value) {
	    store.dispatch({ type: 'config', name: name, value: value });
	}

/***/ },
/* 79 */
/***/ function(module, exports) {

	'use strict';

	//评论管理

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.comments = comments;
	exports.comment = comment;
	function comments(comments) {
	    store.dispatch({ type: 'comments', comments: comments });
	}

	function comment(comment) {
	    comment.type = 'comment';
	    store.dispatch(comment);
	}

/***/ },
/* 80 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.user = user;
	exports.getuser = getuser;
	function user(data) {
	    store.dispatch({
	        type: 'user',
	        data: data
	    });
	}

	function getuser() {
	    getfetch("admin/user", function (res) {
	        console.log(res);
	        user(res);
	    });
	}

/***/ },
/* 81 */
/***/ function(module, exports) {

	'use strict';

	//列表分页数据

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.pagedata = pagedata;
	function pagedata(data) {
	    store.dispatch({ type: 'pagedata', data: data });
	}

/***/ },
/* 82 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.message = message;
	function message(data) {
	    store.dispatch({ type: 'message', data: data });
	}

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _reactRouterRedux = __webpack_require__(17);

	var _ReactRouter = ReactRouter;
	var Router = _ReactRouter.Router;
	var Route = _ReactRouter.Route;
	var IndexRoute = _ReactRouter.IndexRoute;
	var IndexRedirect = _ReactRouter.IndexRedirect;
	var Redirect = _ReactRouter.Redirect;
	var hashHistory = _ReactRouter.hashHistory;
	var browserHistory = _ReactRouter.browserHistory;

	var history = (0, _reactRouterRedux.syncHistoryWithStore)(hashHistory, store);

	var Layout = __webpack_require__(84);

	var _require = __webpack_require__(93);

	var Nomatch = _require.Nomatch;
	var Home = _require.Home;
	var Drag = _require.Drag;
	var ApiCloudsIndex = _require.ApiCloudsIndex;
	var ApiClouds = _require.ApiClouds;
	var ApiCloud = _require.ApiCloud;
	var Pages = _require.Pages;
	var Page = _require.Page;
	var Login = _require.Login;
	var Logout = _require.Logout;


	function onEnter(nextState, replace) {
	    var pathname = nextState.location.pathname;
	    var state = store.getState();
	    var token = state.config.token;
	    console.log(token);
	    if (!token && pathname !== 'login' && pathname !== '/login') {
	        Rd.message('你还没有登录，请先登录！');
	        replace({
	            pathname: '/login'
	        });
	    } else if (token && (pathname == 'login' || pathname == '/login')) {
	        replace({
	            pathname: '/'
	        });
	    }
	}

	var routers = React.createElement(Router, { history: history }, React.createElement(Route, { path: "/", component: Layout, onEnter: onEnter }, React.createElement(IndexRedirect, { to: 'index' }), React.createElement(Route, { path: "index", component: Home }), React.createElement(Route, { path: "drag", component: Drag }), React.createElement(Route, { path: "apicloud" }, React.createElement(IndexRoute, { component: ApiCloudsIndex }), React.createElement(Route, { path: ":clouds" }, React.createElement(IndexRoute, { component: ApiClouds }), React.createElement(Route, { path: ":articleId", component: ApiCloud }))), React.createElement(Route, { path: "api" }, React.createElement(IndexRoute, { component: ApiCloudsIndex }), React.createElement(Redirect, { from: ':pages', to: ':pages/index' }), React.createElement(Route, { path: ":pages" }, React.createElement(Route, { path: "index", component: Pages }), React.createElement(Route, { path: ":page", component: Page })))), React.createElement(Route, { path: "login", component: Login, onEnter: onEnter }), React.createElement(Route, { path: "logout", component: Logout }), React.createElement(Route, { path: "*", component: Nomatch }));

	module.exports = routers;

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup

	var Apicloud = __webpack_require__(85);

	var _require = __webpack_require__(86);

	var Header = _require.Header;
	var Sidebar = _require.Sidebar;
	var Footer = _require.Footer;
	var Message = _require.Message;

	var Layout = React.createClass({
	    displayName: 'Layout',

	    componentDidMount: function componentDidMount() {
	        var filter = {
	            where: {
	                state: 1
	            },
	            order: ['order DESC', 'createdAt DESC'],
	            limit: 100
	        };
	        Apicloud.get('role', filter, function (err, res) {
	            var roles = JSON.parse(res.text);
	            Rd.config('roles', roles);
	        });
	    },
	    render: function render() {
	        return (
	            // React.createElement(ReactCSSTransitionGroup, {
	            //         component: 'div',
	            //         id: 'warper',
	            //         className: 'pure-g',
	            //         transitionName: 'switch',
	            //         transitionEnterTimeout: 500,
	            //         transitionLeaveTimeout: 500
	            //     },
	            React.createElement('div', {
	                id: 'warper',
	                className: 'pure-g'
	            },
	            // React.createElement('div', {
	            //         className: 'switch',
	            //         key: this.props.location.pathname
	            //     },
	            React.createElement(Header), React.createElement('section', {
	                id: 'main'
	            }, React.createElement(Sidebar), React.createElement('section', {
	                id: 'content',
	                className: 'pure-u-1'
	            }, this.props.children)), React.createElement(Footer), React.createElement(Message))
	        );
	    }
	});
	module.exports = Layout;

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var request = __webpack_require__(72);
	var AppId = 'A6984077246442';
	var AppKey = '7F7872C0-8EB2-D116-C9AF-AF02A4B65BA0';
	var AppUrl = 'https://d.apicloud.com/mcm/api/';
	var get = function get(url, filter, cb) {
	    var now = Date.now();
	    var key = SHA1(AppId + 'UZ' + AppKey + 'UZ' + now) + "." + now;
	    var token = storedb('user').find() ? storedb('user').find()[0].id : '';
	    token = '';
	    request.get(AppUrl + url).set('X-APICloud-AppId', AppId).set('X-APICloud-AppKey', key).set('authorization', token).query({
	        filter: JSON.stringify(filter)
	    }).end(cb);
	};

	var post = function post(url, info, cb) {
	    if (window.navigator.onLine == true) {
	        var now = Date.now();
	        var key = SHA1(AppId + 'UZ' + AppKey + 'UZ' + now) + "." + now;
	        var token = storedb('user').find() ? storedb('user').find()[0].id : '';
	        request.post(AppUrl + url).set('X-APICloud-AppId', AppId).set('X-APICloud-AppKey', key).set('authorization', token).send(info).end(cb);
	    } else {
	        console.log('网络出现故障！');
	    }
	};
	var Apicloud = {
	    get: get,
	    post: post
	};
	module.exports = Apicloud;

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Layout = __webpack_require__(84);
	var Header = __webpack_require__(87);
	var Footer = __webpack_require__(88);
	var Sidebar = __webpack_require__(90);
	var Message = __webpack_require__(91);
	var Pagination = __webpack_require__(92);
	var Temp = {
	    // Layout: Layout,
	    Header: Header,
	    Footer: Footer,
	    Sidebar: Sidebar,
	    Message: Message,
	    Pagination: Pagination
	};
	module.exports = Temp;

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _ReactRouter = ReactRouter;
	var Link = _ReactRouter.Link;


	var Apicloud = __webpack_require__(85);

	var A = function (_React$Component) {
	    _inherits(A, _React$Component);

	    function A() {
	        _classCallCheck(this, A);

	        return _possibleConstructorReturn(this, (A.__proto__ || Object.getPrototypeOf(A)).apply(this, arguments));
	    }

	    _createClass(A, [{
	        key: 'render',
	        value: function render() {
	            return React.createElement('li', {
	                className: 'pure-menu-item'
	            }, React.createElement(Link, {
	                className: 'pure-menu-link',
	                to: '/' + this.props.to,
	                activeClassName: 'active'
	            }, this.props.title));
	        }
	    }]);

	    return A;
	}(React.Component);

	var Header = function (_React$Component2) {
	    _inherits(Header, _React$Component2);

	    function Header() {
	        _classCallCheck(this, Header);

	        var _this2 = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this));

	        _this2.state = {
	            menu: null
	        };
	        return _this2;
	    }

	    _createClass(Header, [{
	        key: 'render',
	        value: function render() {
	            return React.createElement('header', {
	                id: 'header',
	                className: 'pure-u-1 pure-menu pure-menu-horizontal pure-menu-fixed'
	            }, React.createElement(Link, {
	                className: 'pure-menu-heading pure-menu-link left',
	                to: '/'
	            }, '我的理想乡'), React.createElement('ul', {
	                className: 'pure-menu-list right'
	            }, React.createElement('div', {}, this.props.user.user_name), React.createElement(A, {
	                to: 'logout',
	                title: '登出'
	            })));
	        }
	    }]);

	    return Header;
	}(React.Component);

	module.exports = connect(function (state) {
	    return {
	        user: state.user
	    };
	})(Header);

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var ApiStore = __webpack_require__(89);
	// class Footer extends React.Component {
	var Footer = React.createClass({
	    displayName: 'Footer',

	    // constructor(props) {
	    //     super(props)
	    //     this.state = {
	    //         info: {}
	    //     }
	    // }
	    getInitialState: function getInitialState() {
	        return {
	            info: {}
	        };
	    },
	    componentDidMount: function componentDidMount() {
	        ApiStore.get('acman/zhaiyanapi/tcrand?fangfa=json', function (err, res) {
	            var data = JSON.parse(res.text);
	            this.setState({
	                info: data
	            });
	        }.bind(this));
	    },
	    render: function render() {
	        return React.createElement('footer', {
	            id: 'footer',
	            className: 'footer pure-u-1'
	        }, React.createElement('div', {
	            className: 'left'
	        }, this.state.info.taici, '—— ', this.state.info.source)
	        // React.createElement('div', {
	        //     className: 'right'
	        // },
	        //     '技术开发—by田恩仲（284059577）'
	        // )
	        );
	    }
	});

	module.exports = Footer;

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var request = __webpack_require__(72);
	var AppUrl = 'http://apis.baidu.com/';
	var apikey = 'c01ea8775f1c2620b7dd6f5b6bcec93b';
	var get = function get(url, cb) {
	    if (window.navigator.onLine == true) {
	        request.get(AppUrl + url).set('apikey', apikey).end(cb);
	    } else {
	        console.log('网络出现故障！');
	    }
	};

	var post = function post(url, info, cb) {
	    console.log(window.navigator.onLine);
	    if (window.navigator.onLine == true) {
	        var now = Date.now();
	        var key = SHA1(AppId + 'UZ' + AppKey + 'UZ' + now) + "." + now;
	        request.post(AppUrl + url).set('X-APICloud-AppId', AppId).set('X-APICloud-AppKey', key).send(info).end(cb);
	    } else {
	        console.log('网络出现故障！');
	    }
	};
	var ApiStore = {
	    get: get,
	    post: post
	};
	module.exports = ApiStore;

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _ReactRouter = ReactRouter;
	var Link = _ReactRouter.Link;


	var Apicloud = __webpack_require__(85);

	var A = function (_React$Component) {
	    _inherits(A, _React$Component);

	    function A() {
	        _classCallCheck(this, A);

	        return _possibleConstructorReturn(this, (A.__proto__ || Object.getPrototypeOf(A)).apply(this, arguments));
	    }

	    _createClass(A, [{
	        key: 'render',
	        value: function render() {
	            return React.createElement('li', {
	                className: 'pure-menu-item'
	            }, React.createElement(Link, {
	                className: 'pure-menu-link',
	                to: '/' + this.props.to,
	                activeClassName: 'active'
	            }, React.createElement("i", {
	                className: this.props.icon || 'fa fa-home'
	            }), React.createElement("span", {}, this.props.title)), this.props.children);
	        }
	    }]);

	    return A;
	}(React.Component);

	var Sidebar = function (_React$Component2) {
	    _inherits(Sidebar, _React$Component2);

	    function Sidebar() {
	        _classCallCheck(this, Sidebar);

	        var _this2 = _possibleConstructorReturn(this, (Sidebar.__proto__ || Object.getPrototypeOf(Sidebar)).call(this));

	        _this2.state = {};
	        return _this2;
	    }

	    _createClass(Sidebar, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var filter = {
	                where: {
	                    state: 1
	                },
	                order: ['order DESC', 'createdAt DESC'],
	                limit: 20
	            };
	            getfetch('api/meun').then(function (res) {
	                this.setState({
	                    menu: res
	                });
	            }.bind(this));
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var menus = void 0;
	            if (this.state.menu) {
	                menus = this.state.menu.map(function (d, index) {
	                    return React.createElement(A, {
	                        key: index,
	                        to: d.link,
	                        title: d.title,
	                        icon: d.icon
	                    });
	                });
	            }
	            return React.createElement('aside', {
	                id: 'sidebar',
	                className: 'pure-u-1 pure-menu sidebar'
	            }, React.createElement('ul', {
	                className: 'pure-menu-list'
	            }, menus));
	        }
	    }]);

	    return Sidebar;
	}(React.Component);

	module.exports = Sidebar;

/***/ },
/* 91 */
/***/ function(module, exports) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Message = function (_React$Component) {
	    _inherits(Message, _React$Component);

	    function Message() {
	        _classCallCheck(this, Message);

	        var _this = _possibleConstructorReturn(this, (Message.__proto__ || Object.getPrototypeOf(Message)).call(this));

	        _this.state = {
	            message: []
	        };
	        _this.autoplayTimer = null;
	        return _this;
	    }

	    _createClass(Message, [{
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            if (nextProps.message !== '') {
	                var message = this.state.message;
	                message.push(nextProps.message);
	                this.setState({ message: message });
	                this.setInterval();
	            }
	        }
	    }, {
	        key: 'setInterval',
	        value: function (_setInterval) {
	            function setInterval() {
	                return _setInterval.apply(this, arguments);
	            }

	            setInterval.toString = function () {
	                return _setInterval.toString();
	            };

	            return setInterval;
	        }(function () {
	            if (this.autoplayTimer != null) {
	                return;
	            }
	            this.autoplayTimer = setInterval(function () {
	                var message = this.state.message;
	                message.shift();
	                this.setState({ message: message });
	                if (message.length == 0) {
	                    clearInterval(this.autoplayTimer);
	                    this.autoplayTimer = null;
	                }
	            }.bind(this), 3000);
	        })
	    }, {
	        key: 'render',
	        value: function render() {
	            var message = this.state.message;
	            var list = message.map(function (d, index) {
	                return React.createElement('div', {
	                    key: index,
	                    className: ''
	                }, d.msg);
	            });
	            return message.length > 0 ? React.createElement('div', {
	                id: 'message',
	                className: 'message pure-u-1'
	            }, list) : null;
	        }
	    }]);

	    return Message;
	}(React.Component);

	module.exports = connect(function (state) {
	    return {
	        message: state.message
	    };
	})(Message);

/***/ },
/* 92 */
/***/ function(module, exports) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _ReactRouter = ReactRouter;
	var Link = _ReactRouter.Link;

	var L = function (_React$Component) {
	    _inherits(L, _React$Component);

	    function L() {
	        _classCallCheck(this, L);

	        return _possibleConstructorReturn(this, (L.__proto__ || Object.getPrototypeOf(L)).call(this));
	    }

	    _createClass(L, [{
	        key: 'render',
	        value: function render() {
	            var p = void 0;
	            var page = this.props.page;
	            if (page == this.props.current_page) {
	                p = React.createElement('span', {
	                    className: 'pure-button active'
	                }, page);
	            } else {
	                p = React.createElement(Link, {
	                    className: 'pure-button',
	                    to: this.props.url,
	                    query: {
	                        page: page,
	                        state: this.props.query.state
	                    }
	                }, page);
	            }
	            return React.createElement("li", {
	                key: page
	            }, p);
	        }
	    }]);

	    return L;
	}(React.Component);

	var Pagination = function (_React$Component2) {
	    _inherits(Pagination, _React$Component2);

	    function Pagination() {
	        _classCallCheck(this, Pagination);

	        return _possibleConstructorReturn(this, (Pagination.__proto__ || Object.getPrototypeOf(Pagination)).call(this));
	    }

	    _createClass(Pagination, [{
	        key: 'render',
	        value: function render() {
	            var i = 1;
	            var prev = 4;
	            var total = this.props.total || 0;
	            var last_page = this.props.last_page || 0;
	            var current_page = this.props.current_page || '';
	            var items = [];
	            if (prev > last_page + 1) {
	                prev = last_page + 1;
	            }
	            for (i; i < prev; i++) {
	                var p = React.createElement(L, {
	                    url: this.props.url,
	                    page: i,
	                    key: i,
	                    query: this.props.query,
	                    current_page: current_page
	                });
	                items.push(p);
	            }
	            var j = current_page - 1;
	            var c = current_page + 2;
	            if (c > last_page + 1) {
	                c = last_page + 1;
	            }
	            if (j > i && j > prev - 1) {
	                var _p = React.createElement("li", {}, React.createElement('span', {
	                    className: 'pure-button'
	                }, '...'));
	                items.push(_p);
	                for (j; j < c; j++) {
	                    var _p2 = React.createElement(L, {
	                        url: this.props.url,
	                        page: j,
	                        key: j,
	                        query: this.props.query,
	                        current_page: current_page
	                    });
	                    items.push(_p2);
	                }
	            } else {
	                j = i;
	                for (j; j < c; j++) {
	                    var _p3 = React.createElement(L, {
	                        url: this.props.url,
	                        page: j,
	                        key: j,
	                        query: this.props.query,
	                        current_page: current_page
	                    });
	                    items.push(_p3);
	                }
	            }
	            var k = last_page - prev + 2;
	            if (k > j) {
	                var _p4 = React.createElement("li", {}, React.createElement('span', {
	                    className: 'pure-button'
	                }, '...'));
	                items.push(_p4);
	            } else {
	                k = j;
	            }
	            for (k; k < last_page + 1; k++) {
	                var _p5 = React.createElement(L, {
	                    url: this.props.url,
	                    page: k,
	                    key: k,
	                    query: this.props.query,
	                    current_page: current_page
	                });
	                items.push(_p5);
	            }
	            return React.createElement("nav", {
	                className: 'pure-menu pure-menu-open pure-menu-horizontal'
	            }, React.createElement("ul", {
	                className: "pure-paginator"
	            }, React.createElement("li", {}, React.createElement("span", {
	                className: 'pure-button',
	                "aria-hidden": "true"
	            }, '共查询到' + total + '条数据')), items, React.createElement("li", {}, React.createElement("span", {
	                className: 'pure-button totle'
	            }, '共' + last_page + '页'))));
	        }
	    }]);

	    return Pagination;
	}(React.Component);

	module.exports = connect(function (state) {
	    return {
	        total: state.pagedata.total,
	        last_page: state.pagedata.last_page,
	        current_page: state.pagedata.current_page,
	        query: state.routing.locationBeforeTransitions.query,
	        url: state.routing.locationBeforeTransitions.pathname
	    };
	})(Pagination);

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Nomatch = __webpack_require__(94);
	var Home = __webpack_require__(95);
	var Drag = __webpack_require__(96);
	var ApiCloudsIndex = __webpack_require__(97);
	var ApiClouds = __webpack_require__(98);
	var ApiCloud = __webpack_require__(99);
	var Pages = __webpack_require__(121);
	var Page = __webpack_require__(122);
	var Login = __webpack_require__(123);
	var Logout = __webpack_require__(124);

	var Temp = {
	    Nomatch: Nomatch,
	    Home: Home,
	    Drag: Drag,
	    ApiCloudsIndex: ApiCloudsIndex,
	    ApiClouds: ApiClouds,
	    ApiCloud: ApiCloud,
	    Pages: Pages,
	    Page: Page,
	    Login: Login,
	    Logout: Logout
	};
	module.exports = Temp;

/***/ },
/* 94 */
/***/ function(module, exports) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Nomatch = function (_React$Component) {
	    _inherits(Nomatch, _React$Component);

	    function Nomatch() {
	        _classCallCheck(this, Nomatch);

	        return _possibleConstructorReturn(this, (Nomatch.__proto__ || Object.getPrototypeOf(Nomatch)).call(this));
	    }

	    _createClass(Nomatch, [{
	        key: 'render',
	        value: function render() {
	            return React.createElement('h3', null, 'Nomatch');
	        }
	    }]);

	    return Nomatch;
	}(React.Component);

	module.exports = Nomatch;

/***/ },
/* 95 */
/***/ function(module, exports) {

	'use strict';

	var Home = React.createClass({
	    displayName: 'Home',

	    propTypes: {
	        counter: React.PropTypes.number
	    },
	    getInitialState: function getInitialState() {
	        return {
	            items: ['hello', 'world', 'click', 'me']
	        };
	    },
	    componentDidMount: function componentDidMount() {
	        Rd.config('title', '首页');
	    },
	    handleSelect: function handleSelect(data) {
	        console.log(data); // Momentjs object
	        console.log(data.format('YYYY-MM-D HH d')); // Momentjs object
	    },
	    updateHtml: function updateHtml(html) {
	        this.setState({
	            html: html
	        });
	    },
	    click: function click() {
	        Rd.user();
	    },
	    render: function render() {
	        return React.createElement('div', {
	            className: 'container pure-g'
	        }, React.createElement('div', {
	            className: 'pure-u-1',
	            onClick: this.click
	        }, '欢迎使用云上恩施cms 1.01版本！' + this.props.counter
	        // React.createElement('div', {
	        //     dangerouslySetInnerHTML: {
	        //         __html: this.state.html
	        //     }
	        // })
	        ));
	    }
	});

	module.exports = connect(function (state) {
	    return {
	        counter: state.config.show
	    };
	})(Home);

/***/ },
/* 96 */
/***/ function(module, exports) {

	'use strict';

	var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

	var placeholder = document.createElement("div");
	placeholder.className = "placeholder";
	var Drag = React.createClass({
	    displayName: "Drag",

	    getInitialState: function getInitialState() {
	        return {
	            items: ['hello', 'world', 'click', 'me']
	        };
	    },
	    handleAdd: function handleAdd() {
	        // var name = prompt("Please enter your name", "")
	        var add = 'add:' + Math.random();
	        var newItems = this.state.items.concat([add]);
	        this.setState({
	            items: newItems
	        });
	    },
	    handleRemove: function handleRemove(i) {
	        var newItems = this.state.items;
	        newItems.splice(i, 1);
	        this.setState({
	            items: newItems
	        });
	    },
	    dragStart: function dragStart(e) {
	        this.dragged = e.currentTarget;
	        e.dataTransfer.effectAllowed = 'move';
	        // // Firefox requires dataTransfer data to be set
	        e.dataTransfer.setData("text/html", e.currentTarget);
	    },
	    dragEnd: function dragEnd(e) {
	        this.dragged.style.display = "block";
	        this.dragged.parentNode.removeChild(placeholder);
	        // Update data
	        var items = this.state.items;
	        var from = Number(this.dragged.dataset.id);
	        var to = Number(this.over.dataset.id);
	        if (from < to) to--;
	        if (this.nodePlacement == "after") to++;
	        items.splice(to, 0, items.splice(from, 1)[0]);
	        this.setState({
	            items: items
	        });
	    },
	    dragOver: function dragOver(e) {
	        e.preventDefault();
	        this.dragged.style.display = "none";
	        if (e.target.className == "placeholder") return;
	        this.over = e.target;
	        // Inside the dragOver method
	        var relY = e.clientY - this.over.offsetTop;
	        var height = this.over.offsetHeight / 2;
	        var parent = e.target.parentNode;
	        if (relY > height) {
	            this.nodePlacement = "after";
	            parent.insertBefore(placeholder, e.target.nextElementSibling);
	        } else if (relY < height) {
	            this.nodePlacement = "before";
	            parent.insertBefore(placeholder, e.target);
	        }
	    },
	    handleSelect: function handleSelect(date) {
	        console.log(date); // Momentjs object
	    },
	    render: function render() {
	        var items = this.state.items.map(function (item, i) {
	            return React.createElement('div', {
	                key: item,
	                className: "item",
	                onClick: this.handleRemove.bind(this, i),
	                'data-id': i,
	                draggable: true,
	                onDragEnd: this.dragEnd,
	                onDragStart: this.dragStart
	            }, item);
	        }.bind(this));
	        return React.createElement('div', {
	            className: 'container pure-g'
	        }, React.createElement('div', {
	            className: 'pure-u-1'
	        }, React.createElement('h3', null, 'Hello, world2!'), React.createElement('button', {
	            onClick: this.handleAdd
	        }, 'Add Item'), React.createElement(ReactCSSTransitionGroup, {
	            transitionName: 'example',
	            transitionEnter: false,
	            onDragOver: this.dragOver
	            // transitionLeave: false
	        }, items)));
	    }
	});

	module.exports = Drag;

/***/ },
/* 97 */
/***/ function(module, exports) {

	'use strict';

	var ApiCloudsIndex = React.createClass({
	    displayName: 'ApiCloudsIndex',

	    render: function render() {
	        return React.createElement('a', {
	            className: 'pure-menu-heading pure-menu-link left'
	        }, 'ApiCloudsIndex');
	    }
	});

	module.exports = ApiCloudsIndex;

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Link = ReactRouter.Link;
	var Apicloud = __webpack_require__(85);
	var ApiClouds = React.createClass({
	    displayName: 'ApiClouds',

	    getDefaultProps: function getDefaultProps() {
	        return {
	            article: {
	                title: '文章管理',
	                thead: ['id', '标题', '状态', '操作'],
	                tbody: ['title', 'state']
	            },
	            menu: {
	                title: '菜单管理',
	                thead: ['id', '菜单名称', '排序', '状态', '操作'],
	                tbody: ['title', 'order', 'state']
	            },
	            model: {
	                title: '模块字段管理',
	                thead: ['id', '菜单名称', '所属模块', '排序', '状态', '操作'],
	                tbody: ['title', 'model', 'order', 'state']
	            },
	            title: '+45689'
	        };
	    },
	    componentWillMount: function componentWillMount() {
	        var clouds = this.props.params.clouds;
	        this.setState({
	            table: this.props[clouds]
	        });
	    },
	    componentDidMount: function componentDidMount() {
	        this._req(this.props);
	    },
	    componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	        if (nextProps.location.pathname !== this.state.hash || nextProps.location.search !== this.state.search) {
	            this._req(nextProps);
	        }
	    },
	    _req: function _req(props) {
	        var action = props.params.clouds;
	        var title = this.props[action] ? this.props[action].title : '田恩仲开发设计';
	        Rd.config('title', title);
	        var where = {};
	        var $_GET = get(props.location.search);
	        extend(where, $_GET);
	        delete where['_k'];
	        var rep = {};
	        extend(where, rep, true);
	        var filter = {
	            where: where,
	            order: ['model DESC', 'order DESC', 'createdAt DESC'],
	            limit: $_GET['limit'] ? parseInt($_GET['limit']) : 20,
	            skip: $_GET['skip'] ? parseInt($_GET['skip']) : 0
	        };
	        Apicloud.get(props.params.clouds, filter, function (err, res) {
	            if (err) {
	                Rd.message(res.status + 'error');
	            } else {
	                var data = JSON.parse(res.text);
	                if (data.res == 404) {
	                    Rd.config('title', data.msg);
	                    this.setState({
	                        hash: props.location.pathname,
	                        search: props.location.search,
	                        title: data.msg,
	                        table: props[action]
	                    });
	                    return;
	                }
	                this.setState({
	                    hash: props.location.pathname,
	                    search: props.location.search,
	                    info: data,
	                    table: props[action]
	                });
	            }
	        }.bind(this));
	    },
	    render: function render() {
	        var thead = void 0;
	        if (this.state.table.thead) {
	            thead = this.state.table.thead.map(function (d, index) {
	                return React.createElement('th', {
	                    key: index
	                }, d);
	            });
	        }
	        var lists = void 0;
	        if (this.state.info) {
	            lists = this.state.info.map(function (d, index) {
	                var curl = '/apicloud/' + this.props.params.clouds + '/' + d.id;
	                return React.createElement('tr', {
	                    className: index % 2 == 0 ? 'pure-table-odd' : '',
	                    key: index
	                }, React.createElement('td', {}, '#'), this.state.table.tbody.map(function (t, i) {
	                    return React.createElement('td', {
	                        key: i
	                    }, d[t]);
	                }), React.createElement('td', {}, React.createElement(Link, {
	                    to: curl
	                }, '编辑')));
	            }.bind(this));
	        }
	        return React.createElement('section', {
	            className: 'warp'
	        }, React.createElement('section', {
	            className: 'pure-g'
	        }, React.createElement('h3', {
	            className: 'pure-u-1'
	        }, this.state.table.title), React.createElement('div', {
	            className: 'pure-u-1 filter'
	        }, React.createElement('a', {
	            className: 'pure-menu-link'
	        }, '筛选'), React.createElement(Link, {
	            to: '/apicloud/' + this.props.params.clouds,
	            className: 'pure-menu-link',
	            activeClassName: 'active'
	        }, '全部'), React.createElement(Link, {
	            to: '/apicloud/' + this.props.params.clouds,
	            className: 'pure-menu-link',
	            activeClassName: 'active',
	            query: {
	                state: 1
	            }
	        }, '正常'), React.createElement(Link, {
	            to: '/apicloud/' + this.props.params.clouds,
	            className: 'pure-menu-link',
	            activeClassName: 'active',
	            query: {
	                state: 0
	            }
	        }, '删除')), React.createElement('div', {
	            className: 'pure-u-1'
	        }, React.createElement('table', {
	            className: 'pure-table',
	            style: {
	                width: "100%"
	            }
	        }, React.createElement('thead', {}, React.createElement('tr', {}, thead)), React.createElement('tbody', {
	            id: 'uid'
	        }, lists)))));
	    }
	});

	module.exports = ApiClouds;

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Apicloud = __webpack_require__(85);

	var _require = __webpack_require__(100);

	var Form = _require.Form;
	var Input = _require.Input;
	var Textarea = _require.Textarea;
	var Radio = _require.Radio;
	var Checkbox = _require.Checkbox;
	var Upload = _require.Upload;
	var Range = _require.Range;
	var Button = _require.Button;
	var Hidden = _require.Hidden;

	var ApiCloud = React.createClass({
	    displayName: 'ApiCloud',

	    getDefaultProps: function getDefaultProps() {
	        return {
	            article: '文章',
	            menu: '菜单',
	            model: '字段'
	        };
	    },
	    getInitialState: function getInitialState() {
	        return {
	            info: null
	        };
	    },
	    componentDidMount: function componentDidMount() {
	        this._req(this.props);
	    },
	    componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	        if (nextProps.location.pathname !== this.state.hash) {
	            this._req(nextProps);
	        }
	    },
	    _req: function _req(props) {
	        var action = props.params.clouds;
	        var title = this.props[action] ? this.props[action] : '田恩仲开发设计';
	        var articleId = props.params.articleId;

	        var where = {
	            state: 1
	        };
	        var $_GET = get(props.location.search);
	        extend(where, $_GET);
	        delete where['_k'];
	        var rep = {
	            model: props.params.clouds
	        };
	        extend(where, rep, true);
	        var filter = {
	            where: where,
	            order: ['order DESC', 'createdAt DESC'],
	            limit: $_GET['limit'] ? parseInt($_GET['limit']) : 100
	        };
	        Apicloud.get('model', filter, function (err, res) {
	            var _this = this;

	            var model = JSON.parse(res.text);
	            console.log(model);
	            if (articleId !== 'add') {
	                (function () {
	                    action = action + '/' + articleId;
	                    var article = storedb('article').find({
	                        'id': articleId
	                    });
	                    if (article && article.length !== 0) {
	                        article = article[0]['value'];
	                        article._method = 'PUT';
	                        Rd.config('title', article.title + '-编辑' + title);
	                        _this.setState({
	                            hash: props.location.pathname,
	                            model: model,
	                            title: '编辑' + title,
	                            info: article,
	                            action: action,
	                            id: articleId
	                        });
	                    } else {
	                        Apicloud.get(props.params.clouds + '/' + articleId, '', function (err, res) {
	                            article = JSON.parse(res.text);
	                            storedb('article').insert({
	                                'id': articleId,
	                                'value': article
	                            });
	                            article._method = 'PUT';
	                            Rd.config('title', article.title + '-编辑' + title);
	                            this.setState({
	                                hash: props.location.pathname,
	                                model: model,
	                                title: '编辑' + title,
	                                info: article,
	                                action: action,
	                                id: articleId
	                            });
	                        }.bind(_this));
	                    }
	                })();
	            } else {
	                var userId = storedb('user').find()[0].userId;
	                var info = {
	                    userId: userId
	                };
	                Rd.config('title', '新增' + title);
	                this.setState({
	                    hash: props.location.pathname,
	                    model: model,
	                    title: '新增' + title,
	                    action: action,
	                    info: info
	                });
	            }
	        }.bind(this));
	    },
	    _onChange: function _onChange(name, value) {
	        var info = this.state.info;
	        info[name] = value;
	        this.setState({
	            info: info
	        });
	    },
	    _onSubmit: function _onSubmit(data) {
	        Rd.config('title', data.title);
	        Rd.config(data.id, data);
	        if (!this.state.id) {
	            Rd.message('发布成功！');
	            window.location.href = '/#/apicloud/' + this.props.params.clouds + '/' + data.id;
	        } else {
	            Rd.message('保存成功！');
	        }
	    },
	    render: function render() {
	        var _this2 = this;

	        var render = void 0;
	        var forms = void 0;
	        var info = this.state.info;
	        var model = this.state.model;
	        if (model) {
	            (function () {
	                var onChange = _this2._onChange;
	                forms = model.map(function (d, index) {
	                    if (info[d.name] || info[d.name] == 0) {
	                        d.value = info[d.name];
	                    } else {
	                        d.value = d.default || '';
	                    }
	                    d.key = d.name;
	                    d.onChange = onChange;
	                    switch (d.type) {
	                        case "text":
	                            return React.createElement(Input, d);
	                            break;
	                        case "password":
	                            return React.createElement(Input, d);
	                            break;
	                        case "email":
	                            return React.createElement(Input, d);
	                            break;
	                        case "textarea":
	                            return React.createElement(Textarea, d);
	                            break;
	                        case "upload":
	                            return React.createElement(Upload, d);
	                            break;
	                        case "image":
	                            return React.createElement(Upload, d);
	                            break;
	                        // case "editer":
	                        //     return (React.createElement(Editer, d))
	                        //     break;
	                        case "radio":
	                            return React.createElement(Radio, d);
	                            break;
	                        case "checkbox":
	                            return React.createElement(Checkbox, d);
	                            break;
	                        case "hidden":
	                            return React.createElement(Hidden, d);
	                            break;
	                        default:
	                            break;
	                    }
	                });
	            })();
	        }
	        if (info) {
	            render = React.createElement('section', {
	                className: 'container'
	            }, React.createElement('h3', null, this.state.title), React.createElement(Form, {
	                action: this.state.action,
	                info: info,
	                legend: this.state.title,
	                onSubmit: this._onSubmit
	            }, forms, React.createElement(Button)));
	        }
	        return React.createElement('section', {
	            className: 'warp'
	        }, render);
	    }
	});

	module.exports = ApiCloud;

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Form = __webpack_require__(101);
	var FormGroup = __webpack_require__(104);
	var Input = __webpack_require__(105);
	var Textarea = __webpack_require__(106);
	// const Editer = require('../editer')
	var Ueditor = __webpack_require__(107);
	var Canvas = __webpack_require__(108);
	var Upload = __webpack_require__(109);
	var Radio = __webpack_require__(112);
	var Checkbox = __webpack_require__(113);
	var Range = __webpack_require__(114);
	var Button = __webpack_require__(115);
	var Hidden = __webpack_require__(116);
	// const ColorPicker = require('./ColorPicker')
	var Select = __webpack_require__(117);
	var Tab = __webpack_require__(118);
	var Audio = __webpack_require__(119);
	// const {
	//     Calendar,
	//     DateRange
	// } = require('react-date-range')

	var Forms = {
	    Form: Form,
	    FormGroup: FormGroup,
	    Input: Input,
	    Textarea: Textarea,
	    // Editer: Editer,
	    Ueditor: Ueditor,
	    Canvas: Canvas,
	    Upload: Upload,
	    Radio: Radio,
	    Checkbox: Checkbox,
	    Range: Range,
	    Button: Button,
	    Hidden: Hidden,
	    Category: __webpack_require__(120),
	    // Calendar: Calendar,
	    // DateRange: DateRange,
	    // ColorPicker: ColorPicker,
	    Select: Select,
	    Tab: Tab,
	    Audio: Audio
	};
	module.exports = Forms;

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Apicloud = __webpack_require__(85);
	var classNames = __webpack_require__(102);

	var Form = React.createClass({
	    displayName: 'Form',

	    getDefaultProps: function getDefaultProps() {
	        return {
	            apiSubmit: true
	        };
	    },
	    handleSubmit: function handleSubmit(e) {
	        e.preventDefault();
	        if (this.props.locked) {
	            return;
	        }
	        if (this.props.apiSubmit) {
	            Apicloud.post(this.props.action, this.props.info, function (err, res) {
	                var data = JSON.parse(res.text);
	                console.log(res);
	                if (data.error) {
	                    Rd.message(data.error.message);
	                } else {
	                    this.props.onSubmit(data);
	                }
	            }.bind(this));
	        } else {
	            this.props.onSubmit(e);
	        }
	    },
	    render: function render() {
	        return React.createElement('form', {
	            className: 'form-fields form-horizontal',
	            role: 'form',
	            // encType: 'multipart/form-data',
	            onSubmit: this.handleSubmit
	        }, React.createElement('fieldset', {
	            className: 'form-fieldset'
	        }, React.createElement('legend', {
	            className: 'form-legend'
	        }, this.props.legend), this.props.children));
	    }
	});
	module.exports = Form;

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */

	(function () {
		'use strict';

		var hasOwn = {}.hasOwnProperty;

		function classNames() {
			var classes = [];

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;

				var argType = typeof arg === 'undefined' ? 'undefined' : _typeof(arg);

				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					classes.push(classNames.apply(null, arg));
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}

			return classes.join(' ');
		}

		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if ("function" === 'function' && _typeof(__webpack_require__(103)) === 'object' && __webpack_require__(103)) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	})();

/***/ },
/* 103 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {module.exports = __webpack_amd_options__;

	/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var classNames = __webpack_require__(102);

	var FormGroup = function (_React$Component) {
	    _inherits(FormGroup, _React$Component);

	    function FormGroup() {
	        _classCallCheck(this, FormGroup);

	        return _possibleConstructorReturn(this, (FormGroup.__proto__ || Object.getPrototypeOf(FormGroup)).apply(this, arguments));
	    }

	    _createClass(FormGroup, [{
	        key: 'render',
	        value: function render() {
	            var classname = this.props.className ? 'form-group ' + this.props.className : 'form-group';
	            return React.createElement('div', {
	                className: classname
	            }, React.createElement('label', {
	                className: 'form-label'
	            }, this.props.title), React.createElement('div', {
	                className: 'form-control'
	            }, this.props.limit ? React.createElement('i', {
	                className: 'form-ico fa'
	            }, this.props.limit) : null, this.props.children, this.props.help ? React.createElement('span', {
	                className: 'form-help'
	            }, this.props.help) : null));
	        }
	    }]);

	    return FormGroup;
	}(React.Component);

	module.exports = FormGroup;

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var classNames = __webpack_require__(102);
	var FormGroup = __webpack_require__(104);

	var Input = React.createClass({
	    displayName: 'Input',

	    getDefaultProps: function getDefaultProps() {
	        return {
	            type: 'text',
	            value: '',
	            autocomplete: 'off',
	            required: 'required'
	        };
	    },
	    getInitialState: function getInitialState() {
	        return {
	            value: this.props.value,
	            help: this.props.help,
	            length: this.props.value.length || 0
	        };
	    },
	    componentWillMount: function componentWillMount() {
	        var length = this.props.value.length || 0;
	        var help = this.props.help || '请输入' + this.props.title;
	        this.setState({
	            help: help
	        });
	    },
	    shouldComponentUpdate: function shouldComponentUpdate(nextProps, nextState) {
	        return nextProps.value !== this.props.value;
	    },
	    componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	        this.state = {
	            value: nextProps.value,
	            length: nextProps.value.length || 0
	        };
	    },
	    _onChange: function _onChange(e) {
	        var error = void 0;
	        var warning = void 0;
	        var success = void 0;
	        var value = e.target.value.replace(/(^\s*)|(\s*$)/, "");
	        var length = value.length;
	        var help = this.props.help || '请输入' + this.props.title;
	        if (length > 0) {
	            if (this.props.min && length < this.props.min) {
	                help = '请输入至少' + this.props.min + '个字符！';
	                error = true;
	            } else if (this.props.max && length > this.props.max) {
	                help = '请输入至多' + this.props.max + '个字符！';
	                error = true;
	            }
	            if (!error) {
	                success = true;
	            }
	        } else if (this.props.required) {
	            help = this.props.title + '必须填写！';
	            warning = true;
	        }
	        this.setState({
	            value: value,
	            help: help,
	            length: length,
	            error: error,
	            warning: warning,
	            success: success
	        });
	        if (this.props.onChange) {
	            this.props.onChange(this.props.name, value);
	        }
	    },
	    render: function render() {
	        var Class = classNames({
	            'has-error': this.state.error,
	            'has-warning': this.state.warning,
	            'has-success': this.state.success
	        });
	        var limit = ' ' + this.state.length;
	        if (this.props.max) {
	            limit += ' / ' + this.props.max;
	        }
	        return React.createElement(FormGroup, {
	            class: Class,
	            title: this.props.title,
	            limit: limit,
	            help: this.state.help
	        }, React.createElement('input', {
	            className: 'form-input',
	            type: this.props.type,
	            max: this.props.max,
	            min: this.props.min,
	            placeholder: this.props.placeholder,
	            disabled: this.props.disabled,
	            autoComplete: this.props.autoComplete,
	            value: this.state.value,
	            onChange: this._onChange
	        }));
	    }
	});

	module.exports = Input;

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var classNames = __webpack_require__(102);
	var FormGroup = __webpack_require__(104);

	var Textarea = React.createClass({
	    displayName: 'Textarea',

	    getDefaultProps: function getDefaultProps() {
	        return {
	            title: '字段名称',
	            value: '',
	            placeholder: '',
	            help: '',
	            disabled: '',
	            autocomplete: 'off',
	            required: 'required',
	            min: 2,
	            rows: 2
	        };
	    },
	    getInitialState: function getInitialState() {
	        return {
	            value: this.props.value,
	            help: this.props.help,
	            error: false,
	            warning: false,
	            success: false
	        };
	    },
	    componentWillMount: function componentWillMount() {
	        var length = this.props.value.length;
	        var help = this.props.help || '请输入' + this.props.title;
	        this.setState({
	            help: help,
	            length: length
	        });
	    },
	    shouldComponentUpdate: function shouldComponentUpdate(nextProps, nextState) {
	        return nextProps.value !== this.props.value;
	    },
	    _onChange: function _onChange(e) {
	        var error = void 0;
	        var warning = void 0;
	        var success = void 0;
	        var value = e.target.value.replace(/(^\s*)|(\s*$)/, "");
	        var length = value.length;
	        var help = this.props.help || '请输入' + this.props.title;
	        if (length > 0) {
	            if (this.props.min && length < this.props.min) {
	                help = '请输入至少' + this.props.min + '个字符！';
	                error = true;
	            } else if (this.props.max && length > this.props.max) {
	                help = '请输入至多' + this.props.max + '个字符！';
	                error = true;
	            }
	            if (!error) {
	                success = true;
	            }
	        } else if (this.props.required) {
	            help = this.props.title + '必须填写！';
	            warning = true;
	        }
	        this.setState({
	            value: value,
	            help: help,
	            length: length,
	            error: error,
	            warning: warning,
	            success: success
	        });
	        if (this.props.onChange) {
	            this.props.onChange(this.props.name, value);
	        }
	    },
	    onWheel: function onWheel(obj) {
	        console.log(obj);
	        console.log(obj.currentTarget.offsetTop);
	    },
	    onKeyPress: function onKeyPress(obj) {
	        console.log(obj);
	        console.log(obj.nativeEvent.charCode);
	    },
	    onCopy: function onCopy(obj) {
	        console.log(obj);
	    },
	    render: function render() {
	        var Class = classNames({
	            'has-error': this.state.error,
	            'has-warning': this.state.warning,
	            'has-success': this.state.success
	        });
	        var limit = ' ' + this.state.length;
	        if (this.props.max) {
	            limit += ' / ' + this.props.max;
	        }
	        return React.createElement(FormGroup, {
	            class: Class,
	            title: this.props.title,
	            limit: limit,
	            help: this.state.help,
	            onWheel: this.onWheel,
	            onCopy: this.onCopy,
	            onKeyPress: this.onKeyPress
	        }, React.createElement('textarea', {
	            className: 'form-textarea',
	            rows: this.props.rows,
	            placeholder: this.props.placeholder,
	            disabled: this.props.disabled,
	            autoComplete: this.props.autoComplete,
	            value: this.state.value,
	            onChange: this._onChange
	        }));
	    }
	});

	module.exports = Textarea;

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var classNames = __webpack_require__(102);
	var FormGroup = __webpack_require__(104);

	var Ueditor = React.createClass({
	    displayName: 'Ueditor',

	    getDefaultProps: function getDefaultProps() {
	        return {
	            type: 'text',
	            value: '',
	            autocomplete: 'off',
	            required: 'required'
	        };
	    },
	    getInitialState: function getInitialState() {
	        return {
	            value: this.props.value,
	            help: this.props.help,
	            length: this.props.value.length || 0
	        };
	    },
	    componentDidMount: function componentDidMount() {
	        this.ueditor = UE.getEditor('ueditor');
	        this.ueditor.ready(function () {
	            this.ueditor.setContent(this.props.value);
	            this.ueditor.addListener('selectionchange', function () {
	                var html = this.ueditor.getContent();
	                if (this.props.onChange) {
	                    this.props.onChange(this.props.name, html);
	                }
	            }.bind(this));
	        }.bind(this));
	    },
	    componentWillReceiveProps: function componentWillReceiveProps(nextProps) {},
	    componentWillUnmount: function componentWillUnmount() {
	        this.ueditor.destroy();
	    },
	    render: function render() {
	        return React.createElement(FormGroup, {
	            title: this.props.title,
	            className: 'form-ueditor'
	        }, React.createElement('textarea', {
	            id: 'ueditor',
	            ref: 'ueditor',
	            name: this.props.name
	        }));
	    }
	});

	module.exports = Ueditor;

/***/ },
/* 108 */
/***/ function(module, exports) {

	'use strict';

	var Canvas = React.createClass({
	    displayName: 'Canvas',

	    getDefaultProps: function getDefaultProps() {
	        return {
	            width: 200
	        };
	    },
	    getInitialState: function getInitialState() {
	        return {
	            width: this.props.width,
	            height: this.props.height || this.props.width
	        };
	    },
	    render: function render() {
	        return React.createElement('div', {
	            style: {
	                width: this.state.width,
	                height: this.state.height
	            }
	        }, React.createElement('img', {
	            style: {
	                width: this.state.width,
	                height: this.state.height,
	                display: 'block'
	            },
	            src: this.props.src
	        }));
	    }
	});
	module.exports = Canvas;

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var classNames = __webpack_require__(102);
	var ajaxUpload = __webpack_require__(110);
	var FormGroup = __webpack_require__(104);
	var Canvas = __webpack_require__(108);

	var _require = __webpack_require__(111);

	var getUpToken = _require.getUpToken;
	var getHash = _require.getHash;


	var Upload = React.createClass({
	    displayName: 'Upload',

	    getDefaultProps: function getDefaultProps() {
	        return {
	            title: '上传图片',
	            value: '',
	            files: [],
	            thumbs: [],
	            multiple: false,
	            help: ''
	        };
	    },
	    getInitialState: function getInitialState() {
	        return {
	            files: this.props.files,
	            thumbs: this.props.thumbs,
	            help: this.props.help,
	            multiple: this.props.multiple,
	            shownum: 0
	        };
	    },
	    componentWillMount: function componentWillMount() {
	        var thumbs = this.props.value;
	        if (thumbs) {
	            thumbs = JSON.parse(thumbs);
	        } else {
	            thumbs = [];
	        }
	        var files = [];
	        var count = thumbs.length;
	        if (count == 0) {
	            return;
	        }
	        if (this.props.multiple) {
	            var i = void 0;
	            for (i = 0; i < count; i++) {
	                var file = [];
	                file.thumb = thumbs[i];
	                file.state = 4;
	                files[i] = file;
	            }
	        } else {
	            var _file = [];
	            var thumb = [];
	            _file.thumb = thumbs[0];
	            _file.state = 4;
	            files[0] = _file;
	            thumb.concat(thumbs[0]);
	            thumbs = thumb;
	        }
	        this.setState({
	            files: files,
	            thumbs: thumbs
	        });
	    },
	    componentDidMount: function componentDidMount() {},
	    componentDidUpdate: function componentDidUpdate() {},
	    _onChange: function _onChange(e) {
	        e.preventDefault();
	        var files = e.target.files;
	        // 文件过滤
	        // 只允许上传图片
	        files = Array.prototype.slice.call(files, 0);
	        files = files.filter(function (file) {
	            return (/image/i.test(file.type)
	            );
	        });
	        var value = void 0;
	        if (this.props.multiple) {
	            value = this.state.files;
	        } else {
	            value = [];
	        }
	        var count = this.props.multiple ? files.length : 1;
	        var i = void 0;
	        for (i = 0; i < count; i++) {
	            files[i].thumb = URL.createObjectURL(files[i]);
	            files[i].state = 0;
	            value = value.concat(files[i]);
	        }
	        this.setState({
	            files: value
	        });
	        var count2 = this.props.multiple ? value.length : 1;
	        for (i = 0; i < count2; i++) {
	            if (value[i].state != 1 && value[i].state != 4) {
	                this.uploadFile(value, i);
	            }
	        }
	    },
	    uploadFile: function uploadFile(files, id) {
	        var _this = this;

	        var qnurl = 'http://7xj11y.com1.z0.glb.clouddn.com';
	        var token = getUpToken();
	        var file = files[id];
	        return ajaxUpload({
	            // url: 'http://up.qiniu.com',
	            url: 'uploads',
	            name: 'file',
	            key: file.name,
	            token: token,
	            cors: this.props.cors,
	            withCredentials: this.props.withCredentials,
	            file: file,
	            onProgress: function onProgress(e) {
	                console.log(e.loaded / e.total * 100 + '%');
	            },
	            onLoad: function onLoad(e) {
	                var thumbs = void 0;
	                var res = JSON.parse(e.currentTarget.responseText);
	                files[id].state = 1;
	                // file.url = qnurl + '/' + res.name
	                if (_this.props.multiple) {
	                    thumbs = _this.state.thumbs;
	                } else {
	                    thumbs = [];
	                }
	                thumbs.push('/upload/' + res.name);
	                _this.setState({
	                    files: files,
	                    thumbs: thumbs
	                });
	                thumbs = JSON.stringify(thumbs);
	                if (_this.props.onChange) {
	                    console.log(thumbs);

	                    _this.props.onChange(_this.props.name, thumbs);
	                }
	            },
	            onError: function onError() {
	                files[id].state = 2;
	                _this.setState({
	                    files: files
	                });
	            }
	        });
	    },
	    _hide: function _hide() {
	        this.setState({
	            isshow: false
	        });
	    },
	    _show: function _show(e) {
	        e.stopPropagation();
	        var no = e.currentTarget.id.split("-")[1];
	        this.setState({
	            isshow: true,
	            shownum: no
	        });
	    },
	    _next: function _next(e) {
	        e.stopPropagation();
	        var shownum = parseInt(this.state.shownum) + 1;
	        if (shownum > this.state.files.length - 1) {
	            shownum = 0;
	        }
	        this.setState({
	            shownum: shownum
	        });
	    },
	    _prev: function _prev(e) {
	        e.stopPropagation();
	        var shownum = parseInt(this.state.shownum) - 1;
	        if (shownum < 0) {
	            shownum = this.state.files.length - 1;
	        }
	        this.setState({
	            shownum: shownum
	        });
	    },
	    render: function render() {
	        var thumbs = void 0;
	        var pics = void 0;
	        var bullets = void 0;
	        var shownum = this.state.shownum;
	        if (this.state.files.length > 0) {
	            thumbs = this.state.files.map(function (file, index) {
	                var msg = void 0;
	                switch (file.state) {
	                    case 0:
	                        msg = '等待上传';
	                        break;
	                    case 1:
	                        msg = '上传成功';
	                        break;
	                    case 2:
	                        msg = '上传失败';
	                        break;
	                    case 3:
	                        msg = '上传中';
	                        break;
	                    case 4:
	                        msg = '已上传';
	                        break;
	                    default:
	                        break;
	                }
	                var style = {
	                    float: 'left',
	                    animationDelay: 50 * index + 'ms',
	                    animationDuration: '500ms',
	                    paddingRight: '5px'
	                };
	                var thumb = file.thumb;
	                // let patt1 = new RegExp("blob:http")
	                // let patt2 = new RegExp("blob:file")
	                // if (!patt1.test(thumb) && !patt2.test(thumb)) {
	                //     thumb += '-thumb'
	                // }
	                var id = 'swiper-' + index;
	                return React.createElement('div', {
	                    key: index,
	                    className: 'animated zoomIn',
	                    id: id,
	                    style: style,
	                    onClick: this._show
	                }, React.createElement(Canvas, {
	                    className: 'form-canva',
	                    src: thumb
	                }), React.createElement('div', null, msg));
	            }.bind(this));
	            pics = this.state.files.map(function (file, index) {
	                var thumb = file.thumb;
	                // let patt1 = new RegExp("blob:http")
	                // let patt2 = new RegExp("blob:file")
	                // if (!patt1.test(thumb) && !patt2.test(thumb)) {
	                //     thumb += '-max'
	                // }
	                var show = classNames({
	                    'swiper-slide': true,
	                    'slide-show': shownum == index
	                });
	                return React.createElement('div', {
	                    key: index,
	                    className: show
	                }, React.createElement('img', {
	                    className: 'swiper-lazy',
	                    src: thumb
	                })
	                // React.createElement('div', {
	                //     className: 'swiper-lazy-preloader swiper-lazy-preloader-white'
	                // })
	                );
	            }.bind(this));
	            bullets = this.state.files.map(function (file, index) {
	                var bullet = classNames({
	                    'swiper-pagination-bullet': true,
	                    'swiper-pagination-bullet-active': shownum == index
	                });
	                return React.createElement('span', {
	                    key: index,
	                    className: bullet
	                });
	            }.bind(this));
	        } else {
	            thumbs = '';
	            pics = '';
	            bullets = '';
	        }
	        var swiperClass = classNames({
	            'swiper-container': true,
	            'swiper-container-horizontal': true,
	            'swiper-show': this.state.isshow
	        });
	        return React.createElement(FormGroup, {
	            title: this.props.title
	        }, React.createElement('input', {
	            id: 'file',
	            name: 'file',
	            className: 'ipt',
	            type: 'file',
	            multiple: 'multiple',
	            onChange: this._onChange
	        }), React.createElement('div', {
	            className: 'form-canvas'
	        }, thumbs), React.createElement('div', {
	            className: 'clear'
	        }), React.createElement('section', {
	            className: swiperClass
	        }, React.createElement('div', {
	            className: 'swiper-wrapper',
	            onClick: this._hide
	        }, pics), React.createElement('div', {
	            className: 'swiper-pagination swiper-pagination-white swiper-pagination-clickable swiper-pagination-bullets'
	        }, bullets), React.createElement('div', {
	            className: 'swiper-button-next swiper-button-white',
	            onClick: this._next
	        }), React.createElement('div', {
	            className: 'swiper-button-prev swiper-button-white',
	            onClick: this._prev
	        })));
	    }
	});

	module.exports = Upload;

/***/ },
/* 110 */
/***/ function(module, exports) {

	'use strict';

	function createCORSRequest(method, url) {
	    var xhr = new XMLHttpRequest();
	    if ('withCredentials' in xhr) {
	        // XHR for Chrome/Firefox/Opera/Safari.
	        xhr.open(method, url, true);
	    } else if (typeof XDomainRequest !== 'undefined') {
	        // XDomainRequest for IE.
	        xhr = new XDomainRequest();
	        xhr.open(method, url);
	    } else {
	        // CORS not supported.
	        xhr = null;
	    }
	    return xhr;
	}

	// function ajaxUpload({url, name, cors, file, onProgress, onLoad, onError, withCredentials}) {
	function ajaxUpload(data) {
	    var formData = new FormData();
	    if (data.token !== null && data.token !== undefined) formData.append('token', data.token);
	    if (data.key !== null && data.key !== undefined) formData.append('key', data.key);
	    if (data.data !== null && data.data !== undefined) {
	        for (var x in data.data) {
	            formData.append(x, data.data[x]);
	        }
	    }
	    formData.append(data.name, data.file);
	    var xhr = createCORSRequest('post', data.url, data.cors);
	    xhr.withCredentials = data.withCredentials;
	    xhr.upload.addEventListener('progress', data.onProgress, false);
	    xhr.onload = data.onLoad;
	    xhr.onerror = data.onError;
	    xhr.send(formData);
	    return xhr;
	}

	module.exports = function (args) {
	    return ajaxUpload(args);
	};

/***/ },
/* 111 */
/***/ function(module, exports) {

	'use strict';

	var accessKey = 'Lkve3Zo4h2ZK3iIGMJbwvop2Guy1jIDyJT0Mi9RL';
	var secretKey = 'WF41n8b1LIRk8c6lcBiDzNrFTci2E-cu7ki22W2b';
	var scope = 'wire';
	var getUpToken = function getUpToken() {
	    var returnBody = '{ \"name\":$(fname),\"size\":$(fsize),\"info\":$(imageInfo),\"hash\":$(etag)}';
	    var putPolicy = {
	        "scope": scope,
	        "deadline": Date.now() + 3600,
	        "returnBody": returnBody
	    };
	    var put_policy = JSON.stringify(putPolicy);
	    var encoded = base64encode(utf16to8(put_policy));
	    var hash = CryptoJS.HmacSHA1(encoded, secretKey);
	    var encoded_signed = hash.toString(CryptoJS.enc.Base64);
	    var upload_token = accessKey + ":" + safe64(encoded_signed) + ":" + encoded;
	    return upload_token;
	};

	var Qiniu = {
	    getUpToken: getUpToken
	};
	module.exports = Qiniu;

	function utf16to8(str) {
	    var out, i, len, c;
	    out = "";
	    len = str.length;
	    for (i = 0; i < len; i++) {
	        c = str.charCodeAt(i);
	        if (c >= 0x0001 && c <= 0x007F) {
	            out += str.charAt(i);
	        } else if (c > 0x07FF) {
	            out += String.fromCharCode(0xE0 | c >> 12 & 0x0F);
	            out += String.fromCharCode(0x80 | c >> 6 & 0x3F);
	            out += String.fromCharCode(0x80 | c >> 0 & 0x3F);
	        } else {
	            out += String.fromCharCode(0xC0 | c >> 6 & 0x1F);
	            out += String.fromCharCode(0x80 | c >> 0 & 0x3F);
	        }
	    }
	    return out;
	}

	function utf8to16(str) {
	    var out, i, len, c;
	    var char2, char3;
	    out = "";
	    len = str.length;
	    i = 0;
	    while (i < len) {
	        c = str.charCodeAt(i++);
	        switch (c >> 4) {
	            case 0:
	            case 1:
	            case 2:
	            case 3:
	            case 4:
	            case 5:
	            case 6:
	            case 7:
	                // 0xxxxxxx
	                out += str.charAt(i - 1);
	                break;
	            case 12:
	            case 13:
	                // 110x xxxx 10xx xxxx
	                char2 = str.charCodeAt(i++);
	                out += String.fromCharCode((c & 0x1F) << 6 | char2 & 0x3F);
	                break;
	            case 14:
	                // 1110 xxxx 10xx xxxx 10xx xxxx
	                char2 = str.charCodeAt(i++);
	                char3 = str.charCodeAt(i++);
	                out += String.fromCharCode((c & 0x0F) << 12 | (char2 & 0x3F) << 6 | (char3 & 0x3F) << 0);
	                break;
	        }
	    }
	    return out;
	}

	/*
	 * Interfaces:
	 * b64 = base64encode(data);
	 * data = base64decode(b64);
	 */
	var base64EncodeChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";
	var base64DecodeChars = new Array(-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1);

	function base64encode(str) {
	    var out, i, len;
	    var c1, c2, c3;
	    len = str.length;
	    i = 0;
	    out = "";
	    while (i < len) {
	        c1 = str.charCodeAt(i++) & 0xff;
	        if (i == len) {
	            out += base64EncodeChars.charAt(c1 >> 2);
	            out += base64EncodeChars.charAt((c1 & 0x3) << 4);
	            out += "==";
	            break;
	        }
	        c2 = str.charCodeAt(i++);
	        if (i == len) {
	            out += base64EncodeChars.charAt(c1 >> 2);
	            out += base64EncodeChars.charAt((c1 & 0x3) << 4 | (c2 & 0xF0) >> 4);
	            out += base64EncodeChars.charAt((c2 & 0xF) << 2);
	            out += "=";
	            break;
	        }
	        c3 = str.charCodeAt(i++);
	        out += base64EncodeChars.charAt(c1 >> 2);
	        out += base64EncodeChars.charAt((c1 & 0x3) << 4 | (c2 & 0xF0) >> 4);
	        out += base64EncodeChars.charAt((c2 & 0xF) << 2 | (c3 & 0xC0) >> 6);
	        out += base64EncodeChars.charAt(c3 & 0x3F);
	    }
	    return out;
	}

	function base64decode(str) {
	    var c1, c2, c3, c4;
	    var i, len, out;
	    len = str.length;
	    i = 0;
	    out = "";
	    while (i < len) {
	        /* c1 */
	        do {
	            c1 = base64DecodeChars[str.charCodeAt(i++) & 0xff];
	        } while (i < len && c1 == -1);
	        if (c1 == -1) break;
	        /* c2 */
	        do {
	            c2 = base64DecodeChars[str.charCodeAt(i++) & 0xff];
	        } while (i < len && c2 == -1);
	        if (c2 == -1) break;
	        out += String.fromCharCode(c1 << 2 | (c2 & 0x30) >> 4);
	        /* c3 */
	        do {
	            c3 = str.charCodeAt(i++) & 0xff;
	            if (c3 == 61) return out;
	            c3 = base64DecodeChars[c3];
	        } while (i < len && c3 == -1);
	        if (c3 == -1) break;
	        out += String.fromCharCode((c2 & 0XF) << 4 | (c3 & 0x3C) >> 2);
	        /* c4 */
	        do {
	            c4 = str.charCodeAt(i++) & 0xff;
	            if (c4 == 61) return out;
	            c4 = base64DecodeChars[c4];
	        } while (i < len && c4 == -1);
	        if (c4 == -1) break;
	        out += String.fromCharCode((c3 & 0x03) << 6 | c4);
	    }
	    return out;
	}
	var safe64 = function safe64(base64) {
	    base64 = base64.replace(/\+/g, "-");
	    base64 = base64.replace(/\//g, "_");
	    return base64;
	};

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var classNames = __webpack_require__(102);
	var FormGroup = __webpack_require__(104);

	var Radio = React.createClass({
	    displayName: 'Radio',

	    getDefaultProps: function getDefaultProps() {
	        return {
	            title: '单选框',
	            type: 'radio',
	            value: 2,
	            f_default: 'sdsds',
	            f_options: [{
	                title: '选项1',
	                value: 1
	            }, {
	                title: '选项2',
	                value: 2
	            }],
	            name: 'state',
	            placeholder: '',
	            help: '',
	            disabled: '',
	            required: 'required'
	        };
	    },
	    getInitialState: function getInitialState() {
	        var options = [];
	        if (!this.props.f_ext) {
	            options = this.props.f_options;
	            if (typeof options == "string") {
	                options = JSON.parse(options);
	            }
	        }
	        return {
	            value: this.props.value,
	            help: this.props.help,
	            option: options
	        };
	    },
	    componentDidMount: function componentDidMount() {
	        if (this.props.f_ext) {
	            request.get('admin/' + this.props.f_ext).end(function (err, res) {
	                var data = JSON.parse(res.text);
	                this.setState({
	                    option: data
	                });
	            }.bind(this));
	        }
	    },
	    _onChange: function _onChange(e) {
	        var value = e.target.value;
	        this.setState({
	            value: value
	        });
	        if (this.props.onChange) {
	            this.props.onChange(this.props.name, value);
	        }
	    },
	    render: function render() {
	        var value = this.state.value;
	        var name = this.props.name;
	        var options = this.state.option.map(function (d, index) {
	            var checked = '';
	            if (value == d.value) {
	                checked = ' checked';
	            }
	            var typeClass = 'radio';
	            return React.createElement('label', {
	                key: index,
	                className: 'form-radio',
	                title: this.props.title,
	                help: this.state.help
	            }, React.createElement('div', {
	                className: typeClass + checked
	            }, React.createElement('input', {
	                type: 'radio',
	                name: name,
	                value: d.value,
	                checked: checked,
	                onChange: this._onChange
	            })), React.createElement('span', null, d.title));
	        }.bind(this));
	        return this.state.option.length > 0 ? React.createElement(FormGroup, {
	            title: this.props.title,
	            help: this.state.help
	        }, options) : null;
	    }
	});

	module.exports = Radio;

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var classNames = __webpack_require__(102);
	var FormGroup = __webpack_require__(104);

	var Checkbox = React.createClass({
	    displayName: 'Checkbox',

	    getDefaultProps: function getDefaultProps() {
	        return {
	            title: '多选框',
	            type: 'checkbox',
	            value: [2],
	            f_options: [{
	                title: '选项1',
	                value: 0
	            }, {
	                title: '选项2',
	                value: 1
	            }, {
	                title: '选项3',
	                value: 's2'
	            }],
	            name: 'state',
	            placeholder: '',
	            help: '',
	            disabled: '',
	            required: 'required'
	        };
	    },
	    getInitialState: function getInitialState() {
	        var options = [];
	        if (!this.props.f_ext) {
	            options = this.props.f_options;
	            if (typeof options == "string") {
	                options = JSON.parse(options);
	            }
	        }
	        var value = this.props.value;
	        if (value) {
	            value = JSON.parse(value);
	        } else {
	            value = [];
	        }
	        return {
	            value: value,
	            help: this.props.help,
	            option: options
	        };
	    },
	    componentDidMount: function componentDidMount() {
	        if (this.props.f_ext) {
	            request.get('admin/' + this.props.f_ext).end(function (err, res) {
	                var data = JSON.parse(res.text);
	                this.setState({
	                    option: data
	                });
	            }.bind(this));
	        }
	    },
	    _onChange: function _onChange(e) {
	        var type = this.props.type;
	        var v = e.target.value;
	        if (!isNaN(v)) {
	            v = parseInt(v);
	        }
	        var value = this.state.value;
	        var index = value.indexOf(v);
	        if (index == -1) {
	            value.push(v);
	        } else {
	            value.splice(index, 1);
	        }
	        this.setState({
	            value: value
	        });
	        value = JSON.stringify(value);
	        if (this.props.onChange) {
	            this.props.onChange(this.props.name, value);
	        }
	    },
	    render: function render() {
	        var value = this.state.value;
	        var name = this.props.name;
	        var options = this.state.option.map(function (d, index) {
	            var checked = '';
	            if (value.indexOf(d.value) > -1) {
	                checked = ' checked';
	            }
	            var typeClass = 'checker';
	            return React.createElement('label', {
	                key: index,
	                className: 'form-radio',
	                title: this.props.title,
	                help: this.state.help
	            }, React.createElement('div', {
	                className: typeClass + checked
	            }, React.createElement('input', {
	                type: 'checkbox',
	                name: name,
	                value: d.value,
	                checked: checked,
	                onChange: this._onChange
	            })), React.createElement('span', null, d.title));
	        }.bind(this));
	        return this.state.option.length > 0 ? React.createElement(FormGroup, {
	            title: this.props.title,
	            help: this.state.help
	        }, options) : null;
	    }
	});
	module.exports = Checkbox;

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var classNames = __webpack_require__(102);
	var FormGroup = __webpack_require__(104);

	var Range = React.createClass({
	    displayName: 'Range',

	    getDefaultProps: function getDefaultProps() {
	        return {
	            title: '滑条',
	            type: 'range',
	            value: '',
	            help: '滑动滑条选择你的值！',
	            disabled: '',
	            required: 'required',
	            max: 10,
	            min: 6
	        };
	    },
	    getInitialState: function getInitialState() {
	        return {
	            value: this.props.value,
	            help: this.props.help
	        };
	    },
	    componentWillMount: function componentWillMount() {
	        var help = '滑块值域' + this.props.min + '~' + this.props.max + '，' + this.props.help;
	        this.setState({
	            help: help
	        });
	    },
	    _onChange: function _onChange(e) {
	        var value = e.target.value;
	        if (value == this.state.value) {
	            return;
	        }
	        var help = '滑块值域' + this.props.min + '~' + this.props.max + '，当前值：' + value;
	        this.setState({
	            value: value,
	            help: help
	        });
	        if (this.props.onChange) {
	            this.props.onChange(this.props.name, value);
	        }
	    },
	    render: function render() {
	        return React.createElement(FormGroup, {
	            title: this.props.title,
	            help: this.state.help
	        }, React.createElement('input', {
	            className: 'form-range',
	            type: this.props.type,
	            max: this.props.max,
	            min: this.props.min,
	            disabled: this.props.disabled,
	            value: this.state.value,
	            onChange: this._onChange
	        }));
	    }
	});
	module.exports = Range;

/***/ },
/* 115 */
/***/ function(module, exports) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Botton = function (_React$Component) {
	    _inherits(Botton, _React$Component);

	    function Botton() {
	        _classCallCheck(this, Botton);

	        var _this = _possibleConstructorReturn(this, (Botton.__proto__ || Object.getPrototypeOf(Botton)).call(this));

	        _this.state = {
	            dotstyle: {
	                top: 0,
	                left: 0
	            },
	            dot: false
	        };
	        return _this;
	    }

	    _createClass(Botton, [{
	        key: 'onClick',
	        value: function onClick(e) {
	            var top = e.clientY - e.target.getBoundingClientRect().top;
	            var left = e.clientX - e.target.getBoundingClientRect().left;
	            this.setState({
	                dotstyle: {
	                    top: top + 'px',
	                    left: left + 'px'
	                },
	                dot: true
	            });
	            setTimeout(function () {
	                this.setState({
	                    dot: false
	                });
	            }.bind(this), 3000);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return React.createElement('div', {
	                className: 'form-group'
	            }, React.createElement('div', {
	                className: 'form-control'
	            }, React.createElement('div', {
	                className: 'form-button-dot',
	                onClick: this.onClick.bind(this)
	            }, React.createElement('input', {
	                className: 'pure-button pure-button-primary form-button',
	                type: 'submit',
	                disabled: this.props.disabled,
	                value: this.props.value
	            }), this.state.dot ? React.createElement('div', {
	                className: 'pure-dot',
	                style: this.state.dotstyle
	            }) : '')));
	        }
	    }]);

	    return Botton;
	}(React.Component);

	Botton.defaultProps = {
	    value: '保存'
	};

	module.exports = Botton;

/***/ },
/* 116 */
/***/ function(module, exports) {

	'use strict';

	var Hidden = React.createClass({
	    displayName: 'Hidden',

	    render: function render() {
	        return React.createElement('input', {
	            type: 'hidden',
	            disabled: this.props.disabled,
	            value: this.props.value
	        });
	    }
	});

	module.exports = Hidden;

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var classNames = __webpack_require__(102);
	var FormGroup = __webpack_require__(104);

	var Options = function (_React$Component) {
	    _inherits(Options, _React$Component);

	    function Options(props) {
	        _classCallCheck(this, Options);

	        return _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).call(this, props));
	    }

	    _createClass(Options, [{
	        key: '_changeChoose',
	        value: function _changeChoose(value, titie) {
	            if (this.props._changeChoose) {
	                this.props._changeChoose(value, titie);
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var value = this.props.value;
	            var name = this.props.name;
	            var search = this.props.search;
	            var options = this.props.options.map(function (d, index) {
	                var isActive = value == d.value ? ' active' : '';
	                var style = 'block';
	                if (d.title.indexOf(search) == -1) {
	                    style = 'none';
	                }
	                return React.createElement('div', {
	                    key: index,
	                    className: 'form-option',
	                    style: {
	                        display: style
	                    }
	                }, React.createElement('div', {
	                    className: 't ' + isActive,
	                    onClick: this._changeChoose.bind(this, d.value, d.title)
	                }, d.title), d.sub ? React.createElement(Options, {
	                    className: 'form-select-choose',
	                    value: this.props.value,
	                    search: this.props.search,
	                    options: d.sub,
	                    name: this.props.name,
	                    _changeChoose: this._changeChoose.bind(this)
	                }, d.title) : null);
	            }.bind(this));
	            return React.createElement('div', {
	                className: 'form-select-choose'
	            }, options);
	        }
	    }]);

	    return Options;
	}(React.Component);

	var Select = function (_React$Component2) {
	    _inherits(Select, _React$Component2);

	    function Select(props) {
	        _classCallCheck(this, Select);

	        var _this2 = _possibleConstructorReturn(this, (Select.__proto__ || Object.getPrototypeOf(Select)).call(this, props));

	        var options = [];
	        if (!_this2.props.f_ext) {
	            options = _this2.props.f_options;
	            if (typeof options == "string") {
	                options = JSON.parse(options);
	            }
	        }
	        var title = void 0;
	        options.forEach(function (element) {
	            if (props.value == element.value) {
	                title = element.title;
	            }
	        }, _this2);
	        _this2.state = {
	            files: props.files,
	            value: props.value,
	            name: title || props.name,
	            help: props.help,
	            options: options,
	            show: false,
	            search: ''
	        };
	        return _this2;
	    }

	    _createClass(Select, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            if (this.props.f_ext) {
	                request.get('admin/' + this.props.f_ext).end(function (err, res) {
	                    var data = JSON.parse(res.text);
	                    var title = void 0;
	                    var that = this;
	                    this._title(that, data, this.props.value);
	                    // data.forEach(function (element) {
	                    //     if (this.props.value == element.value) {
	                    //         title = element.title
	                    //     }
	                    // }, this);
	                    this.setState({
	                        options: data
	                    });
	                }.bind(this));
	            }
	        }
	    }, {
	        key: '_title',
	        value: function _title(that, data, value) {
	            var title = void 0;
	            data.forEach(function (e) {
	                if (value == e.value) {
	                    that.setState({
	                        name: e.title
	                    });
	                }
	                if (!(typeof e.sub == "undefined") && e.sub.length > 0) {
	                    that._title(that, e.sub, value);
	                }
	            });
	        }
	    }, {
	        key: '_toggleShow',
	        value: function _toggleShow(e) {
	            this.setState({
	                show: !this.state.show
	            });
	        }
	    }, {
	        key: '_changeChoose',
	        value: function _changeChoose(value, titie) {
	            this.setState({
	                value: value,
	                name: titie,
	                show: false,
	                search: ''
	            });
	            if (this.props.onChange) {
	                this.props.onChange(this.props.name, value);
	            }
	        }
	    }, {
	        key: '_onSearch',
	        value: function _onSearch(e) {
	            e.preventDefault();
	            var value = e.target.value;
	            this.setState({
	                search: value
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var value = this.state.value;
	            var name = this.props.name;
	            var search = this.state.search;
	            var options = this.state.options.map(function (d, index) {
	                var isActive = value == d.value ? ' active' : '';
	                var style = 'block';
	                if (d.title.indexOf(search) == -1) {
	                    style = 'none';
	                }
	                return React.createElement('div', {
	                    key: index,
	                    className: 'form-option' + isActive,
	                    style: {
	                        display: style
	                    },
	                    onClick: this._changeChoose.bind(this, d.value, d.title)
	                }, d.title);
	            }.bind(this));
	            return React.createElement(FormGroup, {
	                title: this.props.title,
	                help: this.state.help,
	                className: 'form-select'
	            }, React.createElement('div', {
	                className: 'form-input',
	                onClick: this._toggleShow.bind(this)
	            }, this.state.name), React.createElement('div', {
	                className: 'form-choose',
	                style: {
	                    display: this.state.show ? 'block' : 'none'
	                }
	            }, React.createElement('div', {
	                className: 'form-select-search'
	            }, React.createElement('input', {
	                className: 'form-input',
	                value: this.state.search,
	                placeholder: 'Search',
	                onChange: this._onSearch.bind(this)
	            })), React.createElement('div', {
	                className: 'form-select-choose'
	            }, React.createElement(Options, {
	                className: 'form-select-choose',
	                value: this.state.value,
	                search: this.state.search,
	                options: this.state.options,
	                name: this.props.name,
	                _changeChoose: this._changeChoose.bind(this)
	            }
	            // options
	            ))));
	        }
	    }]);

	    return Select;
	}(React.Component);

	Select.defaultProps = {
	    title: '单选框',
	    type: 'radio',
	    value: 2,
	    f_options: [{
	        title: '选项1',
	        value: 1
	    }, {
	        title: '选项2',
	        value: 2
	    }, {
	        title: '选项3',
	        value: 3
	    }, {
	        title: '选项4',
	        value: 4
	    }],
	    name: 'state',
	    placeholder: '',
	    help: '',
	    disabled: '',
	    required: 'required'
	};
	module.exports = Select;

/***/ },
/* 118 */
/***/ function(module, exports) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Tab = function (_React$Component) {
	    _inherits(Tab, _React$Component);

	    function Tab() {
	        _classCallCheck(this, Tab);

	        var _this = _possibleConstructorReturn(this, (Tab.__proto__ || Object.getPrototypeOf(Tab)).call(this));

	        _this.state = {
	            dotstyle: {
	                top: 0,
	                left: 0
	            },
	            dot: 0
	        };
	        return _this;
	    }

	    _createClass(Tab, [{
	        key: '_onClick',
	        value: function _onClick(index) {
	            this.setState({
	                dot: index
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var dot = this.state.dot;
	            var childs = [];
	            if (this.props.children) {
	                if (this.props.children.length) {
	                    childs = this.props.children;
	                } else {
	                    childs.push(this.props.children);
	                }
	            }
	            return React.createElement('div', {
	                className: 'tab'
	            }, React.createElement('div', {
	                className: 'tab-cards'
	            }, childs.map(function (child, index) {
	                var active = index == dot ? ' active' : '';
	                return React.createElement('div', {
	                    key: index,
	                    onClick: this._onClick.bind(this, index),
	                    className: 'tab-card' + active
	                }, child.props.title);
	            }.bind(this)), React.createElement('div', {
	                className: 'tab-cardsw',
	                style: {
	                    width: '5rem'
	                }
	            })), React.createElement('div', {
	                className: 'tab-cards2'
	            }, childs.map(function (child, index) {
	                var active = index == dot ? ' active' : '';
	                return React.createElement('div', {
	                    key: index,
	                    className: 'tab-card2 ' + active
	                }, child.props.children);
	            })));
	        }
	    }]);

	    return Tab;
	}(React.Component);

	Tab.defaultProps = {
	    value: '保存'
	};

	module.exports = Tab;

/***/ },
/* 119 */
/***/ function(module, exports) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Audio = function (_React$Component) {
	    _inherits(Audio, _React$Component);

	    function Audio() {
	        _classCallCheck(this, Audio);

	        return _possibleConstructorReturn(this, (Audio.__proto__ || Object.getPrototypeOf(Audio)).call(this));
	    }

	    _createClass(Audio, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var audio = this.refs.audio;
	            // let audio = React.findDOMNode(this.refs.audio);
	            // console.log(audio);
	            // audio.play()
	            audio.addEventListener('timeupdate', function () {
	                //剩余时间
	                if (!isNaN(audio.duration)) {
	                    var surplus = audio.duration - audio.currentTime;
	                    console.log(surplus);
	                }
	            }, false);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return React.createElement('div', {
	                className: 'form-group'
	            }, React.createElement('div', {
	                className: 'form-control'
	            }, React.createElement('audio', {
	                ref: 'audio',
	                src: '1.mp3',
	                controls: 'controls',
	                loop: 'loop',
	                autoPlay: false
	            }, '亲 您的浏览器不支持html5的audio标签')));
	        }
	    }]);

	    return Audio;
	}(React.Component);

	Audio.defaultProps = {
	    value: '保存'
	};

	module.exports = Audio;

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var classNames = __webpack_require__(102);
	var FormGroup = __webpack_require__(104);

	var Checkbox = React.createClass({
	    displayName: 'Checkbox',

	    getDefaultProps: function getDefaultProps() {
	        return {
	            title: '多选框',
	            type: 'checkbox',
	            value: [2],
	            f_options: [{
	                title: '选项1',
	                value: 0
	            }, {
	                title: '选项2',
	                value: 1
	            }, {
	                title: '选项3',
	                value: 's2'
	            }],
	            name: 'state',
	            placeholder: '',
	            help: '',
	            disabled: '',
	            required: 'required'
	        };
	    },
	    getInitialState: function getInitialState() {
	        var options = [];
	        if (!this.props.f_ext) {
	            options = this.props.f_options;
	            if (typeof options == "string") {
	                options = JSON.parse(options);
	            }
	        }
	        var value = this.props.value;
	        if (value) {
	            value = JSON.parse(value);
	        } else {
	            value = [];
	        }
	        return {
	            value: value,
	            help: this.props.help,
	            option: options
	        };
	    },
	    componentDidMount: function componentDidMount() {
	        console.log(this.props.f_ext);
	        if (this.props.f_ext) {
	            request.get('admin/' + this.props.f_ext).end(function (err, res) {
	                var data = JSON.parse(res.text);
	                this.setState({
	                    option: data
	                });
	            }.bind(this));
	        }
	    },
	    _onChange: function _onChange(e) {
	        var type = this.props.type;
	        var v = e.target.value;
	        if (!isNaN(v)) {
	            v = parseInt(v);
	        }
	        var value = this.state.value;
	        var index = value.indexOf(v);
	        if (index == -1) {
	            value.push(v);
	        } else {
	            value.splice(index, 1);
	        }
	        this.setState({
	            value: value
	        });
	        value = JSON.stringify(value);
	        if (this.props.onChange) {
	            this.props.onChange(this.props.name, value);
	        }
	    },
	    render: function render() {
	        var value = this.state.value;
	        var name = this.props.name;
	        var options = this.state.option.map(function (d, index) {
	            var checked = '';
	            if (value.indexOf(d.value) > -1) {
	                checked = ' checked';
	            }
	            var typeClass = 'checker';
	            return React.createElement('label', {
	                key: index,
	                className: 'form-radio',
	                title: this.props.title,
	                help: this.state.help
	            }, React.createElement('div', {
	                className: typeClass + checked
	            }, React.createElement('input', {
	                type: 'checkbox',
	                name: name,
	                value: d.value,
	                checked: checked,
	                onChange: this._onChange
	            })), React.createElement('span', null, d.title));
	        }.bind(this));
	        return this.state.option.length > 0 ? React.createElement(FormGroup, {
	            title: this.props.title,
	            help: this.state.help
	        }, options) : null;
	    }
	});
	module.exports = Checkbox;

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _ReactRouter = ReactRouter;
	var Link = _ReactRouter.Link;


	var request = __webpack_require__(72);
	var Pagination = __webpack_require__(92);

	var Pages = React.createClass({
	    displayName: 'Pages',

	    getInitialState: function getInitialState() {
	        return {
	            items: [],
	            del_id: [],
	            del_all: [],
	            isdel_all: false,
	            thead: [],
	            title: ''
	        };
	    },

	    getDefaultProps: function getDefaultProps() {},

	    componentDidMount: function componentDidMount() {
	        this._reQuest(this.props);
	    },
	    componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	        var page = nextProps.location.query.page || 1;
	        var page2 = this.props.location.query.page || 1;
	        if (this.props.params.pages != nextProps.params.pages || page != page2 || nextProps.location.search !== this.state.search) {
	            this._reQuest(nextProps);
	        }
	    },
	    _reQuest: function _reQuest(props) {
	        console.log(props.location);
	        getfetch('api/' + props.params.pages, props.location.query).then(function (res) {
	            console.log(res);
	            Rd.config('title', res.title);
	            Rd.pagedata(res);
	            var items = [];
	            this.setState({
	                items: items.concat(res.data),
	                del_all: this._set_del_all(res.info),
	                thead: res.thead,
	                title: res.title
	            });
	        }.bind(this));
	    },
	    _set_del_all: function _set_del_all(items) {
	        var del_all = [];
	        var x = void 0;
	        for (x in items) {
	            del_all.push(items[x]['id']);
	        }
	        return del_all;
	    },
	    _del: function _del(e) {
	        console.log(e.target);
	        console.log(e.target.value);
	    },
	    _thead: function _thead() {
	        var isdel_all = this.state.isdel_all;
	        var checked = void 0;
	        if (isdel_all) {
	            checked = 'checked';
	        } else {
	            checked = '';
	        }
	        var item = [];
	        var p = void 0;
	        var thead = this.state.thead;
	        for (var i in thead) {
	            p = React.createElement("th", {
	                key: i
	            }, thead[i]);
	            item.push(p);
	        }
	        return React.createElement("thead", {}, React.createElement("tr", {}, React.createElement("th", {
	            className: "table-checkbox sorting_disabled"
	        }, React.createElement("div", {
	            className: "checker"
	        }, React.createElement("span", {
	            className: checked
	        }, React.createElement("input", {
	            className: "group-checkable",
	            type: "checkbox",
	            onClick: this._isdel_all
	        })))), item, React.createElement("th", {}, '操作')));
	    },
	    _list: function _list(data) {
	        var list = [];
	        var p = void 0;
	        var thead = this.state.thead;
	        for (var i in thead) {
	            p = React.createElement("td", {
	                key: i + data.id
	            }, data[i]);
	            list.push(p);
	        }
	        return list;
	    },
	    _isdel_all: function _isdel_all() {
	        var isdel_all = this.state.isdel_all;
	        var del_all = this.state.del_all;
	        var del_id = [];
	        if (isdel_all) {
	            isdel_all = false;
	        } else {
	            isdel_all = true;
	            del_id = del_id.concat(del_all);
	        }
	        this.setState({
	            isdel_all: isdel_all,
	            del_id: del_id
	        });
	    },
	    _click: function _click(e) {
	        var del_id = this.state.del_id;
	        var k = parseInt(e.target.value);
	        var index = del_id.indexOf(k);
	        if (index == -1) {
	            del_id.push(k);
	        } else {
	            del_id.splice(index, 1);
	        }
	        this.setState({
	            del_id: del_id
	        });
	    },
	    _onDel: function _onDel(e) {
	        e.preventDefault();
	        var id = e.target.id;
	        id = id.split("_");
	        id = id[1];
	        var url = 'api/' + this.props.params.pages + '/delete/' + id;
	        getfetch(url).then(function (res) {
	            this.componentDidMount();
	            Rd.message(res.msg);
	        }.bind(this));
	    },
	    qq: function qq() {
	        var query = this.props.location.query;
	        console.log(query);
	        return query;
	    },
	    render: function render() {
	        var url = this.props.params.pages;
	        var list = this.state.items.map(function (data) {
	            var curl = '/api/' + url + '/' + data.id;
	            var arr = this.state.del_id;
	            var k = data.id;
	            var checked = void 0;
	            if (arr.indexOf(k) != -1) {
	                checked = 'checked';
	            } else {
	                checked = '';
	            }
	            var role = void 0;
	            if (url == 'roles') {
	                role = React.createElement(Link, {
	                    activeClassName: "active",
	                    to: '/permissions/' + data.id,
	                    style: {
	                        marginLeft: '20px'
	                    }
	                }, "用户组权限");
	            }
	            return React.createElement("tr", {
	                key: data.id
	            }, React.createElement("td", {}, React.createElement("div", {
	                className: "checker " + checked
	            }, React.createElement("input", {
	                className: "checkboxes",
	                value: data.id,
	                name: 'del_id[]',
	                type: "checkbox",
	                onClick: this._click
	            }))), this._list(data), React.createElement("td", {}, React.createElement(Link, {
	                activeClassName: "active",
	                to: curl
	            }, "编辑"), ' | ', React.createElement('a', {
	                activeClassName: "active",
	                id: 'del_' + data.id,
	                onClick: this._onDel
	            }, "删除"), role));
	        }.bind(this));
	        return React.createElement("section", {
	            className: "pure-u-1"
	        }, React.createElement("h3", {
	            className: "page-title"
	        }, this.state.title), React.createElement('div', {
	            className: 'pure-u-1 filter'
	        }, React.createElement('a', {
	            className: 'pure-menu-link'
	        }, '筛选'), React.createElement(Link, {
	            to: '/api/' + this.props.params.pages,
	            className: 'pure-menu-link',
	            activeClassName: 'active'
	        }, '全部'), React.createElement(Link, {
	            to: '/api/' + this.props.params.pages,
	            className: 'pure-menu-link',
	            activeClassName: 'active',
	            query: {
	                state: 0
	            }
	        }, '正常'), React.createElement(Link, {
	            to: '/api/' + this.props.params.pages,
	            className: 'pure-menu-link',
	            activeClassName: 'active',
	            query: {
	                state: 1
	            }
	        }, '已删除'), React.createElement(Link, {
	            to: '/api/' + this.props.params.pages + '/add',
	            className: 'pure-menu-link',
	            activeClassName: 'active'
	        }, '新增')), React.createElement("table", {
	            className: "pure-table pure-table-bordered",
	            style: {
	                width: '100%'
	            }
	        }, this._thead(), React.createElement("tbody", null, list)), React.createElement(Pagination));
	    }
	});

	module.exports = connect(function (state) {
	    return {
	        counter: state.config.show
	    };
	})(Pages);

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _require = __webpack_require__(100);

	var Form = _require.Form;
	var Input = _require.Input;
	var Textarea = _require.Textarea;
	var Ueditor = _require.Ueditor;
	var Radio = _require.Radio;
	var Checkbox = _require.Checkbox;
	var Upload = _require.Upload;
	var Range = _require.Range;
	var Button = _require.Button;
	var Select = _require.Select;
	var Hidden = _require.Hidden;
	var Category = _require.Category;
	var _ReactRouter = ReactRouter;
	var Link = _ReactRouter.Link;

	var Page = function (_React$Component) {
	    _inherits(Page, _React$Component);

	    function Page(props) {
	        _classCallCheck(this, Page);

	        var _this = _possibleConstructorReturn(this, (Page.__proto__ || Object.getPrototypeOf(Page)).call(this, props));

	        _this.state = {
	            info: {}
	        };
	        return _this;
	    }

	    _createClass(Page, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            this._req(this.props);
	        }
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            if (this.props.params.pages != nextProps.params.pages || this.props.params.page != nextProps.params.page) {
	                this._req(nextProps);
	            }
	        }
	    }, {
	        key: '_req',
	        value: function _req(props) {
	            var _props$params = props.params;
	            var pages = _props$params.pages;
	            var page = _props$params.page;

	            var requrl = page == 'add' ? pages + '/add' : pages + '/detail/' + page;
	            getfetch("api/" + requrl).then(function (res) {
	                this.setState({
	                    title: res.title,
	                    fields: res.fields,
	                    info: res.info || {}
	                });
	            }.bind(this));
	            // request.get("api/" + requrl)
	            //     .end(function (err, res) {
	            //         let msg
	            //         if (err) {
	            //             this.props.history.pushState(null, '/')
	            //             msg = err.response.text
	            //         } else {
	            //             let data = JSON.parse(res.text);
	            //             msg = data.msg
	            //             this.setState({
	            //                 title: data.title,
	            //                 fields: data.fields,
	            //                 info: data.info || {}
	            //             })
	            //         }
	            //     }.bind(this))
	        }
	    }, {
	        key: '_onSubmit',
	        value: function _onSubmit(e) {
	            var _props$params2 = this.props.params;
	            var pages = _props$params2.pages;
	            var page = _props$params2.page;

	            var requrl = page == 'add' ? pages + '/add' : pages + '/detail';
	            postfetch('api/' + requrl, this.state.info).then(function (res) {
	                if (page == 'add') {
	                    this.props.history.pushState(null, 'api/' + pages + '/' + res.info.id);
	                }
	                Rd.message(res.msg);
	            }.bind(this));
	        }
	    }, {
	        key: '_onChange',
	        value: function _onChange(name, value) {
	            var info = this.state.info;
	            info[name] = value;
	            this.setState({
	                info: info
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            var render = void 0;
	            var forms = void 0;
	            var info = this.state.info;
	            var model = this.state.fields;
	            if (model) {
	                (function () {
	                    var onChange = _this2._onChange.bind(_this2);
	                    forms = model.map(function (ds, index) {
	                        var d = {};
	                        if (info[ds.key] || info[ds.key] == 0) {
	                            d.value = info[ds.key];
	                        } else {
	                            d.value = ds.f_default || '';
	                        }
	                        if (ds.f_options) {
	                            d.f_options = ds.f_options;
	                        }
	                        d.f_ext = ds.f_ext;
	                        d.key = ds.key;
	                        d.name = ds.key;
	                        d.type = ds.type;
	                        d.title = ds.name;
	                        d.onChange = onChange;
	                        switch (d.type) {
	                            case "text":
	                                return React.createElement(Input, d);
	                                break;
	                            case "password":
	                                return React.createElement(Input, d);
	                                break;
	                            case "email":
	                                return React.createElement(Input, d);
	                                break;
	                            case "textarea":
	                                return React.createElement(Textarea, d);
	                                break;
	                            case "upload":
	                                return React.createElement(Upload, d);
	                                break;
	                            case "image":
	                                return React.createElement(Upload, d);
	                                break;
	                            case "editer":
	                                return React.createElement(Ueditor, d);
	                                break;
	                            case "radio":
	                                return React.createElement(Radio, d);
	                                break;
	                            case "checkbox":
	                                return React.createElement(Checkbox, d);
	                                break;
	                            case "select":
	                                return React.createElement(Select, d);
	                                break;
	                            case "category":
	                                return React.createElement(Category, d);
	                                break;
	                            case "hidden":
	                                return React.createElement(Hidden, d);
	                                break;
	                            default:
	                                break;
	                        }
	                    });
	                })();
	            }
	            // if (info) {
	            render = React.createElement('section', {
	                className: 'container pure-u-1'
	            }, React.createElement("h3", {
	                className: "page-title"
	            }, this.state.title, this.props.params.page !== 'add' ? React.createElement(Link, {
	                to: '/api/' + this.props.params.pages + '/add'
	            }, '（新增）') : null), React.createElement(Form, {
	                action: this.state.action,
	                info: info,
	                apiSubmit: false,
	                // legend: this.state.title,
	                onSubmit: this._onSubmit.bind(this)
	            }, forms, React.createElement(Button)));
	            // }
	            return React.createElement('section', {
	                className: 'warp'
	            }, render);
	        }
	    }]);

	    return Page;
	}(React.Component);

	module.exports = Page;

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var request = __webpack_require__(72);
	var _ReactRouter = ReactRouter;
	var Link = _ReactRouter.Link;

	var _require = __webpack_require__(100);

	var Form = _require.Form;
	var Input = _require.Input;
	var Button = _require.Button;

	var Login = function (_React$Component) {
	    _inherits(Login, _React$Component);

	    function Login(props) {
	        _classCallCheck(this, Login);

	        var _this = _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).call(this, props));

	        _this.state = {
	            info: {
	                username: '',
	                password: ''
	            }
	        };
	        return _this;
	    }

	    _createClass(Login, [{
	        key: '_onChange',
	        value: function _onChange(name, value) {
	            var info = this.state.info;
	            info[name] = value;
	            this.setState({
	                info: info
	            });
	        }
	    }, {
	        key: '_onSubmit',
	        value: function _onSubmit(e) {
	            e.preventDefault();
	            postfetch('api', this.state.info).then(function (res) {
	                if (res) {
	                    Rd.config('token', res.token);
	                    localStorage.token = res.token;
	                    this.props.history.pushState(null, '/');
	                }
	            }.bind(this));
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return React.createElement('section', {
	                className: 'pure-g'
	            }, React.createElement('section', {
	                className: 'pure-u-1 login'
	            }, React.createElement('section', {
	                className: 'login_t pure-u-1'
	            }, React.createElement(Link, {
	                to: '/',
	                title: '首页'
	            }, '首页'), React.createElement(Link, {
	                to: 'login',
	                title: '登录'
	            }, '登录')), this.state.msg ? React.createElement('div', {
	                className: 'alert alert-warning'
	            }, this.state.msg) : null, React.createElement(Form, {
	                action: 'user/login',
	                info: this.state.info,
	                apiSubmit: false,
	                legend: '用户登录',
	                onSubmit: this._onSubmit.bind(this)
	            }, React.createElement(Input, {
	                type: 'text',
	                title: '用户名',
	                name: 'username',
	                placeholder: '请输入您的用户名！',
	                value: this.state.info.username,
	                onChange: this._onChange.bind(this)
	            }), React.createElement(Input, {
	                type: 'password',
	                title: '密码',
	                name: 'password',
	                placeholder: '请输入您的密码！',
	                value: this.state.info.password,
	                onChange: this._onChange.bind(this)
	            }), React.createElement(Button, {
	                value: '登录'
	            }))));
	        }
	    }]);

	    return Login;
	}(React.Component);

	module.exports = Login;

/***/ },
/* 124 */
/***/ function(module, exports) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Logout = function (_React$Component) {
	    _inherits(Logout, _React$Component);

	    function Logout() {
	        _classCallCheck(this, Logout);

	        return _possibleConstructorReturn(this, (Logout.__proto__ || Object.getPrototypeOf(Logout)).call(this));
	    }

	    _createClass(Logout, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            getfetch('admin/logout').then(function (res) {
	                Rd.user('');
	                this.props.history.pushState(null, 'login');
	            }.bind(this));
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return null;
	        }
	    }]);

	    return Logout;
	}(React.Component);

	module.exports = Logout;

/***/ }
/******/ ]);