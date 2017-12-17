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

var _MuiThemeProvider = require('material-ui/styles/MuiThemeProvider');

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

var _RaisedButton = require('material-ui/RaisedButton');

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _reduxForm = require('redux-form');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  header {\n    background-color: lightgreen;\n    font-family: \'Cabin\', sans-serif;\n  }\n  footer {\n    background-color: black;\n    color: white;\n    font-family: \'Cabin\', sans-serif;\n    margin-top: 175px;\n  }\n'], ['\n  header {\n    background-color: lightgreen;\n    font-family: \'Cabin\', sans-serif;\n  }\n  footer {\n    background-color: black;\n    color: white;\n    font-family: \'Cabin\', sans-serif;\n    margin-top: 175px;\n  }\n']);

var CreateMovieComponentStyles = _styledComponents2.default.div(_templateObject);

var CreateMovieComponentForm = function CreateMovieComponentForm(_ref) {
  var handleClick = _ref.handleClick;
  return _react2.default.createElement(CreateMovieComponentStyles, null, _react2.default.createElement('form', { onSubmit: handleClick }, _react2.default.createElement('h3', null, 'ADD MOVIE'), _react2.default.createElement('div', null, 'You must log in to add movies'), _react2.default.createElement('div', null, _react2.default.createElement('label', { htmlFor: 'movieName' }, 'Movie Name: '), _react2.default.createElement(_reduxForm.Field, { name: 'name', component: 'input', type: 'text' })), _react2.default.createElement('div', null, _react2.default.createElement('label', { htmlFor: 'movieDescription' }, 'Description:'), _react2.default.createElement(_reduxForm.Field, { name: 'description', component: 'input', type: 'text' })), _react2.default.createElement(_MuiThemeProvider2.default, null, _react2.default.createElement(_RaisedButton2.default, { label: 'Add Movie', onClick: handleClick }))));
};

exports.default = (0, _reduxForm.reduxForm)({
  form: 'createMovie'
})(CreateMovieComponentForm);