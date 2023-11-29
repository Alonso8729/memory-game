import '../styles/GameOver.css'
import cancel from "../assets/cancel.png"
import GIF from './GIF'

export default function GameOver({ isGameOver, onClose, handleStart }) {

    return (
        <div className={isGameOver ? `modal-container` : 'hidden'}>
            <div className="modal-card">
                <img className='cancel-btn' onClick={onClose} src={`${cancel}`} alt="cancel" />
                <h2 className='over-title'>Game Over!</h2>
                <GIF className="gif" />
                <button onClick={handleStart} className='again'>Play Again</button>
            </div>
        </div>
    )
}