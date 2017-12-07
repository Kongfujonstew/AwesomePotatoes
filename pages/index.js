import React from 'react';
import { render } from 'react-dom';
import withRedux from 'next-redux-wrapper';
import pageConfig from '../redux/pageConfig';
import Layout from '../components/Layout';
import MoviesWithData from '../components_apollo/MoviesWithData';

class Index extends React.Component {
  constructor(props) {
    super(props);
  };

  static getInitialProps ({ store, isServer, pathname, query }) {
    if (isServer) {
      return {}
    } else {
      return store.getState();
    }
  };

  render () {
    console.log('this.state: ', this.state);
    console.log('this.props: ', this.props);
    return (
      <Layout>
        Index
        <MoviesWithData />
      </Layout>
    );
  };
};


export default withRedux(pageConfig)(Index);
