import React from 'react';
import { compose } from 'recompose';
import apollo from './WrapperApollo';
import redux from './WrapperRedux';
import Container from './Container';
import Component from './Component';

export default compose(
  apollo,
  redux
)(props => <Container
  {...props}
  Component={Component}
  />
);

