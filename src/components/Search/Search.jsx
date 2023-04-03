import React, { useCallback, useState } from 'react';

// SEARCH COMPONENT
function Search({ isDarkTheme }) {
  // STATE VARIABLES
  const [searchTerm, setSearchTerm] = useState('');

  // HANDLE INPUT CHANGE
  const handleChange = useCallback((evt) => {
    setSearchTerm(evt.target.value);
  }, []);

  return (
    <input
      type='text'
      className={`search ${isDarkTheme ? 'search_theme_dark' : ''}`}
      name='search'
      placeholder='Search for a country...'
      value={searchTerm}
      onChange={handleChange}
    />
  );
}

export default Search;
