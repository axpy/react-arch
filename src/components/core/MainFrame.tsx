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
        <ul style={{display: 'flex'}}>
          <li style={{marginRight: '5px'}}>
            <NavLink to="/" exact>
              Home
            </NavLink>
          </li>
          <li style={{marginRight: '5px'}}>
            <NavLink to="/about">
              About
            </NavLink>
          </li>
          <li style={{marginRight: '5px'}}>
            <NavLink to="/approved-items">
              Approved items
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