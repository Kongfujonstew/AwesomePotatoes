import { ApolloProvider } from 'react-apollo';
import { client } from '../../apollo';
import Component from './Component';

export default ({ children }) => (
  <ApolloProvider client={client}>
    <Component>
      { children }
    </Component>
  </ApolloProvider>
);


