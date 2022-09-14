import React from 'react'
import styled from "styled-components";

import { mobile } from "../data/responsive";

import illustration from "../img/illustration-working.svg";

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50vh;
    
    color: hsl(257, 7%, 63%);
    font-weight: 700;

    ${mobile({height:"", flexDirection:"column", padding:"30px 30px", textAlign: "center"})}
`;
const ContainerImg = styled.span`
    padding: 0px 70px 0px 1px;
    
    ${mobile({height:"45vh", width:"10px", padding: "0px 0px 0px 0px", marginTop: "-60px" })}
`;
const Img = styled.img`
    color: #9ba79a;
    ${mobile({height:"35vh", })}
`;

const Button = styled.button`
    width: 130px;
    font-weight: 700;
    border: none;
    border-radius: 20px;
    padding: 12px 25px;
    margin: 30px 40px 5px 5px;
    color: white;
    background-color: hsl(180, 66%, 49%);;
    
    &:hover {
        background-color: hsl(180, 62.26415094339619%, 79.2156862745098%);
        color: white;
        cursor: pointer;
    }
    ${mobile({width:"170px", margin:"10px 0px 0px",})}
`;
const SubContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 50vw;
    ${mobile({width:"100vw", justifyContent:"center", alignItems:"center", order: "2"})}
    
`;
const SubContainer2 = styled.div`
    display: flex;
    flex-direction: column;
    width: 50vw;
    ${mobile({width:"100vw", justifyContent:"center", alignItems:"center", order: "1", margin: "10px 340px 0px 9px"})}
`;
const Title = styled.h1`
    font-size: 3em;
    color: hsl(260, 8%, 14%);
    font-weight: 800;
    ${mobile({fontSize: "2em", letterSpacing: "0px"})};
`;
const Text = styled.p`
    font-size: 1em;
    margin-top: -30px;
    ${mobile({fontSize: "1em", marginTop: "-10px", padding:"0px 37px"})}

`;
export const Lading = () => {
  return (
    <Container>
        <SubContainer>
            <Title>More than just shorter links</Title>
            <Text>Build your brand´s recognition and get detailed insights on how your links are performing</Text>
            <Button>Get Started</Button>
        </SubContainer>
        <SubContainer2>
            <ContainerImg>
                <Img src={illustration} alt="illustration" />
            </ContainerImg>
        </SubContainer2>
    </Container>
  )
}
