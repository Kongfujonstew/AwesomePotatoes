'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactApollo = require('react-apollo');

var _apollo = require('../../apollo');

var _AuthButtonWithData = require('./AuthButtonWithData');

var _AuthButtonWithData2 = _interopRequireDefault(_AuthButtonWithData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/jmichaelstewart/Code/awesomePotatoes/components_layout/Main/index.js';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  header {\n    background-color: lightgreen;\n    font-family: \'Cabin\', sans-serif;\n  }\n  footer {\n    background-color: black;\n    color: white;\n    font-family: \'Cabin\', sans-serif;\n    margin-top: 175px;\n  }\n'], ['\n  header {\n    background-color: lightgreen;\n    font-family: \'Cabin\', sans-serif;\n  }\n  footer {\n    background-color: black;\n    color: white;\n    font-family: \'Cabin\', sans-serif;\n    margin-top: 175px;\n  }\n']);

var Layout = _styledComponents2.default.div(_templateObject);

exports.default = function (_ref) {
  var children = _ref.children;
  return _react2.default.createElement(_reactApollo.ApolloProvider, { client: _apollo.client, __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, _react2.default.createElement(Layout, { id: 'layout', __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, _react2.default.createElement('header', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, _react2.default.createElement('nav', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }, 'Public nav: ', _react2.default.createElement(_link2.default, { prefetch: true, href: '/home', __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }, _react2.default.createElement('a', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }, 'Home')), ' |', _react2.default.createElement(_link2.default, { prefetch: true, href: '/about', __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }, _react2.default.createElement('a', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }, 'About')), ' |', _react2.default.createElement(_link2.default, { prefetch: true, href: '/contact', __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }, _react2.default.createElement('a', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }, 'Contact'))), _react2.default.createElement('nav', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  }, 'Admin nav: ', _react2.default.createElement(_link2.default, { prefetch: true, href: '/admin', __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  }, _react2.default.createElement('a', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  }, 'Admin')), ' |', _react2.default.createElement(_link2.default, { prefetch: true, href: '/profile', __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  }, _react2.default.createElement('a', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  }, 'User Profile'))), _react2.default.createElement(_AuthButtonWithData2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  })), children, _react2.default.createElement('footer', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    }
  }, 'Jon Michael Stewart')));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNfbGF5b3V0L01haW4vaW5kZXguanMiXSwibmFtZXMiOlsiTGluayIsInN0eWxlZCIsIkFwb2xsb1Byb3ZpZGVyIiwiY2xpZW50IiwiQXV0aEJ1dHRvbldpdGhEYXRhIiwiTGF5b3V0IiwiZGl2IiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFTOztBQUNULEFBQVMsQUFBYzs7QUFDdkIsQUFBTyxBQUF3Qjs7Ozs7Ozs7OztBQUUvQixJQUFNLFNBQVMsMkJBQVQsQUFBZ0IsSUFBdEIsQUFhQTs7a0JBQWUsZ0JBQUE7TUFBQSxBQUFHLGdCQUFILEFBQUc7eUJBQ2hCLEFBQUMsNkNBQUQsQUFBZ0IsQUFBUTtnQkFBeEI7a0JBQUEsQUFDRTtBQURGO0dBQUEsa0JBQ0csY0FBRCxVQUFRLElBQVIsQUFBVztnQkFBWDtrQkFBQSxBQUNFO0FBREY7cUJBQ0UsY0FBQTs7Z0JBQUE7a0JBQUEsQUFDRTtBQURGO0FBQUEscUJBQ0UsY0FBQTs7Z0JBQUE7a0JBQUEsQUFBTTtBQUFOO0FBQUEsS0FBQSxBQUNFLGdDQUFBLEFBQUMsZ0NBQUssVUFBTixNQUFlLE1BQWYsQUFBb0I7Z0JBQXBCO2tCQUFBLEFBQTRCO0FBQTVCO3FCQUE0QixjQUFBOztnQkFBQTtrQkFBQTtBQUFBO0FBQUEsS0FEOUIsQUFDRSxBQUE0QixVQUM1QixzQkFBQSxBQUFDLGdDQUFLLFVBQU4sTUFBZSxNQUFmLEFBQW9CO2dCQUFwQjtrQkFBQSxBQUE2QjtBQUE3QjtxQkFBNkIsY0FBQTs7Z0JBQUE7a0JBQUE7QUFBQTtBQUFBLEtBRi9CLEFBRUUsQUFBNkIsV0FDN0Isc0JBQUEsQUFBQyxnQ0FBSyxVQUFOLE1BQWUsTUFBZixBQUFvQjtnQkFBcEI7a0JBQUEsQUFBK0I7QUFBL0I7cUJBQStCLGNBQUE7O2dCQUFBO2tCQUFBO0FBQUE7QUFBQSxLQUpuQyxBQUNFLEFBR0UsQUFBK0IsQUFFakMsOEJBQUEsY0FBQTs7Z0JBQUE7a0JBQUEsQUFBTTtBQUFOO0FBQUEsS0FBQSxBQUNFLCtCQUFBLEFBQUMsZ0NBQUssVUFBTixNQUFlLE1BQWYsQUFBb0I7Z0JBQXBCO2tCQUFBLEFBQTZCO0FBQTdCO3FCQUE2QixjQUFBOztnQkFBQTtrQkFBQTtBQUFBO0FBQUEsS0FEL0IsQUFDRSxBQUE2QixXQUM3QixzQkFBQSxBQUFDLGdDQUFLLFVBQU4sTUFBZSxNQUFmLEFBQW9CO2dCQUFwQjtrQkFBQSxBQUErQjtBQUEvQjtxQkFBK0IsY0FBQTs7Z0JBQUE7a0JBQUE7QUFBQTtBQUFBLEtBUm5DLEFBTUUsQUFFRSxBQUErQixBQUVqQyxtQ0FBQSxBQUFDOztnQkFBRDtrQkFYSixBQUNFLEFBVUUsQUFFRTtBQUZGO0FBQUEsT0FYSixBQWNFLDBCQUFBLGNBQUE7O2dCQUFBO2tCQUFBLEFBQ0c7QUFESDtBQUFBLEtBaEJTLEFBQ2IsQUFDRSxBQWNFO0FBaEJOIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9qbWljaGFlbHN0ZXdhcnQvQ29kZS9hd2Vzb21lUG90YXRvZXMifQ==