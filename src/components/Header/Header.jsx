import React, { useState } from 'react';
import { MdWbSunny } from 'react-icons/md';
import { FaRegMoon } from 'react-icons/fa';

import './Header.scss';

const Header = () => {
  const [theme, setTheme] = useState(false);

  return (
    <header className="todo__header">
      <h2 className="header-title">Task App</h2>
      <button className="header-btn" onClick={() => setTheme(!theme)}>
        {theme ? (
          <FaRegMoon className="hedaer-btn__dark" />
        ) : (
          <MdWbSunny className="hedaer-btn__light" />
        )}
      </button>
    </header>
  );
};

export default Header;
