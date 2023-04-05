import React from 'react';

// IMPORT COMPONENTS
import Filter from '../Filter/Filter.jsx';
import Cards from '../Cards/Cards.jsx';
import DetailPage from '../DetailPage/DetailPage.jsx';

// TEMP
import card from '../../assets/card.json';
import cards from '../../assets/data.json';

// MAIN CONTENT COMPONENT
function MainContent({ isDarkTheme }) {
  return (
    <main
      className={`main-content ${isDarkTheme ? 'main-content_theme_dark' : ''}`}
    >
      {/* <Filter isDarkTheme={isDarkTheme} /> */}
      {/* <Cards isDarkTheme={isDarkTheme} /> */}
      <DetailPage card={card} cards={cards} isDarkTheme={isDarkTheme} />
    </main>
  );
}

export default MainContent;
