import React from 'react';

// SEARCH COMPONENT
function Search({ isDarkTheme, onSearchChange, searchTerm }) {
  return (
    <input
      type='text'
      className={`search ${isDarkTheme ? 'search_theme_dark' : ''}`}
      name='search'
      placeholder='Search for a country...'
      value={searchTerm}
      onChange={(evt) => onSearchChange(evt.target.value)}
    />
  );
}

export default Search;
