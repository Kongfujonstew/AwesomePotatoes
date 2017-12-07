'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logout = exports.login = undefined;

var _actionTypes = require('./actionTypes');

var _actionTypes2 = _interopRequireDefault(_actionTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var login = exports.login = function login() {
  return function (dispatch) {
    return dispatch({ type: _actionTypes2.default.LOGIN });
  };
};

var logout = exports.logout = function logout() {
  return function (dispatch) {
    return dispatch({ type: _actionTypes2.default.LOGOUT });
  };
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZHV4L2FjdGlvbnMuanMiXSwibmFtZXMiOlsiYWN0aW9uVHlwZXMiLCJsb2dpbiIsImRpc3BhdGNoIiwidHlwZSIsIkxPR0lOIiwibG9nb3V0IiwiTE9HT1VUIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsQUFBTyxBQUFQLEFBQXdCLEFBQXhCLEFBRUE7Ozs7OztBQUFPLElBQU0sd0JBQVEsU0FBUixBQUFRLFFBQUE7U0FBTSxvQkFBWSxBQUNyQztXQUFPLFNBQVMsRUFBRSxNQUFNLHNCQUFZLEFBQXBCLEFBQVQsQUFBUCxBQUNEO0FBRm9CO0FBQWQsQUFJUDs7QUFBTyxJQUFNLDBCQUFTLFNBQVQsQUFBUyxTQUFBO1NBQU0sb0JBQVksQUFDdEM7V0FBTyxTQUFTLEVBQUUsTUFBTSxzQkFBWSxBQUFwQixBQUFULEFBQVAsQUFDRDtBQUZxQjtBQUFmIiwiZmlsZSI6ImFjdGlvbnMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2ptaWNoYWVsc3Rld2FydC9Db2RlL2F3ZXNvbWVQb3RhdG9lcyJ9