// src/components/Sidebar.jsx

import { h } from "preact";

const Sidebar = () => {
  return (
    <div class="p-5 text-white">
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
