import styled from 'styled-components';
import { connect } from 'react-redux';
import UserProfileWithData from '../../components_apollo/UserProfileWithData'

const Profile = styled.div`

`

class ProfileComponent extends React.Component {
  static getInitialProps ({ store, isServer }) {
    if (isServer) {
      return {}
    } else {
      return store.getState();
    };
  }

  constructor(props) {
    super(props);
  }

  render () {
    const { profile } = this.props;
    return (
      <Profile id="profile">
        { this.props.loggedIn ?
          <div>
            <div>
              <h1>ReduxProfile</h1>
              <div>{'user_id (auth0): ' + profile.user_id}</div>
              <div>{'clientID:' + profile.clientID }</div>
              <div>{'created_at' + profile.created_at}</div>
              <div>{'email: ' + profile.email}</div>
              <div>{'email_verified: ' + profile.email_verified}</div>
              <div>{'graphcoolId: ' + profile.graphcoolId }</div>
              <div>{'name: ' + profile.name }</div>
              <div>{'nickname: ' + profile.nickname}</div>
            </div>
            <UserProfileWithData
              graphcoolId={this.props.profile.graphcoolId}
            />
          </div>:
          'Please log in to view profile'
        }
      </Profile>
    );
  }
};


const mapStateToProps = ({ loggedIn, profile }) => ({ loggedIn, profile });

export default connect(
  mapStateToProps,
  null
)(ProfileComponent);
      