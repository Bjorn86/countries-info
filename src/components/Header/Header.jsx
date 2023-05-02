// HEADER COMPONENT
import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';

function Header({ isDarkTheme, onThemeSwitchClick }) {
  return (
    <header className={`header ${isDarkTheme ? 'header_theme_dark' : ''}`}>
      <div className='header__wrapper'>
        <Routes>
          <Route
            path='/'
            element={
              <h1
                className={`header__title ${
                  isDarkTheme ? 'header__title_theme_dark' : ''
                }`}
              >
                Where in the world?
              </h1>
            }
          />
          <Route
            path=':countryCode'
            element={
              <Link to={'/'} className='header__link'>
                <h2
                  className={`header__title ${
                    isDarkTheme ? 'header__title_theme_dark' : ''
                  }`}
                >
                  Where in the world?
                </h2>
              </Link>
            }
          />
        </Routes>
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
