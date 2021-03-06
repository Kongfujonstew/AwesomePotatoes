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

var _MovieInfoWithData = require('../../components_apollo/MovieInfoWithData');

var _MovieInfoWithData2 = _interopRequireDefault(_MovieInfoWithData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n\n'], ['\n\n']);

var Movie = _styledComponents2.default.div(_templateObject);

exports.default = function () {
  return _react2.default.createElement(Movie, { id: 'index' }, _react2.default.createElement(_MovieInfoWithData2.default, null));
};