'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

// ACTIONS

exports.default = function () {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { loggedIn: false };

  console.log('creating store');
  return (0, _redux.createStore)(reducer, initialState, (0, _reduxDevtoolsExtension.composeWithDevTools)((0, _redux.applyMiddleware)(_reduxThunk2.default)));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZHV4L2luZGV4LmpzIl0sIm5hbWVzIjpbImNyZWF0ZVN0b3JlIiwiYXBwbHlNaWRkbGV3YXJlIiwiY29tcG9zZVdpdGhEZXZUb29scyIsInRodW5rTWlkZGxld2FyZSIsImFjdGlvblR5cGVzIiwicmVkdWNlciIsInN0YXRlIiwibG9nZ2VkSW4iLCJhY3Rpb24iLCJ0eXBlIiwiTE9HSU4iLCJwcm9maWxlIiwiTE9HT1VUIiwiU0VMRUNUX01PVklFIiwic2VsZWN0ZWRNb3ZpZUlkIiwibW92aWVJZCIsImluaXRpYWxTdGF0ZSIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxBQUFTLEFBQVQsQUFBc0IsQUFBdEI7O0FBQ0EsQUFBUyxBQUFUOztBQUNBLEFBQU8sQUFBUDs7OztBQUNBLEFBQU8sQUFBUCxBQUF3QixBQUF4Qjs7Ozs7O0FBRUE7QUFDQSxJQUFNLFVBQVUsU0FBVixBQUFVLFVBQXlDO01BQXhDLEFBQXdDLDRFQUFoQyxFQUFFLFVBQVUsQUFBWixBQUFnQztNQUFYLEFBQVcsbUJBQ3ZEOztVQUFRLE9BQU8sQUFBZixBQUNFO1NBQUssc0JBQVksQUFBakIsQUFDRTthQUFPLHNCQUFjLEFBQWQsSUFBa0IsQUFBbEIsT0FBeUIsRUFBRSxVQUFVLEFBQVosTUFBa0IsU0FBUyxPQUFPLEFBQWxDLEFBQXpCLEFBQVAsQUFDRjtTQUFLLHNCQUFZLEFBQWpCLEFBQ0U7YUFBTyxzQkFBYyxBQUFkLElBQWtCLEFBQWxCLE9BQXlCLEVBQUUsVUFBVSxBQUFaLE9BQW1CLFNBQVMsT0FBTyxBQUFuQyxBQUF6QixBQUFQLEFBQ0Y7U0FBSyxzQkFBWSxBQUFqQixBQUNFO2FBQU8sc0JBQWMsQUFBZCxJQUFrQixBQUFsQixPQUF5QixFQUFFLGlCQUFpQixPQUFPLEFBQTFCLEFBQXpCLEFBQVAsQUFDRjtBQUFTO2FBQU8sQUFBUCxBQVBYO0dBUUMsQUFDRjtBQVZEOztBQVlBLEFBQ0E7O2tCQUFlLFlBQXdDO01BQXZDLEFBQXVDLG1GQUF4QixFQUFFLFVBQVUsQUFBWixBQUF3QixBQUNyRDs7VUFBUSxBQUFSLElBQVksQUFBWixBQUNBO1NBQU8sd0JBQVksQUFBWixTQUFxQixBQUFyQixjQUFtQyxpREFBb0IsQUFBZ0IsQUFBaEIsQUFBcEIsQUFBbkMsQUFBUCxBQUNEO0FBSEQiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2ptaWNoYWVsc3Rld2FydC9Db2RlL2F3ZXNvbWVQb3RhdG9lcyJ9