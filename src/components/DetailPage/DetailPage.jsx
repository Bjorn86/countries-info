// IMPORT PACKAGES
import { useCallback, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import clsx from 'clsx';

// IMPORT STYLES
import './DetailPage.scss';

// IMPORT COMPONENTS
import NotFound from '../NotFound/NotFound';
import Preloader from '../Preloader/Preloader';

// DETAIL PAGE COMPONENT
function DetailPage({ isDarkTheme, cards }) {
  // HOOKS
  const { countryCode } = useParams();
  const navigate = useNavigate();
  const [card, setCard] = useState(null);
  const [isPreloaderActive, setPreloaderClass] = useState(true);

  // SET CARD STATE WHEN MOUNTING
  useEffect(() => {
    setCard(null);
    const findCard = cards.find(
      (item) => item.cca3 === countryCode.toUpperCase(),
    );
    setCard(findCard);
    setPreloaderClass(false);
  }, [cards, countryCode, setPreloaderClass]);

  // HANDLE LANGUAGES RENDER
  const handleLanguages = useCallback(
    (item) =>
      Object.values(item.languages).join(', ') ||
      'the country does not have an official language',
    [],
  );

  // HANDLE CURRENCIES RENDER
  const handleCurrencies = useCallback((item) => {
    const currenciesArr = Object.keys(item.currencies).map(
      (currencyKey) => item.currencies[currencyKey].name,
    );
    return currenciesArr.length > 0
      ? currenciesArr.join(', ')
      : 'the country does not have an official currency';
  }, []);

  // HANDLE BORDER COUNTRIES LINKS RENDER
  const handleBorderCountriesButtons = useCallback(
    (cardData, cardsData) => {
      const { borders } = cardData;
      const nameCountries = [];
      borders.forEach((inputCode) => {
        cardsData.forEach((item) => {
          if (inputCode === item.cca3) {
            nameCountries.push(item.name.common);
          }
        });
      });
      return nameCountries.length !== 0 ? (
        nameCountries.map((country, index) => (
          <Link
            to={`/${borders[index].toLowerCase()}`}
            key={uuidv4()}
            className={clsx('detail-page__link-country', {
              'detail-page__link-country_theme_dark': isDarkTheme,
            })}
          >
            {country}
          </Link>
        ))
      ) : (
        <p
          className={clsx(
            'detail-page__description-info',
            'detail-page__description-info_position_bottom',
            {
              'detail-page__description-info_theme_dark': isDarkTheme,
            },
          )}
        >
          the country has no land borders
        </p>
      );
    },
    [isDarkTheme],
  );

  // HANDLE BUTTON BACK CLICK
  const handleBtnBackClick = useCallback(() => {
    if (window.history.state?.idx > 0) {
      navigate(-1);
    } else {
      navigate('/', { replace: true });
    }
  }, [navigate]);

  // PRELOADER AND NOT FOUND RENDER
  if (isPreloaderActive) {
    return <Preloader isDarkTheme={isDarkTheme} />;
  }
  if (!card && !isPreloaderActive) {
    return <NotFound isDarkTheme={isDarkTheme} />;
  }

  // RENDER
  return (
    <section className='detail-page'>
      <Helmet>
        <meta
          name='description'
          content={`${card.name.common} - country information`}
        />
        <meta
          name='keywords'
          content={`${card.name.common}, information, capital, currency, language, population, guide`}
        />
        <title>{`Countries Info - ${card.name.common}`}</title>
      </Helmet>
      <button
        className={clsx('detail-page__btn-back', {
          'detail-page__btn-back_theme_dark': isDarkTheme,
        })}
        type='button'
        onClick={handleBtnBackClick}
      >
        Back
      </button>
      <article className='detail-page__wrapper'>
        <img
          className={clsx('detail-page__flag', {
            'detail-page__flag_theme_dark': isDarkTheme,
          })}
          src={card.flags.svg}
          alt={card.flags.alt || `The flag of ${card.name.common}`}
        />
        <div className='detail-page__description-wrapper'>
          <h1
            className={clsx('detail-page__country-name', {
              'detail-page__country-name_theme_dark': isDarkTheme,
            })}
          >
            {card.name.common}
          </h1>
          <div className='detail-page__list-wrapper'>
            <ul className='detail-page__description-list detail-page__description-list_position_left'>
              <li
                className={clsx('detail-page__description-info', {
                  'detail-page__description-info_theme_dark': isDarkTheme,
                })}
              >
                <span
                  className={clsx('detail-page__description-info-accent', {
                    'detail-page__description-info-accent_theme_dark':
                      isDarkTheme,
                  })}
                >
                  Native Name:
                </span>{' '}
                {Object.values(card.name.nativeName)[0]?.common ||
                  card.name.common}
              </li>
              <li
                className={clsx('detail-page__description-info', {
                  'detail-page__description-info_theme_dark': isDarkTheme,
                })}
              >
                <span
                  className={clsx('detail-page__description-info-accent', {
                    'detail-page__description-info-accent_theme_dark':
                      isDarkTheme,
                  })}
                >
                  Population:
                </span>{' '}
                {new Intl.NumberFormat().format(card.population)}
              </li>
              <li
                className={clsx('detail-page__description-info', {
                  'detail-page__description-info_theme_dark': isDarkTheme,
                })}
              >
                <span
                  className={clsx('detail-page__description-info-accent', {
                    'detail-page__description-info-accent_theme_dark':
                      isDarkTheme,
                  })}
                >
                  Region:
                </span>{' '}
                {card.region}
              </li>
              <li
                className={clsx('detail-page__description-info', {
                  'detail-page__description-info_theme_dark': isDarkTheme,
                })}
              >
                <span
                  className={clsx('detail-page__description-info-accent', {
                    'detail-page__description-info-accent_theme_dark':
                      isDarkTheme,
                  })}
                >
                  Sub Region:
                </span>{' '}
                {card.subregion || 'the country does not have a subregion'}
              </li>
              <li
                className={clsx('detail-page__description-info', {
                  'detail-page__description-info_theme_dark': isDarkTheme,
                })}
              >
                <span
                  className={clsx('detail-page__description-info-accent', {
                    'detail-page__description-info-accent_theme_dark':
                      isDarkTheme,
                  })}
                >
                  Capital:
                </span>{' '}
                {card.capital.join(', ') || 'the country has no capital'}
              </li>
            </ul>
            <ul className='detail-page__description-list detail-page__description-list_position_bottom'>
              <li
                className={clsx('detail-page__description-info', {
                  'detail-page__description-info_theme_dark': isDarkTheme,
                })}
              >
                <span
                  className={clsx('detail-page__description-info-accent', {
                    'detail-page__description-info-accent_theme_dark':
                      isDarkTheme,
                  })}
                >
                  Top Level Domain:
                </span>{' '}
                {card.tld.join(', ') || 'the country has no top level domain'}
              </li>
              <li
                className={clsx('detail-page__description-info', {
                  'detail-page__description-info_theme_dark': isDarkTheme,
                })}
              >
                <span
                  className={clsx('detail-page__description-info-accent', {
                    'detail-page__description-info-accent_theme_dark':
                      isDarkTheme,
                  })}
                >
                  Currencies:
                </span>{' '}
                {handleCurrencies(card)}
              </li>
              <li
                className={clsx('detail-page__description-info', {
                  'detail-page__description-info_theme_dark': isDarkTheme,
                })}
              >
                <span
                  className={clsx('detail-page__description-info-accent', {
                    'detail-page__description-info-accent_theme_dark':
                      isDarkTheme,
                  })}
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
                className={clsx('detail-page__border-info', {
                  'detail-page__border-info_theme_dark': isDarkTheme,
                })}
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

DetailPage.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  isDarkTheme: PropTypes.bool.isRequired,
};
