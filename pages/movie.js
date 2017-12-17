import React from 'react';
import withRedux from 'next-redux-wrapper';
import pageConfig from '../redux/pageConfig';
import Layout from '../components_layout/Main';
import MovieComponent from '../components_pages/Movie';

class MoviePage extends React.Component {
  constructor(props) {
    super(props);
  }

  static getInitialProps ({ store, isServer/*, pathname, query*/}) {
    if (isServer) {
      return {};
    } else {
      return store.getState();
    }
  }

  render () {
    return (
      <Layout>
        <MovieComponent />
      </Layout>
    );
  }
}

export default withRedux(pageConfig)(MoviePage);
