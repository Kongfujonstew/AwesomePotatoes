import React from 'react';
import { render } from 'react-dom';
import Layout from '../components/Layout';

class About extends React.Component {
  constructor(props) {
    super(props);
  };

  render () {
    return (
      <Layout>
        {'About'}
      </Layout>
    );
  }
};

export default About;
