'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactApollo = require('react-apollo');

var _apollo = require('../../apollo');

var _Component = require('./Component');

var _Component2 = _interopRequireDefault(_Component);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var children = _ref.children;
  return _react2.default.createElement(_reactApollo.ApolloProvider, { client: _apollo.client }, _react2.default.createElement(_Component2.default, null, children));
};