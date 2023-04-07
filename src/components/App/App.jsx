import React, { useCallback, useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

// IMPORT COMPONENTS
import PageContent from '../PageContent/PageContent.jsx';
import DetailPage from '../DetailPage/DetailPage.jsx';
import Cards from '../Cards/Cards.jsx';

// IMPORT API
import * as api from '../../utils/api.js';

// APP CORE COMPONENT
function App() {
  // STATE VARIABLES
  const [isDarkTheme, setDarkThemeClass] = useState(false);
  const [cards, setCards] = useState([]);
  /* const [selectedCard, setSelectedCard] = useState({}); */

  // VARIABLES WITH HOOKS
  /* const navigate = useNavigate(); */

  // SET CARDS STATE WHEN MOUNTING
  useEffect(() => {
    const getContent = async () => {
      try {
        const cardData = await api.getContent();
        setCards(cardData);
      } catch (err) {
        console.error(err);
      }
    };
    getContent();
  }, []);

  // HANDLE THEME SWITCH
  const handleThemeSwitch = useCallback(() => {
    isDarkTheme ? setDarkThemeClass(false) : setDarkThemeClass(true);
  }, [isDarkTheme]);

  // HANDLE CARD CLICK
  /* const handleCardClick = useCallback(
    (card) => {
      setSelectedCard(card);
      navigate(`/${card.cca3.toLowerCase()}`);
    },
    [navigate],
  ); */

  return (
    <div className='app__content'>
      <Routes>
        <Route
          path='/*'
          element={
            <PageContent
              isDarkTheme={isDarkTheme}
              onThemeSwitchClick={handleThemeSwitch}
            />
          }
        >
          <Route
            index
            element={<Cards isDarkTheme={isDarkTheme} cards={cards} />}
          />
          <Route
            path=':countryCode'
            element={<DetailPage cards={cards} isDarkTheme={isDarkTheme} />}
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
