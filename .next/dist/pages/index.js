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

var _Layout = require('../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _MoviesWithData = require('../components_apollo/MoviesWithData');

var _MoviesWithData2 = _interopRequireDefault(_MoviesWithData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/jmichaelstewart/Code/awesomePotatoes/pages/index.js?entry';


var Index = function (_React$Component) {
  (0, _inherits3.default)(Index, _React$Component);

  function Index(props) {
    (0, _classCallCheck3.default)(this, Index);

    return (0, _possibleConstructorReturn3.default)(this, (Index.__proto__ || (0, _getPrototypeOf2.default)(Index)).call(this, props));
  }

  (0, _createClass3.default)(Index, [{
    key: 'render',
    value: function render() {
      console.log('this.state: ', this.state);
      console.log('this.props: ', this.props);
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, 'Index', _react2.default.createElement(_MoviesWithData2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
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

  return Index;
}(_react2.default.Component);

;

exports.default = (0, _nextReduxWrapper2.default)(_pageConfig2.default)(Index);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwicmVuZGVyIiwid2l0aFJlZHV4IiwicGFnZUNvbmZpZyIsIkxheW91dCIsIk1vdmllc1dpdGhEYXRhIiwiSW5kZXgiLCJwcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJzdGF0ZSIsInN0b3JlIiwiaXNTZXJ2ZXIiLCJwYXRobmFtZSIsInF1ZXJ5IiwiZ2V0U3RhdGUiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQVM7O0FBQ1QsQUFBTzs7OztBQUNQLEFBQU8sQUFBZ0I7Ozs7QUFDdkIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBb0I7Ozs7Ozs7OztJLEFBRXJCO2lDQUNKOztpQkFBQSxBQUFZLE9BQU87d0NBQUE7OytIQUFBLEFBQ1gsQUFDUDs7Ozs7NkJBVVMsQUFDUjtjQUFBLEFBQVEsSUFBUixBQUFZLGdCQUFnQixLQUE1QixBQUFpQyxBQUNqQztjQUFBLEFBQVEsSUFBUixBQUFZLGdCQUFnQixLQUE1QixBQUFpQyxBQUNqQzs2QkFDRSxBQUFDOztvQkFBRDtzQkFBQTtBQUFBO0FBQUEsT0FBQSxFQUVFLHlCQUFBLEFBQUM7O29CQUFEO3NCQUhKLEFBQ0UsQUFFRSxBQUdMO0FBSEs7QUFBQTs7OzswQ0Fkd0Q7VUFBcEMsQUFBb0MsYUFBcEMsQUFBb0M7VUFBN0IsQUFBNkIsZ0JBQTdCLEFBQTZCO1VBQW5CLEFBQW1CLGdCQUFuQixBQUFtQjtVQUFULEFBQVMsYUFBVCxBQUFTLEFBQzVEOztVQUFBLEFBQUksVUFBVSxBQUNaO2VBQUEsQUFBTyxBQUNSO0FBRkQsYUFFTyxBQUNMO2VBQU8sTUFBUCxBQUFPLEFBQU0sQUFDZDtBQUNGOzs7OztFQVhpQixnQkFBTSxBOztBQXVCekIsQUFHRDs7a0JBQWUsQUFBVSxzREFBekIsQUFBZSxBQUFzQiIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvam1pY2hhZWxzdGV3YXJ0L0NvZGUvYXdlc29tZVBvdGF0b2VzIn0=