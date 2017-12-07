'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AllMoviesQuery = undefined;

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _graphqlTag = require('graphql-tag');

var _graphqlTag2 = _interopRequireDefault(_graphqlTag);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  query {\n    allMovies {\n      id\n      name\n      likes {\n        id\n      }\n      description\n    }\n  }\n'], ['\n  query {\n    allMovies {\n      id\n      name\n      likes {\n        id\n      }\n      description\n    }\n  }\n']);

var AllMoviesQuery = exports.AllMoviesQuery = (0, _graphqlTag2.default)(_templateObject);

// export const allPeople = gql`query {
//       allPeople {
//         name
//         surname
//         location
//       }
//     }`


// export const person = gql`query {
//       person {
//         name
//         surname
//         location
//       }
//     }`

// export const elasticPeople = gql`query {
//       elasticPeople (searchString:"${searchString}") {
//         name
//         surname
//         location
//       }
//     }`

// export const findByName = gql`query {
//       findByName (name:"${name}") {
//         name
//         surname
//         location
//       }
//     }`


// export const findBySurname = gql`query {
//       findBySurname (surname:"${surname}") {
//         name
//         surname
//         location
//       }
//     }`

// export const findByLocation =  gql`query {
//       findByLocation (location:"${location}") {
//         name
//         surname
//         location
//       }
//     }`


// export const count = gql`query { count }`


// export const addPerson = gql`mutation {
//       addPerson(name:"${name}", surname:"${surname}", location:"${location}") {
//         name
//       }
//     }`