'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _actions = require('./actions');

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(_ref) {
  var loggedIn = _ref.loggedIn;
  return { loggedIn: loggedIn };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZHV4L3BhZ2VDb25maWcuanMiXSwibmFtZXMiOlsiYmluZEFjdGlvbkNyZWF0b3JzIiwibG9naW4iLCJsb2dvdXQiLCJzZWxlY3RNb3ZpZSIsImluaXRTdG9yZSIsIm1hcFN0YXRlVG9Qcm9wcyIsImxvZ2dlZEluIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJjcmVhdGVTdG9yZSIsInN0b3JlS2V5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxBQUFTOztBQUNULEFBQVMsQUFBTyxBQUFRLEFBQW1COztBQUMzQyxBQUFPLEFBQWU7Ozs7OztBQUV0QixJQUFNLGtCQUFrQixTQUFsQixBQUFrQixzQkFBQTtNQUFBLEFBQUcsZ0JBQUgsQUFBRztTQUFnQixFQUFFLFVBQXJCLEFBQW1CO0FBQTNDOztBQUVBLElBQU0scUJBQXFCLFNBQXJCLEFBQXFCLG1CQUFBLEFBQUMsVUFBYSxBQUN2Qzs7V0FDUyxBQUFtQiwrQ0FEckIsQUFDRSxBQUEwQixBQUNqQztZQUFRLEFBQW1CLGdEQUZ0QixBQUVHLEFBQTJCLEFBQ25DO2lCQUFhLEFBQW1CLHFEQUhsQyxBQUFPLEFBR1EsQUFBZ0MsQUFFaEQ7QUFMUSxBQUNMO0FBRkosQUFRQTs7O0FBQWUsQUFDQSxBQUNiO1lBRmEsQUFFSCxBQUNWO21CQUhhLEFBR0ksQUFDakI7c0JBSkYsQUFBZSxBQUlPO0FBSlAsQUFDYiIsImZpbGUiOiJwYWdlQ29uZmlnLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9qbWljaGFlbHN0ZXdhcnQvQ29kZS9hd2Vzb21lUG90YXRvZXMifQ==