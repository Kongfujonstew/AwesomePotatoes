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

var _reactRedux = require('react-redux');

var _auth = require('../auth0/auth.js');

var _auth2 = _interopRequireDefault(_auth);

var _actions = require('../redux/actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AuthButton = function (_React$Component) {
  (0, _inherits3.default)(AuthButton, _React$Component);

  (0, _createClass3.default)(AuthButton, null, [{
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

  function AuthButton(props) {
    (0, _classCallCheck3.default)(this, AuthButton);

    return (0, _possibleConstructorReturn3.default)(this, (AuthButton.__proto__ || (0, _getPrototypeOf2.default)(AuthButton)).call(this, props));
  }

  (0, _createClass3.default)(AuthButton, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      this.auth = new _auth2.default();
      this.lock = this.auth.getLock();
      this.lock.on('authenticated', function (data) {
        var accessToken = data.accessToken;

        console.log('accessToken ', accessToken);
        _this2.lock.getUserInfo(accessToken, function (error, profile) {
          if (!error) {
            console.log('profile: ', profile);
          }
        });
        _this2.props.login();

        //put the router here and move to home???
      });
    }
  }, {
    key: 'login',
    value: function login() {
      this.auth.login();
    }
  }, {
    key: 'logout',
    value: function logout() {
      this.props.logout();
    }
  }, {
    key: 'render',
    value: function render() {
      var loggedIn = this.props.loggedIn;

      console.log('sanity check from AB');
      var loginButton = loggedIn ? _react2.default.createElement('button', { onClick: this.logout.bind(this) }, 'Logout') : _react2.default.createElement('button', { onClick: this.login.bind(this) }, 'Login');

      return _react2.default.createElement('div', null, loginButton);
    }
  }]);

  return AuthButton;
}(_react2.default.Component);

;

var mapStateToProps = function mapStateToProps(_ref2) {
  var loggedIn = _ref2.loggedIn;
  return { loggedIn: loggedIn };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    login: function login() {
      return dispatch((0, _actions.login)());
    },
    logout: function logout() {
      return dispatch((0, _actions.logout)());
    }
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(AuthButton);