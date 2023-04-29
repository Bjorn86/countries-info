import React, { useCallback, useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

// IMPORT COMPONENTS
import PageContent from '../PageContent/PageContent.jsx';
import DetailPage from '../DetailPage/DetailPage.jsx';
import Cards from '../Cards/Cards.jsx';

// IMPORT API
import * as api from '../../utils/api.js';

// OTHER IMPORTS
import { optionsList } from '../../utils/constants.js';

// APP CORE COMPONENT
function App() {
  // HOOKS
  const [isDarkTheme, setDarkThemeClass] = useState(false);
  const [cards, setCards] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [isOptionsOpen, setOptionsClass] = useState(false);
  const [selectedOption, setSelectedOption] = useState(0);
  const [filterAndSearchResult, setFilterAndSearchResult] = useState(null);

  // GET CONTENT FROM THE SERVER
  const getContent = async () => {
    try {
      const cardData = await api.getContent();
      setCards(cardData);
    } catch (err) {
      console.error(err);
    }
  };

  // HANDLE SEARCH AND FILTER RESULT
  const handleSearchResult = useCallback(
    (cards) => {
      if (cards) {
        if (!selectedOption && searchTerm) {
          const result = cards.filter((card) => {
            return card.name.common
              .toLowerCase()
              .includes(searchTerm.toLowerCase());
          });
          setFilterAndSearchResult(result);
        } else if (selectedOption && searchTerm) {
          const filtered = cards.filter((card) => {
            return card.region === optionsList[selectedOption];
          });
          const result = filtered.filter((card) => {
            return card.name.common
              .toLowerCase()
              .includes(searchTerm.toLowerCase());
          });
          setFilterAndSearchResult(result);
        } else if (selectedOption && !searchTerm) {
          const result = cards.filter((card) => {
            return card.region === optionsList[selectedOption];
          });
          setFilterAndSearchResult(result);
        } else {
          setFilterAndSearchResult(null);
        }
      }
    },
    [selectedOption, searchTerm],
  );

  // SET CARDS STATE WHEN MOUNTING
  useEffect(() => {
    getContent();
  }, []);

  // SET FOUND CARDS STATE WHEN MOUNTING
  useEffect(() => {
    handleSearchResult(cards);
  }, [cards, handleSearchResult]);

  // HANDLE SEARCH CHANGE
  const handleSearchChange = useCallback((input) => {
    setSearchTerm(input);
  }, []);

  // TOGGLE THEME
  const toggleTheme = useCallback(() => {
    setDarkThemeClass(!isDarkTheme);
  }, [isDarkTheme]);

  // TOGGLE OPEN\CLOSE MENU OPTIONS
  const toggleOptionMenu = useCallback(() => {
    setOptionsClass(!isOptionsOpen);
  }, [isOptionsOpen]);

  // SET SELECTED OPTION AND CLOSE DROPDOWN MENU
  const setOptionAndClose = useCallback((index) => {
    setSelectedOption(index);
    setOptionsClass(false);
  }, []);

  return (
    cards && (
      <div className='app__content'>
        <Routes>
          <Route
            path='/*'
            element={
              <PageContent
                isDarkTheme={isDarkTheme}
                onThemeToggleClick={toggleTheme}
                onSearchChange={handleSearchChange}
                searchTerm={searchTerm}
                isOptionsOpen={isOptionsOpen}
                onOptionMenuClick={toggleOptionMenu}
                onOptionSelect={setOptionAndClose}
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

/* TODO На основе Антарктики поработать с пустыми полями карточки */
/* TODO Lazy Load на отрисовку карточек */
/* TODO Адаптив */
/* TODO Доступность */
/* TODO Переделать циклы в методы */
/* TODO В RegionSelect сценарии для различных кнопок */
/* TODO Новая файловая структура */
/* TODO Сделать заглушку если поиск не дал результатов */
/* TODO Подумать над подставлением региона в название фильтра */
