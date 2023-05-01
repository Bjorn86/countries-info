import React from 'react';

// SEARCH COMPONENT
function Search({ isDarkTheme, onSearchChange, searchTerm }) {
  return (
    <form className='search' role='search'>
      <input
        className={`search__input ${
          isDarkTheme ? 'search__input_theme_dark' : ''
        }`}
        id='search-input'
        type='search'
        name='search'
        aria-label='Search for a country'
        autoComplete='off'
        autoCorrect='off'
        autoCapitalize='off'
        spellCheck='false'
        placeholder='Search for a country...'
        value={searchTerm}
        onChange={(evt) => onSearchChange(evt.target.value)}
      />
    </form>
  );
}

export default Search;
