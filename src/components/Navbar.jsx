import React, { useState } from 'react';
import styled from 'styled-components';
import {GiCook} from 'react-icons/gi';
import {Link, useNavigate} from 'react-router-dom'
import {GoSearch} from 'react-icons/go'

function Navbar() {
    const[input,setInput] = useState("")
    const navigate =useNavigate();

    const submitHandler = (e)=>{
        e.preventDefault();
        navigate('/searched/'+input)
    }

  return (
    <NavbarContainer>
        <NavWrap>
            <GiCook/>
            <Logo to="/">MasterCook</Logo>
        </NavWrap>
        <FormStyled onSubmit={submitHandler}>
            <InputContainer>
                <Input  
                    onChange={(e)=> setInput(e.target.value)}
                    value={input} 
                    type="text"
                />
                <Button onClick={submitHandler}>
                    <GoSearch/>
                </Button>
            </InputContainer>
        </FormStyled>
    </NavbarContainer>
  )
};

const NavbarContainer= styled.div`
    width:100%;
    height: 200px;
    text-align:center;
    background: #000;
`;
const NavWrap= styled.div`
padding-top:2rem;
display:flex;
align-items:center;
justify-content:center;
margin-bottom: 2rem;
 
svg{
    font-size:3rem;
    color: #fff;
}
`;


const Logo= styled(Link)`
    text-decoration: none;
    color:#fff;
    font-family: 'Oleo Script Swash Caps', cursive;
    font-weight:700;
    font-size: 2rem;
`;
const FormStyled= styled.form`

`;
const InputContainer= styled.div`
width:100%;
display: flex;
justify-content: center;
align-items: center;


`;
const Input= styled.input`
width: 400px;
height: 30px;
border-radius:2rem;
border: none;
padding: 0.5rem 2rem;

&::placeholder{
    padding-left: 1rem;
   
}

`;
const Button=styled.div`
width: 60px;
height: 30px;
background-color:white;
border-radius:2rem;
margin-left: 0.5rem;
display: flex;
justify-content: center;
align-items: center;
svg{
    color:black;
    
}
`;


export default Navbar