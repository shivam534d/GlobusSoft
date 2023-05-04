import React from 'react';
import { BarChart2, Calendar, File, HelpCircle, Home, Users } from 'react-feather';
import logo from '../../../assets/img/logo.webp';

const TopMenu = () => {
  return (
    <>
      <div className="menu-container">
        <div className="logo">
          <a href="/">
            <img src={logo} alt="" className="logo" />
          </a>
        </div>
        <div className="menu-items">
          <a className="nav-link" href="/">
            <Home color="#111111" size={30} />
            <p>Home</p>
          </a>
          <a className="nav-link" href="/">
            <BarChart2 color="#111111" size={30} />
            <p>Dashboard</p>
          </a>
          <a className="nav-link" href="/">
            <Users color="#111111" size={30} />
            <p>Users</p>
          </a>
          <a className="nav-link" href="/">
            <Calendar color="#111111" size={30} />
            <p>Calendar</p>
          </a>
          <a className="nav-link" href="/">
            <File color="#111111" size={30} />
            <p>Projects</p>
          </a>
          <a className="nav-link" href="/">
            <HelpCircle color="#111111" size={30} />
            <p>Help</p>
          </a>
        </div>
      </div>
    </>
  );
};

export default TopMenu;
