import React from 'react';
import styled from 'styled-components';

const ReduxProfileStyles = styled.div`
`;

export default ({ profile }) => (
  <ReduxProfileStyles>
    <h1>ReduxProfile</h1>
    <div>{'user_id (auth0): ' + profile.user_id}</div>
    <div>{'clientID:' + profile.clientID }</div>
    <div>{'created_at' + profile.created_at}</div>
    <div>{'email: ' + profile.email}</div>
    <div>{'email_verified: ' + profile.email_verified}</div>
    <div>{'graphcoolId: ' + profile.graphcoolId }</div>
    <div>{'name: ' + profile.name }</div>
    <div>{'nickname: ' + profile.nickname}</div>
  </ReduxProfileStyles>
);

