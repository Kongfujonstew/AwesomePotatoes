'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  .card {\n    background-color: lightgrey;\n    margin-left: 10px;\n    padding: 10px;\n    width: 50%;\n  }\n  h3, p {\n    font-family: \'Cabin\', sans-serif;\n  }\n  h3 {\n    background-color: lightgreen;\n  }\n  .hover:hover {\n    cursor:pointer;\n  }\n'], ['\n  .card {\n    background-color: lightgrey;\n    margin-left: 10px;\n    padding: 10px;\n    width: 50%;\n  }\n  h3, p {\n    font-family: \'Cabin\', sans-serif;\n  }\n  h3 {\n    background-color: lightgreen;\n  }\n  .hover:hover {\n    cursor:pointer;\n  }\n']);

exports.default = _styledComponents2.default.div(_templateObject);