// IMPORT PACKAGES
import PropTypes from 'prop-types';

// IMPORT STYLES
import './Card.scss';

// CARD COMPONENT
function Card({ card, isDarkTheme }) {
  return (
    <div className='card'>
      <img
        className={`card__country-flag ${
          isDarkTheme ? 'card__country-flag_theme_dark' : ''
        }`}
        src={card.flags.svg}
        alt={card.flags.alt || `The flag of ${card.name.common}`}
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
          {card.name.common}
        </h2>
        <ul className='card__country-description-list'>
          <li
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
          </li>
          <li
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
          </li>
          <li
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
