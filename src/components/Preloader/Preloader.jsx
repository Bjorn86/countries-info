// IMPORT PACKAGES
import PropTypes from 'prop-types';
import clsx from 'clsx';

// IMPORT STYLES
import './Preloader.scss';

// PRELOADER COMPONENT
function Preloader({ isDarkTheme }) {
  return (
    <div className={clsx('preloader', { preloader_theme_dark: isDarkTheme })} />
  );
}

export default Preloader;

Preloader.propTypes = {
  isDarkTheme: PropTypes.bool.isRequired,
};
