'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

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

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _reactRedux = require('react-redux');

var _auth = require('../../auth0/auth.js');

var _auth2 = _interopRequireDefault(_auth);

var _actions = require('../../redux/actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var url = process.env.GRAPHCOOL_URI;

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

        _this2.lock.getUserInfo(accessToken, function (error, profile) {
          _this2.handleAuth(profile);
        });
      });
    }
  }, {
    key: 'handleAuth',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(profile) {
        var graphcoolId;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.getGraphCoolUserIdIfExists(profile.email);

              case 2:
                _context.t0 = _context.sent;

                if (_context.t0) {
                  _context.next = 7;
                  break;
                }

                _context.next = 6;
                return this.createGraphCoolUser(profile);

              case 6:
                _context.t0 = _context.sent;

              case 7:
                graphcoolId = _context.t0;

                if (graphcoolId) {
                  profile.graphcoolId = graphcoolId;
                  this.props.loginReduxStore(profile);
                };

              case 10:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function handleAuth(_x) {
        return _ref2.apply(this, arguments);
      }

      return handleAuth;
    }()
  }, {
    key: 'getGraphCoolUserIdIfExists',
    value: function getGraphCoolUserIdIfExists(email) {
      return _axios2.default.post(url, {
        headers: { 'Content-Type': 'application/json' },
        query: 'query {\n        allUsers (filter: {email:"' + email + '"}) {\n          id\n        }\n      }\n    '
      }).catch(function (err) {
        return console.log('err retrieving graphcool user: ', err);
      }).then(function (_ref3) {
        var data = _ref3.data;

        if (data.data.allUsers && data.data.allUsers.length) {
          return data.data.allUsers[0].id;
        } else {
          return false;
        }
      });
    }
  }, {
    key: 'createGraphCoolUser',
    value: function createGraphCoolUser(profile) {
      var email = profile.email,
          user_id = profile.user_id,
          name = profile.name,
          nickname = profile.nickname;

      name = name === email ? nickname : name;
      var options = { variables: { name: name, email: email, auth0Id: user_id } };
      return this.props.createUser(options).catch(function (err) {
        return console.log('error update or create new graphcool user:', err);
      }).then(function (_ref4) {
        var data = _ref4.data;

        return data.createUser.id;
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
      var _props = this.props,
          loggedIn = _props.loggedIn,
          profile = _props.profile;

      var loginButton = loggedIn ? _react2.default.createElement('div', null, 'Logged in with: ' + profile.name, ' ', _react2.default.createElement('br', null), _react2.default.createElement('button', { onClick: this.logout.bind(this) }, 'Logout')) : _react2.default.createElement('div', null, 'Please log in.', ' ', _react2.default.createElement('br', null), _react2.default.createElement('button', { onClick: this.login.bind(this) }, 'Login'));

      return _react2.default.createElement('div', null, loginButton);
    }
  }]);

  return AuthButton;
}(_react2.default.Component);

;

var mapStateToProps = function mapStateToProps(_ref5) {
  var loggedIn = _ref5.loggedIn,
      profile = _ref5.profile;
  return { loggedIn: loggedIn, profile: profile };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    loginReduxStore: function loginReduxStore(profile) {
      return dispatch((0, _actions.login)(profile));
    },
    logout: function logout() {
      return dispatch((0, _actions.logout)());
    }
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(AuthButton);