import axios from 'axios';
import { connect } from 'react-redux';
import Auth from '../../auth0/auth.js';
import { initStore, login, logout } from '../../redux/actions';
const url = process.env.GRAPHCOOL_URI;

class AuthButton extends React.Component {
  static getInitialProps ({ store, isServer }) {
    if (isServer) {
      return {};
    } else {
      return store.getState();
    }
  }

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.auth = new Auth();
    this.lock = this.auth.getLock();
    this.lock.on('authenticated', (data) => {
      const { accessToken } = data;
      this.lock.getUserInfo(accessToken, (error, profile) => {
        this.handleAuth(profile);
      });
    });
  }

  async handleAuth(profile) {
    const graphcoolId = await this.getGraphCoolUserIdIfExists(profile.email) ||
      await this.createGraphCoolUser(profile);

    if (graphcoolId) {
      profile.graphcoolId = graphcoolId;
      this.props.loginReduxStore(profile);
    };
  }

  getGraphCoolUserIdIfExists (email) {
    return axios.post(url, {
      headers: { 'Content-Type': 'application/json' },
      query: `query {
        allUsers (filter: {email:"${email}"}) {
          id
        }
      }
    `
    })
      .catch(err => console.log('err retrieving graphcool user: ', err))
      .then(({ data }) => {
        if (data.data.allUsers && data.data.allUsers.length) {
          return data.data.allUsers[0].id;
        } else {
          return false;
        }
      });
  }

  createGraphCoolUser(profile) {
    let { email, user_id, name, nickname } = profile;
    name = (name === email) ? nickname : name;
    const options = {variables: { name, email, auth0Id: user_id }};
    return this.props.createUser(options)
      .catch(err => console.log('error update or create new graphcool user:', err))    
      .then(({ data} ) => {
        return data.createUser.id;
      });
  }

  login() {
    this.auth.login();
  }

  logout() {
    this.props.logout();
  }

  render () {
    const { loggedIn, profile } = this.props;
    const loginButton = loggedIn ? 
      <div>
        {'Logged in with: ' + profile.name} <br/>
        <button onClick={this.logout.bind(this)}>Logout</button>
      </div>:
      <div>
        {'Please log in.'} <br/>
        <button onClick={this.login.bind(this)}>Login</button>
      </div>
      
    return (
      <div>
        { loginButton }
      </div>
    );
  }
};

const mapStateToProps = ({ loggedIn, profile }) => ({ loggedIn, profile });

const mapDispatchToProps = (dispatch) => {
  return {
    loginReduxStore: (profile) => dispatch(login(profile)),
    logout: () => dispatch(logout())
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthButton);
      
      
