import '../styles/Card.css'

export default function Card({ card, handleClick, isFlipped }) {


    return (
        <div onClick={!isFlipped ? () => handleClick(card) : undefined}
            className={`card ${isFlipped ? 'is-flipped' : ''}`}
            key={card.id}
        >
            <div className="card-content" style={{ display: `${isFlipped ? 'none' : ''}` }}>
                <img src={card.image} />
                <p>{card.name}</p>
            </div>
        </div>
    )
}