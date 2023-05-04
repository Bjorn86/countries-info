import React from 'react';
import { Link } from 'react-router-dom';

// COMPONENTS IMPORT
import Card from '../Card/Card.jsx';

// CARDS COMPONENT
function Cards({ isDarkTheme, cards, searchResult }) {
  return (
    <section className='cards' aria-label='Section with country cards'>
      {searchResult && searchResult.length === 0 ? (
        <p
          className={`cards__not-found ${
            isDarkTheme ? 'cards__not-found_theme_dark' : ''
          }`}
        >
          The search yielded no results. Please change the search query.
        </p>
      ) : (
        <ul className='cards__wrapper'>
          {searchResult
            ? searchResult.map((card, index) => (
                <li
                  className={`cards__item ${
                    isDarkTheme ? 'cards__item_theme_dark' : ''
                  }`}
                  key={index}
                >
                  <Link
                    to={card.cca3.toLowerCase()}
                    className='cards__item-link'
                  >
                    <Card card={card} isDarkTheme={isDarkTheme} />
                  </Link>
                </li>
              ))
            : cards.map((card, index) => (
                <li
                  className={`cards__item ${
                    isDarkTheme ? 'cards__item_theme_dark' : ''
                  }`}
                  key={index}
                >
                  <Link
                    to={card.cca3.toLowerCase()}
                    className='cards__item-link'
                  >
                    <Card card={card} isDarkTheme={isDarkTheme} />
                  </Link>
                </li>
              ))}
        </ul>
      )}
    </section>
  );
}

export default Cards;
