'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactApollo = require('react-apollo');

var _apollo = require('../../apollo');

exports.default = (0, _reactApollo.graphql)(_apollo.AuthCreateUserMutation, {
  name: 'createUser'
});