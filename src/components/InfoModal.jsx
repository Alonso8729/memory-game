import '../styles/InfoModal.css'
import cancel from "../assets/cancel.png"


export default function InfoModal({ isInfoModal, handleCancel }) {
    return (
        <div className={` ${isInfoModal ? 'modal-container' : 'hidden'}`}>
            <div className="modal-card">
                <img className='cancel-btn' onClick={handleCancel} src={`${cancel}`} alt="cancel" />
                <p>1. Click "Start Game"</p>
                <p>2. Pick a card each round</p>
                <p>3. Game over if you pick the same card twice</p>
                <p>4. Enjoy the magical challenge!</p>
            </div>
        </div>
    )
}