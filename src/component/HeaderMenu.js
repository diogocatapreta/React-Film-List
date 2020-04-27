import React from "react";

const HeaderMenu = () => {
  return (
    <nav>
      <div class="nav-wrapper indigo">
        <a href="/" class="brand-logo">
          Book Manager
        </a>
        <ul class="right">
          <li>
            <a href="/List">List</a>
          </li>
          <li>
            <a href="/create">Create</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default HeaderMenu;
