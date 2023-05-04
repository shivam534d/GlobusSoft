import React from 'react';
import { Settings, User } from 'react-feather';

const TopMenu = () => {
  return (
    <>
      <div className="bottom-menu">
        <div className="menu-items">
          <a className="nav-link" href="/">
            <span className="icon">
              <User color="#111111" size={30} />
            </span>
            <p>Account</p>
          </a>
          <a className="nav-link" href="/">
            <span className="icon">
              <Settings color="#111111" size={30} />
            </span>
            <p>Settings</p>
          </a>
        </div>
      </div>
    </>
  );
};

export default TopMenu;
