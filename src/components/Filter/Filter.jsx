import React, { useState } from 'react';

// IMPORT COMPONENTS
import RegionSelect from '../RegionSelect/RegionSelect.jsx';

// FILTER COMPONENT
function Filter({ isDarkTheme }) {
  // STATE VARIABLES
  const [selectedRegion, setSelectedRegion] = useState('all');
  return (
    <section className='filter'>
      <form
        action='#'
        name='filter'
        className='filter__wrapper'
        id='filter'
        noValidate
      >
        <input
          type='text'
          className={`filter__search ${
            isDarkTheme ? 'filter__search_theme_dark' : ''
          }`}
          form='filter'
          name='filter-search'
          placeholder='Search for a country...'
        />
        <RegionSelect isDarkTheme={isDarkTheme} />
      </form>
    </section>
  );
}

export default Filter;
