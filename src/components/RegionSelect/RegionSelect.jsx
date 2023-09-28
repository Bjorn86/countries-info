// IMPORT PACKAGES
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import clsx from 'clsx';

// IMPORT STYLES
import './RegionSelect.scss';

// OTHER IMPORTS
import {
  ESCAPE_KEY,
  SPACE_BAR_KEY,
  ENTER_KEY,
  ARROW_UP_KEY,
  ARROW_DOWN_KEY,
  HOME_KEY,
  END_KEY,
} from '../../utils/constants';

// REGION SELECT COMPONENT
function RegionSelect({
  isDarkTheme,
  isOptionsOpen,
  onOptionMenuClick,
  onOptionSelect,
  toSwitchOptions,
  selectedOption,
  optionsList,
}) {
  // HANDLE KEY NAVIGATION
  const handleKeyDown = (evt, index) => {
    switch (evt.key) {
      case SPACE_BAR_KEY:
      case ENTER_KEY:
        evt.preventDefault();
        onOptionSelect(index);
        break;
      default:
        break;
    }
  };

  const handleListKeyDown = (evt) => {
    evt.preventDefault();
    switch (evt.key) {
      case ESCAPE_KEY:
        onOptionMenuClick(evt);
        break;
      case ARROW_UP_KEY:
        toSwitchOptions(
          selectedOption - 1 >= 0 ? selectedOption - 1 : optionsList.length - 1,
        );
        break;
      case ARROW_DOWN_KEY:
        toSwitchOptions(
          selectedOption === optionsList.length - 1 ? 0 : selectedOption + 1,
        );
        break;
      case HOME_KEY:
        toSwitchOptions(0);
        break;
      case END_KEY:
        toSwitchOptions(optionsList.length - 1);
        break;
      default:
        break;
    }
  };

  return (
    <div className='region-select'>
      <button
        className={clsx('region-select__btn', {
          'region-select__btn_theme_dark': isDarkTheme,
        })}
        type='button'
        onClick={onOptionMenuClick}
        onKeyDown={handleListKeyDown}
        aria-haspopup='listbox'
        aria-expanded={isOptionsOpen}
      >
        {optionsList[selectedOption]}
      </button>
      <ul
        className={clsx(
          'region-select__list',
          {
            'region-select__list_theme_dark': isDarkTheme,
          },
          { 'region-select__list_open': isOptionsOpen },
        )}
        role='listbox'
        aria-activedescendant={optionsList[selectedOption]}
        aria-labelledby={optionsList[selectedOption]}
        tabIndex={0}
        onKeyDown={handleListKeyDown}
      >
        {optionsList.map((option, index) => (
          <li
            className={clsx('region-select__item', {
              'region-select__item_theme_dark': isDarkTheme,
            })}
            id={option}
            key={uuidv4()}
            role='option'
            aria-selected={selectedOption === index}
            tabIndex={0}
            onKeyDown={handleKeyDown(index)}
            onClick={() => {
              onOptionSelect(index);
            }}
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RegionSelect;

RegionSelect.propTypes = {
  isDarkTheme: PropTypes.bool.isRequired,
  isOptionsOpen: PropTypes.bool.isRequired,
  onOptionMenuClick: PropTypes.func.isRequired,
  onOptionSelect: PropTypes.func.isRequired,
  toSwitchOptions: PropTypes.func.isRequired,
  selectedOption: PropTypes.number.isRequired,
  optionsList: PropTypes.arrayOf(PropTypes.string).isRequired,
};
