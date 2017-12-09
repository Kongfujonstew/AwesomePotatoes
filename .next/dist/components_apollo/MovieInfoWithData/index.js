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

var _jsxFileName = '/Users/jmichaelstewart/Code/awesomePotatoes/components_apollo/MovieInfoWithData/index.js';
// import { connect } from 'react-redux';


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
        console.log('bla id: ', id);
      }
      id && this.fetchMovieData(id).catch(function (err) {
        return console.log('fetchMovieData err: ', err);
      }).then(function (data) {
        console.log(' data onfethmd: ', data.data.data);
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
      // const {movie: { name, description, likes }} = this.props.data.getAllMovies;
      var _state$movie = this.state.movie,
          name = _state$movie.name,
          description = _state$movie.description,
          likes = _state$movie.likes;

      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, 'Graphcool movie data queried by Id: ', _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, 'name: ' + name), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, 'description: ' + name), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, 'likes: ' + likes.length));
    }
  }]);

  return MovieInfo;
}(_react2.default.Component);

;

exports.default = function () {
  return _react2.default.createElement(MovieInfo, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    }
  });
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNfYXBvbGxvL01vdmllSW5mb1dpdGhEYXRhL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwicmVuZGVyIiwiYXhpb3MiLCJncmFwaHFsIiwiR2V0TW92aWVCeUdyYXBoY29vbElkUXVlcnkiLCJ1cmwiLCJwcm9jZXNzIiwiZW52IiwiR1JBUEhDT09MX1VSSSIsIk1vdmllSW5mbyIsInN0b3JlIiwiaXNTZXJ2ZXIiLCJnZXRTdGF0ZSIsInByb3BzIiwic3RhdGUiLCJpZCIsIndpbmRvdyIsImxvY2F0aW9uIiwic2VhcmNoIiwic2xpY2UiLCJjb25zb2xlIiwibG9nIiwiZmV0Y2hNb3ZpZURhdGEiLCJjYXRjaCIsImVyciIsInRoZW4iLCJkYXRhIiwiYWxsTW92aWVzIiwic2V0U3RhdGUiLCJtb3ZpZSIsInBvc3QiLCJoZWFkZXJzIiwicXVlcnkiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJsaWtlcyIsImxlbmd0aCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBUzs7QUFDVCxBQUFPOzs7O0FBRVAsQUFBUzs7QUFDVCxBQUFTLEFBQWtDOzs7OztBQUYzQzs7O0FBSUEsSUFBTSxNQUFNLFFBQUEsQUFBUSxJQUFwQixBQUF3Qjs7SSxBQUVsQjs7Ozs7MENBQ3lDO1VBQW5CLEFBQW1CLGFBQW5CLEFBQW1CO1VBQVosQUFBWSxnQkFBWixBQUFZLEFBQzNDOztVQUFBLEFBQUksVUFBVSxBQUNaO2VBQUEsQUFBTyxBQUNSO0FBRkQsYUFFTyxBQUNMO2VBQU8sTUFBUCxBQUFPLEFBQU0sQUFDZDtBQUNGO0FBRUQ7OztxQkFBQSxBQUFZLE9BQU87d0NBQUE7OzRJQUFBLEFBQ1gsQUFDTjs7VUFBQSxBQUFLLFFBRlksQUFFakIsQUFBYTtXQUNkOzs7Ozt3Q0FFbUI7bUJBQ2xCOztVQUFJLFVBQUosQUFDQTtVQUFBLEFBQUksUUFBUSxBQUNWO2FBQUssT0FBQSxBQUFPLFNBQVAsQUFBZ0IsT0FBaEIsQUFBdUIsTUFBNUIsQUFBSyxBQUE2QixBQUNsQztnQkFBQSxBQUFRLElBQVIsQUFBWSxZQUFaLEFBQXdCLEFBQ3pCO0FBQ0Q7aUJBQU0sQUFBSyxlQUFMLEFBQW9CLElBQXBCLEFBQ0gsTUFBTSxlQUFBO2VBQU8sUUFBQSxBQUFRLElBQVIsQUFBWSx3QkFBbkIsQUFBTyxBQUFvQztBQUQ5QyxPQUFBLEVBQUEsQUFFSCxLQUFLLGdCQUFRLEFBQ1o7Z0JBQUEsQUFBUSxJQUFSLEFBQVksb0JBQW9CLEtBQUEsQUFBSyxLQUFyQyxBQUEwQyxBQUMxQztZQUFJLEtBQUEsQUFBSyxLQUFMLEFBQVUsS0FBVixBQUFlLGFBQWEsS0FBQSxBQUFLLEtBQUwsQUFBVSxLQUFWLEFBQWUsVUFBL0MsQUFBZ0MsQUFBeUIsSUFBRyxBQUMxRDtpQkFBQSxBQUFLLFNBQVMsRUFBQyxPQUFPLEtBQUEsQUFBSyxLQUFMLEFBQVUsS0FBVixBQUFlLFVBQXJDLEFBQWMsQUFBUSxBQUF5QixBQUNoRDtBQUNGO0FBUEgsQUFBTSxBQVFQOzs7O21DQUVjLEEsSUFBSSxBQUNqQjs2QkFBTyxBQUFNLEtBQU4sQUFBVztpQkFDUCxFQUFFLGdCQURVLEFBQ1osQUFBa0IsQUFDM0I7NkRBQUEsQUFDNEIsS0FIOUIsQUFBTyxBQUFnQixBQWN4QjtBQWR3QixBQUNyQixPQURLOzs7OzZCQWdCQyxBQUNSO1VBQUksQ0FBQyxLQUFBLEFBQUssTUFBVixBQUFnQixPQUFPLEFBQ3JCO2VBQUEsQUFBTyxBQUNSO0FBQ0Q7QUFKUTt5QkFLNkIsS0FBQSxBQUFLLE1BTGxDLEFBS3dDO1VBTHhDLEFBS0Esb0JBTEEsQUFLQTtVQUxBLEFBS00sMkJBTE4sQUFLTTtVQUxOLEFBS21CLHFCQUxuQixBQUttQixBQUMzQjs7NkJBQ0UsY0FBQTs7b0JBQUE7c0JBQUEsQUFDRztBQURIO0FBQUEsT0FBQSxFQUFBLEFBRUUsd0RBQUEsY0FBQTs7b0JBQUE7c0JBQUEsQUFBTTtBQUFOO0FBQUEsb0JBRkYsQUFFRSxBQUFpQixBQUNqQix1QkFBQSxjQUFBOztvQkFBQTtzQkFBQSxBQUFNO0FBQU47QUFBQSwyQkFIRixBQUdFLEFBQXdCLEFBQ3hCLHVCQUFBLGNBQUE7O29CQUFBO3NCQUFBLEFBQU07QUFBTjtBQUFBLHFCQUFrQixNQUx0QixBQUNFLEFBSUUsQUFBd0IsQUFHN0I7Ozs7O0VBN0RxQixnQixBQUFNOztBQThEN0IsQUFFRDs7a0JBQWUsWUFBQTt1Q0FBTSxBQUFDOztnQkFBRDtrQkFBTixBQUFNO0FBQUE7QUFBQSxHQUFBO0FBQXJCIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9qbWljaGFlbHN0ZXdhcnQvQ29kZS9hd2Vzb21lUG90YXRvZXMifQ==