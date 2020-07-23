import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from './auth/AuthContext';

type Props = {
  children: React.ReactNode
}

const MainFrame = ({children}: Props) => {
  const {signOut} = useAuth()!;

  return (
    <div className="main-frame">
      <header>
        <p>header</p>
        <ul>
          <li>
            <NavLink to="/" exact>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about">
              About
            </NavLink>
          </li>
        </ul>
        <button onClick={() => signOut('1')}>Loogout</button>
      </header>
      {children}
    </div>
  );
}

export default MainFrame;