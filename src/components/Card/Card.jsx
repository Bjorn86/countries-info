// IMPORT PACKAGES
import PropTypes from 'prop-types';
import clsx from 'clsx';

// IMPORT STYLES
import './Card.scss';

// CARD COMPONENT
function Card({ card, isDarkTheme }) {
  return (
    <div className='card'>
      <img
        className={clsx('card__country-flag', {
          'card__country-flag_theme_dark': isDarkTheme,
        })}
        src={card.flags.svg}
        alt={card.flags.alt || `The flag of ${card.name.common}`}
      />
      <div
        className={clsx('card__description-wrapper', {
          'card__description-wrapper_theme_dark': isDarkTheme,
        })}
      >
        <h2
          className={clsx('card__country-name', {
            'card__country-name_theme_dark': isDarkTheme,
          })}
        >
          {card.name.common}
        </h2>
        <ul className='card__country-description-list'>
          <li
            className={clsx('card__country-info', {
              'card__country-info_theme_dark': isDarkTheme,
            })}
          >
            <span
              className={clsx('card__country-info-accent', {
                'card__country-info-accent_theme_dark': isDarkTheme,
              })}
            >
              Population:
            </span>{' '}
            {new Intl.NumberFormat().format(card.population)}
          </li>
          <li
            className={clsx('card__country-info', {
              'card__country-info_theme_dark': isDarkTheme,
            })}
          >
            <span
              className={clsx('card__country-info-accent', {
                'card__country-info-accent_theme_dark': isDarkTheme,
              })}
            >
              Region:
            </span>{' '}
            {card.region}
          </li>
          <li
            className={clsx('card__country-info', {
              'card__country-info_theme_dark': isDarkTheme,
            })}
          >
            <span
              className={clsx('card__country-info-accent', {
                'card__country-info-accent_theme_dark': isDarkTheme,
              })}
            >
              Capital:
            </span>{' '}
            {card.capital.join(', ') || 'there is no capital'}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Card;

Card.propTypes = {
  card: PropTypes.shape({
    name: PropTypes.shape({
      common: PropTypes.string.isRequired,
    }).isRequired,
    flags: PropTypes.shape({
      svg: PropTypes.string.isRequired,
      alt: PropTypes.string,
    }).isRequired,
    population: PropTypes.number.isRequired,
    region: PropTypes.string.isRequired,
    capital: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  isDarkTheme: PropTypes.bool.isRequired,
};
