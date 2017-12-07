import React from 'react';
import { render } from 'react-dom';
import withRedux from 'next-redux-wrapper';
import { initStore } from '../redux/store';


import { ApolloProvider } from 'react-apollo';
import { graphql, withApollo } from 'react-apollo';
import { AllMoviesQuery } from './graphqlHelpers/graphqlCalls';
import { client } from './graphqlHelpers/graphqlClient';
import Link from 'next/link'

class Movies extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      name: ''
    };
  }

  componentDidMount() {
    this.setState({name: location.href.substring(location.href.lastIndexOf('=') + 1)});
  }

  static getInitialProps ({ store, isServer, pathname, query }) {
    if (isServer) return {};
    else {
      return store.getState();
    }
  }

  render () {
    return (
      <ApolloProvider client={client}>
        <div id="view">
          Hello from Movies {this.props}
        </div>
      </ApolloProvider>
    );
  }
};


export default graphql(AllMoviesQuery, {
  // options: (props) => ({ variables: { name: props.name } })
})(Movies);


