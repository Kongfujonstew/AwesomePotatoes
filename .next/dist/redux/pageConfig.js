'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _actions = require('./actions');

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
  return state;
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    login: (0, _redux.bindActionCreators)(_actions.login, dispatch),
    logout: (0, _redux.bindActionCreators)(_actions.logout, dispatch),
    selectMovie: (0, _redux.bindActionCreators)(_actions.selectMovie, dispatch)
  };
};

exports.default = {
  createStore: _index2.default,
  storeKey: 'reduxStore',
  mapStateToProps: mapStateToProps,
  mapDispatchToProps: mapDispatchToProps
};