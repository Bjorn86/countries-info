import React, { useCallback } from 'react';

// REGION SELECT COMPONENT
function RegionSelect({
  isDarkTheme,
  isOptionsOpen,
  onOptionMenuClick,
  onOptionSelect,
  selectedOption,
  optionsList,
}) {
  // HANDLE KEY NAVIGATION
  const handleKeyDown = useCallback(
    (evt, index) => {
      switch (evt.key) {
        case ' ':
        case 'SpaceBar':
        case 'Enter':
          evt.preventDefault();
          onOptionSelect(index);
          break;
        default:
          break;
      }
    },
    [onOptionSelect],
  );

  return (
    <div className='region-select'>
      <button
        className={`region-select__btn ${
          isDarkTheme ? 'region-select__btn_theme_dark' : ''
        }`}
        type='button'
        onClick={onOptionMenuClick}
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
