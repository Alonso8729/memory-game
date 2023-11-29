import { React, useState, useEffect } from 'react'
import '../styles/Settings.css'
import theme from '../assets/theme.mp3'

export default function Settings({ isVolumeOn, setIsVolume }) {
    const [audio] = useState(new Audio(`${theme}`));

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

    useEffect(() => {
        const handleAudioEnd = () => {
            audio.currentTime = 0;
            audio.play();
        };
        audio.addEventListener('ended', handleAudioEnd);
        return () => {
            audio.removeEventListener('ended', handleAudioEnd);
        };
    }, [audio]);

    return (
        <div className="settings">
            <div className="icon-container">
                <i onClick={toggleVolume} className={`fa-solid fa-volume-${isVolumeOn ? 'high' : 'xmark'}`}></i>
            </div>
        </div>
    )
}