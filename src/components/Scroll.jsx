import React from 'react';
import {FaRegArrowAltCircleUp} from 'react-icons/fa'
import { UpArrow } from './Styles';

const Scroll = () => {
    const scrollUp = () => {
        window.scroll(0, 0)
    }
    return (
        <UpArrow onClick={()=>scrollUp()}><FaRegArrowAltCircleUp/></UpArrow>

    )
} 
    
export default Scroll;