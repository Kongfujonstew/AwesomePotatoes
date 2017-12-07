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
    this.login = this.login.bind(this)
  }

  _doAuthentication(authResult){
    this.setToken(authResult.idToken);
  }

  getLock() {
    return new Auth0Lock(this.clientID, this.domain, {});
  }

  login() {
    this.lock.show()
  }

  loggedIn(){
    return !!this.getToken()
  }

  setToken(idToken){
    localStorage.setItem('id_token', idToken)
  }

  getToken(){
    return localStorage.getItem('id_token')
  }

  logout(){
    localStorage.removeItem('id_token');
  }
}

// login returns:

// {
//   "email_verified": false,
//   "email": "jonstew@gmail.com",
//   "clientID": "2Lpicu9qeFh-lVCWRVvW5Zax2Xsl0wqF",
//   "updated_at": "2017-12-06T18:16:38.333Z",
//   "name": "jonstew@gmail.com",
//   "picture": "https://s.gravatar.com/avatar/79b227f44694554cdd2007b4c3feac70?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fjo.png",
//   "user_id": "auth0|5a283267cd8c4b368ccee9f5",
//   "nickname": "jonstew",
//   "identities": [
//     {
//       "user_id": "5a283267cd8c4b368ccee9f5",
//       "provider": "auth0",
//       "connection": "Username-Password-Authentication",
//       "isSocial": false
//     }
//   ],
//   "created_at": "2017-12-06T18:09:43.996Z",
//   "sub": "auth0|5a283267cd8c4b368ccee9f5"
// }



