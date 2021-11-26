import React from 'react';
import porTodas from '../utils/porTodas.mp3';
import useSound from 'use-sound';
import { useEffect, useState } from 'react';

const Player = () => {
    const [play, {pause}] = useSound(porTodas, {volume: 0.3})
    const [playing, setPlaying] = useState(true)
    useEffect(()=>{
      play()
    }, [play])
    const handlePlayer = () => {
        if(playing){
            pause()
            setPlaying(false)
        } else{
            play()
            setPlaying(true)
        }
    }
    return (
            <p style={{margin: 0}} onClick={()=> handlePlayer()}>música {playing ? 'OFF': 'ON'}</p> 
    );
};

export default Player;