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

var ReduxProfileStyles = _styledComponents2.default.div(_templateObject);

exports.default = function (_ref) {
  var profile = _ref.profile;
  return _react2.default.createElement(ReduxProfileStyles, null, _react2.default.createElement('h1', null, 'ReduxProfile'), _react2.default.createElement('div', null, 'user_id (auth0): ' + profile.user_id), _react2.default.createElement('div', null, 'clientID:' + profile.clientID), _react2.default.createElement('div', null, 'created_at' + profile.created_at), _react2.default.createElement('div', null, 'email: ' + profile.email), _react2.default.createElement('div', null, 'email_verified: ' + profile.email_verified), _react2.default.createElement('div', null, 'graphcoolId: ' + profile.graphcoolId), _react2.default.createElement('div', null, 'name: ' + profile.name), _react2.default.createElement('div', null, 'nickname: ' + profile.nickname));
};