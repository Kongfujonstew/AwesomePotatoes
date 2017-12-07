'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _auth0Js = require('auth0-js');

var _auth0Js2 = _interopRequireDefault(_auth0Js);

var _auth0Lock = require('auth0-lock');

var _auth0Lock2 = _interopRequireDefault(_auth0Lock);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var clientID = 'w5SleZPUmI1zvzUm3i5yb7aStN0Dz6wq';
var domain = 'awesometomatoes.auth0.com';
// const redirectUri = 'http://localhost:3000/home';
// const audience = 'https://awesometomatoes.auth0.com/userinfo';
// const options = { auth: { redirectUri }};

var Auth = function () {
  function Auth() {
    (0, _classCallCheck3.default)(this, Auth);

    this.clientID = clientID;
    this.domain = domain;
    this.lock = new _auth0Lock2.default(clientID, domain, {});
    this.lock.on('authenticated', this._doAuthentication.bind(this));
    this.login = this.login.bind(this);
  }

  (0, _createClass3.default)(Auth, [{
    key: '_doAuthentication',
    value: function _doAuthentication(authResult) {
      this.setToken(authResult.idToken);
    }
  }, {
    key: 'getLock',
    value: function getLock() {
      return new _auth0Lock2.default(this.clientID, this.domain, {});
    }
  }, {
    key: 'login',
    value: function login() {
      this.lock.show();
    }
  }, {
    key: 'loggedIn',
    value: function loggedIn() {
      return !!this.getToken();
    }
  }, {
    key: 'setToken',
    value: function setToken(idToken) {
      localStorage.setItem('id_token', idToken);
    }
  }, {
    key: 'getToken',
    value: function getToken() {
      return localStorage.getItem('id_token');
    }
  }, {
    key: 'logout',
    value: function logout() {
      localStorage.removeItem('id_token');
    }
  }]);

  return Auth;
}();

// login returns:

// {
//   "email_verified": false,
//   "email": "jonstew@gmail.com",
//   "clientID": "2Lpicu9qeFh-lVCWRVvW5Zax2Xsl0wqF",
//   "updated_at": "2017-12-06T18:16:38.333Z",
//   "name": "jonstew@gmail.com",
//   "picture": "https://s.gravatar.com/avatar/79b227f44694554cdd2007b4c3feac70?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fjo.png",
//   "user_id": "auth0|5a283267cd8c4b368ccee9f5",
//   "nickname": "jonstew",
//   "identities": [
//     {
//       "user_id": "5a283267cd8c4b368ccee9f5",
//       "provider": "auth0",
//       "connection": "Username-Password-Authentication",
//       "isSocial": false
//     }
//   ],
//   "created_at": "2017-12-06T18:09:43.996Z",
//   "sub": "auth0|5a283267cd8c4b368ccee9f5"
// }


exports.default = Auth;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGgwL2F1dGguanMiXSwibmFtZXMiOlsiYXV0aDAiLCJBdXRoMExvY2siLCJjbGllbnRJRCIsImRvbWFpbiIsIkF1dGgiLCJsb2NrIiwib24iLCJfZG9BdXRoZW50aWNhdGlvbiIsImJpbmQiLCJsb2dpbiIsImF1dGhSZXN1bHQiLCJzZXRUb2tlbiIsImlkVG9rZW4iLCJzaG93IiwiZ2V0VG9rZW4iLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiZ2V0SXRlbSIsInJlbW92ZUl0ZW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFQOzs7O0FBQ0EsQUFBTyxBQUFQOzs7Ozs7QUFFQSxJQUFNLFdBQVcsQUFBakI7QUFDQSxJQUFNLFNBQVMsQUFBZjtBQUNBO0FBQ0E7QUFDQTs7SUFFcUIsQSxtQkFDbkI7a0JBQWM7d0NBQ1o7O1NBQUssQUFBTCxXQUFnQixBQUFoQixBQUNBO1NBQUssQUFBTCxTQUFjLEFBQWQsQUFDQTtTQUFLLEFBQUwsT0FBWSxBQUFJLEFBQUosd0JBQWMsQUFBZCxVQUF3QixBQUF4QixRQUFnQyxBQUFoQyxBQUFaLEFBQ0E7U0FBSyxBQUFMLEtBQVUsQUFBVixHQUFhLEFBQWIsaUJBQThCLEtBQUssQUFBTCxrQkFBdUIsQUFBdkIsS0FBNEIsQUFBNUIsQUFBOUIsQUFDQTtTQUFLLEFBQUwsUUFBYSxLQUFLLEFBQUwsTUFBVyxBQUFYLEtBQWdCLEFBQWhCLEFBQWIsQUFDRDs7Ozs7c0NBRWlCLEEsWUFBVyxBQUMzQjtXQUFLLEFBQUwsU0FBYyxXQUFXLEFBQXpCLEFBQ0Q7Ozs7OEJBRVMsQUFDUjthQUFPLEFBQUksQUFBSix3QkFBYyxLQUFLLEFBQW5CLFVBQTZCLEtBQUssQUFBbEMsUUFBMEMsQUFBMUMsQUFBUCxBQUNEOzs7OzRCQUVPLEFBQ047V0FBSyxBQUFMLEtBQVUsQUFBVixBQUNEOzs7OytCQUVTLEFBQ1I7YUFBTyxDQUFDLENBQUMsS0FBSyxBQUFMLEFBQVQsQUFDRDs7Ozs2QkFFUSxBLFNBQVEsQUFDZjttQkFBYSxBQUFiLFFBQXFCLEFBQXJCLFlBQWlDLEFBQWpDLEFBQ0Q7Ozs7K0JBRVMsQUFDUjthQUFPLGFBQWEsQUFBYixRQUFxQixBQUFyQixBQUFQLEFBQ0Q7Ozs7NkJBRU8sQUFDTjttQkFBYSxBQUFiLFdBQXdCLEFBQXhCLEFBQ0Q7Ozs7Ozs7QUFHSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7a0JBM0RxQixBIiwiZmlsZSI6ImF1dGguanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2ptaWNoYWVsc3Rld2FydC9Db2RlL2F3ZXNvbWVQb3RhdG9lcyJ9