// HEADER COMPONENT
import React from 'react';
import { Link } from 'react-router-dom';

function Header({ isDarkTheme, onThemeToggleClick }) {
  return (
    <header className={`header ${isDarkTheme ? 'header_theme_dark' : ''}`}>
      <div className='header__wrapper'>
        <Link to={'/'} className='header__link'>
          <h1
            className={`header__title ${
              isDarkTheme ? 'header__title_theme_dark' : ''
            }`}
          >
            Where in the world?
          </h1>
        </Link>
        <button
          className={`header__btn ${
            isDarkTheme ? 'header__btn_theme_dark' : ''
          }`}
          type='button'
          onClick={onThemeToggleClick}
        >
          {isDarkTheme ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
    </header>
  );
}

export default Header;
