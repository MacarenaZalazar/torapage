import React from 'react';
import porTodas from '../utils/porTodas.mp3';
import useSound from 'use-sound';
import { useEffect, useState } from 'react';

const Player = () => {
    const [play, {stop}] = useSound(porTodas)
    const [playing, setPlaying] = useState(true)
    useEffect(()=>{
      play()
    }, [play])
    const handlePlayer = () => {
        if(playing){
            stop()
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