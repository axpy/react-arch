import React from 'react';
import { useAuth } from '../core/auth/AuthContext';

const LoginPage = () => {
  const {signIn} = useAuth()!;


  return (
    <div className="login-page">
      <h1>Login page</h1>
      <button onClick={() => signIn({password: '', rememberMe: true, userName: ''})}>login</button>
    </div>
  );
}

export default LoginPage ;