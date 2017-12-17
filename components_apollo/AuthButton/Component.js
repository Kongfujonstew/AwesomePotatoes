import React from 'react';
import styled from 'styled-components';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

const AuthButtonStyles = styled.div`
  padding: 10px;
`

const AuthButtonComponent = ({
  loggedIn,
  profile,
  login,
  logout
  }) => {

  const loginButton = loggedIn ?
    <MuiThemeProvider>
      <RaisedButton label="Logout" onClick={logout} />
    </MuiThemeProvider>:
    <MuiThemeProvider>
      <RaisedButton label="Login" onClick={login} />
    </MuiThemeProvider>

  return (
    <AuthButtonStyles>
      { loginButton }
    </AuthButtonStyles>
  );
};

export default AuthButtonComponent;

