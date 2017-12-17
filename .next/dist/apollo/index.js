'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateMovieMutation = exports.AuthCreateUserMutation = exports.CreateUserMutation = exports.AllMoviesQuery = exports.GetMovieByGraphcoolIdQuery = exports.GetUserByGraphcoolIdQuery = exports.GetUserByEmailQuery = exports.client = undefined;

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _graphqlTag = require('graphql-tag');

var _graphqlTag2 = _interopRequireDefault(_graphqlTag);

var _apolloClient = require('apollo-client');

var _apolloLinkHttp = require('apollo-link-http');

var _apolloLinkContext = require('apollo-link-context');

var _apolloCacheInmemory = require('apollo-cache-inmemory');

var _nodeFetch = require('node-fetch');

var _nodeFetch2 = _interopRequireDefault(_nodeFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  query ($email:String!) {\n    allUsers (filter: {email:$email}) {\n      id\n    }\n  }\n'], ['\n  query ($email:String!) {\n    allUsers (filter: {email:$email}) {\n      id\n    }\n  }\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  query ($id:ID!) {\n    allUsers (filter: {id:$id}) {\n      id\n      auth0UserId\n      name\n      email\n    }\n  }\n'], ['\n  query ($id:ID!) {\n    allUsers (filter: {id:$id}) {\n      id\n      auth0UserId\n      name\n      email\n    }\n  }\n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n  query ($id:ID!) {\n    allMovies (filter: {id:$id}) {\n      id\n      name\n      likes {\n        id\n      }\n      description\n    }\n  }\n'], ['\n  query ($id:ID!) {\n    allMovies (filter: {id:$id}) {\n      id\n      name\n      likes {\n        id\n      }\n      description\n    }\n  }\n']),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(['\n  query {\n    allMovies {\n      id\n      name\n      likes {\n        id\n      }\n      description\n    }\n  }\n'], ['\n  query {\n    allMovies {\n      id\n      name\n      likes {\n        id\n      }\n      description\n    }\n  }\n']),
    _templateObject5 = (0, _taggedTemplateLiteral3.default)(['\n  mutation ($auth0Id:String! $email:String! $name:String!) {\n   createUser (name:$name auth0Id:$auth0Id email:$email) {\n      id\n    }\n  }\n'], ['\n  mutation ($auth0Id:String! $email:String! $name:String!) {\n   createUser (name:$name auth0Id:$auth0Id email:$email) {\n      id\n    }\n  }\n']),
    _templateObject6 = (0, _taggedTemplateLiteral3.default)(['\n  mutation ($name:String! $email:String! $authProvider:AuthProviderSignupData!) {\n   createUser (name:$name email: $email authProvider:$authProvider) {\n      id\n    }\n  }\n'], ['\n  mutation ($name:String! $email:String! $authProvider:AuthProviderSignupData!) {\n   createUser (name:$name email: $email authProvider:$authProvider) {\n      id\n    }\n  }\n']),
    _templateObject7 = (0, _taggedTemplateLiteral3.default)(['\n  mutation ($name:String!, $description:String!) {\n    createMovie (name:$name, description:$description) {\n      id\n      name\n    }\n  }\n'], ['\n  mutation ($name:String!, $description:String!) {\n    createMovie (name:$name, description:$description) {\n      id\n      name\n    }\n  }\n']);

/*global process:true*/

global.fetch = _nodeFetch2.default;

var GRAPHCOOL_URI = process.env.GRAPHCOOL_URI || GRAPHCOOL_URI;

var httpLink = (0, _apolloLinkHttp.createHttpLink)({
  uri: GRAPHCOOL_URI
});

var authLink = (0, _apolloLinkContext.setContext)(function (_, _ref) {
  var headers = _ref.headers;

  var token = localStorage.getItem('auth0IdToken');
  return {
    headers: (0, _extends3.default)({}, headers, {
      authorization: token ? 'Bearer ' + token : null
    })
  };
});

var client = exports.client = new _apolloClient.ApolloClient({
  link: authLink.concat(httpLink),
  cache: new _apolloCacheInmemory.InMemoryCache()
});

//Queries and Mutations:
var GetUserByEmailQuery = exports.GetUserByEmailQuery = (0, _graphqlTag2.default)(_templateObject);

var GetUserByGraphcoolIdQuery = exports.GetUserByGraphcoolIdQuery = (0, _graphqlTag2.default)(_templateObject2);

var GetMovieByGraphcoolIdQuery = exports.GetMovieByGraphcoolIdQuery = (0, _graphqlTag2.default)(_templateObject3);

var AllMoviesQuery = exports.AllMoviesQuery = (0, _graphqlTag2.default)(_templateObject4);

var CreateUserMutation = exports.CreateUserMutation = (0, _graphqlTag2.default)(_templateObject5);

var AuthCreateUserMutation = exports.AuthCreateUserMutation = (0, _graphqlTag2.default)(_templateObject6);

var CreateMovieMutation = exports.CreateMovieMutation = (0, _graphqlTag2.default)(_templateObject7);