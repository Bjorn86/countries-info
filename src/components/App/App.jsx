import React, { useCallback, useState } from 'react';

// IMPORT COMPONENTS
import Header from '../Header/Header.jsx';
import MainContent from '../MainContent/MainContent.jsx';

// APP CORE COMPONENT
function App() {
  // STATE VARIABLES
  const [isDarkTheme, setDarkThemeClass] = useState(false);

  // HANDLE THEME SWITCH
  const handleThemeSwitch = useCallback(() => {
    isDarkTheme ? setDarkThemeClass(false) : setDarkThemeClass(true);
  }, [isDarkTheme]);

  return (
    <div className='app__content'>
      <Header
        isDarkTheme={isDarkTheme}
        onThemeSwitchClick={handleThemeSwitch}
      />
      <MainContent isDarkTheme={isDarkTheme} />
    </div>
  );
}

export default App;
