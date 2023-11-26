import React, { useState, useEffect } from 'react'
import './styles/App.css'
import Header from './components/Header.jsx'
import Gameboard from './components/Gameboard.jsx';


function App() {
  const [gameState, setGameState] = useState({
    allCards: [], // All available cards
    currentCards: [], // Current round cards
    selectedCards: [], // User selected cards
    score: 0,
    highestScore: localStorage.getItem('highestScore') || 0
  })


  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await fetch('https://hp-api.onrender.com/api/characters')
        const data = await response.json()
        setGameState((prevState) => (
          {
            ...prevState,
            allCards: data
          }
        ))
        selectCardsForRound();
      }
      catch (e) {
        console.error('Error fetching cards: ', e);
      }
    }
    fetchCards();
  }, []);

  useEffect(() => {
    const handleCardClick = (id) => {

    }
  }, [])

  const selectCardsForRound = () => {
    const { allCards, selectedCards } = gameState;
    // Choose 4 cards, 3 random and 1 that already selected
    const randomlySelectedCard = selectedCards.length > 0 ?
      selectedCards[Math.floor(Math.random() * selectedCards.length)] :
      null;
    const newRoundCards = randomlySelectedCard ?
      [randomlySelectedCard, ...allCards].slice(0, 4) :
      [...allCards].slice(0, 4)
    const shuffledCards = [...newRoundCards].sort(() => Math.random() - 0.5)
    // update cards for that round
    setGameState((prevState) => ({
      ...prevState,
      currentCards: shuffledCards
    }))
  }

  const resetGame = () => {

  }

  return (
    <div className="App">
      <Header score={gameState.score} highestScore={gameState.highestScore} />
      <Gameboard /*handleClick={handleCardClick}*/ cards={gameState.currentCards} />
    </div>
  )
}

export default App
