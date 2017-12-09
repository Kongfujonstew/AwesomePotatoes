'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _nextReduxWrapper = require('next-redux-wrapper');

var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

var _pageConfig = require('../redux/pageConfig');

var _pageConfig2 = _interopRequireDefault(_pageConfig);

var _Main = require('../components_layout/Main');

var _Main2 = _interopRequireDefault(_Main);

var _Movie = require('../components_pages/Movie');

var _Movie2 = _interopRequireDefault(_Movie);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/jmichaelstewart/Code/awesomePotatoes/pages/movie.js?entry';


var Movie = function (_React$Component) {
  (0, _inherits3.default)(Movie, _React$Component);

  function Movie(props) {
    (0, _classCallCheck3.default)(this, Movie);

    return (0, _possibleConstructorReturn3.default)(this, (Movie.__proto__ || (0, _getPrototypeOf2.default)(Movie)).call(this, props));
  }

  (0, _createClass3.default)(Movie, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_Main2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, _react2.default.createElement(_Movie2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }));
    }
  }], [{
    key: 'getInitialProps',
    value: function getInitialProps(_ref) {
      var store = _ref.store,
          isServer = _ref.isServer,
          pathname = _ref.pathname,
          query = _ref.query;

      if (isServer) {
        return {};
      } else {
        return store.getState();
      }
    }
  }]);

  return Movie;
}(_react2.default.Component);

;

exports.default = (0, _nextReduxWrapper2.default)(_pageConfig2.default)(Movie);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL21vdmllLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwicmVuZGVyIiwid2l0aFJlZHV4IiwicGFnZUNvbmZpZyIsIkxheW91dCIsIk1vdmllQ29tcG9uZW50IiwiTW92aWUiLCJwcm9wcyIsInN0b3JlIiwiaXNTZXJ2ZXIiLCJwYXRobmFtZSIsInF1ZXJ5IiwiZ2V0U3RhdGUiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQVM7O0FBQ1QsQUFBTzs7OztBQUNQLEFBQU8sQUFBZ0I7Ozs7QUFDdkIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBb0I7Ozs7Ozs7OztJQUVyQixBO2lDQUNKOztpQkFBQSxBQUFZLE9BQU87d0NBQUE7OytIQUFBLEFBQ1gsQUFDUDs7Ozs7NkJBVVMsQUFDUjs2QkFDRSxBQUFDOztvQkFBRDtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBLGtCQUNFLEFBQUM7O29CQUFEO3NCQUZKLEFBQ0UsQUFDRSxBQUdMO0FBSEs7QUFBQTs7OzswQ0FYd0Q7VUFBcEMsQUFBb0MsYUFBcEMsQUFBb0M7VUFBN0IsQUFBNkIsZ0JBQTdCLEFBQTZCO1VBQW5CLEFBQW1CLGdCQUFuQixBQUFtQjtVQUFULEFBQVMsYUFBVCxBQUFTLEFBQzVEOztVQUFBLEFBQUksVUFBVSxBQUNaO2VBQUEsQUFBTyxBQUNSO0FBRkQsYUFFTyxBQUNMO2VBQU8sTUFBUCxBQUFPLEFBQU0sQUFDZDtBQUNGOzs7OztFQVhpQixnQkFBTSxBOztBQW9CekIsQUFFRDs7a0JBQWUsQUFBVSxzREFBekIsQUFBZSxBQUFzQiIsImZpbGUiOiJtb3ZpZS5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvam1pY2hhZWxzdGV3YXJ0L0NvZGUvYXdlc29tZVBvdGF0b2VzIn0=