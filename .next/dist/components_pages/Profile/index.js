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

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactRedux = require('react-redux');

var _UserProfileWithData = require('../../components_apollo/UserProfileWithData');

var _UserProfileWithData2 = _interopRequireDefault(_UserProfileWithData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n\n'], ['\n\n']);

// import UserProfileWithData from '../../components_apollo/UserProfileWithData';

var Profile = _styledComponents2.default.div(_templateObject);

var ProfileComponent = function (_React$Component) {
  (0, _inherits3.default)(ProfileComponent, _React$Component);

  (0, _createClass3.default)(ProfileComponent, null, [{
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

  function ProfileComponent(props) {
    (0, _classCallCheck3.default)(this, ProfileComponent);

    return (0, _possibleConstructorReturn3.default)(this, (ProfileComponent.__proto__ || (0, _getPrototypeOf2.default)(ProfileComponent)).call(this, props));
  }

  (0, _createClass3.default)(ProfileComponent, [{
    key: 'render',
    value: function render() {
      console.log('props on Profile: ', this.props);
      var profile = this.props.profile;

      return _react2.default.createElement(Profile, { id: 'profile' }, this.props.loggedIn ? _react2.default.createElement('div', null, _react2.default.createElement('div', null, _react2.default.createElement('h1', null, 'ReduxProfile'), _react2.default.createElement('div', null, 'user_id (auth0): ' + profile.user_id), _react2.default.createElement('div', null, 'clientID:' + profile.clientID), _react2.default.createElement('div', null, 'created_at' + profile.created_at), _react2.default.createElement('div', null, 'email: ' + profile.email), _react2.default.createElement('div', null, 'email_verified: ' + profile.email_verified), _react2.default.createElement('div', null, 'graphcoolId: ' + profile.graphcoolId), _react2.default.createElement('div', null, 'name: ' + profile.name), _react2.default.createElement('div', null, 'nickname: ' + profile.nickname)), _react2.default.createElement(_UserProfileWithData2.default, {
        graphcoolId: this.props.profile.graphcoolId
      })) : 'Please log in to view profile');
    }
  }]);

  return ProfileComponent;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(_ref2) {
  var loggedIn = _ref2.loggedIn,
      profile = _ref2.profile;
  return { loggedIn: loggedIn, profile: profile };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     loginReduxStore: (profile) => dispatch(login(profile)),
//     logout: () => dispatch(logout())
//   }
// };

exports.default = (0, _reactRedux.connect)(mapStateToProps, null)(ProfileComponent);