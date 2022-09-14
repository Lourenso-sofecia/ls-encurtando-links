import React, { useState } from 'react';
import styled from 'styled-components';

import { mobile } from "../components/data/responsive";

import { Header } from '../components/Header/Header';
import { Lading } from '../components/Lading/Lading';
import { Input } from '../components/Input/Input';
import { TextMind } from '../components/TextMind/TextMind';
import { Boost } from '../components/Boost/Boost';
import { Footer } from '../components/Footer/Footer';
import { Cards } from '../components/Cards/Cards';
//import { Search } from '../context/Search';
import { Searchs } from '../components/Searchs/Searchs';


const Container = styled.div`
  padding: 0px 75px;
  height: 80vh;
  background-color: white;
  ${mobile({height:"100vh", padding:"0px 10px"})}
`;
const Container2 = styled.div`
  background-color:hsl(0, 0%, 75%);
  
  ${mobile({ padding:"0px 0px 70px 0px", margin:"0px 0px 0px 0px"})}
`;
export const Home = () => {
  const [info, setInfo] = useState([
    
  ]);

  const handleInfoAddition = (original_link, full_short_link2) => {
    const newinfo = [
      ...info,
      {
        id: Math.random(10),
        info_original_link: original_link,
        info_full_short_link2: full_short_link2
      },
      
    ];
    setInfo(newinfo);
  };

  return (
    <>
      <Container>
        <Header />
        <Lading />
      </Container>
      <Container2>
        
        <Input handleInfoAddition = {handleInfoAddition}/>
        <Searchs info = {info} />

        <TextMind />
        <Cards />
      </Container2>
      
      <Boost />
      <Footer />
    </>
  )
}
