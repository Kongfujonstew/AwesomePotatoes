import { graphql } from 'react-apollo';
import { AuthCreateUserMutation } from '../../apollo';

export default  graphql(AuthCreateUserMutation, {
  name: 'createUser'
});

