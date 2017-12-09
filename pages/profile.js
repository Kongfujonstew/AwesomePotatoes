import React from 'react';
import { render } from 'react-dom';
import withRedux from 'next-redux-wrapper';
import pageConfig from '../redux/pageConfig';
import Layout from '../components_layout/Main';
import ProfileComponent from '../components_pages/Profile';

class Profile extends React.Component {
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
      <Layout>
        <ProfileComponent />
      </Layout>
    );
  };
};

export default withRedux(pageConfig)(Profile);
