import gql from 'graphql-tag';

export const AllMoviesQuery = gql`
  query {
    allMovies {
      id
      name
      likes {
        id
      }
      description
    }
  }
`


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

