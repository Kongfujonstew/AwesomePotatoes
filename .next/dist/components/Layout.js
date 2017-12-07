'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _AuthButton = require('./AuthButton');

var _AuthButton2 = _interopRequireDefault(_AuthButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var children = _ref.children;
  return _react2.default.createElement('div', null, _react2.default.createElement('header', null, _react2.default.createElement('nav', null, _react2.default.createElement(_link2.default, { prefetch: true, href: '/home' }, _react2.default.createElement('a', null, 'Home')), ' |', _react2.default.createElement(_link2.default, { prefetch: true, href: '/about' }, _react2.default.createElement('a', null, 'About')), ' |', _react2.default.createElement(_link2.default, { prefetch: true, href: '/contact' }, _react2.default.createElement('a', null, 'Contact'))), _react2.default.createElement(_AuthButton2.default, null)), children, _react2.default.createElement('footer', null, 'Jon Michael Stewart'));
};