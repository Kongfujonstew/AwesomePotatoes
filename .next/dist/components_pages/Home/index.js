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

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n\n'], ['\n\n']);
// import PageContainer from '../PageContainer';


var Home = _styledComponents2.default.div(_templateObject);

exports.default = function () {
  return _react2.default.createElement(Home, { id: 'home' }, _react2.default.createElement(_MoviesWithData2.default, null));
};