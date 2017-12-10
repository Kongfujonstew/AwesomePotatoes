import auth0 from 'auth0-js';
import Auth0Lock from 'auth0-lock';

const clientID = process.env.AUTH0_CLIENT_ID;
const domain = process.env.AUTH0_DOMAIN;

export default class Auth {
  constructor() {
    this.clientID = clientID;
    this.domain = domain;
    this.lock = new Auth0Lock(clientID, domain, {});
    this.lock.on('authenticated', this._doAuthentication.bind(this));
    this.login = this.login.bind(this);
  };

  _doAuthentication(authResult){
    this.setToken(authResult.idToken);
  };

  getLock() {
    return new Auth0Lock(this.clientID, this.domain, {});
  };

  login() {
    this.lock.show();
  };

  loggedIn(){
    return !!this.getToken();
  };

  setToken(idToken){
    localStorage.setItem('id_token', idToken);
  };

  getToken(){
    return localStorage.getItem('id_token');
  };

  logout(){
    localStorage.removeItem('id_token');
  };
};

