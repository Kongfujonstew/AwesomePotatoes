'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.selectMovie = exports.logout = exports.login = undefined;

var _actionTypes = require('./actionTypes');

var _actionTypes2 = _interopRequireDefault(_actionTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var login = exports.login = function login(profile) {
  return function (dispatch) {
    return dispatch({ type: _actionTypes2.default.LOGIN, profile: profile });
  };
};

var logout = exports.logout = function logout() {
  return function (dispatch) {
    return dispatch({ type: _actionTypes2.default.LOGOUT, profile: null });
  };
};

var selectMovie = exports.selectMovie = function selectMovie(selectedMovieId) {
  return function (dispatch) {
    return dispatch({
      type: _actionTypes2.default.SELECT_MOVIE,
      selectedMovieId: selectedMovieId
    });
  };
};