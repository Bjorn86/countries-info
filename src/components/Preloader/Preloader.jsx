import React from 'react';

// PRELOADER COMPONENT
function Preloader({ isDarkTheme }) {
  return (
    <div
      className={`preloader ${isDarkTheme ? 'preloader_theme_dark' : ''}`}
    ></div>
  );
}

export default Preloader;
