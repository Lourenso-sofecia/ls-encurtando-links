import React, {useState} from 'react';

import { mobile } from "../data/responsive";

import styled from "styled-components";

const Container = styled.div`
    //padding: 60px 0px 50px 50px;
    height: 9vh;
    //width: 90vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 20px;
    border-radius: 9px;
    //background-color: hsl(257, 27%, 26%);
    background-color: white;
    //margin: -10px -10px 100px 100px;
    
    //margin-top: 20px;
    //margin-bottom: 10px;
    //margin-left: 100px;
    //margin-right: 130px;

    margin-top: 30px;
    margin-bottom: 10px;
    margin-left: 100px;
    margin-right: 130px;
    font-weight: 500;
    //border: 1px solid yellow;
    //margin: 10px;
    ${mobile({ padding:"0px 10px", margin:"17px 20px", height:"24vh", flexDirection:"column", justifyContent: "flex-end", alignItems:"flex-start"})}
    //margin-top: 160px; 
`;
const Button = styled.button`

    font-weight: 700;
    border: none;
    border-radius: 9px;
    padding: 15px 0px;// 49px;
    width: 7vw;
    margin: 0px 5px;
    color: white;
    background-color: hsl(180, 66%, 49%);
    
    background-color: ${({ isCopied}) => (isCopied ? "hsl(257, 27%, 26%);" : "hsl(180, 66%, 49%);")};
    &:hover {
        background-color: hsl(180, 62.26415094339619%, 79.2156862745098%);
        color: white;
        cursor: pointer;
        //background-color: ${({ isCopied}) => (isCopied ? "hsl(257, 27%, 26%);" : "hsl(180, 66%, 49%);")};
    }
    ${mobile({width: "80vw",margin:"3px 9px 19px 9px", padding:"15px 25px", borderRadius: "6px"})}
`;
const Texto = styled.p`
    margin: 20px 2px 26px 15px;
    text-align: center;
    ${mobile({margin:"3px 9px 1px 9px", padding:"5px 5px 0px 5px"})}
`;
const Linha = styled.hr`
    display: none;
    ${mobile({width: "100%", display: "flex",background:"#585656", border:"0.1px solid transparent",})}
`;
const Link = styled.span`
    color: hsl(180, 66%, 49%);
    text-align: center;
    padding-top: 12px;
    padding-right: 20px;
    ${mobile({
        padding:"15px 0px 10px 14px",
    })};
    ${mobile({margin:"3px 9px 3px 9px", padding:"0px 5px 5px 5px", textAlign:"left"})}
`;
const Flex = styled.div`
    display: flex;
    padding: 13px;
    ${mobile({
        flexDirection:"column", padding:"0px"
    })};
`;
//--------------------------------------------------------------
export const Search = ({infos}, props) => {
    const [isCopied, SetIsCopied] = useState(false);
    const [texto, SetTexto] = useState("Copy");
    //alert("copiado");
    const handleClick = () => {
        if(SetIsCopied(!isCopied))
        {
            SetTexto("Copied");
        }
        else
        {
            SetTexto("Copied!");
        }
        document.getElementById("texto").Select();
        document.execCommand("copy");
    };
    console.log(infos);
  return (
    <Container>
        <Texto >
            {/*
                <input id ="texto" type="text" readOnly value="https://www.frontendmentor.io"/>
            */
            }
            https://www.frontendmentor.io
            {props.url}
        </Texto>
    
        <Linha />
        <Flex>
            <Link>
                {props.shorten}
                https://rel.link/k4IKyk

            </Link>
            <Button id="botao" onClick ={handleClick} isCopied={isCopied} texto ={texto}>{texto}</Button>
        </Flex>
    </Container>
  )
}
