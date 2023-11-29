import { React, useState, useEffect } from 'react'
import '../styles/Settings.css'
import theme from '../assets/theme.mp3'

export default function Settings({ isVolumeOn, setIsVolume }) {
    const [audio] = useState(new Audio(`${theme}`));

    const toggleVolume = () => {
        setIsVolume(!isVolumeOn);
    };

    useEffect(() => {
        if (isVolumeOn) {
            audio.play().catch((error) => {
                console.error('Error playing audio:', error);
            });
        } else {
            audio.pause();
            audio.currentTime = 0;
        }
    }, [isVolumeOn, audio]);

    useEffect(() => {
        const handleAudioEnd = () => {
            // Reset the audio to the beginning and play again when it ends
            audio.currentTime = 0;
            audio.play().catch((error) => {
                console.error('Error playing audio:', error);
            });
        };

        audio.addEventListener('ended', handleAudioEnd);

        // Clean up event listener on component unmount
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