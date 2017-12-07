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

var clientID = process.env.AUTH0_CLIENT_ID;
var domain = process.env.AUTH0_DOMAIN;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGgwL2F1dGguanMiXSwibmFtZXMiOlsiYXV0aDAiLCJBdXRoMExvY2siLCJjbGllbnRJRCIsInByb2Nlc3MiLCJlbnYiLCJBVVRIMF9DTElFTlRfSUQiLCJkb21haW4iLCJBVVRIMF9ET01BSU4iLCJBdXRoIiwibG9jayIsIm9uIiwiX2RvQXV0aGVudGljYXRpb24iLCJiaW5kIiwibG9naW4iLCJhdXRoUmVzdWx0Iiwic2V0VG9rZW4iLCJpZFRva2VuIiwic2hvdyIsImdldFRva2VuIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsImdldEl0ZW0iLCJyZW1vdmVJdGVtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUDs7OztBQUNBLEFBQU8sQUFBUDs7Ozs7O0FBRUEsSUFBTSxXQUFXLFFBQVEsQUFBUixJQUFZLEFBQTdCO0FBQ0EsSUFBTSxTQUFTLFFBQVEsQUFBUixJQUFZLEFBQTNCOztJQUVxQixBLG1CQUNuQjtrQkFBYzt3Q0FDWjs7U0FBSyxBQUFMLFdBQWdCLEFBQWhCLEFBQ0E7U0FBSyxBQUFMLFNBQWMsQUFBZCxBQUNBO1NBQUssQUFBTCxPQUFZLEFBQUksQUFBSix3QkFBYyxBQUFkLFVBQXdCLEFBQXhCLFFBQWdDLEFBQWhDLEFBQVosQUFDQTtTQUFLLEFBQUwsS0FBVSxBQUFWLEdBQWEsQUFBYixpQkFBOEIsS0FBSyxBQUFMLGtCQUF1QixBQUF2QixLQUE0QixBQUE1QixBQUE5QixBQUNBO1NBQUssQUFBTCxRQUFhLEtBQUssQUFBTCxNQUFXLEFBQVgsS0FBZ0IsQUFBaEIsQUFBYixBQUNEOzs7OztzQ0FFaUIsQSxZQUFXLEFBQzNCO1dBQUssQUFBTCxTQUFjLFdBQVcsQUFBekIsQUFDRDs7Ozs4QkFFUyxBQUNSO2FBQU8sQUFBSSxBQUFKLHdCQUFjLEtBQUssQUFBbkIsVUFBNkIsS0FBSyxBQUFsQyxRQUEwQyxBQUExQyxBQUFQLEFBQ0Q7Ozs7NEJBRU8sQUFDTjtXQUFLLEFBQUwsS0FBVSxBQUFWLEFBQ0Q7Ozs7K0JBRVMsQUFDUjthQUFPLENBQUMsQ0FBQyxLQUFLLEFBQUwsQUFBVCxBQUNEOzs7OzZCQUVRLEEsU0FBUSxBQUNmO21CQUFhLEFBQWIsUUFBcUIsQUFBckIsWUFBaUMsQUFBakMsQUFDRDs7OzsrQkFFUyxBQUNSO2FBQU8sYUFBYSxBQUFiLFFBQXFCLEFBQXJCLEFBQVAsQUFDRDs7Ozs2QkFFTyxBQUNOO21CQUFhLEFBQWIsV0FBd0IsQUFBeEIsQUFDRDs7Ozs7OztBQUdIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztrQkEzRHFCLEEiLCJmaWxlIjoiYXV0aC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvam1pY2hhZWxzdGV3YXJ0L0NvZGUvYXdlc29tZVBvdGF0b2VzIn0=