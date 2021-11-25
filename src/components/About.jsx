import React from 'react';
import { AboutCont, Credits, ImgCont } from './Styles';
import {Image} from 'react-bootstrap'
import img1 from '../utils/1.jpg'
import img2 from '../utils/2.jpg'
import img3 from '../utils/3.jpg'


const About = ({size}) => {
    const direction = size < 910 ? 'column' : 'row';

    return (
        <>
        <AboutCont>
            <p><b>Tora</b> es el grupo solista de Macarena Zalazar, donde se despliega como compositora, cantante, pianista y productora. <br/>
                Sus letras, en su mayor parte autorreferenciales, exploran las diferentes formas de vincularse y las realidades de esto siendo mujer.
                Musicalmente difícil de encasillar, ya que contiene elementos tanto del jazz, como del rock y el pop, 
                con elementos folklóricos y grooveros dentro del formato canción.
            </p>
        </AboutCont>
        <ImgCont direction={direction}>
            <Image className='img' src={img1} fluid/>
            <Image className='img'  src={img3} fluid/>
            <Image className='img'  src={img2} fluid/>
        </ImgCont>
        <Credits>Fotografías por <a href='https://www.instagram.com/nadialguzman/' target='_blank' rel="noreferrer"> Nadia Guzman</a></Credits> 
            
        </>
    );
};

export default About;