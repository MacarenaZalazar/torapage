import React from 'react';
import {Button} from 'react-bootstrap'
import { CafecitoCont } from './Styles';
const Cafecito = ({direction}) => {
    const size = direction === 'row' ? '1.6rem' : '1rem'
    console.log(direction)
    return (
        <CafecitoCont direction={direction} size={size} id='cafecito'>
            <p>Si te gusta mi contenido, podés colaborar</p>
            <Button size={direction === 'row' ? 'lg' :'sm'} href='https://cafecito.app/mzmusica' rel='noreferrer' target='_blank' variant='outline-light'>invitándome un cafecito</Button>
        </CafecitoCont>
    );
};

export default Cafecito;