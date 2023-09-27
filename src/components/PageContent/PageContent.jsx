// IMPORT PACKAGES
import { Outlet, Route, Routes } from 'react-router-dom';
import PropTypes from 'prop-types';

// IMPORT STYLES
import './PageContent.scss';

// IMPORT COMPONENTS
import Header from '../Header/Header';
import Filter from '../Filter/Filter';

// APP LAYOUT COMPONENT
function PageContent({
  isDarkTheme,
  onThemeSwitchClick,
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
    <>
      <Header
        isDarkTheme={isDarkTheme}
        onThemeSwitchClick={onThemeSwitchClick}
      />
      <main
        className={`page-content ${
          isDarkTheme ? 'page-content_theme_dark' : ''
        }`}
      >
        <Routes>
          <Route
            path='/'
            element={
              <Filter
                isDarkTheme={isDarkTheme}
                onSearchChange={onSearchChange}
                searchTerm={searchTerm}
                isOptionsOpen={isOptionsOpen}
                onOptionMenuClick={onOptionMenuClick}
                onOptionSelect={onOptionSelect}
                toSwitchOptions={toSwitchOptions}
                selectedOption={selectedOption}
                optionsList={optionsList}
              />
            }
          />
        </Routes>
        <Outlet />
      </main>
    </>
  );
}

export default PageContent;

PageContent.propTypes = {
  isDarkTheme: PropTypes.bool.isRequired,
  onThemeSwitchClick: PropTypes.func.isRequired,
  onSearchChange: PropTypes.func.isRequired,
  searchTerm: PropTypes.string.isRequired,
  isOptionsOpen: PropTypes.bool.isRequired,
  onOptionMenuClick: PropTypes.func.isRequired,
  onOptionSelect: PropTypes.func.isRequired,
  toSwitchOptions: PropTypes.func.isRequired,
  selectedOption: PropTypes.number.isRequired,
  optionsList: PropTypes.arrayOf(PropTypes.string).isRequired,
};
