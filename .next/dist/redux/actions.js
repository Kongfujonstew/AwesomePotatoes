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
    console.log('logging in profile: ', profile);
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
    console.log('dispatchign action with movieId: ', selectedMovieId);
    return dispatch({
      type: _actionTypes2.default.SELECT_MOVIE,
      selectedMovieId: selectedMovieId
    });
  };
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZHV4L2FjdGlvbnMuanMiXSwibmFtZXMiOlsiYWN0aW9uVHlwZXMiLCJsb2dpbiIsInByb2ZpbGUiLCJjb25zb2xlIiwibG9nIiwiZGlzcGF0Y2giLCJ0eXBlIiwiTE9HSU4iLCJsb2dvdXQiLCJMT0dPVVQiLCJzZWxlY3RNb3ZpZSIsInNlbGVjdGVkTW92aWVJZCIsIlNFTEVDVF9NT1ZJRSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLEFBQU8sQUFBaUIsQUFFeEI7Ozs7OztBQUFPLElBQU0sd0JBQVEsU0FBUixBQUFRLE1BQUEsQUFBQyxTQUFEO1NBQWEsb0JBQVksQUFDNUM7WUFBQSxBQUFRLElBQVIsQUFBWSx3QkFBWixBQUFvQyxBQUNwQztXQUFPLFNBQVMsRUFBRSxNQUFNLHNCQUFSLEFBQW9CLE9BQU8sU0FBM0MsQUFBTyxBQUFTLEFBQ2pCO0FBSG9CO0FBQWQsQUFLUDs7QUFBTyxJQUFNLDBCQUFTLFNBQVQsQUFBUyxTQUFBO1NBQU0sb0JBQVksQUFDdEM7V0FBTyxTQUFTLEVBQUUsTUFBTSxzQkFBUixBQUFvQixRQUFRLFNBQTVDLEFBQU8sQUFBUyxBQUFxQyxBQUN0RDtBQUZxQjtBQUFmLEFBSVA7O0FBQU8sSUFBTSxvQ0FBYyxTQUFkLEFBQWMsWUFBQSxBQUFDLGlCQUFEO1NBQXFCLG9CQUFZLEFBQzFEO1lBQUEsQUFBUSxJQUFSLEFBQVkscUNBQVosQUFBaUQsQUFDakQ7O1lBQ1Esc0JBRFEsQUFDSSxBQUNsQjt1QkFGRixBQUFPLEFBQVMsQUFJakI7QUFKaUIsQUFDZCxLQURLO0FBRmtCO0FBQXBCIiwiZmlsZSI6ImFjdGlvbnMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2ptaWNoYWVsc3Rld2FydC9Db2RlL2F3ZXNvbWVQb3RhdG9lcyJ9