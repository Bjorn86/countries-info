// IMPORT PACKAGES
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import clsx from 'clsx';

// IMPORT STYLES
import './Cards.scss';

// COMPONENTS IMPORT
import Card from '../Card/Card';

// CARDS COMPONENT
function Cards({ isDarkTheme, cards, searchResult }) {
  return (
    <section className='cards' aria-label='Section with country cards'>
      {searchResult && searchResult.length === 0 ? (
        <p
          className={clsx('cards__not-found', {
            'cards__not-found_theme_dark': isDarkTheme,
          })}
        >
          The search yielded no results. Please change the search query.
        </p>
      ) : (
        <ul className='cards__wrapper'>
          {searchResult
            ? searchResult.map((card) => (
                <li
                  className={clsx('cards__item', {
                    cards__item_theme_dark: isDarkTheme,
                  })}
                  key={uuidv4()}
                >
                  <Link
                    to={card.cca3.toLowerCase()}
                    className='cards__item-link'
                  >
                    <Card card={card} isDarkTheme={isDarkTheme} />
                  </Link>
                </li>
              ))
            : cards.map((card) => (
                <li
                  className={clsx('cards__item', {
                    cards__item_theme_dark: isDarkTheme,
                  })}
                  key={uuidv4()}
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

Cards.propTypes = {
  isDarkTheme: PropTypes.bool.isRequired,
  cards: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  searchResult: PropTypes.arrayOf(PropTypes.shape({})),
};

Cards.defaultProps = {
  searchResult: null,
};
