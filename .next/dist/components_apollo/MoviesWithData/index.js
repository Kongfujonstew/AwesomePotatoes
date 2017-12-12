'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactApollo = require('react-apollo');

var _apollo = require('../../apollo');

var _MovieCard = require('../../components/MovieCard');

var _MovieCard2 = _interopRequireDefault(_MovieCard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AllMovies = function AllMovies(props) {
  var allMovies = props.data.allMovies;

  return _react2.default.createElement('div', { id: 'cards' }, allMovies ? allMovies.map(function (movie) {
    //.length?
    return _react2.default.createElement(_MovieCard2.default, { movie: movie, key: movie.id });
  }) : 'Loading movie data . . .');
};

var AllMoviesWithData = (0, _reactApollo.graphql)(_apollo.AllMoviesQuery, {
  options: { pollInterval: 500 }
})(AllMovies);

exports.default = function () {
  return _react2.default.createElement(AllMoviesWithData, null);
};