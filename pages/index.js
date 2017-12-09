import React from 'react';
import { render } from 'react-dom';
import withRedux from 'next-redux-wrapper';
import pageConfig from '../redux/pageConfig';
import Layout from '../components_layout/Main';
import IndexComponent from '../components_pages/Index';

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
    return (
      <div id="container">
        <Layout>
          <IndexComponent />
        </Layout>
      </div>
    );
  };
};

export default withRedux(pageConfig)(Index);
