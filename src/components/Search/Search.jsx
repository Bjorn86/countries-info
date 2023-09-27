// IMPORT PACKAGES
import PropTypes from 'prop-types';

// IMPORT STYLES
import './Search.scss';

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
        placeholder='Search for a country...'
        value={searchTerm}
        onChange={(evt) => onSearchChange(evt.target.value)}
      />
    </form>
  );
}

export default Search;

Search.propTypes = {
  isDarkTheme: PropTypes.bool.isRequired,
  onSearchChange: PropTypes.func.isRequired,
  searchTerm: PropTypes.string.isRequired,
};
