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

var _jsxFileName = '/Users/jmichaelstewart/Code/awesomePotatoes/components_apollo/MoviesWithData/index.js';


var AllMovies = function AllMovies(props) {
  var allMovies = props.data.allMovies;

  console.log('props in Movies: ', props);
  return _react2.default.createElement('div', { id: 'cards', __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, allMovies ? allMovies.map(function (movie) {
    //.length?
    return _react2.default.createElement(_MovieCard2.default, { movie: movie, key: movie.id, __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      }
    });
  }) : 'null');
};

var AllMoviesWithData = (0, _reactApollo.graphql)(_apollo.AllMoviesQuery)(AllMovies);

exports.default = function () {
  return _react2.default.createElement(AllMoviesWithData, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  });
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNfYXBvbGxvL01vdmllc1dpdGhEYXRhL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwicmVuZGVyIiwiZ3JhcGhxbCIsIkFsbE1vdmllc1F1ZXJ5IiwiTW92aWVDYXJkIiwiQWxsTW92aWVzIiwicHJvcHMiLCJhbGxNb3ZpZXMiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsIm1hcCIsIm1vdmllIiwiaWQiLCJBbGxNb3ZpZXNXaXRoRGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQVM7O0FBQ1QsQUFBUzs7QUFDVCxBQUFTLEFBQXNCOztBQUMvQixBQUFPLEFBQWU7Ozs7Ozs7OztBQUV0QixJQUFNLFlBQVksU0FBWixBQUFZLFVBQUEsQUFBQyxPQUFVO01BQUEsQUFDWixZQURZLEFBQ0csTUFESCxBQUNwQixLQURvQixBQUNaLEFBQ2Y7O1VBQUEsQUFBUSxJQUFSLEFBQVkscUJBQVosQUFBaUMsQUFDakM7eUJBQ0UsY0FBQSxTQUFLLElBQUwsQUFBUTtnQkFBUjtrQkFBQSxBQUNHO0FBREg7R0FBQSx3QkFDZSxBQUFVLElBQUksaUJBQVMsQUFBRTtBQUNwQzsyQkFDRSxBQUFDLHFDQUFVLE9BQVgsQUFBa0IsT0FBTyxLQUFLLE1BQTlCLEFBQW9DO2tCQUFwQztvQkFERixBQUNFLEFBRUg7QUFGRztLQUFBO0FBRkgsQUFBWSxHQUFBLElBRmpCLEFBQ0UsQUFLTyxBQUdWO0FBWkQ7O0FBY0EsSUFBTSxvQkFBb0IsQUFBUSxrREFBbEMsQUFBMEIsQUFBd0IsQUFFbEQ7O2tCQUFlLFlBQUE7dUNBQU0sQUFBQzs7Z0JBQUQ7a0JBQU4sQUFBTTtBQUFBO0FBQUEsR0FBQTtBQUFyQiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvam1pY2hhZWxzdGV3YXJ0L0NvZGUvYXdlc29tZVBvdGF0b2VzIn0=