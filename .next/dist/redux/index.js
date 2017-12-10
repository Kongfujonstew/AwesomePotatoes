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

var _actionTypes = require('./actionTypes');

var _actionTypes2 = _interopRequireDefault(_actionTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// MAIN REDUCER
var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { loggedIn: false };
  var action = arguments[1];

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

//STATE PERSISTENCE
var persistState = function persistState(reducer) {
  return function (state, action) {
    var newState = reducer(state, action);
    if (typeof window === 'undefined') {
      return {};
    } else {
      localStorage.setItem('reduxState', (0, _stringify2.default)(newState));
      return newState;
    }
  };
};

var persistedReducer = persistState(reducer);

// ACTIONS

exports.default = function () {

  var getPersistedState = function getPersistedState() {
    if (typeof window === 'undefined') {
      return {};
    } else {
      var persistedState = JSON.parse(localStorage.getItem('reduxState'));
      var state = persistedState ? persistedState : { loggedIn: false };
      return JSON.parse(localStorage.getItem('reduxState'));
    }
  };

  var store = (0, _redux.createStore)(persistedReducer, getPersistedState(), (0, _reduxDevtoolsExtension.composeWithDevTools)((0, _redux.applyMiddleware)(_reduxThunk2.default)));

  return store;
};