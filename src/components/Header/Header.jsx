import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeTheme } from '../../redux/actions/action';

import { MdWbSunny } from 'react-icons/md';
import { BsMoon } from 'react-icons/bs';

import './Header.scss';

const Header = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);

  return (
    <header className="todo__header">
      <h2 className={theme ? 'header-title' : 'header-title header-title__dark'}>Task App</h2>
      <button className="header-btn" onClick={() => dispatch(changeTheme())}>
        {theme ? (
          <BsMoon className="hedaer-btn__dark" />
        ) : (
          <MdWbSunny className="hedaer-btn__light" />
        )}
      </button>
    </header>
  );
};

export default Header;
