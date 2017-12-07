import ApolloClient, { createNetworkInterface } from 'apollo-client';

const GRAPHCOOL_URI = process.env.GRAPHCOOL_URI;

export const client = new ApolloClient({
  networkInterface: createNetworkInterface({uri: GRAPHCOOL_URI})
});
