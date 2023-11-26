import '../styles/Card.css'

export default function Card({ id, image, handleClick, name }) {
   

    return (
            <div /*onClick={() => handleClick(id)}*/
                className="card"
            >
                <div className="card-content">
                    <img src={image} />
                    <p>{name}</p>
                </div>
            </div>
    )
}