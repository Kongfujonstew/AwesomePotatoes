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

var _jsxFileName = '/Users/jmichaelstewart/Code/awesomePotatoes/components_layout/Main/AuthButton.js';

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
        console.log('Auth0 authenticated profile: ', _this2.props.profile);
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
      console.log('refetch on email: ', email);
      return _axios2.default.post(url, {
        headers: { 'Content-Type': 'application/json' },
        query: 'query {\n        allUsers (filter: {email:"' + email + '"}) {\n          id\n        }\n      }\n    '
      }).catch(function (err) {
        return console.log('err retrieving graphcool user: ', err);
      }).then(function (_ref3) {
        var data = _ref3.data;

        console.log('getGraphCoolUserIdIfExists data: ', data);
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
      console.log('creating Graphcool user');
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

        console.log('data on create graphcool user: ', data);
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
      console.log('props on authButton (withData) :', this.props);
      var _props = this.props,
          loggedIn = _props.loggedIn,
          profile = _props.profile;

      var loginButton = loggedIn ? _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }, 'Logged in with: ' + profile.name, ' ', _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }), _react2.default.createElement('button', { onClick: this.logout.bind(this), __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }, 'Logout')) : _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }, 'Please log in.', ' ', _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }), _react2.default.createElement('button', { onClick: this.login.bind(this), __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }, 'Login'));

      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        }
      }, loginButton);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNfbGF5b3V0L01haW4vQXV0aEJ1dHRvbi5qcyJdLCJuYW1lcyI6WyJheGlvcyIsImNvbm5lY3QiLCJBdXRoIiwiaW5pdFN0b3JlIiwibG9naW4iLCJsb2dvdXQiLCJ1cmwiLCJwcm9jZXNzIiwiZW52IiwiR1JBUEhDT09MX1VSSSIsIkF1dGhCdXR0b24iLCJzdG9yZSIsImlzU2VydmVyIiwiZ2V0U3RhdGUiLCJwcm9wcyIsImF1dGgiLCJsb2NrIiwiZ2V0TG9jayIsIm9uIiwiZGF0YSIsImFjY2Vzc1Rva2VuIiwiZ2V0VXNlckluZm8iLCJlcnJvciIsInByb2ZpbGUiLCJoYW5kbGVBdXRoIiwiY29uc29sZSIsImxvZyIsImdldEdyYXBoQ29vbFVzZXJJZElmRXhpc3RzIiwiZW1haWwiLCJjcmVhdGVHcmFwaENvb2xVc2VyIiwiZ3JhcGhjb29sSWQiLCJsb2dpblJlZHV4U3RvcmUiLCJwb3N0IiwiaGVhZGVycyIsInF1ZXJ5IiwiY2F0Y2giLCJlcnIiLCJ0aGVuIiwiYWxsVXNlcnMiLCJsZW5ndGgiLCJpZCIsInVzZXJfaWQiLCJuYW1lIiwibmlja25hbWUiLCJvcHRpb25zIiwidmFyaWFibGVzIiwiYXV0aDBJZCIsImNyZWF0ZVVzZXIiLCJsb2dnZWRJbiIsImxvZ2luQnV0dG9uIiwiYmluZCIsIlJlYWN0IiwiQ29tcG9uZW50IiwibWFwU3RhdGVUb1Byb3BzIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQVM7O0FBQ1QsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQVMsQUFBVyxBQUFPLEFBQWM7Ozs7OztBQUN6QyxJQUFNLE1BQU0sUUFBQSxBQUFRLElBQXBCLEFBQXdCOztJLEFBRWxCOzs7OzswQ0FDeUM7VUFBbkIsQUFBbUIsYUFBbkIsQUFBbUI7VUFBWixBQUFZLGdCQUFaLEFBQVksQUFDM0M7O1VB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QUFMLEFBQVcsQUFDWjs7Ozs2QkFFUyxBQUNSO2NBQUEsQUFBUSxJQUFSLEFBQVksb0NBQW9DLEtBRHhDLEFBQ1IsQUFBcUQ7bUJBQ3ZCLEtBRnRCLEFBRTJCO1VBRjNCLEFBRUEsa0JBRkEsQUFFQTtVQUZBLEFBRVUsaUJBRlYsQUFFVSxBQUNsQjs7VUFBTSx5Q0FDSixjQUFBOztvQkFBQTtzQkFBQSxBQUNHO0FBREg7QUFBQSxPQUFBLHVCQUN3QixRQUR4QixBQUNnQyxNQUFNOztvQkFBQTtzQkFEdEMsQUFDc0MsQUFDcEM7QUFEb0M7QUFBQSwwQkFDcEMsY0FBQSxZQUFRLFNBQVMsS0FBQSxBQUFLLE9BQUwsQUFBWSxLQUE3QixBQUFpQixBQUFpQjtvQkFBbEM7c0JBQUE7QUFBQTtTQUhnQixBQUNsQixBQUVFLFVBSGdCLG1CQUtsQixjQUFBOztvQkFBQTtzQkFBQSxBQUNHO0FBREg7QUFBQSxPQUFBLEVBQUEsa0JBQ3FCOztvQkFBQTtzQkFEckIsQUFDcUIsQUFDbkI7QUFEbUI7QUFBQSwwQkFDbkIsY0FBQSxZQUFRLFNBQVMsS0FBQSxBQUFLLE1BQUwsQUFBVyxLQUE1QixBQUFpQixBQUFnQjtvQkFBakM7c0JBQUE7QUFBQTtTQVBKLEFBS0UsQUFFRSxBQUdKOzs2QkFDRSxjQUFBOztvQkFBQTtzQkFBQSxBQUNJO0FBREo7QUFBQSxPQUFBLEVBREYsQUFDRSxBQUlIOzs7OztFQWhHc0IsZ0IsQUFBTTs7QUFpRzlCOztBQUVELElBQU0sa0JBQWtCLFNBQWxCLEFBQWtCLHVCQUFBO01BQUEsQUFBRyxpQkFBSCxBQUFHO01BQUgsQUFBYSxnQkFBYixBQUFhO1NBQWUsRUFBRSxVQUFGLFVBQVksU0FBeEMsQUFBNEI7QUFBcEQ7O0FBRUEsSUFBTSxxQkFBcUIsU0FBckIsQUFBcUIsbUJBQUEsQUFBQyxVQUFhLEFBQ3ZDOztxQkFDbUIseUJBQUEsQUFBQyxTQUFEO2FBQWEsU0FBUyxvQkFBdEIsQUFBYSxBQUFTLEFBQU07QUFEeEMsQUFFTDtZQUFRLGtCQUFBO2FBQU0sU0FBTixBQUFNLEFBQVM7QUFGekIsQUFBTyxBQUlSO0FBSlEsQUFDTDtBQUZKLEFBT0E7O2tCQUFlLHlCQUFBLEFBQ2IsaUJBRGEsQUFFYixvQkFGRixBQUFlLEFBR2IiLCJmaWxlIjoiQXV0aEJ1dHRvbi5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvam1pY2hhZWxzdGV3YXJ0L0NvZGUvYXdlc29tZVBvdGF0b2VzIn0=