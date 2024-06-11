import React from 'react'
import pass from './audio/passcode.ogg'

const Audios = () => {

    const terminalAudio = (url) => {
        const sounds = new Audio(url);

        sounds.play();
    }
    
    
    return (
        <>
            <audio id='passed' src={pass}/>
        </>
    )
}

export default Audios