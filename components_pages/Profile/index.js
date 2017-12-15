import styled from 'styled-components';
import { connect } from 'react-redux';
import UserProfileWithData from '../../components_apollo/UserProfileWithData'
import ReduxProfile from '../../components/ReduxProfile';

const ProfileStyled = styled.div`
`;

const ProfileComponent = ({ loggedIn, profile}) => (
  <ProfileStyled>
    { loggedIn ?
      <div>
        <ReduxProfile
          profile={profile}
        />
        <UserProfileWithData
          graphcoolId={profile.graphcoolId}
        />
      </div>:
      'Please log in to view profile'
    }
  </ProfileStyled>
);

const mapStateToProps = ({ user: { loggedIn, profile }}) => ({ loggedIn, profile });

export default connect(
  mapStateToProps,
  null
)(ProfileComponent);
      