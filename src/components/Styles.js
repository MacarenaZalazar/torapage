import styled from "styled-components";

export const BCcont = styled.div`
    align-self: center;
    display: flex;
    flex-direction: ${props => props.direction};
    justify-content: center;
    margin: 4.5rem 1rem;
    padding: 1rem;
    min-height: 450px;
    
`

export const TextContainer = styled.div`
    color: white;
    display: flex;
    flex-direction: column;
    max-width: ${props => props.width};
    justify-content: center;
    padding: 1rem 3rem;
    min-height: 450px;
    max-width: 500px;
    .text{
        font-size: 1.1rem;

    }
`

export const AboutCont = styled.div`
    transition: 0.5s ease;
    margin: 4rem 1rem; 
    color: white;
    font-size: 1.1rem;
    max-width: 600px;
    text-align: center;
`

export const ImgCont = styled.div`
display: flex;
flex-direction: ${props => props.direction} ;
.img{
    max-height: 300px;
    padding: 0.9rem;

}
`
export const Credits = styled.p`
    color: white;
    margin: 1.5rem
`

export const UpArrow = styled.a`
position: fixed;
color:white;
bottom: 0;
right: 0;
padding-right: 1.6rem;
padding-botom: 3rem;
font-size: 3rem;
    :hover{
        color:#00263b;
    }

`

export const CafecitoCont = styled.div`
color: white;
display: flex;
flex-direction: ${props => props.direction};
align-items: center;
margin: 4.5rem 1rem;
    p{
        font-size: ${props => props.size};
        margin: 1rem 0.7rem;
    }
`

export const VideoCont = styled.div`
    display: flex; 
    margin: 4.5rem 1rem;
`
export const SingleVideo = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    p{
        color: white;
        font-size: 1.4rem;
        padding: 1rem;
    }
`

export const LinksContainer = styled.div`
    color:white;
    font-size: 1.2rem;
    text-align: center;
    margin: 3rem;
    min-width: 350px;
    background-color: rgba(170, 145, 151, 0.6);
   
    border-radius: 1.5rem;
    .separator{
        margin: 2rem;
    }
    .title{
        font-size: 1.6rem;
    }
    .divs{
        margin: 1rem;
        display:flex;
        flex-direction: row;
        align-items: center;
        justify-content:space-around;
    }
    p{
        margin: 0;
    }
`

export const FooterCont = styled.div`
    color: #7f7f7f;
    width: 100%;
    text-align: center;
    margin-top: 2rem;
}

`