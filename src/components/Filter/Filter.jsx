import React from 'react';

// IMPORT COMPONENTS
import Search from '../Search/Search.jsx';
import RegionSelect from '../RegionSelect/RegionSelect.jsx';

// FILTER COMPONENT
function Filter({
  isDarkTheme,
  onSearchChange,
  searchTerm,
  isOptionsOpen,
  onOptionMenuClick,
  onOptionSelect,
  toSwitchOptions,
  selectedOption,
  optionsList,
}) {
  return (
    <section className='filter'>
      <div className='filter__wrapper'>
        <Search
          isDarkTheme={isDarkTheme}
          onSearchChange={onSearchChange}
          searchTerm={searchTerm}
        />
        <RegionSelect
          isDarkTheme={isDarkTheme}
          isOptionsOpen={isOptionsOpen}
          onOptionMenuClick={onOptionMenuClick}
          onOptionSelect={onOptionSelect}
          toSwitchOptions={toSwitchOptions}
          selectedOption={selectedOption}
          optionsList={optionsList}
        />
      </div>
    </section>
  );
}

export default Filter;
