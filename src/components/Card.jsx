import '../styles/Card.css'

export default function Card({ card, handleClick }) {


    return (
        <div onClick={() => handleClick(card)}
            className="card"
            key={card.id}
        >
            <div className="card-content">
                <img src={card.image} />
                <p>{card.name}</p>
            </div>
        </div>
    )
}