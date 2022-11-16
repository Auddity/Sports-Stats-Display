import React from 'react';
import { Outlet } from 'react-router-dom';
import Aside from './Aside';

const Layout = () => {
  return (
    <div>
      <Aside />
      <Outlet />
    </div>
  );
};

export default Layout;
