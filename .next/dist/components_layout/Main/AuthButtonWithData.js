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