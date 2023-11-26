import '../styles/Gameboard.css'
import Card from '../components/Card'

export default function Gameboard({ cards, handleClick }) {

    return (
        <div className="gameboard">
            {cards && cards.map(card =>
                <Card
                    key={card.id}
                    handleClick={handleClick}
                    id={card.id}
                    image={card.image}
                    name={card.name}
                />)}
        </div>
    )
}