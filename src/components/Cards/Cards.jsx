import React from 'react';

// COMPONENTS IMPORT
import Card from '../Card/Card.jsx';

// TEMP
import cardsData from '../../assets/data.json';

// CARDS COMPONENT
function Cards({ isDarkTheme }) {
  return (
    <section className='cards'>
      <ul className='cards__wrapper'>
        {cardsData.map((card, index) => (
          <Card card={card} key={index} isDarkTheme={isDarkTheme} />
        ))}
      </ul>
    </section>
  );
}

export default Cards;
