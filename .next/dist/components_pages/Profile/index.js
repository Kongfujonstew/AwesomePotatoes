'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactRedux = require('react-redux');

var _UserProfileWithData = require('../../components_apollo/UserProfileWithData');

var _UserProfileWithData2 = _interopRequireDefault(_UserProfileWithData);

var _ReduxProfile = require('../../components/ReduxProfile');

var _ReduxProfile2 = _interopRequireDefault(_ReduxProfile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n'], ['\n']);

var ProfileStyled = _styledComponents2.default.div(_templateObject);

var ProfileComponent = function ProfileComponent(_ref) {
  var loggedIn = _ref.loggedIn,
      profile = _ref.profile;

  console.log('profile: ', profile);
  return _react2.default.createElement(ProfileStyled, null, loggedIn ? _react2.default.createElement('div', null, _react2.default.createElement(_ReduxProfile2.default, {
    profile: profile
  }), _react2.default.createElement(_UserProfileWithData2.default, {
    graphcoolId: profile.graphcoolId
  })) : 'Please log in to view profile');
};

var mapStateToProps = function mapStateToProps(_ref2) {
  var _ref2$user = _ref2.user,
      loggedIn = _ref2$user.loggedIn,
      profile = _ref2$user.profile;
  return { loggedIn: loggedIn, profile: profile };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, null)(ProfileComponent);