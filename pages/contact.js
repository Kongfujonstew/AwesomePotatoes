import React from 'react';
import { render } from 'react-dom';
import Layout from '../components/Layout';

class Contact extends React.Component {
  constructor(props) {
    super(props);
  };

  render () {
    return (
      <Layout>
        {'Contact'}
      </Layout>
    );
  }
};

export default Contact;
