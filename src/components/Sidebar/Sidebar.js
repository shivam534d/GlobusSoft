import React from 'react';
import BottomMenu from './bottom-menu/Bottom';
import './sidebar.scss';
import TopMenu from './top-menu/TopMenu';

const Sidebar = () => {
  return (
    <>
      <nav className="sidebar">
        <TopMenu />
        <BottomMenu />
      </nav>
    </>
  );
};

export default Sidebar;
