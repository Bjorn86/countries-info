// IMPORT PACKAGES
import PropTypes from 'prop-types';

// IMPORT STYLES
import './Filter.scss';

// IMPORT COMPONENTS
import Search from '../Search/Search';
import RegionSelect from '../RegionSelect/RegionSelect';

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
    <section className='filter' aria-label='Section with search and filters'>
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

Filter.propTypes = {
  isDarkTheme: PropTypes.bool.isRequired,
  onSearchChange: PropTypes.func.isRequired,
  searchTerm: PropTypes.string.isRequired,
  isOptionsOpen: PropTypes.bool.isRequired,
  onOptionMenuClick: PropTypes.func.isRequired,
  onOptionSelect: PropTypes.func.isRequired,
  toSwitchOptions: PropTypes.func.isRequired,
  selectedOption: PropTypes.number.isRequired,
  optionsList: PropTypes.arrayOf(PropTypes.string).isRequired,
};
