'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.client = undefined;

var _apolloClient = require('apollo-client');

var _apolloClient2 = _interopRequireDefault(_apolloClient);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GRAPHCOOL_URI = process.env.GRAPHCOOL_URI;

var client = exports.client = new _apolloClient2.default({
  networkInterface: (0, _apolloClient.createNetworkInterface)({ uri: GRAPHCOOL_URI })
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNfYXBvbGxvL19hcG9sbG9DbGllbnQuanMiXSwibmFtZXMiOlsiQXBvbGxvQ2xpZW50IiwiY3JlYXRlTmV0d29ya0ludGVyZmFjZSIsIkdSQVBIQ09PTF9VUkkiLCJwcm9jZXNzIiwiZW52IiwiY2xpZW50IiwibmV0d29ya0ludGVyZmFjZSIsInVyaSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLEFBQU8sQUFBZ0I7Ozs7OztBQUV2QixJQUFNLGdCQUFnQixRQUFBLEFBQVEsSUFBOUIsQUFBa0MsQUFFbEM7O0FBQU8sSUFBTTtvQkFDTywwQ0FBdUIsRUFBQyxLQURyQyxBQUFlLEFBQWlCLEFBQ25CLEFBQXVCLEFBQU07QUFEVixBQUNyQyxDQURvQixBQUFJIiwiZmlsZSI6Il9hcG9sbG9DbGllbnQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2ptaWNoYWVsc3Rld2FydC9Db2RlL2F3ZXNvbWVQb3RhdG9lcyJ9