'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _MuiThemeProvider = require('material-ui/styles/MuiThemeProvider');

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

var _RaisedButton = require('material-ui/RaisedButton');

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  padding: 10px;\n'], ['\n  padding: 10px;\n']);

var AuthButtonStyles = _styledComponents2.default.div(_templateObject);

var AuthButtonComponent = function AuthButtonComponent(_ref) {
  var loggedIn = _ref.loggedIn,
      profile = _ref.profile,
      login = _ref.login,
      logout = _ref.logout;

  var loginButton = loggedIn ? _react2.default.createElement(_MuiThemeProvider2.default, null, _react2.default.createElement(_RaisedButton2.default, { label: 'Logout', onClick: logout })) : _react2.default.createElement(_MuiThemeProvider2.default, null, _react2.default.createElement(_RaisedButton2.default, { label: 'Login', onClick: login }));

  return _react2.default.createElement(AuthButtonStyles, null, loginButton);
};

exports.default = AuthButtonComponent;