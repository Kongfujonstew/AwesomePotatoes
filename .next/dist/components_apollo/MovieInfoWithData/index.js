'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _reactApollo = require('react-apollo');

var _apollo = require('../../apollo');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var url = process.env.GRAPHCOOL_URI;

var MovieInfo = function (_React$Component) {
  (0, _inherits3.default)(MovieInfo, _React$Component);

  (0, _createClass3.default)(MovieInfo, null, [{
    key: 'getInitialProps',
    value: function getInitialProps(_ref) {
      var store = _ref.store,
          isServer = _ref.isServer;

      if (isServer) {
        return {};
      } else {
        return store.getState();
      }
    }
  }]);

  function MovieInfo(props) {
    (0, _classCallCheck3.default)(this, MovieInfo);

    var _this = (0, _possibleConstructorReturn3.default)(this, (MovieInfo.__proto__ || (0, _getPrototypeOf2.default)(MovieInfo)).call(this, props));

    _this.state = {};
    return _this;
  }

  (0, _createClass3.default)(MovieInfo, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var id = void 0;
      if (window) {
        id = window.location.search.slice(4);
      }
      id && this.fetchMovieData(id).catch(function (err) {
        return console.log('fetchMovieData err: ', err);
      }).then(function (data) {
        if (data.data.data.allMovies && data.data.data.allMovies[0]) {
          _this2.setState({ movie: data.data.data.allMovies[0] });
        };
      });
    }
  }, {
    key: 'fetchMovieData',
    value: function fetchMovieData(id) {
      return _axios2.default.post(url, {
        headers: { 'Content-Type': 'application/json' },
        query: 'query {\n        allMovies (filter: {id:"' + id + '"}) {\n          id\n          name\n          likes {\n            id\n          }\n          description\n        }\n      }\n    '
      });
    }
  }, {
    key: 'render',
    value: function render() {
      if (!this.state.movie) {
        return 'loading . . .';
      };
      var _state$movie = this.state.movie,
          name = _state$movie.name,
          description = _state$movie.description,
          likes = _state$movie.likes;

      return _react2.default.createElement('div', null, 'Graphcool movie data queried by Id: ', _react2.default.createElement('div', null, 'name: ' + name), _react2.default.createElement('div', null, 'description: ' + name), _react2.default.createElement('div', null, 'likes: ' + likes.length));
    }
  }]);

  return MovieInfo;
}(_react2.default.Component);

;

exports.default = function () {
  return _react2.default.createElement(MovieInfo, null);
};