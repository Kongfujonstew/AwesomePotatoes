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

var _reactRedux = require('react-redux');

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _actions = require('../../redux/actions');

var _styledCard = require('./styledCard');

var _styledCard2 = _interopRequireDefault(_styledCard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MovieCard = function (_React$Component) {
  (0, _inherits3.default)(MovieCard, _React$Component);

  (0, _createClass3.default)(MovieCard, null, [{
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

  function MovieCard(props) {
    (0, _classCallCheck3.default)(this, MovieCard);

    return (0, _possibleConstructorReturn3.default)(this, (MovieCard.__proto__ || (0, _getPrototypeOf2.default)(MovieCard)).call(this, props));
  }

  (0, _createClass3.default)(MovieCard, [{
    key: 'handleClick',
    value: function handleClick() {
      var id = this.props.movie.id;
      this.props.selectMovie(this.props.movie.id);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props$movie = this.props.movie,
          name = _props$movie.name,
          description = _props$movie.description,
          likes = _props$movie.likes,
          id = _props$movie.id;

      var likesNumber = likes.length;
      return _react2.default.createElement(_styledCard2.default, null, _react2.default.createElement('div', { className: 'card' }, _react2.default.createElement(_link2.default, { href: '/movie?id=' + id }, _react2.default.createElement('h3', { className: 'hover',
        onClick: this.handleClick.bind(this)
      }, name ? name : 'No title')), _react2.default.createElement('p', null, 'Likes: ', likesNumber), _react2.default.createElement('p', null, 'Summary: ', description)));
    }
  }]);

  return MovieCard;
}(_react2.default.Component);

;

var mapStateToProps = function mapStateToProps(_ref2) {
  var selectedMovieId = _ref2.selectedMovieId;
  return { selectedMovieId: selectedMovieId };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    selectMovie: function selectMovie(selectedMovieId) {
      return dispatch((0, _actions.selectMovie)(selectedMovieId));
    }
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(MovieCard);