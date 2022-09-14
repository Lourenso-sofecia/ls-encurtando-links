import React from 'react'
import styled from 'styled-components';

import { mobile } from "../data/responsive";

import logo from "../img/logo.svg";
import facebook from "../img/icon-facebook.svg";
import instagram from "../img/icon-instagram.svg";
import pinterest from "../img/icon-pinterest.svg";
import twitter from "../img/icon-twitter.svg";


const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 30vh;
    
    color: white;
    background-color: hsl(260, 8%, 14%);
    font-weight: 700;
    padding: 0px 75px;
    ${mobile({ height:"100vh", flexDirection:"column", justifyContent:"center"})}
`;
const Logo = styled.img`
    font-size: 10px;
    padding-right: 8px;
    height: 40px;
    margin-top: 10px;
    margin-bottom: 100px;
    color: white;

    ${mobile({ display:"center", padding:"0px", justifyContent:"center", alignItems:"center", margin:"0px"})}
`;

const Title = styled.h2`

`;
const SubContainer = styled.div`
 
    padding-left: 90px;

    ${mobile({ display:"center", justifyContent:"center", alignItems:"center"})}
`;
const Item = styled.li`
    list-style: none;
    padding-top: 30px;
    padding-bottom: 20px;
    &:hover {
        color:  hsl(180, 62.26415094339619%, 79.2156862745098%);
        cursor: pointer;
    }
    
    ${mobile({ fontSize:"0.8em", padding:"4px 2px 0px 12px", margin:"20px 80px 20px 0px",textAlign: "center" })}
`;
const SubItem = styled.li`
    list-style: none;
    padding-top: 10px;
    font-weight: 500;
    font-size: 13px;
    &:hover {
        color:  hsl(180, 62.26415094339619%, 79.2156862745098%);
        cursor: pointer;
    }
    ${mobile({ fontSize:"0.6em", padding:"7px", marginLeft:"-78px",textAlign: "center" })}
`;
const Flex = styled.div`
    display: flex;
    ${mobile({ flexDirection: "column" })}
`;
const FlexIcon = styled.div`
    display: flex;
`;
const IconContainer = styled.span`
    margin-bottom: 100px;
    padding-left: 15px;
    color: white;
    &:hover {
        color:  hsl(180, 62.26415094339619%, 79.2156862745098%);
        cursor: pointer;
    }
    ${mobile({ display: "flex", margin:"40px 0px 0px 0px"})}

`;
const Icon = styled.img`
    &:hover {
        color:  hsl(180, 62.26415094339619%, 79.2156862745098%);
        cursor: pointer;
    }
`;
export const Footer = () => {
  return (
    <Container>
        <Logo src={logo} alt="logo-shortly"/>
        <Flex>
        <SubContainer>
            <Item>Features</Item>
            <SubItem>Link Shortening</SubItem>
            <SubItem>Branded Links</SubItem>
            <SubItem>Analytics</SubItem>
        </SubContainer>
        <SubContainer>
            <Item>Resources</Item>
            <SubItem>Blog</SubItem>
            <SubItem>Developers</SubItem>
            <SubItem>Support</SubItem>
        </SubContainer>
        <SubContainer>
            <Item>Company</Item>
            <SubItem>About</SubItem>
            <SubItem>Our Team</SubItem>
            <SubItem>Careers</SubItem>
            <SubItem>Contact</SubItem>
        </SubContainer>
        </Flex>
        
        <FlexIcon>
            <IconContainer>
                <Icon src={facebook} alt="" /> 
            </IconContainer>
            <IconContainer>
                <Icon src={twitter} alt="" />    
            </IconContainer>
            <IconContainer>
                <Icon src={pinterest} alt="" /> 
            </IconContainer>
            <IconContainer>
                <Icon src={instagram} alt="" />    
            </IconContainer>
            
        </FlexIcon>
    </Container>
  )
}

