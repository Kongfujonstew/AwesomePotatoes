import React from 'react';
import { render } from 'react-dom';
import { compose } from 'redux';
import { graphql } from 'react-apollo';
import { ApolloProvider } from 'react-apollo';
import { client, CreateUserMutation, GetUserByEmailQuery } from '../../apollo';
import AuthButton from './AuthButton';

export default compose(
  graphql(CreateUserMutation, {
    name: 'createUser'
  })
)(AuthButton);

