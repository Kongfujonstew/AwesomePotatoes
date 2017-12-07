webpackHotUpdate(5,{

/***/ 665:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(14);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(15);

var _createClass3 = _interopRequireDefault(_createClass2);

var _auth0Js = __webpack_require__(666);

var _auth0Js2 = _interopRequireDefault(_auth0Js);

var _auth0Lock = __webpack_require__(550);

var _auth0Lock2 = _interopRequireDefault(_auth0Lock);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var clientID = "w5SleZPUmI1zvzUm3i5yb7aStN0Dz6wq";
var domain = "awesometomatoes.auth0.com";

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/jmichaelstewart/Code/awesomePotatoes/auth0/auth.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/jmichaelstewart/Code/awesomePotatoes/auth0/auth.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS4zNjlhM2Y3NTllMzU2OGNhMGRjNC5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXV0aDAvYXV0aC5qcz83OTA0MWRmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBhdXRoMCBmcm9tICdhdXRoMC1qcyc7XG5pbXBvcnQgQXV0aDBMb2NrIGZyb20gJ2F1dGgwLWxvY2snO1xuXG5jb25zdCBjbGllbnRJRCA9IHByb2Nlc3MuZW52LkFVVEgwX0NMSUVOVF9JRDtcbmNvbnN0IGRvbWFpbiA9IHByb2Nlc3MuZW52LkFVVEgwX0RPTUFJTjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXV0aCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuY2xpZW50SUQgPSBjbGllbnRJRDtcbiAgICB0aGlzLmRvbWFpbiA9IGRvbWFpbjtcbiAgICB0aGlzLmxvY2sgPSBuZXcgQXV0aDBMb2NrKGNsaWVudElELCBkb21haW4sIHt9KTtcbiAgICB0aGlzLmxvY2sub24oJ2F1dGhlbnRpY2F0ZWQnLCB0aGlzLl9kb0F1dGhlbnRpY2F0aW9uLmJpbmQodGhpcykpO1xuICAgIHRoaXMubG9naW4gPSB0aGlzLmxvZ2luLmJpbmQodGhpcylcbiAgfVxuXG4gIF9kb0F1dGhlbnRpY2F0aW9uKGF1dGhSZXN1bHQpe1xuICAgIHRoaXMuc2V0VG9rZW4oYXV0aFJlc3VsdC5pZFRva2VuKTtcbiAgfVxuXG4gIGdldExvY2soKSB7XG4gICAgcmV0dXJuIG5ldyBBdXRoMExvY2sodGhpcy5jbGllbnRJRCwgdGhpcy5kb21haW4sIHt9KTtcbiAgfVxuXG4gIGxvZ2luKCkge1xuICAgIHRoaXMubG9jay5zaG93KClcbiAgfVxuXG4gIGxvZ2dlZEluKCl7XG4gICAgcmV0dXJuICEhdGhpcy5nZXRUb2tlbigpXG4gIH1cblxuICBzZXRUb2tlbihpZFRva2VuKXtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaWRfdG9rZW4nLCBpZFRva2VuKVxuICB9XG5cbiAgZ2V0VG9rZW4oKXtcbiAgICByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2lkX3Rva2VuJylcbiAgfVxuXG4gIGxvZ291dCgpe1xuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdpZF90b2tlbicpO1xuICB9XG59XG5cbi8vIGxvZ2luIHJldHVybnM6XG5cbi8vIHtcbi8vICAgXCJlbWFpbF92ZXJpZmllZFwiOiBmYWxzZSxcbi8vICAgXCJlbWFpbFwiOiBcImpvbnN0ZXdAZ21haWwuY29tXCIsXG4vLyAgIFwiY2xpZW50SURcIjogXCIyTHBpY3U5cWVGaC1sVkNXUlZ2VzVaYXgyWHNsMHdxRlwiLFxuLy8gICBcInVwZGF0ZWRfYXRcIjogXCIyMDE3LTEyLTA2VDE4OjE2OjM4LjMzM1pcIixcbi8vICAgXCJuYW1lXCI6IFwiam9uc3Rld0BnbWFpbC5jb21cIixcbi8vICAgXCJwaWN0dXJlXCI6IFwiaHR0cHM6Ly9zLmdyYXZhdGFyLmNvbS9hdmF0YXIvNzliMjI3ZjQ0Njk0NTU0Y2RkMjAwN2I0YzNmZWFjNzA/cz00ODAmcj1wZyZkPWh0dHBzJTNBJTJGJTJGY2RuLmF1dGgwLmNvbSUyRmF2YXRhcnMlMkZqby5wbmdcIixcbi8vICAgXCJ1c2VyX2lkXCI6IFwiYXV0aDB8NWEyODMyNjdjZDhjNGIzNjhjY2VlOWY1XCIsXG4vLyAgIFwibmlja25hbWVcIjogXCJqb25zdGV3XCIsXG4vLyAgIFwiaWRlbnRpdGllc1wiOiBbXG4vLyAgICAge1xuLy8gICAgICAgXCJ1c2VyX2lkXCI6IFwiNWEyODMyNjdjZDhjNGIzNjhjY2VlOWY1XCIsXG4vLyAgICAgICBcInByb3ZpZGVyXCI6IFwiYXV0aDBcIixcbi8vICAgICAgIFwiY29ubmVjdGlvblwiOiBcIlVzZXJuYW1lLVBhc3N3b3JkLUF1dGhlbnRpY2F0aW9uXCIsXG4vLyAgICAgICBcImlzU29jaWFsXCI6IGZhbHNlXG4vLyAgICAgfVxuLy8gICBdLFxuLy8gICBcImNyZWF0ZWRfYXRcIjogXCIyMDE3LTEyLTA2VDE4OjA5OjQzLjk5NlpcIixcbi8vICAgXCJzdWJcIjogXCJhdXRoMHw1YTI4MzI2N2NkOGM0YjM2OGNjZWU5ZjVcIlxuLy8gfVxuXG5cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXV0aDAvYXV0aC5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7OztBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFJQTtBQUFBOzs7O0FBSUE7QUFBQTs7OztBQUlBO0FBQUE7Ozs7QUFJQTtBQUFBOzs7O0FBSUE7QUFBQTs7OztBQUlBO0FBQUE7Ozs7QUFJQTtBQUFBOzs7Ozs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9