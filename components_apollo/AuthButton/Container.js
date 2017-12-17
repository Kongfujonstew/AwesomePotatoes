import React from 'react';
import axios from 'axios';
import Auth from '../../auth0/auth.js';
import { login, logout } from '../../redux/actions';
const url = process.env.GRAPHCOOL_URI;

class Container extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.auth = new Auth();
    this.lock = this.auth.getLock();
    this.lock.on('authenticated', (data) => {
      this.handleAuth(data);
    });
  }

  handleAuth(data) {
    const { accessToken, idToken } = data;
    window.localStorage.setItem('auth0IdToken', idToken);
    this.lock.getUserInfo(accessToken, async (error, profile) => {
      const graphcoolId = await this.getGraphcoolUser(profile);
      this.loginLocally(profile, graphcoolId);
    });
  }

  async getGraphcoolUser(profile) {
    const graphcoolId = await this.getGraphCoolUserIdIfExists(profile.email) ||
      await this.createGraphCoolUser(profile);
    return graphcoolId;
  }

  //Todo: combine following two methods
  //either use auth0 meta_data to identify first time logins
  //or improve graphcool updateorcreate to accept auth0UserId
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
    const authProvider = { auth0: {idToken: localStorage.getItem('auth0IdToken')}};
    name = (name === email) ? nickname : name;
    const options = {variables: { name, email, authProvider }};
    return this.props.createUser(options)
      .catch(err => console.log('error update or create new graphcool user:', err))    
      .then(({ data} ) => {
        return data.createUser.id;
      });
  }

  loginLocally(profile, graphcoolId) {
    if (graphcoolId) {
      profile.graphcoolId = graphcoolId;
      this.props.loginReduxStore(profile);
    } else {
      console.log('login err no user found graphcool');
    };
  }

  login() {
    this.auth.login();
  }

  logout() {
    this.props.logoutReduxStore();
    window.localStorage.setItem('auth0IdToken', null);
  }

  render() {
    const { Component } = this.props;
    const componentProps = {
      loggedIn: this.props.loggedIn,
      profile: this.props.profile,
      login: this.login.bind(this),
      logout: this.logout.bind(this)
    };

    return Component(componentProps);
  }
};

export default Container;

