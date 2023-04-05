import React, { useCallback } from 'react';

// DETAIL PAGE COMPONENT
function DetailPage({ card, cards, isDarkTheme }) {
  // HANDLE LANGUAGES RENDER
  const handleLanguages = useCallback((card) => {
    let languagesArr = card.languages.map((language) => language.name);
    return languagesArr.join(', ');
  }, []);

  // HANDLE CURRENCIES RENDER
  const handleCurrencies = useCallback((card) => {
    let currenciesArr = card.currencies.map((currency) => currency.name);
    return currenciesArr.join(', ');
  }, []);

  // HANDLE BORDER COUNTRIES BUTTONS RENDER
  const handleBorderCountriesButtons = useCallback(
    (card, cards) => {
      let nameCountries = [];
      for (let inputCode of card.borders) {
        for (let cardItem of cards) {
          if (inputCode === cardItem.alpha3Code) {
            nameCountries.push(cardItem.name);
          }
        }
      }
      return nameCountries.map((country, index) => (
        /* TODO Заменить на Link? */
        <button
          className={`detail-page__btn-country ${
            isDarkTheme ? 'detail-page__btn-country_theme_dark' : ''
          }`}
          key={index}
        >
          {country}
        </button>
      ));
    },
    [isDarkTheme],
  );

  return (
    <section className='detail-page'>
      {/* TODO Заменить кнопку на Link? */}
      <button
        className={`detail-page__btn-back ${
          isDarkTheme ? 'detail-page__btn-back_theme_dark' : ''
        }`}
      >
        Back
      </button>
      <article className='detail-page__wrapper'>
        <img
          className={`detail-page__flag ${
            isDarkTheme ? 'detail-page__flag_theme_dark' : ''
          }`}
          src={card.flag}
          alt={`Flag of ${card.name}`}
        />
        <div className='detail-page__description-wrapper'>
          <h2
            className={`detail-page__country-name ${
              isDarkTheme ? 'detail-page__country-name_theme_dark' : ''
            }`}
          >
            {card.name}
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
                {card.nativeName}
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
                {card.capital}
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
                {card.topLevelDomain.join(', ')}
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
              <div className='detail-page__border-btn-wrapper'>
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
