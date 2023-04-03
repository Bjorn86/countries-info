import React from 'react';

// CARD COMPONENT
function Card({ card, isDarkTheme }) {
  return (
    <li className={`card ${isDarkTheme ? 'card_theme_dark' : ''}`}>
      <div className='card__wrapper'>
        <img
          className={`card__country-flag ${
            isDarkTheme ? 'card__country-flag_theme_dark' : ''
          }`}
          src={card.flag}
          alt={`Flag of ${card.name}`}
        />
        <div
          className={`card__description-wrapper ${
            isDarkTheme ? 'card__description-wrapper_theme_dark' : ''
          }`}
        >
          <h2
            className={`card__country-name ${
              isDarkTheme ? 'card__country-name_theme_dark' : ''
            }`}
          >
            {card.name}
          </h2>
          <p
            className={`card__country-info ${
              isDarkTheme ? 'card__country-info_theme_dark' : ''
            }`}
          >
            <span
              className={`card__country-info-accent ${
                isDarkTheme ? 'card__country-info-accent_theme_dark' : ''
              }`}
            >
              Population:
            </span>{' '}
            {new Intl.NumberFormat().format(card.population)}
          </p>
          <p
            className={`card__country-info ${
              isDarkTheme ? 'card__country-info_theme_dark' : ''
            }`}
          >
            <span
              className={`card__country-info-accent ${
                isDarkTheme ? 'card__country-info-accent_theme_dark' : ''
              }`}
            >
              Region:
            </span>{' '}
            {card.region}
          </p>
          <p
            className={`card__country-info ${
              isDarkTheme ? 'card__country-info_theme_dark' : ''
            }`}
          >
            <span
              className={`card__country-info-accent ${
                isDarkTheme ? 'card__country-info-accent_theme_dark' : ''
              }`}
            >
              Capital:
            </span>{' '}
            {card.capital}
          </p>
        </div>
      </div>
    </li>
  );
}

export default Card;
