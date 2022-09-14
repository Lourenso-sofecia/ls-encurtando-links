import React from 'react'
import styled from 'styled-components';

import { mobile } from "../data/responsive";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    width: 100vw;
    height: 37vh;
    ${mobile({ height:"27vh"})}
`;
const Title = styled.h2`
    font-size: 2.3em;
    font-weight: 700;

    ${mobile({ fontSize:"1.6em"})}
`;
const ContainerTexto = styled.div`
    width: 36vw;
    margin-top: -30px;
    display: flex;
    justify-content: center;
    align-items: center;
    ${mobile({width:"80vw", padding:"10px", fontSize:"15px"})}
`;  
const Texto = styled.p`
    color: hsl(257, 7%, 63%);
    text-align: center;
`;

export const TextMind = () => {
  return (
    <Container>
        <Title>
            Advanced Statistics
        </Title>
        <ContainerTexto>
            <Texto>
                Track how your links are performing across the web with our advanced statistics dashboard
            </Texto>
        </ContainerTexto>
        
    </Container>
  )
}
