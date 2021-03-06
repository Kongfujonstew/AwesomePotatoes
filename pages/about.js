import React from 'react';
import withRedux from 'next-redux-wrapper';
import pageConfig from '../redux/pageConfig';
import Layout from '../components_layout/Main';
import AboutComponent from '../components_pages/About';

class AboutPage extends React.Component {
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
        <AboutComponent />
      </Layout>
    );
  }
}

export default withRedux(pageConfig)(AboutPage);
