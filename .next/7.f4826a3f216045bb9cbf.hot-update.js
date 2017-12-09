webpackHotUpdate(7,{

/***/ 944:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(33);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(14);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(34);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = __webpack_require__(15);

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = __webpack_require__(35);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(16);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(349);

var _reactRedux = __webpack_require__(484);

var _link = __webpack_require__(549);

var _link2 = _interopRequireDefault(_link);

var _actions = __webpack_require__(488);

var _styledCard = __webpack_require__(945);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/jmichaelstewart/Code/awesomePotatoes/components/MovieCard/index.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/jmichaelstewart/Code/awesomePotatoes/components/MovieCard/index.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNy5mNDgyNmEzZjIxNjA0NWJiOWNiZi5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Nb3ZpZUNhcmQvaW5kZXguanM/NTJiZGI3NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHsgc2VsZWN0TW92aWUgfSBmcm9tICcuLi8uLi9yZWR1eC9hY3Rpb25zJztcbmltcG9ydCBDYXJkIGZyb20gJy4vc3R5bGVkQ2FyZCc7XG5cbmNsYXNzIE1vdmllQ2FyZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBnZXRJbml0aWFsUHJvcHMgKHsgc3RvcmUsIGlzU2VydmVyIH0pIHtcbiAgICBpZiAoaXNTZXJ2ZXIpIHtcbiAgICAgIHJldHVybiB7fVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gc3RvcmUuZ2V0U3RhdGUoKTtcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgfTtcblxuICBoYW5kbGVDbGljayAoKSB7XG4gICAgY29uc3QgaWQgPSB0aGlzLnByb3BzLm1vdmllLmlkO1xuICAgIHRoaXMucHJvcHMuc2VsZWN0TW92aWUodGhpcy5wcm9wcy5tb3ZpZS5pZCk7XG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IHttb3ZpZTogeyBuYW1lLCBkZXNjcmlwdGlvbiwgbGlrZXMsIGlkIH19ID0gdGhpcy5wcm9wcztcbiAgICBjb25zb2xlLmxvZygnbW92aWUgZGF0YTogJywgdGhpcy5wcm9wcy5tb3ZpZSlcbiAgICBjb25zdCBsaWtlc051bWJlciA9IGxpa2VzLmxlbmd0aFxuICAgIHJldHVybiAoXG4gICAgICA8Q2FyZD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XG4gICAgICAgICAgPExpbmsgaHJlZj17YC9tb3ZpZT9pZD0ke2lkfWB9PlxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImhvdmVyXCJcbiAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgPntuYW1lID8gbmFtZSA6ICdObyB0aXRsZSd9PC9oMz5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPHA+TGlrZXM6IHtsaWtlc051bWJlcn08L3A+XG4gICAgICAgICAgPHA+U3VtbWFyeToge2Rlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0NhcmQ+XG4gICAgKTtcbiAgfTtcbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHsgc2VsZWN0ZWRNb3ZpZUlkIH0pID0+ICh7IHNlbGVjdGVkTW92aWVJZCB9KTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgc2VsZWN0TW92aWU6IChzZWxlY3RlZE1vdmllSWQpID0+IGRpc3BhdGNoKHNlbGVjdE1vdmllKHNlbGVjdGVkTW92aWVJZCkpXG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gIG1hcFN0YXRlVG9Qcm9wcyxcbiAgbWFwRGlzcGF0Y2hUb1Byb3BzXG4pKE1vdmllQ2FyZCk7XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvTW92aWVDYXJkL2luZGV4LmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFGQTtBQUdBO0FBRUE7QUFFQTs7O0FBQUE7QUFBQTtBQUNBO0FBQ0E7Ozs7O0FBR0E7QUFBQTtBQUNBOzs7O0FBR0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7O0FBREE7QUFFQTtBQUZBO0FBRUE7O0FBRUE7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7Ozs7O0FBL0JBO0FBQ0E7QUFxQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOztBQUVBO0FBQUE7QUFFQTtBQUZBO0FBSUE7QUFDQTtBQURBOzs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=