import React, { useCallback, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

// DETAIL PAGE COMPONENT
function DetailPage({ isDarkTheme, cards }) {
  // HOOKS
  const { countryCode } = useParams();
  const navigate = useNavigate();
  const [card, setCard] = useState(null);

  // SET CARD STATE WHEN MOUNTING
  useEffect(() => {
    const findCard = cards.find(
      (card) => card.cca3 === countryCode.toUpperCase(),
    );
    setCard(findCard);
  }, [cards, countryCode]);

  // HANDLE LANGUAGES RENDER
  const handleLanguages = useCallback((card) => {
    return (
      Object.values(card.languages).join(', ') ||
      'the country does not have an official language'
    );
  }, []);

  // HANDLE CURRENCIES RENDER
  const handleCurrencies = useCallback((card) => {
    let currenciesArr = [];
    for (let key in card.currencies) {
      let currency = card.currencies[key];
      currenciesArr.push(currency.name);
    }
    return (
      currenciesArr.join(', ') ||
      'the country does not have an official currency'
    );
  }, []);

  // HANDLE BORDER COUNTRIES LINKS RENDER
  const handleBorderCountriesButtons = useCallback(
    (card, cards) => {
      let borders = card.borders;
      let nameCountries = [];
      borders.forEach((inputCode) => {
        cards.forEach((cardItem) => {
          if (inputCode === cardItem.cca3) {
            nameCountries.push(cardItem.name.common);
          }
        });
      });
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
          the country has no land borders
        </p>
      );
    },
    [isDarkTheme],
  );

  /* TODO Возвращать 404 страницу */
  if (!card) return null;
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
                {Object.values(card.name.nativeName)[0]?.common ||
                  card.name.common}
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
                {card.subregion || 'the country does not have a subregion'}
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
                {card.capital.join(', ') || 'the country has no capital'}
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
                {card.tld.join(', ') || 'the country has no top level domain'}
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
