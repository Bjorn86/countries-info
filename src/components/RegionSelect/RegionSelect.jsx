import React, { useCallback } from 'react';

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

  const handleListKeyDown = useCallback(
    (evt) => {
      switch (evt.key) {
        case 'Escape':
          evt.preventDefault();
          onOptionMenuClick(evt);
          break;
        case 'ArrowUp':
          evt.preventDefault();
          toSwitchOptions(
            selectedOption - 1 >= 0
              ? selectedOption - 1
              : optionsList.length - 1,
          );
          break;
        case 'ArrowDown':
          evt.preventDefault();
          toSwitchOptions(
            selectedOption === optionsList.length - 1 ? 0 : selectedOption + 1,
          );
          break;
        case 'Home':
          evt.preventDefault();
          toSwitchOptions(0);
          break;
        case 'End':
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
