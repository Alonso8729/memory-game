import bgImage from '../assets/hp-logo2.png'
import '../styles/Header.css'

export default function Header() {

    return (
        <header>
            <img className='logo' src={`${bgImage}`} />
            <div className="scoreboard">
                <p>SCORE: </p>
                <p>HIGHEST SCORE: </p>
            </div>
        </header>
    )
}