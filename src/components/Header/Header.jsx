// IMPORT PACKAGES
import { Link, Route, Routes } from 'react-router-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';

// IMPORT STYLES
import './Header.scss';

// HEADER COMPONENT
function Header({ isDarkTheme, onThemeSwitchClick }) {
  return (
    <header className={clsx('header', { header_theme_dark: isDarkTheme })}>
      <div className='header__wrapper'>
        <Routes>
          <Route
            path='/'
            element={
              <h1
                className={clsx('header__title', {
                  header__title_theme_dark: isDarkTheme,
                })}
              >
                Where in the world?
              </h1>
            }
          />
          <Route
            path=':countryCode'
            element={
              <Link to='/' className='header__link'>
                <h2
                  className={clsx('header__title', {
                    header__title_theme_dark: isDarkTheme,
                  })}
                >
                  Where in the world?
                </h2>
              </Link>
            }
          />
        </Routes>
        <button
          className={clsx('header__btn', {
            header__btn_theme_dark: isDarkTheme,
          })}
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

Header.propTypes = {
  isDarkTheme: PropTypes.bool.isRequired,
  onThemeSwitchClick: PropTypes.func.isRequired,
};
