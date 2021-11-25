import React from 'react';
import BandcampPlayer from 'react-bandcamp'
import { BCcont, TextContainer, Credits} from './Styles';
const Bandcamp = ({size, direction}) => {
    const width = size < 450 ? '100%' : '50%'
    return (
        <BCcont direction={direction} id='album'>
                <BandcampPlayer style={{height: '100%'}} tracklist={false} size={size < 450 ? 'small' : 'large'} album='149443081'/>
            <TextContainer width={width}>
               
                <p className='text'><b>Las cosas que no se nombran</b> es el último material de <b>TORA</b>, en colaboración 
                    con <b>Tuti Posse</b> y <b>Wi11o</b> (Guillermo Coronel), donde experimentan la fusión del folcklore argentino y 
                    rioplatense con sónidos electrónicos, con una lírica que busca exteriorizar sentimientos de reonocimiento de sí mismxs y otxs. 
                    <br/>El EP fue realizado gracias al apoyo del <b>Centro Cultural Recoleta</b> y el <b>British Council</b>,
                     en el marco de la convocatoria <i>"Creación para músicxs"</i>, 
                     donde el grupo fue premiado con 1 de las 6 becas disponibles para la producción de canciones en medio de la pandemia por el COVID-19.
                </p>
                <Credits>Fotografías por <a href='https://www.instagram.com/macarena_aha/' target='_blank' rel="noreferrer"> Macarena Ifran</a><br/></Credits>
            </TextContainer>
        </BCcont>
    );
};

export default Bandcamp;