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

var _jsxFileName = '/Users/jmichaelstewart/Code/awesomePotatoes/components_apollo/MoviesWithData.js';


// import './MoviesWithData.css';

var Movies = function Movies(props) {
  var allMovies = props.data.allMovies;

  console.log('props in Movies: ', props);
  return _react2.default.createElement('div', { id: 'cards', __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, allMovies ? allMovies.map(function (movie) {
    //.length?
    return _react2.default.createElement(_Card2.default, { movie: movie, key: movie.id, __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      }
    });
  }) : 'null');
};

var DataComponent = (0, _reactApollo.graphql)(_gql.AllMoviesQuery)
// options: (props) => ({})
(Movies);

exports.default = function () {
  return _react2.default.createElement(_reactApollo.ApolloProvider, { client: _apolloClient.client, __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  }, _react2.default.createElement(DataComponent, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    }
  }));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNfYXBvbGxvL01vdmllc1dpdGhEYXRhLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwicmVuZGVyIiwiZ3JhcGhxbCIsIkFwb2xsb1Byb3ZpZGVyIiwiQWxsTW92aWVzUXVlcnkiLCJjbGllbnQiLCJDYXJkIiwiTW92aWVzIiwicHJvcHMiLCJhbGxNb3ZpZXMiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsIm1hcCIsIm1vdmllIiwiaWQiLCJEYXRhQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBUzs7QUFDVCxBQUFTLEFBQ1QsQUFBUzs7QUFDVCxBQUFTLEFBQXNCOztBQUMvQixBQUFTLEFBQWM7O0FBQ3ZCLEFBQU8sQUFBVTs7Ozs7Ozs7O0FBRWpCOztBQUVBLElBQU0sU0FBUyxTQUFULEFBQVMsT0FBQSxBQUFDLE9BQVU7TUFBQSxBQUNULFlBRFMsQUFDTSxNQUROLEFBQ2pCLEtBRGlCLEFBQ1QsQUFDZjs7VUFBQSxBQUFRLElBQVIsQUFBWSxxQkFBWixBQUFpQyxBQUNqQzt5QkFDRSxjQUFBLFNBQUssSUFBTCxBQUFRO2dCQUFSO2tCQUFBLEFBQ0c7QUFESDtHQUFBLHdCQUNlLEFBQVUsSUFBSSxpQkFBUyxBQUFFO0FBQ3BDOzJCQUNFLEFBQUMsZ0NBQUssT0FBTixBQUFhLE9BQU8sS0FBSyxNQUF6QixBQUErQjtrQkFBL0I7b0JBREYsQUFDRSxBQUVIO0FBRkc7S0FBQTtBQUZILEFBQVksR0FBQSxJQUZqQixBQUNFLEFBS08sQUFHVjtBQVpEOztBQWNBLElBQU07QUFBZ0IsQUFDcEI7QUFEb0IsQUFBUSxDQUE5QixBQUFzQixBQUVyQixBQUVEOztrQkFBZSxZQUFNLEFBQ25CO3lCQUNFLEFBQUMsNkNBQUQsQUFBZ0IsQUFBUTtnQkFBeEI7a0JBQUEsQUFDRTtBQURGO0dBQUEsZ0NBQ0UsQUFBQzs7Z0JBQUQ7a0JBRkosQUFDRSxBQUNFLEFBR0w7QUFISztBQUFBO0FBSE4iLCJmaWxlIjoiTW92aWVzV2l0aERhdGEuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2ptaWNoYWVsc3Rld2FydC9Db2RlL2F3ZXNvbWVQb3RhdG9lcyJ9