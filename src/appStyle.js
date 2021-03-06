import styled from "styled-components";
export const AppContainer = styled.div`
    text-aling: center;
    object-fit: contain;
    height: 100%;
    width:100%;
    box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.5);
    display:flex;
    flex-direction: column;
    align-items: center;
    background-image: url(${props => props.img});
    background-size: cover;
    background-repeat: no-repeat;
    color:white;
    h1{
        color: white;
        transition: 0.5s ease;
        align-self: center;
    }
`