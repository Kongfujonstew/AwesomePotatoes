'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactApollo = require('react-apollo');

var _gql = require('./_gql');

var _apolloClient = require('./_apolloClient');

var _Card = require('../components/Card');

var _Card2 = _interopRequireDefault(_Card);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import './MoviesWithData.css';

var Movies = function Movies(props) {
  var allMovies = props.data.allMovies;

  console.log('props in Movies: ', props);
  return _react2.default.createElement('div', { id: 'cards' }, allMovies ? allMovies.map(function (movie) {
    //.length?
    return _react2.default.createElement(_Card2.default, { movie: movie, key: movie.id });
  }) : 'null');
};

var DataComponent = (0, _reactApollo.graphql)(_gql.AllMoviesQuery)
// options: (props) => ({})
(Movies);

exports.default = function () {
  return _react2.default.createElement(_reactApollo.ApolloProvider, { client: _apolloClient.client }, _react2.default.createElement(DataComponent, null));
};