import React from 'react';
import styled from 'styled-components';

import { mobile } from "../data/responsive";

import { Card } from '../Card/Card';
import logoBrand from "../img/icon-brand-recognition.svg";
import logoRec from "../img/icon-detailed-records.svg";
import logoCus from "../img/icon-fully-customizable.svg";

const Container = styled.div`
  padding: 10px  115px 100px 115px;
  display: flex;
  
  ${mobile({ flexDirection:"column", padding:"0px 20px", textAlign:"center"})}
`;
const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;
  margin: 30px -9px 50px 0px;
  padding: 10px 0px 70px 0px;
  
  ${mobile({display:"none"})}
`;
const Space = styled.div`
    background-color: hsl(180, 66%, 49%);;
    padding-top: 0px;
    width: 40px;
    height: 10px;
    display: flex;
  
    ${mobile({display:"none"})}
`;
const Vertical = styled.div`
  display: none;
  ${mobile({ display:"flex", alignItems: "center", justifyContent: "center", height:"40px", widht:"px", padding:"40px -10px"})}
`;
const Coluna = styled.div`
  background-color: black;
  height: 40px;
  width: 6px;
  margin: 10px;
  padding: 14px 0px;
  background-color: hsl(180, 66%, 49%);
  ${mobile({height:"101px", width:"6px", margin:"100px 10px 10px 18px", padding:"14px 0px", backgroundColor:"hsl(180, 66%, 49%);"})}

`;
export const Cards = () => {
  return (
    <Container>
      
        <Card
          marginTop = "-30px"
          icon ={logoBrand}
          title = "Brand Recognition"
          texto = "Boost your brand recognition with each click. Generic links don´t mean a thing. Branded links help instil confidence in your content"
        />
  
      <Vertical>
        <Coluna></Coluna>
      </Vertical>
      <Flex>
        <Space></Space>
      </Flex>

      <Card
        icon ={logoRec}
        title = "Detailed Records"
        texto = "Gain insights into who is clicking your links. knowing when and where people engage with your content helps inform better decisions."   
      />
      <Vertical><Coluna></Coluna></Vertical>
      <Flex>
        <Space></Space>
      </Flex>
      
        <Card
          marginTop = "30px"
          icon ={logoCus}
          title = "Fully Customizable"
          texto = "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement"
        /> 
      
    </Container>
  )
}
