'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactApollo = require('react-apollo');

var _apollo = require('../../apollo');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import Card from '../../components/MovieCard';

var CreateMovie = function (_React$Component) {
  (0, _inherits3.default)(CreateMovie, _React$Component);

  function CreateMovie(props) {
    (0, _classCallCheck3.default)(this, CreateMovie);

    return (0, _possibleConstructorReturn3.default)(this, (CreateMovie.__proto__ || (0, _getPrototypeOf2.default)(CreateMovie)).call(this, props));
  }

  (0, _createClass3.default)(CreateMovie, [{
    key: 'handleClick',
    value: function handleClick(e) {
      e.preventDefault();
      var name = this.refs.name.value;
      var description = this.refs.description.value;
      this.props.mutate({
        variables: { name: name, description: description }
      }).then(function (_ref) {
        var data = _ref.data;

        console.log('data returned', data);
      }).catch(function (error) {
        console.log('there was an error sending the query', error);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', null, _react2.default.createElement('form', null, _react2.default.createElement('h3', null, 'ADD MOVIE'), _react2.default.createElement('p', null, 'Name'), _react2.default.createElement('input', { type: 'text', id: 'name', ref: 'name' }), _react2.default.createElement('p', null, 'Description'), _react2.default.createElement('input', { type: 'text', id: 'description', ref: 'description' }), _react2.default.createElement('br', null), _react2.default.createElement('button', {
        onClick: this.handleClick.bind(this)
      }, 'Add')));
    }
  }]);

  return CreateMovie;
}(_react2.default.Component);

;

var CreateMovieWithData = (0, _reactApollo.graphql)(_apollo.CreateMovieMutation)(CreateMovie);

exports.default = function () {
  return _react2.default.createElement(CreateMovieWithData, null);
};