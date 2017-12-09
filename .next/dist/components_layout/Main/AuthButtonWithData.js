'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _redux = require('redux');

var _reactApollo = require('react-apollo');

var _apollo = require('../../apollo');

var _AuthButton = require('./AuthButton');

var _AuthButton2 = _interopRequireDefault(_AuthButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.compose)((0, _reactApollo.graphql)(_apollo.CreateUserMutation, {
  name: 'createUser'
}))(_AuthButton2.default);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNfbGF5b3V0L01haW4vQXV0aEJ1dHRvbldpdGhEYXRhLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwicmVuZGVyIiwiY29tcG9zZSIsImdyYXBocWwiLCJBcG9sbG9Qcm92aWRlciIsImNsaWVudCIsIkNyZWF0ZVVzZXJNdXRhdGlvbiIsIkdldFVzZXJCeUVtYWlsUXVlcnkiLCJBdXRoQnV0dG9uIiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQVM7O0FBQ1QsQUFBUzs7QUFDVCxBQUFTLEFBQ1QsQUFBUzs7QUFDVCxBQUFTLEFBQVEsQUFBb0IsQUFBMkI7O0FBQ2hFLEFBQU8sQUFBZ0IsQUFFdkI7Ozs7Ozs7UUFBQSxBQUFlLEFBQ2IsQUFBNEIsQUFDcEIsQUFFUjtBQUg0QixBQUMxQixDQURGLEFBQVEsQ0FESyIsImZpbGUiOiJBdXRoQnV0dG9uV2l0aERhdGEuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2ptaWNoYWVsc3Rld2FydC9Db2RlL2F3ZXNvbWVQb3RhdG9lcyJ9