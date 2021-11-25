import React from 'react';
import { Navbar, Nav, Container} from 'react-bootstrap';
import Logo from '../utils/TORALOGO.png'
import Player from './Player';

const Navigator = () => {
    return (
        <>
            <img id='up' src={Logo} alt="TORA" height={50} style={{margin: '1.5rem'}} />
            <Navbar  bg="transparent" variant='dark' collapse='false' className="justify-content-center" >
            <Container>
                {/* <Navbar.Brand><img className="d-inline-block align-top" width='100' src={Logo} alt="TORA" /></Navbar.Brand> */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#album">Escuchá</Nav.Link>
                    <Nav.Link href="#videos">Video</Nav.Link>                   
                    <Nav.Link href="#links">Redes</Nav.Link>
                    <Nav.Link href="#cafecito">Colaborar</Nav.Link>             
                    <Nav.Link><Player/></Nav.Link>
                    
                </Nav>
            </Navbar.Collapse>
            </Container>
            </Navbar>
        </>
    );
};

export default Navigator;