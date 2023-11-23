// src/components/Layout.jsx

import { h } from "preact";
import Sidebar from "./Sidebar";
import "../styles/main.css";

const Layout = ({ children }) => {
  const toggleSidebar = () => {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("collapsed");
  };

  // Inline CSS styles for the collapsed sidebar
  const collapsedStyles = `
        /* CSS for collapsed sidebar */
        #sidebar.collapsed {
          width: 50px; /* Adjust the width as needed */
        }
    
        #sidebar.collapsed .icon {
          font-size: 1.5rem; /* Adjust the font size as needed */
          white-space: nowrap;
          overflow: hidden;
        }
    
        #sidebar.collapsed .text {
          display: none;
        }
      `;
  return (
    <div class="layout flex h-screen">
      <aside class="w-1/4 bg-gray-800 flex-shrink-0 transition-all duration-300" id="sidebar">
        <Sidebar />
      </aside>
      <section class="w-3/4 p-4 flex-grow">{children}</section>
      <button
        id="toggleSidebarButton"
        class="fixed bottom-0 right-0 p-2 m-2 bg-gray-300 hover:bg-gray-400 transition duration-300"
        onClick={toggleSidebar}
    >
        Toggle Sidebar
      </button>

      <style>{collapsedStyles}</style>
    </div>
  );
};

export default Layout;
