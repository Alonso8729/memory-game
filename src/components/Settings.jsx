import { React, useState } from 'react'
import '../styles/Settings.css'

export default function Settings({ isVolumeOn, setIsVolume }) {
    const [audio] = useState(new Audio('../assets/theme.mp3'));

    const toggleVolume = () => {
        setIsVolume(!isVolumeOn);

        if (!isVolumeOn) {
            audio.play().catch((error) => {
                console.error('Error playing audio:', error);
            });
        } else {
            audio.pause();
            audio.currentTime = 0;
        }
    };

    return (
        <div className="settings">
            <div className="icon-container">
                <i onClick={toggleVolume} className={`fa-solid fa-volume-${isVolumeOn ? 'high' : 'xmark'}`}></i>
            </div>
        </div>
    )
}