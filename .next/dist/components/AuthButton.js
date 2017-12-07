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

var _jsxFileName = '/Users/jmichaelstewart/Code/awesomePotatoes/components/AuthButton.js';


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
      var loginButton = loggedIn ? _react2.default.createElement('button', { onClick: this.logout.bind(this), __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, 'Logout') : _react2.default.createElement('button', { onClick: this.login.bind(this), __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, 'Login');

      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, loginButton);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQXV0aEJ1dHRvbi5qcyJdLCJuYW1lcyI6WyJjb25uZWN0IiwiQXV0aCIsImluaXRTdG9yZSIsImxvZ2luIiwibG9nb3V0IiwiQXV0aEJ1dHRvbiIsInN0b3JlIiwiaXNTZXJ2ZXIiLCJnZXRTdGF0ZSIsInByb3BzIiwiYXV0aCIsImxvY2siLCJnZXRMb2NrIiwib24iLCJkYXRhIiwiYWNjZXNzVG9rZW4iLCJjb25zb2xlIiwibG9nIiwiZ2V0VXNlckluZm8iLCJlcnJvciIsInByb2ZpbGUiLCJsb2dnZWRJbiIsImxvZ2luQnV0dG9uIiwiYmluZCIsIlJlYWN0IiwiQ29tcG9uZW50IiwibWFwU3RhdGVUb1Byb3BzIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQVM7O0FBQ1QsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQVMsQUFBVyxBQUFPLEFBQWM7Ozs7Ozs7SUFFbkMsQTs7Ozs7MENBQ3lDO1VBQW5CLEFBQW1CLGFBQW5CLEFBQW1CO1VBQVosQUFBWSxnQkFBWixBQUFZLEFBQzNDOztVQUFBLEFBQUksVUFBVSxBQUNaO2VBQUEsQUFBTyxBQUNSO0FBRkQsYUFFTyxBQUNMO2VBQU8sTUFBUCxBQUFPLEFBQU0sQUFDZDtBQUNGO0FBRUQ7OztzQkFBQSxBQUFZLE9BQU87d0NBQUE7O3lJQUFBLEFBQ1gsQUFDUDs7Ozs7d0NBRW1CO21CQUNsQjs7V0FBQSxBQUFLLE9BQUwsQUFBWSxBQUFJLEFBQ2hCO1dBQUEsQUFBSyxPQUFPLEtBQUEsQUFBSyxLQUFqQixBQUFZLEFBQVUsQUFDdEI7V0FBQSxBQUFLLEtBQUwsQUFBVSxHQUFWLEFBQWEsaUJBQWlCLFVBQUEsQUFBQyxNQUFTO1lBQUEsQUFDOUIsY0FEOEIsQUFDZCxLQURjLEFBQzlCLEFBQ1I7O2dCQUFBLEFBQVEsSUFBUixBQUFZLGdCQUFaLEFBQTRCLEFBQzVCO2VBQUEsQUFBSyxLQUFMLEFBQVUsWUFBVixBQUFzQixhQUFhLFVBQUEsQUFBQyxPQUFELEFBQVEsU0FBWSxBQUNyRDtjQUFJLENBQUosQUFBSyxPQUFPLEFBQ1Y7b0JBQUEsQUFBUSxJQUFSLEFBQVksYUFBWixBQUF5QixBQUMxQjtBQUNGO0FBSkQsQUFLQTtlQUFBLEFBQUssTUFBTCxBQUFXLEFBRVg7O0FBRUQ7QUFaRCxBQWFEOzs7OzRCQUVPLEFBQ047V0FBQSxBQUFLLEtBQUwsQUFBVSxBQUNYOzs7OzZCQUVRLEFBQ1A7V0FBQSxBQUFLLE1BQUwsQUFBVyxBQUNaOzs7OzZCQUVTO1VBQUEsQUFDQSxXQUFhLEtBRGIsQUFDa0IsTUFEbEIsQUFDQSxBQUNSOztjQUFBLEFBQVEsSUFBUixBQUFZLEFBQ1o7VUFBTSx5Q0FDSixjQUFBLFlBQVEsU0FBUyxLQUFBLEFBQUssT0FBTCxBQUFZLEtBQTdCLEFBQWlCLEFBQWlCO29CQUFsQztzQkFBQTtBQUFBO09BQUEsRUFEa0IsQUFDbEIsU0FEa0IsbUJBRWxCLGNBQUEsWUFBUSxTQUFTLEtBQUEsQUFBSyxNQUFMLEFBQVcsS0FBNUIsQUFBaUIsQUFBZ0I7b0JBQWpDO3NCQUFBO0FBQUE7T0FBQSxFQUZGLEFBRUUsQUFFRjs7NkJBQ0UsY0FBQTs7b0JBQUE7c0JBQUEsQUFDSTtBQURKO0FBQUEsT0FBQSxFQURGLEFBQ0UsQUFJSDs7Ozs7RUFuRHNCLGdCLEFBQU07O0FBb0Q5Qjs7QUFFRCxJQUFNLGtCQUFrQixTQUFsQixBQUFrQix1QkFBQTtNQUFBLEFBQUcsaUJBQUgsQUFBRztTQUFnQixFQUFFLFVBQXJCLEFBQW1CO0FBQTNDOztBQUVBLElBQU0scUJBQXFCLFNBQXJCLEFBQXFCLG1CQUFBLEFBQUMsVUFBYSxBQUN2Qzs7V0FDUyxpQkFBQTthQUFNLFNBQU4sQUFBTSxBQUFTO0FBRGpCLEFBRUw7WUFBUSxrQkFBQTthQUFNLFNBQU4sQUFBTSxBQUFTO0FBRnpCLEFBQU8sQUFJUjtBQUpRLEFBQ0w7QUFGSixBQU9BOztrQkFBZSx5QkFBQSxBQUNiLGlCQURhLEFBRWIsb0JBRkYsQUFBZSxBQUdiIiwiZmlsZSI6IkF1dGhCdXR0b24uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2ptaWNoYWVsc3Rld2FydC9Db2RlL2F3ZXNvbWVQb3RhdG9lcyJ9