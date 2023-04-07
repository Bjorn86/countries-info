import React, { useCallback } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

// DETAIL PAGE COMPONENT
function DetailPage({ card, cards, isDarkTheme }) {
  // HOOKS
  const { countryCode } = useParams();
  const navigate = useNavigate();

  // SET CARD
  const setCard = useCallback(
    (countryCode) => {
      for (let currentCard of cards) {
        if (countryCode.toUpperCase() === currentCard.cca3) {
          return currentCard;
        }
      }
    },
    [cards],
  );
  card = setCard(countryCode);

  // HANDLE LANGUAGES RENDER
  const handleLanguages = useCallback((card) => {
    return Object.values(card.languages).join(', ');
  }, []);

  // HANDLE CURRENCIES RENDER
  const handleCurrencies = useCallback((card) => {
    let currenciesArr = [];
    for (let key in card.currencies) {
      let currency = card.currencies[key];
      currenciesArr.push(currency.name);
    }
    return currenciesArr.join(', ');
  }, []);

  // HANDLE BORDER COUNTRIES LINKS RENDER
  const handleBorderCountriesButtons = useCallback(
    (card, cards) => {
      let borders = card.borders;
      let nameCountries = [];
      for (let inputCode of borders) {
        for (let cardItem of cards) {
          if (inputCode === cardItem.cca3) {
            nameCountries.push(cardItem.name.common);
          }
        }
      }
      return nameCountries.length !== 0 ? (
        nameCountries.map((country, index) => (
          <Link
            to={`/${borders[index].toLowerCase()}`}
            key={index}
            className={`detail-page__link-country ${
              isDarkTheme ? 'detail-page__link-country_theme_dark' : ''
            }`}
          >
            {country}
          </Link>
        ))
      ) : (
        <p
          className={`detail-page__description-info detail-page__description-info_position_bottom ${
            isDarkTheme ? 'detail-page__description-info_theme_dark' : ''
          }`}
        >
          there are no land borders
        </p>
      );
    },
    [isDarkTheme],
  );

  return (
    <section className='detail-page'>
      <button
        className={`detail-page__btn-back ${
          isDarkTheme ? 'detail-page__btn-back_theme_dark' : ''
        }`}
        type='button'
        onClick={() => navigate(-1)}
      >
        Back
      </button>
      <article className='detail-page__wrapper'>
        <img
          className={`detail-page__flag ${
            isDarkTheme ? 'detail-page__flag_theme_dark' : ''
          }`}
          src={card.flags.svg}
          alt={card.flags.alt || `The flag of ${card.name.common}`}
        />
        <div className='detail-page__description-wrapper'>
          <h2
            className={`detail-page__country-name ${
              isDarkTheme ? 'detail-page__country-name_theme_dark' : ''
            }`}
          >
            {card.name.common}
          </h2>
          <div className='detail-page__list-wrapper'>
            <ul className='detail-page__description-list'>
              <li
                className={`detail-page__description-info ${
                  isDarkTheme ? 'detail-page__description-info_theme_dark' : ''
                }`}
              >
                <span
                  className={`detail-page__description-info-accent ${
                    isDarkTheme
                      ? 'detail-page__description-info-accent_theme_dark'
                      : ''
                  }`}
                >
                  Native Name:
                </span>{' '}
                {Object.values(card.name.nativeName)[0].common}
              </li>
              <li
                className={`detail-page__description-info ${
                  isDarkTheme ? 'detail-page__description-info_theme_dark' : ''
                }`}
              >
                <span
                  className={`detail-page__description-info-accent ${
                    isDarkTheme
                      ? 'detail-page__description-info-accent_theme_dark'
                      : ''
                  }`}
                >
                  Population:
                </span>{' '}
                {new Intl.NumberFormat().format(card.population)}
              </li>
              <li
                className={`detail-page__description-info ${
                  isDarkTheme ? 'detail-page__description-info_theme_dark' : ''
                }`}
              >
                <span
                  className={`detail-page__description-info-accent ${
                    isDarkTheme
                      ? 'detail-page__description-info-accent_theme_dark'
                      : ''
                  }`}
                >
                  Region:
                </span>{' '}
                {card.region}
              </li>
              <li
                className={`detail-page__description-info ${
                  isDarkTheme ? 'detail-page__description-info_theme_dark' : ''
                }`}
              >
                <span
                  className={`detail-page__description-info-accent ${
                    isDarkTheme
                      ? 'detail-page__description-info-accent_theme_dark'
                      : ''
                  }`}
                >
                  Sub Region:
                </span>{' '}
                {card.subregion}
              </li>
              <li
                className={`detail-page__description-info ${
                  isDarkTheme ? 'detail-page__description-info_theme_dark' : ''
                }`}
              >
                <span
                  className={`detail-page__description-info-accent ${
                    isDarkTheme
                      ? 'detail-page__description-info-accent_theme_dark'
                      : ''
                  }`}
                >
                  Capital:
                </span>{' '}
                {card.capital.join(', ') || 'there is no capital'}
              </li>
            </ul>
            <ul className='detail-page__description-list'>
              <li
                className={`detail-page__description-info ${
                  isDarkTheme ? 'detail-page__description-info_theme_dark' : ''
                }`}
              >
                <span
                  className={`detail-page__description-info-accent ${
                    isDarkTheme
                      ? 'detail-page__description-info-accent_theme_dark'
                      : ''
                  }`}
                >
                  Top Level Domain:
                </span>{' '}
                {card.tld.join(', ')}
              </li>
              <li
                className={`detail-page__description-info ${
                  isDarkTheme ? 'detail-page__description-info_theme_dark' : ''
                }`}
              >
                <span
                  className={`detail-page__description-info-accent ${
                    isDarkTheme
                      ? 'detail-page__description-info-accent_theme_dark'
                      : ''
                  }`}
                >
                  Currencies:
                </span>{' '}
                {handleCurrencies(card)}
              </li>
              <li
                className={`detail-page__description-info ${
                  isDarkTheme ? 'detail-page__description-info_theme_dark' : ''
                }`}
              >
                <span
                  className={`detail-page__description-info-accent ${
                    isDarkTheme
                      ? 'detail-page__description-info-accent_theme_dark'
                      : ''
                  }`}
                >
                  Languages:
                </span>{' '}
                {handleLanguages(card)}
              </li>
            </ul>
          </div>
          {card.borders && (
            <div className='detail-page__border-wrapper'>
              <p
                className={`detail-page__border-info ${
                  isDarkTheme ? 'detail-page__border-info_theme_dark' : ''
                }`}
              >
                Border Countries:
              </p>
              <div className='detail-page__border-link-wrapper'>
                {handleBorderCountriesButtons(card, cards)}
              </div>
            </div>
          )}
        </div>
      </article>
    </section>
  );
}

export default DetailPage;
