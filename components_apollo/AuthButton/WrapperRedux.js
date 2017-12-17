import { connect } from 'react-redux';
import { login, logout } from '../../redux/actions';

const mapStateToProps = ({ user: { loggedIn, profile } }) => ({ loggedIn, profile });

const mapDispatchToProps = (dispatch) => {
  return {
    loginReduxStore: (profile) => dispatch(login(profile)),
    logoutReduxStore: () => dispatch(logout())
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
);
