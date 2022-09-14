import React, {useState} from 'react';

import styled from "styled-components";

import { mobile } from "../data/responsive";

import logo1 from "../img/logo.svg";
import logo2 from "../img/logo.svg";

const Container = styled.div`
    height: 26vh;
    display: flex;
    flex-direction: column;
    padding: 50px 20px 0px 50px;
    width: 300px;
    border-radius: 5px;
    background-color: white;
    
    font-weight: 700;
    margin-top: ${props => props.marginTop};
    
    ${mobile({ height:"34vh", padding:"20px 20px 0px 20px",margin:"40px 0px 0px 0px"})}
`;
const SubContainer = styled.div`
    display: flex;
    flex-direction: column;
    ${mobile({ height:"180px", padding:"20px 0px 0px 0px",margin:"10px 0px 0px 0px"})}
`;
const Circle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80px;

    border-radius: 50%;
    width: 80px;
    background-color: hsl(257, 27%, 26%);
    margin-top: -92px;
    ${mobile({ margin:"-92px 0px 0px 110px"})}
`;

const Logo = styled.img`

`;
const Text = styled.p`
    color: #b4b1b1;
    padding-top: 20px;
    margin-top: -12px;
`;
const Title = styled.h3`
    color: hsl(260, 8%, 14%);
    font-weight: 800;
`;

export const Card = (props) => {

  return (
    <Container marginTop={props.marginTop}>
        <SubContainer >
            <Circle>
            <Logo src={props.icon} alt="logo-shortly"/>
            </Circle>
            <Title>
                {props.title}
            </Title>
            <Text>
                {props.texto}
            </Text>
        </SubContainer>
        
    </Container>
  )
}
