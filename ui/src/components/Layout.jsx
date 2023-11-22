// src/components/Layout.jsx

import { h } from 'preact';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
  return (
    <div class="layout">
      <div class="sidebar">
        <Sidebar />
      </div>
      <div class="content">
        {children}
      </div>
    </div>
  );
};

export default Layout;
