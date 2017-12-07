import { connect } from 'react-redux';
import Auth from '../auth0/auth.js';
import { initStore, login, logout } from '../redux/actions';

class AuthButton extends React.Component {
  static getInitialProps ({ store, isServer }) {
    if (isServer) {
      return {}
    } else {
      return store.getState();
    }
  }

  constructor(props) {
    super(props);
  };

  componentDidMount() {
    this.auth = new Auth();
    this.lock = this.auth.getLock();
    this.lock.on('authenticated', (data) => {
      const { accessToken } = data;
      console.log('accessToken ', accessToken);
      this.lock.getUserInfo(accessToken, (error, profile) => {
        if (!error) {
          console.log('profile: ', profile);
        }
      });
      this.props.login();

      //put the router here and move to home???

    });
  };

  login() {
    this.auth.login();
  }

  logout() {
    this.props.logout();
  }

  render () {
    const { loggedIn } = this.props;
    console.log('sanity check from AB');
    const loginButton = loggedIn ? 
      <button onClick={this.logout.bind(this)}>Logout</button>: 
      <button onClick={this.login.bind(this)}>Login</button>
      
    return (
      <div>
        { loginButton }
      </div>
    );
  }
};

const mapStateToProps = ({ loggedIn }) => ({ loggedIn });

const mapDispatchToProps = (dispatch) => {
  return {
    login: () => dispatch(login()),
    logout: () => dispatch(logout())
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthButton);
      
      
