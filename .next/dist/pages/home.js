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

var _jsxFileName = '/Users/jmichaelstewart/Code/awesomePotatoes/pages/home.js?entry';


var Home = function (_React$Component) {
  (0, _inherits3.default)(Home, _React$Component);

  function Home(props) {
    (0, _classCallCheck3.default)(this, Home);

    return (0, _possibleConstructorReturn3.default)(this, (Home.__proto__ || (0, _getPrototypeOf2.default)(Home)).call(this, props));
  }

  (0, _createClass3.default)(Home, [{
    key: 'render',
    value: function render() {
      console.log('this.state: ', this.state);
      console.log('this.props: ', this.props);
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, 'Home');
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

  return Home;
}(_react2.default.Component);

;

// <MoviesWithData />

exports.default = (0, _nextReduxWrapper2.default)(_pageConfig2.default)(Home);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2hvbWUuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJyZW5kZXIiLCJ3aXRoUmVkdXgiLCJwYWdlQ29uZmlnIiwiTGF5b3V0IiwiTW92aWVzV2l0aERhdGEiLCJIb21lIiwicHJvcHMiLCJjb25zb2xlIiwibG9nIiwic3RhdGUiLCJzdG9yZSIsImlzU2VydmVyIiwicGF0aG5hbWUiLCJxdWVyeSIsImdldFN0YXRlIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFTOztBQUNULEFBQU87Ozs7QUFDUCxBQUFPLEFBQWdCOzs7O0FBQ3ZCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQW9COzs7Ozs7Ozs7SUFFckIsQTtnQ0FDSjs7Z0JBQUEsQUFBWSxPQUFPO3dDQUFBOzs2SEFBQSxBQUNYLEFBQ1A7Ozs7OzZCQVVTLEFBQ1I7Y0FBQSxBQUFRLElBQVIsQUFBWSxnQkFBZ0IsS0FBNUIsQUFBaUMsQUFDakM7Y0FBQSxBQUFRLElBQVIsQUFBWSxnQkFBZ0IsS0FBNUIsQUFBaUMsQUFDakM7NkJBQ0UsQUFBQzs7b0JBQUQ7c0JBQUE7QUFBQTtBQUFBLE9BQUEsRUFERixBQUNFLEFBSUg7Ozs7MENBaEI2RDtVQUFwQyxBQUFvQyxhQUFwQyxBQUFvQztVQUE3QixBQUE2QixnQkFBN0IsQUFBNkI7VUFBbkIsQUFBbUIsZ0JBQW5CLEFBQW1CO1VBQVQsQUFBUyxhQUFULEFBQVMsQUFDNUQ7O1VBQUEsQUFBSSxVQUFVLEFBQ1o7ZUFBQSxBQUFPLEFBQ1I7QUFGRCxhQUVPLEFBQ0w7ZUFBTyxNQUFQLEFBQU8sQUFBTSxBQUNkO0FBQ0Y7Ozs7O0VBWGdCLGdCLEFBQU07O0FBc0J4Qjs7QUFFTyxBQUVSOztrQkFBZSxBQUFVLHNEQUF6QixBQUFlLEFBQXNCIiwiZmlsZSI6ImhvbWUuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL2ptaWNoYWVsc3Rld2FydC9Db2RlL2F3ZXNvbWVQb3RhdG9lcyJ9