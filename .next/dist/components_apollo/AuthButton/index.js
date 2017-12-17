'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _recompose = require('recompose');

var _WrapperApollo = require('./WrapperApollo');

var _WrapperApollo2 = _interopRequireDefault(_WrapperApollo);

var _WrapperRedux = require('./WrapperRedux');

var _WrapperRedux2 = _interopRequireDefault(_WrapperRedux);

var _Container = require('./Container');

var _Container2 = _interopRequireDefault(_Container);

var _Component = require('./Component');

var _Component2 = _interopRequireDefault(_Component);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _recompose.compose)(_WrapperApollo2.default, _WrapperRedux2.default)(function (props) {
  return _react2.default.createElement(_Container2.default, (0, _extends3.default)({}, props, {
    Component: _Component2.default
  }));
});