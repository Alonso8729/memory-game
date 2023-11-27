import '../styles/StartGame.css'
import bgImage from '../assets/hp-logo.png'


export default function StartGame() {
    return (
        <div className='start-container'>
            <img src={`${bgImage}`} className="image-card"/>
        </div>
    )
}