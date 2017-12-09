import ApolloClient, { createNetworkInterface } from 'apollo-client';
import gql from 'graphql-tag';
const GRAPHCOOL_URI = process.env.GRAPHCOOL_URI;

export const client = new ApolloClient({
  networkInterface: createNetworkInterface({uri: GRAPHCOOL_URI})
});

export const GetUserByEmailQuery = gql`
  query ($email:String!) {
    allUsers (filter: {email:$email}) {
      id
    }
  }
`

export const GetUserByGraphcoolIdQuery = gql`
  query ($id:ID!) {
    allUsers (filter: {id:$id}) {
      id
      auth0Id
      name
      email
    }
  }
`

export const GetMovieByGraphcoolIdQuery = gql`
  query ($id:ID!) {
    allMovies (filter: {id:$id}) {
      id
      name
      likes {
        id
      }
      description
    }
  }
`

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

export const CreateUserMutation = gql`
  mutation ($auth0Id:String! $email:String! $name:String!) {
   createUser (name:$name auth0Id:$auth0Id email:$email) {
      id
    }
  }
`

export const AddOrCreateUserMutation = gql`
  mutation (
    $id:ID!
    $auth0Id:String!
    $email:String!
    $name:String!
    ) {
    updateOrCreateUser (
      update:{
        id:$id
        auth0Id:$auth0Id
        email:$email
        name:$name
      }
      create: {
        auth0Id:$auth0Id
        email:$email
        name:$name
      }
    ) {
      id
    }
  }
`

export const CreateMovieMutation = gql`
  mutation ($name:String!, $description:String!) {
    createMovie (name:$name, description:$description) {
      id
      name
    }
  }
`

export const CreateLikeMutation = gql`
  mutation ($movieId:ID $userId:ID) {
    createLike (movieId: $movieId, userId:$userId) {
      id
    }
  }
`