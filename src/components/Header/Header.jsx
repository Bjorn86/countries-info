// HEADER COMPONENT
import React from 'react';

function Header({ isDarkTheme, onThemeSwitchClick }) {
  return (
    <header className={`header ${isDarkTheme ? 'header_theme_dark' : ''}`}>
      <div className='header__wrapper'>
        <h1
          className={`header__title ${
            isDarkTheme ? 'header__title_theme_dark' : ''
          }`}
        >
          Where in the world?
        </h1>
        <button
          className={`header__btn ${
            isDarkTheme ? 'header__btn_theme_dark' : ''
          }`}
          type='button'
          onClick={onThemeSwitchClick}
        >
          {isDarkTheme ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
    </header>
  );
}

export default Header;
