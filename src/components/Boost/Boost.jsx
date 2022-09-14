import React from 'react'
import styled from 'styled-components';

import { mobile } from "../data/responsive";
import desktop from "../img/bg-boost-desktop.svg";
import mobileBoots from "../img/bg-boost-mobile.svg";


const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    background-color: hsl(257, 27%, 26%);
    
    background-image: url(${desktop});
    
    background-repeat: no-repeat;
    background-position: right top;
    color: white;
    height: 27vh;
    background: url;
    ${mobile({ height:"38vh", backgroundImage:"{url(${mobileBoots})} ", backgroundPosition: "left"})}
`;
const Button = styled.button`
    width: 130px;
    font-weight: 700;
    border: none;
    border-radius: 20px;
    padding: 12px 25px;
    margin: 0px 40px 5px 5px;
    color: white;
    background-color: hsl(180, 66%, 49%);
    
    
    &:hover {
        background-color: hsl(180, 62.26415094339619%, 79.2156862745098%);
        color: white;
        cursor: pointer;
    }
    ${mobile({ width: "170px;", margin:"0px 0px 0px 0px"})}
`;
const Title = styled.h2`
    font-size: 2.3em;
    ${mobile({ fontSize:"1.5em", padding:"40px 0px 0px 0px"})}
`;

export const Boost = () => {
  return (
    <Container>
        <Title>
            Boost your links today
        </Title>
        <Button>Get Started</Button>
    </Container>
  )
}