import React from 'react';
import styled from 'styled-components';
import LoginFormWindow from './LoginFormWindow';

const LoginPageStyled = styled.div`
  width: 100%;
  height: 100%;
  background-color: var(--c-main);
  display: flex;
  justify-content: center;
  align-items: center;
`

const LoginPage = () => {

  return (
    <LoginPageStyled className="login-page">
      <LoginFormWindow />
    </LoginPageStyled>
  );
}

export default LoginPage ;