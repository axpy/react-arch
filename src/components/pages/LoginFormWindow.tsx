import React from 'react';
import { useAuth } from '../core/auth/AuthContext';
import styled from 'styled-components';
import { Button } from '../ui';

const LoginFormWindowStyled = styled.div`
  width: 34.4rem;
  height: 34.4rem;
  border-radius: var(--bdrs-main);
  background-color: var(--c-white);
  display: flex;
  flex-direction: column; 

  & .logo {
    width: 12.8rem;
    height: auto;
  }
`

const LoginFormWindow = () => {
  const {signIn} = useAuth()!;
  const signInData = {password: '123', userName: 'asd', rememberMe: true};

  return (
    <LoginFormWindowStyled>
      <img className="logo" src="/images/logo.jpg"/>
      <p>Log In</p>
      <input type="text"/>
      <input type="password"/>
      <Button onClick={() => signIn(signInData)}>Login</Button>
    </LoginFormWindowStyled>
  )
}

export default LoginFormWindow;