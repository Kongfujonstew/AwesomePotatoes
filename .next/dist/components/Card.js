'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {
  var _props$movie = props.movie,
      name = _props$movie.name,
      description = _props$movie.description;

  return _react2.default.createElement('div', null, _react2.default.createElement('h3', null, name), _react2.default.createElement('p', null, description));
};