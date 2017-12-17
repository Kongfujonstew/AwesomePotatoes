import React from 'react';
import withRedux from 'next-redux-wrapper';
import pageConfig from '../redux/pageConfig';
import Layout from '../components_layout/Main';
import HomeComponent from '../components_pages/Home';

class HomePage extends React.Component {
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
        <HomeComponent />
      </Layout>
    );
  }
}

export default withRedux(pageConfig)(HomePage);
