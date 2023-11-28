import '../styles/StartGame.css'
import bgImage from '../assets/hp-logo.png'


export default function StartGame({ handleStartGame, handleInfo }) {
    return (
        <div className='start-container'>
            <img src={`${bgImage}`} className="image-card" />
            <h2 className='start-title'>Memory Game</h2>
            <div className="buttons">
                <button onClick={handleStartGame} id='start-btn'>Start Game</button>
                <button onClick={handleInfo} id='info-btn'>How to Play</button>
            </div>
        </div>
    )
}