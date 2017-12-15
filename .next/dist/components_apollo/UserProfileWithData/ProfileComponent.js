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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n'], ['\n']);
// import { render } from 'react-dom';


var ProfileStyles = _styledComponents2.default.div(_templateObject);

var ProfileComponent = function ProfileComponent(_ref) {
  var _ref$user = _ref.user,
      auth0UserId = _ref$user.auth0UserId,
      name = _ref$user.name,
      email = _ref$user.email,
      id = _ref$user.id;
  return _react2.default.createElement(ProfileStyles, null, _react2.default.createElement('h1', null, 'GraphcoolProfile'), _react2.default.createElement('div', null, 'auth0Id: ' + auth0UserId), _react2.default.createElement('div', null, 'name: ' + name), _react2.default.createElement('div', null, 'email: ' + email), _react2.default.createElement('div', null, 'graphcoolId: ' + id));
};

exports.default = ProfileComponent;