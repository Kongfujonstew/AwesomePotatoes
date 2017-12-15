import React from 'react';
import { render } from 'react-dom';
import { graphql } from 'react-apollo';
import { GetUserByGraphcoolIdQuery } from '../../apollo';
import ProfileComponent from './ProfileComponent';

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
    const user = this.props.data.allUsers[0];
    return (
      <ProfileComponent 
        user={user}
      />
    );
  }
};

const DataComponent = graphql(GetUserByGraphcoolIdQuery, {
  options: ({ graphcoolId }) => ({ variables: { id: graphcoolId || 'undefined' }})
})(GraphcoolProfile);

export default (props) => <DataComponent graphcoolId={props.graphcoolId}/>

