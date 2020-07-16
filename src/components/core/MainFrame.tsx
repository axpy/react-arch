import React from 'react';
import { NavLink } from 'react-router-dom';

type Props = {
  children: React.ReactNode
}

const MainFrame = ({children}: Props) => {

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
          <li>
            <NavLink to="/login">
              About
            </NavLink>
          </li>
        </ul>
      </header>
      {children}
    </div>
  );
}

export default MainFrame;