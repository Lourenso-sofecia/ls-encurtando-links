import React, {useEffect, useState} from 'react';

import styled, { withTheme } from "styled-components";

import { mobile } from "../data/responsive";

import { Search } from '../context/Search';

import desktop from "../img/bg-shorten-desktop.svg";
import mobileShorten from "../img/bg-shorten-mobile.svg";

const Container = styled.div`

    height: 13vh;
    padding: 50px 0px 0px 50px;

    border-radius: 9px;
    background-color: hsl(257, 27%, 26%);
    background-image: url(${desktop});
    background-repeat: no-repeat;
    background-position: left top;

    margin-top: -10px;
    margin-bottom: -10px;
    margin-left: 100px;
    margin-right: 130px;
    font-weight: 700;
    
    ${mobile({ height:"22vh", width:"84vw", padding:"10px",margin:"80px 20px 20px 20px", backgroundImage:"{url(${mobileShorten})} ", backgroundPosition: "left top"})}
    
`;
const Button = styled.button`

    font-weight: 700;
    border: none;
    border-radius: 9px;
    padding: 18px 0px;
    width: 10vw;
    margin: 0px 5px;
    color: white;
    background-color: hsl(180, 66%, 49%);;
    
    &:hover {
        background-color: hsl(180, 62.26415094339619%, 79.2156862745098%);
        color: white;
        cursor: pointer;
    }
    
    ${mobile({width: "80vw",margin:"9px", padding:"15px 25px", borderRadius: "6px"})}
`;
const SubContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${mobile({display:"flex", flexDirection:"column" })}
    
`;
const Text = styled.p`
    color: hsl(0, 87%, 67%);
    padding-top: 20px;
    margin-top: -10px;
    display:"flex";
    
    ${mobile({ display: "none"})}
`;

const InputContainer = styled.div`
    ${mobile({display:"flex", flexDirection:"column", })};
    
`;
const Textmobile = styled.p`
    color: hsl(0, 87%, 67%);
    padding-top: 10px;
    margin-top: -10px;
    margin-bottom: -3px;
    padding-left: 10px;
    font-size: 0.7em;
    display: none;
    ${mobile({display:"flex"})};

`;
const InputSearch = styled.input`
    padding: 18px 25px;
    margin-right: 10px;
    border-radius: 9px;
    border: 3px solid hsl(0, 87%, 67%);
    width: 64vw;
    ::placeholder{
        font-weight: 700;
        color: hsl(0, 87%, 67%);
        
        &:hover {
            border: 3px solid hsl(0, 87%, 67%);
        }
        color: ${ props=>props.color};
    }
    ${mobile({margin:"10px", padding:"15px 25px"})}
`; 

export const Input = ({handleInfoAddition}) => {

    const [list, setList] = useState([]);
    
    const [search, setSearch] = useState('');
    const [add, setAdd] = useState('');

    const [mensagem, setMensagem] = useState('');

    

    const handleClick = () => {
        if(search.length > 0)
        {
            
            handleInfoAddition(list);
            console.log("ser", search, "list", list.result.original_link);
            setMensagem("");
            if(list.ok=== false)
            {
                alert("Link not found, 400 error");    
            }
           
            setSearch("");
        }
        else{
            setMensagem("Please add a link");
            alert(list.error);
        }
    };

    const url = `https://api.shrtco.de/v2/shorten?url=https://`;

    const  urlLink = url + search;
    console.log("1",urlLink,"search:",search);
    
    useEffect(() => {
        fetch(urlLink)
        .then((response) => response.json())
        .then((data) => setList(data))
        .catch((err) => {
            console.error(err.message);
            //alert(err.message);
        });

    },[handleClick]);

    const handleChange = (e) => {
        console.log(e.target.value);
        setSearch(e.target.value); 
    };

    
  return (
    <>
        <Container>

            <SubContainer>
                <InputContainer>
                    <InputSearch
                        name='search'
                        type = "text"
                        value={search}
                        placeholder = 'Shorten a link here...'
                        onChange = {handleChange}
                        color = ""
                    />
                    <Textmobile>{mensagem}</Textmobile>
                    <Button onClick = {handleClick}>Shorten It!</Button>
                </InputContainer>
                
            </SubContainer>
            <Text>{mensagem}</Text>
            
        </Container>
        
        {
            !list.result ? "No results" : <div> <p> {list.result.original_link} </p> <p> {list.result.full_short_link2} </p></div>
        }
        
        
        {/*
            <p>p{list.result.full_short_link2}12</p>
            <Search/>
            <Search/>
            <Search/>
<<<<<<< HEAD
        */}
        
    </>
  )
}