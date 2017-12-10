'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactApollo = require('react-apollo');

var _apollo = require('../../apollo');

var _AuthButtonWithData = require('./AuthButtonWithData');

var _AuthButtonWithData2 = _interopRequireDefault(_AuthButtonWithData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  header {\n    background-color: lightgreen;\n    font-family: \'Cabin\', sans-serif;\n  }\n  footer {\n    background-color: black;\n    color: white;\n    font-family: \'Cabin\', sans-serif;\n    margin-top: 175px;\n  }\n'], ['\n  header {\n    background-color: lightgreen;\n    font-family: \'Cabin\', sans-serif;\n  }\n  footer {\n    background-color: black;\n    color: white;\n    font-family: \'Cabin\', sans-serif;\n    margin-top: 175px;\n  }\n']);

var Layout = _styledComponents2.default.div(_templateObject);

exports.default = function (_ref) {
  var children = _ref.children;
  return _react2.default.createElement(_reactApollo.ApolloProvider, { client: _apollo.client }, _react2.default.createElement(Layout, { id: 'layout' }, _react2.default.createElement('header', null, _react2.default.createElement('nav', null, 'Public nav: ', _react2.default.createElement(_link2.default, { prefetch: true, href: '/home' }, _react2.default.createElement('a', null, 'Home')), ' |', _react2.default.createElement(_link2.default, { prefetch: true, href: '/about' }, _react2.default.createElement('a', null, 'About')), ' |', _react2.default.createElement(_link2.default, { prefetch: true, href: '/contact' }, _react2.default.createElement('a', null, 'Contact'))), _react2.default.createElement('nav', null, 'Admin nav: ', _react2.default.createElement(_link2.default, { prefetch: true, href: '/admin' }, _react2.default.createElement('a', null, 'Admin')), ' |', _react2.default.createElement(_link2.default, { prefetch: true, href: '/profile' }, _react2.default.createElement('a', null, 'User Profile'))), _react2.default.createElement(_AuthButtonWithData2.default, null)), children, _react2.default.createElement('footer', null, 'Jon Michael Stewart')));
};