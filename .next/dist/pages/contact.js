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

var _nextReduxWrapper = require('next-redux-wrapper');

var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

var _pageConfig = require('../redux/pageConfig');

var _pageConfig2 = _interopRequireDefault(_pageConfig);

var _Main = require('../components_layout/Main');

var _Main2 = _interopRequireDefault(_Main);

var _Contact = require('../components_pages/Contact');

var _Contact2 = _interopRequireDefault(_Contact);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ContactPage = function (_React$Component) {
  (0, _inherits3.default)(ContactPage, _React$Component);

  function ContactPage(props) {
    (0, _classCallCheck3.default)(this, ContactPage);

    return (0, _possibleConstructorReturn3.default)(this, (ContactPage.__proto__ || (0, _getPrototypeOf2.default)(ContactPage)).call(this, props));
  }

  (0, _createClass3.default)(ContactPage, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_Main2.default, null, _react2.default.createElement(_Contact2.default, null));
    }
  }], [{
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

  return ContactPage;
}(_react2.default.Component);

exports.default = (0, _nextReduxWrapper2.default)(_pageConfig2.default)(ContactPage);