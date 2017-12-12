import React from 'react';
import { render } from 'react-dom';
import { graphql } from 'react-apollo';
import { GetUserByGraphcoolIdQuery } from '../../apollo';

class GraphcoolProfile extends React.Component {
  static getInitialProps ({ store, isServer }) {
    if (isServer) {
      return {};
    } else {
      return store.getState();
    };
  }

  constructor(props) {
    super(props);
  }

  componentDidMount () {
    this.props.data.refetch();
  }

  render () {
    while (this.props.data.loading || !this.props.data.allUsers) {
      return 'loading';
    };
    const { auth0UserId, name, email, id } = this.props.data.allUsers[0];
    return (
      <div>
        <h1>GraphcoolProfile</h1>
        <div>{'auth0Id: ' + auth0UserId }</div>
        <div>{'name: ' + name }</div>
        <div>{'email: ' + email }</div>
        <div>{'graphcoolId: ' + id }</div>
      </div>
    );
  }
};

const DataComponent = graphql(GetUserByGraphcoolIdQuery, {
  options: ({ graphcoolId }) => ({ variables: { id: graphcoolId || 'undefined' }})
})(GraphcoolProfile);

export default (props) => <DataComponent graphcoolId={props.graphcoolId}/>

