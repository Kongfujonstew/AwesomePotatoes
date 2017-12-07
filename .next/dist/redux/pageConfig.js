'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _actions = require('./actions');

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(_ref) {
  var loggedIn = _ref.loggedIn;
  return { loggedIn: loggedIn };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    login: (0, _redux.bindActionCreators)(_actions.login, dispatch),
    logout: (0, _redux.bindActionCreators)(_actions.logout, dispatch)
  };
};

exports.default = {
  createStore: _index2.default,
  storeKey: 'reduxStore',
  mapStateToProps: mapStateToProps,
  mapDispatchToProps: mapDispatchToProps
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZHV4L3BhZ2VDb25maWcuanMiXSwibmFtZXMiOlsiYmluZEFjdGlvbkNyZWF0b3JzIiwibG9naW4iLCJsb2dvdXQiLCJpbml0U3RvcmUiLCJtYXBTdGF0ZVRvUHJvcHMiLCJsb2dnZWRJbiIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwiY3JlYXRlU3RvcmUiLCJzdG9yZUtleSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsQUFBUzs7QUFDVCxBQUFTLEFBQU8sQUFBYzs7QUFDOUIsQUFBTyxBQUFlOzs7Ozs7QUFFdEIsSUFBTSxrQkFBa0IsU0FBbEIsQUFBa0Isc0JBQUE7TUFBQSxBQUFHLGdCQUFILEFBQUc7U0FBZ0IsRUFBRSxVQUFyQixBQUFtQjtBQUEzQzs7QUFFQSxJQUFNLHFCQUFxQixTQUFyQixBQUFxQixtQkFBQSxBQUFDLFVBQWEsQUFDdkM7O1dBQ1MsQUFBbUIsK0NBRHJCLEFBQ0UsQUFBMEIsQUFDakM7WUFBUSxBQUFtQixnREFGN0IsQUFBTyxBQUVHLEFBQTJCLEFBRXRDO0FBSlEsQUFDTDtBQUZKLEFBT0E7OztBQUFlLEFBQ0EsQUFDYjtZQUZhLEFBRUgsQUFDVjttQkFIYSxBQUdJLEFBQ2pCO3NCQUpGLEFBQWUsQUFJTztBQUpQLEFBQ2IiLCJmaWxlIjoicGFnZUNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvam1pY2hhZWxzdGV3YXJ0L0NvZGUvYXdlc29tZVBvdGF0b2VzIn0=