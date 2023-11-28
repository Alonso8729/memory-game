import bgImage from '../assets/hp-logo.png'
import '../styles/Header.css'

export default function Header({ score, highestScore, onClick }) {

    return (
        <header>
            <img onClick={onClick} className='logo' src={`${bgImage}`} />
            <div className="scoreboard">
                <p>SCORE: {score}</p>
                <p>HIGHEST SCORE: {highestScore}</p>
            </div>
        </header>
    )
}