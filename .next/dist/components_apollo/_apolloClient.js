'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.client = undefined;

var _apolloClient = require('apollo-client');

var _apolloClient2 = _interopRequireDefault(_apolloClient);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var client = exports.client = new _apolloClient2.default({
  networkInterface: (0, _apolloClient.createNetworkInterface)({ uri: 'https://api.graph.cool/simple/v1/cjau6qk9s0tbe01656fusnle5' })
});