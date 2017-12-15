import React from 'react';
// import { render } from 'react-dom';
import styled from 'styled-components';

const ProfileStyles = styled.div`
`

const ProfileComponent = ({ user: { auth0UserId, name, email, id }}) => (
  <ProfileStyles>
    <h1>GraphcoolProfile</h1>
    <div>{'auth0Id: ' + auth0UserId }</div>
    <div>{'name: ' + name }</div>
    <div>{'email: ' + email }</div>
    <div>{'graphcoolId: ' + id }</div>
  </ProfileStyles>
);

export default ProfileComponent;

