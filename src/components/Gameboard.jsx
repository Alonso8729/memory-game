import '../styles/Gameboard.css'
import Card from '../components/Card'

export default function Gameboard({ cards, handleClick, isFlipped }) {
    console.log(cards)
    return (
        <div className="gameboard">
            {cards && cards.map(card =>
                <Card
                    handleClick={handleClick}
                    card={card}
                    isFlipped={isFlipped}
                />)}
        </div>
    )
}