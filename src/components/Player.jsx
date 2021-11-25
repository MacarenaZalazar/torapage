import React from 'react';

const Player = ({play, stop, playing, setPlaying}) => {
    const handlePlayer = () => {
        if(playing){
            stop()
            setPlaying(false)
        } else {
            play()
            setPlaying(true)
        }
    }
    return (
        <div>
            <p>música <span onClick={()=> handlePlayer}>{playing ? 'off': 'on'}</span></p> 
        </div>
    );
};

export default Player;