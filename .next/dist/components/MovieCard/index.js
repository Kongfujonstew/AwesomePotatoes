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

var _reactRedux = require('react-redux');

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _actions = require('../../redux/actions');

var _styledCard = require('./styledCard');

var _styledCard2 = _interopRequireDefault(_styledCard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/jmichaelstewart/Code/awesomePotatoes/components/MovieCard/index.js';


var MovieCard = function (_React$Component) {
  (0, _inherits3.default)(MovieCard, _React$Component);

  (0, _createClass3.default)(MovieCard, null, [{
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

  function MovieCard(props) {
    (0, _classCallCheck3.default)(this, MovieCard);

    return (0, _possibleConstructorReturn3.default)(this, (MovieCard.__proto__ || (0, _getPrototypeOf2.default)(MovieCard)).call(this, props));
  }

  (0, _createClass3.default)(MovieCard, [{
    key: 'handleClick',
    value: function handleClick() {
      var id = this.props.movie.id;
      this.props.selectMovie(this.props.movie.id);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props$movie = this.props.movie,
          name = _props$movie.name,
          description = _props$movie.description,
          likes = _props$movie.likes,
          id = _props$movie.id;

      console.log('movie data: ', this.props.movie);
      var likesNumber = likes.length;
      return _react2.default.createElement(_styledCard2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, _react2.default.createElement('div', { className: 'card', __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, _react2.default.createElement(_link2.default, { href: '/movie?id=' + id, __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, _react2.default.createElement('h3', { className: 'hover',
        onClick: this.handleClick.bind(this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, name ? name : 'No title')), _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, 'Likes: ', likesNumber), _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, 'Summary: ', description)));
    }
  }]);

  return MovieCard;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(_ref2) {
  var selectedMovieId = _ref2.selectedMovieId;
  return { selectedMovieId: selectedMovieId };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    selectMovie: function selectMovie(selectedMovieId) {
      return dispatch((0, _actions.selectMovie)(selectedMovieId));
    }
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(MovieCard);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTW92aWVDYXJkL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwicmVuZGVyIiwiY29ubmVjdCIsIkxpbmsiLCJzZWxlY3RNb3ZpZSIsIkNhcmQiLCJNb3ZpZUNhcmQiLCJzdG9yZSIsImlzU2VydmVyIiwiZ2V0U3RhdGUiLCJwcm9wcyIsImlkIiwibW92aWUiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJsaWtlcyIsImNvbnNvbGUiLCJsb2ciLCJsaWtlc051bWJlciIsImxlbmd0aCIsImhhbmRsZUNsaWNrIiwiYmluZCIsIkNvbXBvbmVudCIsIm1hcFN0YXRlVG9Qcm9wcyIsInNlbGVjdGVkTW92aWVJZCIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFTOztBQUNULEFBQVM7O0FBQ1QsQUFBTzs7OztBQUNQLEFBQVMsQUFBbUI7O0FBQzVCLEFBQU8sQUFBVTs7Ozs7Ozs7O0lBRVgsQTs7Ozs7MENBQ3lDO1VBQW5CLEFBQW1CLGFBQW5CLEFBQW1CO1VBQVosQUFBWSxnQkFBWixBQUFZLEFBQzNDOztVQUFBLEFBQUksVUFBVSxBQUNaO2VBQUEsQUFBTyxBQUNSO0FBRkQsYUFFTyxBQUNMO2VBQU8sTUFBUCxBQUFPLEFBQU0sQUFDZDtBQUNGO0FBRUQ7OztxQkFBQSxBQUFZLE9BQU87d0NBQUE7O3VJQUFBLEFBQ1gsQUFDUDs7Ozs7a0NBRWMsQUFDYjtVQUFNLEtBQUssS0FBQSxBQUFLLE1BQUwsQUFBVyxNQUF0QixBQUE0QixBQUM1QjtXQUFBLEFBQUssTUFBTCxBQUFXLFlBQVksS0FBQSxBQUFLLE1BQUwsQUFBVyxNQUFsQyxBQUF3QyxBQUN6Qzs7Ozs2QkFFUzt5QkFDMEMsS0FEMUMsQUFDK0MsTUFEL0MsQUFDRDtVQURDLEFBQ1Esb0JBRFIsQUFDUTtVQURSLEFBQ2MsMkJBRGQsQUFDYztVQURkLEFBQzJCLHFCQUQzQixBQUMyQjtVQUQzQixBQUNrQyxrQkFEbEMsQUFDa0MsQUFDMUM7O2NBQUEsQUFBUSxJQUFSLEFBQVksZ0JBQWdCLEtBQUEsQUFBSyxNQUFqQyxBQUF1QyxBQUN2QztVQUFNLGNBQWMsTUFBcEIsQUFBMEIsQUFDMUI7NkJBQ0UsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRSxjQUFBLFNBQUssV0FBTCxBQUFlO29CQUFmO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxBQUFDLGdDQUFLLHFCQUFOLEFBQXlCO29CQUF6QjtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsY0FBQSxRQUFJLFdBQUosQUFBYyxBQUNaO2lCQUFTLEtBQUEsQUFBSyxZQUFMLEFBQWlCLEtBRDVCLEFBQ1csQUFBc0I7O29CQURqQztzQkFBQSxBQUVFO0FBRkY7Z0JBRUUsQUFBTyxPQUpiLEFBQ0UsQUFDRSxBQUVnQixBQUVsQiw4QkFBQSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FBVyxXQU5iLEFBTUUsQUFDQSw4QkFBQSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FBYSxhQVRuQixBQUNFLEFBQ0UsQUFPRSxBQUlQOzs7OztFQW5DcUIsZ0IsQUFBTTs7QUFzQzlCLElBQU0sa0JBQWtCLFNBQWxCLEFBQWtCLHVCQUFBO01BQUEsQUFBRyx3QkFBSCxBQUFHO1NBQXVCLEVBQUUsaUJBQTVCLEFBQTBCO0FBQWxEOztBQUVBLElBQU0scUJBQXFCLFNBQXJCLEFBQXFCLG1CQUFBLEFBQUMsVUFBYSxBQUN2Qzs7aUJBQ2UscUJBQUEsQUFBQyxpQkFBRDthQUFxQixTQUFTLDBCQUE5QixBQUFxQixBQUFTLEFBQVk7QUFEekQsQUFBTyxBQUdSO0FBSFEsQUFDTDtBQUZKLEFBTUE7O2tCQUFlLHlCQUFBLEFBQ2IsaUJBRGEsQUFFYixvQkFGRixBQUFlLEFBR2IiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2ptaWNoYWVsc3Rld2FydC9Db2RlL2F3ZXNvbWVQb3RhdG9lcyJ9