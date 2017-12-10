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

var _reactDom = require('react-dom');

var _reactApollo = require('react-apollo');

var _apollo = require('../../apollo');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GraphcoolProfile = function (_React$Component) {
  (0, _inherits3.default)(GraphcoolProfile, _React$Component);

  (0, _createClass3.default)(GraphcoolProfile, null, [{
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

  function GraphcoolProfile(props) {
    (0, _classCallCheck3.default)(this, GraphcoolProfile);

    return (0, _possibleConstructorReturn3.default)(this, (GraphcoolProfile.__proto__ || (0, _getPrototypeOf2.default)(GraphcoolProfile)).call(this, props));
  }

  (0, _createClass3.default)(GraphcoolProfile, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.data.refetch();
    }
  }, {
    key: 'render',
    value: function render() {
      while (this.props.data.loading) {
        return 'loading';
      }
      var _props$data$allUsers$ = this.props.data.allUsers[0],
          auth0Id = _props$data$allUsers$.auth0Id,
          name = _props$data$allUsers$.name,
          email = _props$data$allUsers$.email,
          id = _props$data$allUsers$.id;

      return _react2.default.createElement('div', null, _react2.default.createElement('h1', null, 'GraphcoolProfile'), _react2.default.createElement('div', null, 'auth0Id: ' + auth0Id), _react2.default.createElement('div', null, 'name: ' + name), _react2.default.createElement('div', null, 'email: ' + email), _react2.default.createElement('div', null, 'graphcoolId: ' + id));
    }
  }]);

  return GraphcoolProfile;
}(_react2.default.Component);

var DataComponent = (0, _reactApollo.graphql)(_apollo.GetUserByGraphcoolIdQuery, {
  options: function options(_ref2) {
    var graphcoolId = _ref2.graphcoolId;
    return { variables: { id: graphcoolId } };
  }
})(GraphcoolProfile);

exports.default = function (props) {
  return _react2.default.createElement(DataComponent, { graphcoolId: props.graphcoolId });
};