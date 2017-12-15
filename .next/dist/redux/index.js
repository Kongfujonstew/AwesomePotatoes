'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _redux = require('redux');

var _reduxDevtoolsExtension = require('redux-devtools-extension');

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reduxLogger = require('redux-logger');

var _reduxLogger2 = _interopRequireDefault(_reduxLogger);

var _actionTypes = require('./actionTypes');

var _actionTypes2 = _interopRequireDefault(_actionTypes);

var _reduxForm = require('redux-form');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

// MAIN REDUCER
var userReducer = function userReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments[1];
  //
  switch (action.type) {
    case _actionTypes2.default.LOGIN:
      return (0, _assign2.default)({}, state, { loggedIn: true, profile: action.profile });
    case _actionTypes2.default.LOGOUT:
      return (0, _assign2.default)({}, state, { loggedIn: false, profile: action.profile });
    case _actionTypes2.default.SELECT_MOVIE:
      return (0, _assign2.default)({}, state, { selectedMovieId: action.movieId });
    default:
      return state;
  };
};

var rootReducer = (0, _redux.combineReducers)({
  user: userReducer,
  form: _reduxForm.reducer
});

//STATE PERSISTENCE
var persistState = function persistState(reducer) {
  return function (state, action) {
    var newState = reducer(state, action);
    if (typeof window === 'undefined') {
      return { user: {} };
    } else {
      localStorage.setItem('reduxState', (0, _stringify2.default)(newState));
      return newState;
    }
  };
};

var persistedReducer = persistState(rootReducer);

// ACTIONS

exports.default = function () {
  var getPersistedState = function getPersistedState() {
    if (typeof window === 'undefined') {
      return {};
    } else {
      var persistedState = JSON.parse(localStorage.getItem('reduxState'));
      var state = persistedState ? persistedState : {};
      return state;
    }
  };

  var store = (0, _redux.createStore)(persistedReducer, getPersistedState(), (0, _reduxDevtoolsExtension.composeWithDevTools)((0, _redux.applyMiddleware)(_reduxThunk2.default)));

  // const store = createStore(rootReducer,
  //   composeWithDevTools(
  //     applyMiddleware(thunkMiddleware),
  //     applyMiddleware(logger)));


  return store;
};

// import { createStore, applyMiddleware, combineReducers } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import thunkMiddleware from 'redux-thunk';
// import actionTypes from './actionTypes';

// import { reducer as formReducer } from 'redux-form' //

// // MAIN REDUCER
// const stateReducer = (state = { loggedIn: false }, action) => { //
//   switch (action.type) {
//     case actionTypes.LOGIN:
//       return Object.assign({}, state, { loggedIn: true, profile: action.profile });
//     case actionTypes.LOGOUT:
//       return Object.assign({}, state, { loggedIn: false, profile: action.profile });
//     case actionTypes.SELECT_MOVIE:
//       return Object.assign({}, state, { selectedMovieId: action.movieId });
//     default: return state;
//   };
// };


// const rootReducer =  combineReducers({
//   stateReducer,
//   form: formReducer
// })

// //STATE PERSISTENCE
// const persistState = (reducer) => {
//   return (state, action) => {
//     const newState = reducer(state, action)
//     if (typeof window === 'undefined') {
//       return {};
//     } else {
//       localStorage.setItem('reduxState', JSON.stringify(newState));
//       return newState;
//     }   
//   }
// }

// const persistedReducer = persistState(rootReducer);