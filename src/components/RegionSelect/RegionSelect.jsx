import React, { useCallback, useState } from 'react';

// REGION SELECT COMPONENT
function RegionSelect({ isDarkTheme }) {
  // STATE VARIABLES
  const [isOptionsOpen, setOptionsClass] = useState(false);
  const [selectedOption, setSelectedOption] = useState(0);

  // OPTIONS LIST
  const optionsList = ['Africa', 'America', 'Asia', 'Europe', 'Oceania'];

  // SWITCH OPEN\CLOSE MENU OPTIONS
  const switchOptionMenu = useCallback(() => {
    setOptionsClass(!isOptionsOpen);
  }, [isOptionsOpen]);

  // SET SELECTED OPTION AND CLOSE DROPDOWN MENU
  const setSelectedOptionAndCloseDropdown = useCallback((index) => {
    setSelectedOption(index);
    setOptionsClass(false);
  }, []);

  // HANDLE KEY NAVIGATION
  const handleKeyDown = useCallback(
    (evt, index) => {
      switch (evt.key) {
        case ' ':
        case 'SpaceBar':
        case 'Enter':
          evt.preventDefault();
          setSelectedOptionAndCloseDropdown(index);
          break;
        default:
          break;
      }
    },
    [setSelectedOptionAndCloseDropdown],
  );

  return (
    <div className='region-select'>
      <button
        className={`region-select__btn ${
          isDarkTheme ? 'region-select__btn_theme_dark' : ''
        }`}
        type='button'
        onClick={switchOptionMenu}
        aria-haspopup='listbox'
        aria-expanded={isOptionsOpen}
      >
        Filter by Region
      </button>
      <ul
        className={`region-select__list ${
          isDarkTheme ? 'region-select__list_theme_dark' : ''
        } ${isOptionsOpen ? 'region-select__list_open' : ''}`}
        role='listbox'
        aria-activedescendant={optionsList[selectedOption]}
        tabIndex={-1}
      >
        {optionsList.map((option, index) => (
          <li
            className={`region-select__item ${
              isDarkTheme ? 'region-select__item_theme_dark' : ''
            }`}
            id={option}
            key={index}
            role='option'
            aria-selected={selectedOption === index}
            tabIndex={0}
            onKeyDown={handleKeyDown(index)}
            onClick={() => {
              setSelectedOption(index);
              setOptionsClass(false);
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
