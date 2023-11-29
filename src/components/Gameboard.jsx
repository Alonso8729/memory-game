import '../styles/Gameboard.css'
import Card from '../components/Card'

export default function Gameboard({ cards, handleClick, isFlipped, onVisible }) {
    return (
        <div className={onVisible ? `hidden` : 'gameboard'}>
            {cards && cards.map(card =>
                <Card
                    handleClick={handleClick}
                    card={card}
                    isFlipped={isFlipped}
                />)}
        </div>
    )
}