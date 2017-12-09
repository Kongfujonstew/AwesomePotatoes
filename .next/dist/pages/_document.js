'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var _document = require('next/dist/server/document.js');

var _document2 = _interopRequireDefault(_document);

var _styledComponents = require('styled-components');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/jmichaelstewart/Code/awesomePotatoes/pages/_document.js?entry';
// import flush from 'styled-jsx/server'

//vendor scripts go here.

var MyDocument = function (_Document) {
  (0, _inherits3.default)(MyDocument, _Document);

  function MyDocument() {
    (0, _classCallCheck3.default)(this, MyDocument);

    return (0, _possibleConstructorReturn3.default)(this, (MyDocument.__proto__ || (0, _getPrototypeOf2.default)(MyDocument)).apply(this, arguments));
  }

  (0, _createClass3.default)(MyDocument, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('html', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, _react2.default.createElement(_document.Head, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, _react2.default.createElement('title', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, 'Awesome Potatoes'), _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1', __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }), _react2.default.createElement('script', { src: 'https://cdn.auth0.com/js/lock/10.5/lock.min.js', __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }), _react2.default.createElement('link', { href: 'https://fonts.googleapis.com/css?family=Cabin', rel: 'stylesheet', __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }), this.props.styleTags, _react2.default.createElement('style', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, 'body { margin: 0;}')), _react2.default.createElement('body', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, this.props.customValue, _react2.default.createElement(_document.Main, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }), _react2.default.createElement(_document.NextScript, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      })));
    }
  }], [{
    key: 'getInitialProps',

    // static async getInitialProps({ renderPage }) {
    //   const { html, head, errorHtml, chunks } = renderPage()
    //   const styles = flush()
    //   return { html, head, errorHtml, chunks, styles }

    value: function getInitialProps(_ref) {
      var renderPage = _ref.renderPage;

      var sheet = new _styledComponents.ServerStyleSheet();
      var page = renderPage(function (App) {
        return function (props) {
          return sheet.collectStyles(_react2.default.createElement(App, (0, _extends3.default)({}, props, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 14
            }
          })));
        };
      });
      var styleTags = sheet.getStyleElement();
      return (0, _extends3.default)({}, page, { styleTags: styleTags });
    }
  }]);

  return MyDocument;
}(_document2.default);

exports.default = MyDocument;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL19kb2N1bWVudC5qcyJdLCJuYW1lcyI6WyJEb2N1bWVudCIsIkhlYWQiLCJNYWluIiwiTmV4dFNjcmlwdCIsIlNlcnZlclN0eWxlU2hlZXQiLCJNeURvY3VtZW50IiwicHJvcHMiLCJzdHlsZVRhZ3MiLCJjdXN0b21WYWx1ZSIsInJlbmRlclBhZ2UiLCJzaGVldCIsInBhZ2UiLCJjb2xsZWN0U3R5bGVzIiwiZ2V0U3R5bGVFbGVtZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFZLEFBQU0sQUFBTTs7OztBQUUvQixBQUFTOzs7OztBQURUOztBQUVBOztJLEFBRXFCOzs7Ozs7Ozs7Ozs2QkFjVixBQUNQOzZCQUNFLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsa0JBQ0UsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBREYsQUFDRSxBQUNBLDZEQUFNLE1BQU4sQUFBVyxZQUFXLFNBQXRCLEFBQThCO29CQUE5QjtzQkFGRixBQUVFLEFBQ0E7QUFEQTtvREFDUSxLQUFSLEFBQVk7b0JBQVo7c0JBSEYsQUFHRSxBQUNBO0FBREE7a0RBQ00sTUFBTixBQUFXLGlEQUFnRCxLQUEzRCxBQUErRDtvQkFBL0Q7c0JBSkYsQUFJRSxBQUNDO0FBREQ7ZUFDQyxBQUFLLE1BTFIsQUFLYyxBQUNaLDJCQUFBLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQVBKLEFBQ0UsQUFNRSxBQUVGLHdDQUFBLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0c7QUFESDtBQUFBLGNBQ0csQUFBSyxNQURSLEFBQ2MsQUFDWiw2QkFBQSxBQUFDOztvQkFBRDtzQkFGRixBQUVFLEFBQ0E7QUFEQTtBQUFBLDBCQUNBLEFBQUM7O29CQUFEO3NCQWJOLEFBQ0UsQUFTRSxBQUdFLEFBSVA7QUFKTztBQUFBOzs7U0EzQlI7O0FBQ0E7QUFDQTtBQUNBOzs7MENBRXdDO1VBQWQsQUFBYyxrQkFBZCxBQUFjLEFBQ3RDOztVQUFNLFFBQU4sQUFBYyxBQUFJLEFBQ2xCO1VBQU0sa0JBQWtCLGVBQUE7ZUFBTyxpQkFBQTt1QkFBUyxBQUFNLDRDQUFjLEFBQUMsZ0NBQUQsQUFBUzs7d0JBQVQ7MEJBQTdCLEFBQVMsQUFBb0I7QUFBQTtBQUFBLFlBQUEsQ0FBcEI7QUFBaEI7QUFBeEIsQUFBYSxBQUNiLE9BRGE7VUFDUCxZQUFZLE1BQWxCLEFBQWtCLEFBQU0sQUFDeEI7d0NBQUEsQUFBWSxRQUFNLFdBQWxCLEFBRUQ7Ozs7O0FBWnFDLEE7O2tCQUFuQixBIiwiZmlsZSI6Il9kb2N1bWVudC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvam1pY2hhZWxzdGV3YXJ0L0NvZGUvYXdlc29tZVBvdGF0b2VzIn0=