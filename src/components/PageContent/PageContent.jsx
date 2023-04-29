import React from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';

// IMPORT COMPONENTS
import Header from '../Header/Header.jsx';
import Filter from '../Filter/Filter.jsx';

// APP LAYOUT COMPONENT
function PageContent({
  isDarkTheme,
  onThemeToggleClick,
  onSearchChange,
  searchTerm,
  isOptionsOpen,
  onOptionMenuClick,
  onOptionSelect,
  selectedOption,
  optionsList,
}) {
  return (
    <>
      <Header
        isDarkTheme={isDarkTheme}
        onThemeToggleClick={onThemeToggleClick}
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
