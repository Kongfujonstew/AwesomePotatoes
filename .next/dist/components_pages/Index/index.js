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

var _MoviesWithData = require('../../components_apollo/MoviesWithData');

var _MoviesWithData2 = _interopRequireDefault(_MoviesWithData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  #banner {\n    background-color: blue;\n    color: white;\n    height: 500px;\n  }\n'], ['\n  #banner {\n    background-color: blue;\n    color: white;\n    height: 500px;\n  }\n']);
// import PageContainer from '../PageContainer';


var Index = _styledComponents2.default.div(_templateObject);

exports.default = function () {
  return _react2.default.createElement(Index, { id: 'index' }, _react2.default.createElement('div', { id: 'banner' }, 'Welcome to Awesome Potatoes'), _react2.default.createElement(_link2.default, { prefetch: true, href: '/home' }, _react2.default.createElement('a', null, 'Click here for the Best Movie Reviews')), _react2.default.createElement('h1', null, 'Now trending'), _react2.default.createElement(_MoviesWithData2.default, null));
};