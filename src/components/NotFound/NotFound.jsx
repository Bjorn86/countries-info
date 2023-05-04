import React from 'react';
import { Link } from 'react-router-dom';

// NOT FOUND COMPONENT
function NotFound({ isDarkTheme }) {
  return (
    <section className='not-found'>
      <h1
        className={`not-found__title ${
          isDarkTheme ? 'not-found__title_theme_dark' : ''
        }`}
      >
        404 - Page Not Found
      </h1>
      <p
        className={`not-found__description ${
          isDarkTheme ? 'not-found__description_theme_dark' : ''
        }`}
      >
        Sorry, the page you are looking for could not be found.
      </p>
      <Link
        to={'/'}
        className={`not-found__link ${
          isDarkTheme ? 'not-found__link_theme_dark' : ''
        }`}
      >
        Go back to the main page
      </Link>
    </section>
  );
}

export default NotFound;
