// IMPORT PACKAGES
import { useCallback } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

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
  const handleKeyDown = useCallback(
    (evt, index) => {
      switch (evt.key) {
        case SPACE_BAR_KEY:
        case ENTER_KEY:
          evt.preventDefault();
          onOptionSelect(index);
          break;
        default:
          break;
      }
    },
    [onOptionSelect],
  );

  const handleListKeyDown = useCallback(
    (evt) => {
      switch (evt.key) {
        case ESCAPE_KEY:
          evt.preventDefault();
          onOptionMenuClick(evt);
          break;
        case ARROW_UP_KEY:
          evt.preventDefault();
          toSwitchOptions(
            selectedOption - 1 >= 0
              ? selectedOption - 1
              : optionsList.length - 1,
          );
          break;
        case ARROW_DOWN_KEY:
          evt.preventDefault();
          toSwitchOptions(
            selectedOption === optionsList.length - 1 ? 0 : selectedOption + 1,
          );
          break;
        case HOME_KEY:
          evt.preventDefault();
          toSwitchOptions(0);
          break;
        case END_KEY:
          evt.preventDefault();
          toSwitchOptions(optionsList.length - 1);
          break;
        default:
          break;
      }
    },
    [onOptionMenuClick, toSwitchOptions, optionsList, selectedOption],
  );

  return (
    <div className='region-select'>
      <button
        className={`region-select__btn ${
          isDarkTheme ? 'region-select__btn_theme_dark' : ''
        }`}
        type='button'
        onClick={onOptionMenuClick}
        onKeyDown={handleListKeyDown}
        aria-haspopup='listbox'
        aria-expanded={isOptionsOpen}
      >
        {optionsList[selectedOption]}
      </button>
      <ul
        className={`region-select__list ${
          isDarkTheme ? 'region-select__list_theme_dark' : ''
        } ${isOptionsOpen ? 'region-select__list_open' : ''}`}
        role='listbox'
        aria-activedescendant={optionsList[selectedOption]}
        aria-labelledby={optionsList[selectedOption]}
        tabIndex={0}
        onKeyDown={handleListKeyDown}
      >
        {optionsList.map((option, index) => (
          <li
            className={`region-select__item ${
              isDarkTheme ? 'region-select__item_theme_dark' : ''
            }`}
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
