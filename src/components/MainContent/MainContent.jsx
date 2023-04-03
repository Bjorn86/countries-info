import React from 'react';

// IMPORT COMPONENTS
import Filter from '../Filter/Filter.jsx';
import Cards from '../Cards/Cards.jsx';

// MAIN CONTENT COMPONENT
function MainContent({ isDarkTheme }) {
  return (
    <main
      className={`main-content ${isDarkTheme ? 'main-content_theme_dark' : ''}`}
    >
      <Filter isDarkTheme={isDarkTheme} />
      <Cards isDarkTheme={isDarkTheme} />
    </main>
  );
}

export default MainContent;
