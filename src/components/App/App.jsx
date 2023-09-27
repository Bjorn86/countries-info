import { useCallback, useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

// IMPORT STYLES
import './App.scss';

// IMPORT COMPONENTS
import PageContent from '../PageContent/PageContent';
import DetailPage from '../DetailPage/DetailPage';
import Cards from '../Cards/Cards';
import Preloader from '../Preloader/Preloader';

// IMPORT API
import * as api from '../../utils/api';

// OTHER IMPORTS
import { optionsList, ESCAPE_KEY } from '../../utils/constants';

// APP CORE COMPONENT
function App() {
  // HOOKS
  const [isDarkTheme, setDarkThemeClass] = useState(false);
  const [cards, setCards] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [isOptionsOpen, setOptionsClass] = useState(false);
  const [selectedOption, setSelectedOption] = useState(0);
  const [filterAndSearchResult, setFilterAndSearchResult] = useState(null);
  const [isPreloaderActive, setPreloaderClass] = useState(true);

  // GET CONTENT FROM THE SERVER
  const getContent = async () => {
    try {
      const cardData = await api.getContent();
      setCards(cardData);
    } catch (err) {
      console.error(err);
    } finally {
      setPreloaderClass(false);
    }
  };

  // READ AND SAVE THEME
  const readAndSaveTheme = useCallback(() => {
    const theme = localStorage.getItem('isDarkTheme');
    if (JSON.parse(theme)) {
      setDarkThemeClass(theme);
    } else {
      localStorage.setItem('isDarkTheme', isDarkTheme);
    }
  }, [isDarkTheme]);

  // HANDLE SEARCH AND FILTER RESULT
  const handleSearchResult = useCallback(
    (cardsData) => {
      if (cardsData) {
        if (!selectedOption && searchTerm) {
          const result = cardsData.filter((card) =>
            card.name.common.toLowerCase().includes(searchTerm.toLowerCase()),
          );
          setFilterAndSearchResult(result);
        } else if (selectedOption && searchTerm) {
          const filtered = cardsData.filter(
            (card) => card.region === optionsList[selectedOption],
          );
          const result = filtered.filter((card) =>
            card.name.common.toLowerCase().includes(searchTerm.toLowerCase()),
          );
          setFilterAndSearchResult(result);
        } else if (selectedOption && !searchTerm) {
          const result = cardsData.filter(
            (card) => card.region === optionsList[selectedOption],
          );
          setFilterAndSearchResult(result);
        } else {
          setFilterAndSearchResult(null);
        }
      }
    },
    [selectedOption, searchTerm],
  );

  // HANDLE SEARCH CHANGE
  const handleSearchChange = useCallback((input) => {
    setSearchTerm(input);
  }, []);

  // TOGGLE THEME
  const switchTheme = useCallback(() => {
    setDarkThemeClass(!isDarkTheme);
    localStorage.setItem('isDarkTheme', !isDarkTheme);
  }, [isDarkTheme]);

  // TOGGLE OPEN\CLOSE MENU OPTIONS
  const toggleOptionMenu = useCallback(
    (evt) => {
      if (evt.key === ESCAPE_KEY) {
        setOptionsClass(false);
      } else {
        setOptionsClass(!isOptionsOpen);
      }
    },
    [isOptionsOpen],
  );

  // OPTION SWITCH
  const optionSwitch = useCallback((index) => {
    setSelectedOption(index);
  }, []);

  // SET SELECTED OPTION AND CLOSE DROPDOWN MENU
  const setOptionAndClose = useCallback((index) => {
    setSelectedOption(index);
    setOptionsClass(false);
  }, []);

  // SET CARDS STATE WHEN MOUNTING
  useEffect(() => {
    getContent();
  }, []);

  // SET FOUND CARDS STATE WHEN MOUNTING
  useEffect(() => {
    handleSearchResult(cards);
  }, [cards, handleSearchResult]);

  // SET THEME
  useEffect(() => {
    readAndSaveTheme();
  }, [readAndSaveTheme]);

  // PRELOADER RENDER
  if (isPreloaderActive) {
    return <Preloader isDarkTheme={isDarkTheme} />;
  }

  // RENDER
  return (
    cards && (
      <div className='app__content'>
        <Helmet>
          <meta name='description' content='Countries Info App' />
          <meta
            name='keywords'
            content='countries, information, capital, currency, language, population, guide'
          />
          <title>Countries Info</title>
        </Helmet>
        <Routes>
          <Route
            path='/*'
            element={
              <PageContent
                isDarkTheme={isDarkTheme}
                onThemeSwitchClick={switchTheme}
                onSearchChange={handleSearchChange}
                searchTerm={searchTerm}
                isOptionsOpen={isOptionsOpen}
                onOptionMenuClick={toggleOptionMenu}
                onOptionSelect={setOptionAndClose}
                toSwitchOptions={optionSwitch}
                selectedOption={selectedOption}
                optionsList={optionsList}
              />
            }
          >
            <Route
              index
              element={
                <Cards
                  isDarkTheme={isDarkTheme}
                  cards={cards}
                  searchResult={filterAndSearchResult}
                />
              }
            />
            <Route
              path=':countryCode'
              element={<DetailPage isDarkTheme={isDarkTheme} cards={cards} />}
            />
          </Route>
        </Routes>
      </div>
    )
  );
}

export default App;
