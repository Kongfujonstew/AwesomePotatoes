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

var _Profile = require('../components_pages/Profile');

var _Profile2 = _interopRequireDefault(_Profile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ProfilePage = function (_React$Component) {
  (0, _inherits3.default)(ProfilePage, _React$Component);

  function ProfilePage(props) {
    (0, _classCallCheck3.default)(this, ProfilePage);

    return (0, _possibleConstructorReturn3.default)(this, (ProfilePage.__proto__ || (0, _getPrototypeOf2.default)(ProfilePage)).call(this, props));
  }

  (0, _createClass3.default)(ProfilePage, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_Main2.default, null, _react2.default.createElement(_Profile2.default, null));
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

  return ProfilePage;
}(_react2.default.Component);

;

exports.default = (0, _nextReduxWrapper2.default)(_pageConfig2.default)(ProfilePage);