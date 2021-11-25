import React from 'react';
import { links } from '../utils/data';
import { FaBandcamp, FaFacebook, FaYoutube, FaInstagram, FaSpotify } from "react-icons/fa";
import { LinksContainer } from './Styles';
import {Button} from 'react-bootstrap'



const Links = ({size}) => {
    const btnsize = size < 450 ? 'sm' : 'lg';
    return (
        <LinksContainer id='links'>
            <div className='separator'>
                <p className='title'>Seguime en las redes!</p>
                <div className='divs'>
                    <Button size={btnsize} variant='outline-light' href={links.instagram} target='_blank' rel="noreferrer"><FaInstagram/> instagram</Button>
                    <Button size={btnsize} variant='outline-light'  href={links.facebook} target='_blank' rel="noreferrer"><FaFacebook/> facebook</Button>
                </div>
            </div>
            <div className='separator'>
                <p className='title'>Para Ver y Escuchar</p>
                <div className='divs'>
                <Button size={btnsize} variant='outline-light'  href={links.spotify} target='_blank' rel="noreferrer"> <FaSpotify/> spotify</Button>
                <Button size={btnsize} variant='outline-light'  href={links.youtube}  target='_blank' rel="noreferrer"><FaYoutube/> youtube</Button>
                </div>
            </div>
            <div className='separator'>
                <p className='title'>Adquirí mis discos!</p>
                <div className='divs'>
                    <Button size={btnsize} variant='outline-light'  href={links.bandcamp} target='_blank' rel="noreferrer"> <FaBandcamp/> bandcamp</Button>
                </div>
            </div>
          
        </LinksContainer>
    );
};

export default Links;