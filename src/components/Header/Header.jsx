import React, { useState} from 'react'
import styled from "styled-components";

import { mobile } from "../data/responsive";

import logo from "../img/logo.svg";

const Button = styled.button`

    font-weight: 700;
    border: none;
    border-radius: 20px;
    padding: 12px 25px;
    margin: 0px 5px;
    color: white;
    background-color: hsl(180, 66%, 49%);
    &:hover {
        background-color: hsl(180, 62.26415094339619%, 79.2156862745098%);
        cursor: pointer;
    }
    color: ${ props=>props.color};
    background: ${ props=>props.background };
    @media (max-width: 768px) {
        width: 250px;
        margin: 10px 5px;
        padding: 10px 10px;
        color: white;
        background: ${ props=>props.background};
    }
    
`;

//----------------------------------------------------------------------

const Nav = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100px;
    
    width: 90vw;
    flex-wrap: wrap;

    margin: 0px 10px 30px 10px;
    color: white;
`;
const Hamburguer = styled.div`
    display: none;
    flex-direction: column;
    cursor: pointer;

    span {
        height: 2px;
        width: 25px;
        background: hsl(255, 11%, 22%);
        margin-bottom: 4px;
        border-radius: 5px;
    }

    @media (max-width: 768px) {
        display: flex;
    }
    ${mobile({display:"flex"})}
`;
const MenuLink = styled.a`
    padding: 1em 2em;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    color: white;
    transition: all 0.3s ease-in;
    font-size: 0.9em;
    color: black;
    &:hover {
        color: #9ba79a;
    }
    @media (max-width: 768px) {
        color: white;
        
    }
`;
const Menu = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    margin:10px 570px 10px 10px;
    
    @media (max-width: 768px) {
        overflow: hidden;
        flex-direction: column;
        width: 100vw;
        background-color: hsl(257, 27%, 26%);
        height: 150px;
        border-radius: 10px 10px 0px 0px;
        margin: 0px;
        max-height: ${({ isOpen}) => (isOpen ? "300px" : "0")};
    }
`;
const Menu1 = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    @media (max-width: 768px) {
        overflow: hidden;
        flex-direction: flex;
        width: 100vw;
        border: 1px solid hsl(257, 27%, 26%);
        height: 80px;
        Menu{
            //display: none;
            background-color: red;
        }
    }
`;
const Logo2 = styled.img`
    padding: 1em 0px;
    text-decoration: none;
    font-weight: 700;
    font-size:1.7em;
    span {
        font-weight: 300;
        font-size: 1.3em;
    }
`;
const SubMenu = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    @media (max-width: 768px) {
        overflow: hidden;
        flex-direction: column;
        width: 100vw;
        background-color: hsl(257, 27%, 26%);
        height:120px;
        border-radius: 0px 0px 10px 10px;
        margin: 0px 0px 10px 0px;
        padding: 0px 0px 10px 0px;
        padding-bottom: ${({ isOpen}) => (isOpen ? "35px" : "0")};
        max-height: ${({ isOpen}) => (isOpen ? "100px" : "0")};
    }
`;
//----------------------------------------------------------------------
export const Header = () => {

    const [isOpen, setIsOpen] =  useState(false);

  return (
    <>    
        <Nav>
                <Logo2 src={logo} alt="logo-shortly"/>
                <Hamburguer onClick ={() => setIsOpen(!isOpen)}>
                    <span />
                    <span />
                    <span />
                </Hamburguer>
                <Menu isOpen={isOpen}>
                    <MenuLink>Features</MenuLink>
                    <MenuLink>Pricing</MenuLink>
                    <MenuLink>Resources</MenuLink>
                </Menu>
            
            <SubMenu isOpen={isOpen}>
                <Button 
                    color="hsl(255, 11%, 22%);"
                    background ="transparent;"
                >
                    Login
                </Button>
                <Button>Sign Up</Button>
            </SubMenu>
                   
        </Nav>
    </>
  )
}
