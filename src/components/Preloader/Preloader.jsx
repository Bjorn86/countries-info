// IMPORT PACKAGES
import PropTypes from 'prop-types';

// IMPORT STYLES
import './Preloader.scss';

// PRELOADER COMPONENT
function Preloader({ isDarkTheme }) {
  return (
    <div className={`preloader ${isDarkTheme ? 'preloader_theme_dark' : ''}`} />
  );
}

export default Preloader;

Preloader.propTypes = {
  isDarkTheme: PropTypes.bool.isRequired,
};
