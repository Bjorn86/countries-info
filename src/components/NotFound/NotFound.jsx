// IMPORT PACKAGES
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';

// IMPORT STYLES
import './NotFound.scss';

// NOT FOUND COMPONENT
function NotFound({ isDarkTheme }) {
  return (
    <section className='not-found'>
      <h1
        className={clsx('not-found__title', {
          'not-found__title_theme_dark': isDarkTheme,
        })}
      >
        404 - Page Not Found
      </h1>
      <p
        className={clsx('not-found__description', {
          'not-found__description_theme_dark': isDarkTheme,
        })}
      >
        Sorry, the page you are looking for could not be found.
      </p>
      <Link
        to='/'
        className={clsx('not-found__link', {
          'not-found__link_theme_dark': isDarkTheme,
        })}
      >
        Go back to the main page
      </Link>
    </section>
  );
}

export default NotFound;

NotFound.propTypes = {
  isDarkTheme: PropTypes.bool.isRequired,
};
