import React from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';

// IMPORT COMPONENTS
import Header from '../Header/Header.jsx';
import Filter from '../Filter/Filter.jsx';

// APP LAYOUT COMPONENT
function PageContent({ isDarkTheme, onThemeSwitchClick }) {
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
          <Route path='/' element={<Filter isDarkTheme={isDarkTheme} />} />
        </Routes>
        <Outlet />
      </main>
    </>
  );
}

export default PageContent;
