import React, { useState, useEffect } from 'react'
import './styles/App.css'
import Header from './components/Header.jsx'
import Gameboard from './components/Gameboard.jsx';
import StartGame from './components/StartGame.jsx';
import InfoModal from './components/InfoModal.jsx';


function App() {
  const [gameState, setGameState] = useState({
    allCards: [], // All available cards
    currentCards: [], // Current round cards
    selectedCards: [], // User selected cards
    score: 0,
    highestScore: localStorage.getItem('highestScore') || 0
  })
  const [isFlipped, setIsFlipped] = useState(false)
  const [isGameOn, setIsGameOn] = useState(false)
  const [isInfoModal, setIsInfoModal] = useState(false)

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

  useEffect(() => {
    fetchCards();
  }, []);

  const handleCardClick = (card) => {
    const { selectedCards, score } = gameState

    if (!selectedCards.some((selectedCard) => selectedCard.id === card.id)) {
      const newScore = score + 1;
      const newSelectedCards = [...gameState.selectedCards, card];
      setGameState((prevState) => ({
        ...prevState,
        score: newScore,
        selectedCards: newSelectedCards
      }))
    }
    else {
      handleGameOver();
    }
    fetchCards()
  }

  const selectCardsForRound = () => {
    setIsFlipped(true)
    const { allCards, selectedCards } = gameState;
    // Filter all cards with an image and 
    const shuffledAllCards = [...allCards].filter((card) => card.image && typeof card.image === 'string' && card.image.length > 0)
      .sort(() => Math.random() - 0.5)
    // Select one card from selectedCards array
    const randomlySelectedCard = selectedCards.length > 0 ?
      selectedCards[Math.floor(Math.random() * selectedCards.length)] :
      null;

    // Ensure the randomly selected card is not duplicated
    const newRoundCards = randomlySelectedCard ?
      [randomlySelectedCard, ...shuffledAllCards
        .filter(card => card.id !== randomlySelectedCard.id)].slice(0, 4) :
      [...shuffledAllCards].slice(0, 4);

    const shuffledCards = [...newRoundCards].sort(() => Math.random() - 0.5)
    // update cards for that round
    setGameState((prevState) => ({
      ...prevState,
      currentCards: shuffledCards
    }))

    setTimeout(() => {
      setIsFlipped(false)
    }, 3000)
  }

  const handleGameOver = () => {
    if (gameState.score > gameState.highestScore) {
      const newHighestScore = gameState.score
      setGameState((prevState) => ({
        ...prevState,
        highestScore: newHighestScore
      }))
    }
    localStorage.setItem('highestScore', gameState.score.toString());
    resetGame();
  }

  const resetGame = () => {
    setGameState((prevState) => ({
      ...prevState,
      score: 0,
      currentCards: [],
      selectedCards: [],
      allCards: []
    }))
  }

  const handleStartGame = () => {
    setIsGameOn(true)
    selectCardsForRound()
    console.log(isGameOn)
  }

  return (
    <div className="App">
      {!isGameOn ?
        (<StartGame handleInfo={() => setIsInfoModal(!isInfoModal)} handleStartGame={handleStartGame} />)
        :
        <>
          <Header score={gameState.score} highestScore={gameState.highestScore} />
          <Gameboard isFlipped={isFlipped} handleClick={handleCardClick} cards={gameState.currentCards} />
        </>

      }
      <InfoModal handleCancel={() => setIsInfoModal(false)} isInfoModal={isInfoModal} />
    </div>
  )
}

export default App
