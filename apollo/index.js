import gql from 'graphql-tag';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';
import fetch from 'node-fetch';
global.fetch = fetch;

const GRAPHCOOL_URI = process.env.GRAPHCOOL_URI || GRAPHCOOL_URI;

const httpLink = createHttpLink({
  uri: GRAPHCOOL_URI,
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('auth0IdToken');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : null,
    }
  }
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});


//Queries and Mutations:
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
      auth0UserId
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

export const AuthCreateUserMutation = gql`
  mutation ($name:String! $email:String! $authProvider:AuthProviderSignupData!) {
   createUser (name:$name email: $email authProvider:$authProvider) {
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
