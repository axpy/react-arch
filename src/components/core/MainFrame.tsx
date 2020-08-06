import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from './auth/AuthContext';
import Profile from '../Profile';

type Props = {
  children: React.ReactNode
}

const MainFrame = ({children}: Props) => {
  const {signOut} = useAuth()!;

  return (
    <div className="main-frame">
      <header style={{display: 'flex', justifyContent: 'space-between'}}>
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
          <li style={{marginRight: '5px'}}>
            <NavLink to="/edit-profile">
              Edit profile
            </NavLink>
          </li>
        </ul>
        <span style={{display: 'flex'}}>
          <button onClick={() => signOut('1')}>Loogout</button>
          <Profile />
        </span>
      </header>
      {children}
    </div>
  );
}

export default MainFrame;