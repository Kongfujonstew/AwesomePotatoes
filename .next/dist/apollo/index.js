'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CreateLikeMutation = exports.CreateMovieMutation = exports.AddOrCreateUserMutation = exports.CreateUserMutation = exports.AllMoviesQuery = exports.GetMovieByGraphcoolIdQuery = exports.GetUserByGraphcoolIdQuery = exports.GetUserByEmailQuery = exports.client = undefined;

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _apolloClient = require('apollo-client');

var _apolloClient2 = _interopRequireDefault(_apolloClient);

var _graphqlTag = require('graphql-tag');

var _graphqlTag2 = _interopRequireDefault(_graphqlTag);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  query ($email:String!) {\n    allUsers (filter: {email:$email}) {\n      id\n    }\n  }\n'], ['\n  query ($email:String!) {\n    allUsers (filter: {email:$email}) {\n      id\n    }\n  }\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  query ($id:ID!) {\n    allUsers (filter: {id:$id}) {\n      id\n      auth0Id\n      name\n      email\n    }\n  }\n'], ['\n  query ($id:ID!) {\n    allUsers (filter: {id:$id}) {\n      id\n      auth0Id\n      name\n      email\n    }\n  }\n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n  query ($id:ID!) {\n    allMovies (filter: {id:$id}) {\n      id\n      name\n      likes {\n        id\n      }\n      description\n    }\n  }\n'], ['\n  query ($id:ID!) {\n    allMovies (filter: {id:$id}) {\n      id\n      name\n      likes {\n        id\n      }\n      description\n    }\n  }\n']),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(['\n  query {\n    allMovies {\n      id\n      name\n      likes {\n        id\n      }\n      description\n    }\n  }\n'], ['\n  query {\n    allMovies {\n      id\n      name\n      likes {\n        id\n      }\n      description\n    }\n  }\n']),
    _templateObject5 = (0, _taggedTemplateLiteral3.default)(['\n  mutation ($auth0Id:String! $email:String! $name:String!) {\n   createUser (name:$name auth0Id:$auth0Id email:$email) {\n      id\n    }\n  }\n'], ['\n  mutation ($auth0Id:String! $email:String! $name:String!) {\n   createUser (name:$name auth0Id:$auth0Id email:$email) {\n      id\n    }\n  }\n']),
    _templateObject6 = (0, _taggedTemplateLiteral3.default)(['\n  mutation (\n    $id:ID!\n    $auth0Id:String!\n    $email:String!\n    $name:String!\n    ) {\n    updateOrCreateUser (\n      update:{\n        id:$id\n        auth0Id:$auth0Id\n        email:$email\n        name:$name\n      }\n      create: {\n        auth0Id:$auth0Id\n        email:$email\n        name:$name\n      }\n    ) {\n      id\n    }\n  }\n'], ['\n  mutation (\n    $id:ID!\n    $auth0Id:String!\n    $email:String!\n    $name:String!\n    ) {\n    updateOrCreateUser (\n      update:{\n        id:$id\n        auth0Id:$auth0Id\n        email:$email\n        name:$name\n      }\n      create: {\n        auth0Id:$auth0Id\n        email:$email\n        name:$name\n      }\n    ) {\n      id\n    }\n  }\n']),
    _templateObject7 = (0, _taggedTemplateLiteral3.default)(['\n  mutation ($name:String!, $description:String!) {\n    createMovie (name:$name, description:$description) {\n      id\n      name\n    }\n  }\n'], ['\n  mutation ($name:String!, $description:String!) {\n    createMovie (name:$name, description:$description) {\n      id\n      name\n    }\n  }\n']),
    _templateObject8 = (0, _taggedTemplateLiteral3.default)(['\n  mutation ($movieId:ID $userId:ID) {\n    createLike (movieId: $movieId, userId:$userId) {\n      id\n    }\n  }\n'], ['\n  mutation ($movieId:ID $userId:ID) {\n    createLike (movieId: $movieId, userId:$userId) {\n      id\n    }\n  }\n']);

var GRAPHCOOL_URI = process.env.GRAPHCOOL_URI;

var client = exports.client = new _apolloClient2.default({
    networkInterface: (0, _apolloClient.createNetworkInterface)({ uri: GRAPHCOOL_URI })
});

var GetUserByEmailQuery = exports.GetUserByEmailQuery = (0, _graphqlTag2.default)(_templateObject);

var GetUserByGraphcoolIdQuery = exports.GetUserByGraphcoolIdQuery = (0, _graphqlTag2.default)(_templateObject2);

var GetMovieByGraphcoolIdQuery = exports.GetMovieByGraphcoolIdQuery = (0, _graphqlTag2.default)(_templateObject3);

var AllMoviesQuery = exports.AllMoviesQuery = (0, _graphqlTag2.default)(_templateObject4);

var CreateUserMutation = exports.CreateUserMutation = (0, _graphqlTag2.default)(_templateObject5);

var AddOrCreateUserMutation = exports.AddOrCreateUserMutation = (0, _graphqlTag2.default)(_templateObject6);

var CreateMovieMutation = exports.CreateMovieMutation = (0, _graphqlTag2.default)(_templateObject7);

var CreateLikeMutation = exports.CreateLikeMutation = (0, _graphqlTag2.default)(_templateObject8);