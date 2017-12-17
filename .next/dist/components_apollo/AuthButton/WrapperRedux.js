'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = require('react-redux');

var _actions = require('../../redux/actions');

var mapStateToProps = function mapStateToProps(_ref) {
  var _ref$user = _ref.user,
      loggedIn = _ref$user.loggedIn,
      profile = _ref$user.profile;
  return { loggedIn: loggedIn, profile: profile };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    loginReduxStore: function loginReduxStore(profile) {
      return dispatch((0, _actions.login)(profile));
    },
    logoutReduxStore: function logoutReduxStore() {
      return dispatch((0, _actions.logout)());
    }
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps);