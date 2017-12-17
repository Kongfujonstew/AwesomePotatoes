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

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _auth = require('../../auth0/auth.js');

var _auth2 = _interopRequireDefault(_auth);

var _actions = require('../../redux/actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var url = process.env.GRAPHCOOL_URI;

var Container = function (_React$Component) {
  (0, _inherits3.default)(Container, _React$Component);

  function Container(props) {
    (0, _classCallCheck3.default)(this, Container);

    return (0, _possibleConstructorReturn3.default)(this, (Container.__proto__ || (0, _getPrototypeOf2.default)(Container)).call(this, props));
  }

  (0, _createClass3.default)(Container, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      this.auth = new _auth2.default();
      this.lock = this.auth.getLock();
      this.lock.on('authenticated', function (data) {
        _this2.handleAuth(data);
      });
    }
  }, {
    key: 'handleAuth',
    value: function handleAuth(data) {
      var _this3 = this;

      var accessToken = data.accessToken,
          idToken = data.idToken;

      window.localStorage.setItem('auth0IdToken', idToken);
      this.lock.getUserInfo(accessToken, function (error, profile) {
        var graphcoolId = _this3.getGraphcoolUser(profile);
        _this3.loginLocally(profile, graphcoolId);
      });
    }
  }, {
    key: 'getGraphcoolUser',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(profile) {
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
                return _context.abrupt('return', graphcoolId);

              case 9:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getGraphcoolUser(_x) {
        return _ref.apply(this, arguments);
      }

      return getGraphcoolUser;
    }()

    //Todo: combine following two methods
    //either use auth0 meta_data to identify first time logins
    //or improve graphcool updateorcreate to accept auth0UserId

  }, {
    key: 'getGraphCoolUserIdIfExists',
    value: function getGraphCoolUserIdIfExists(email) {
      return _axios2.default.post(url, {
        headers: { 'Content-Type': 'application/json' },
        query: 'query {\n        allUsers (filter: {email:"' + email + '"}) {\n          id\n        }\n      }\n    '
      }).catch(function (err) {
        return console.log('err retrieving graphcool user: ', err);
      }).then(function (_ref2) {
        var data = _ref2.data;

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

      var authProvider = { auth0: { idToken: localStorage.getItem('auth0IdToken') } };
      name = name === email ? nickname : name;
      var options = { variables: { name: name, email: email, authProvider: authProvider } };
      return this.props.createUser(options).catch(function (err) {
        return console.log('error update or create new graphcool user:', err);
      }).then(function (_ref3) {
        var data = _ref3.data;

        return data.createUser.id;
      });
    }
  }, {
    key: 'loginLocally',
    value: function loginLocally(profile, graphcoolId) {
      if (graphcoolId) {
        profile.graphcoolId = graphcoolId;
        this.props.loginReduxStore(profile);
      } else {
        console.log('login err no user found graphcool');
      };
    }
  }, {
    key: 'login',
    value: function login() {
      this.auth.login();
    }
  }, {
    key: 'logout',
    value: function logout() {
      this.props.logoutReduxStore();
      window.localStorage.setItem('auth0IdToken', null);
    }
  }, {
    key: 'render',
    value: function render() {
      var Component = this.props.Component;

      var componentProps = {
        loggedIn: this.props.loggedIn,
        profile: this.props.profile,
        login: this.login.bind(this),
        logout: this.logout.bind(this)
      };

      return Component(componentProps);
    }
  }]);

  return Container;
}(_react2.default.Component);

;

exports.default = Container;