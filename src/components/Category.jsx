import React from 'react'
import styled from 'styled-components'
import {FaPizzaSlice} from 'react-icons/fa'
import {GiTacos,GiChopsticks,GiNoodles} from 'react-icons/gi'
import {NavLink} from 'react-router-dom';


function Category() {
  return (
    <ListaLinks>
      <SLink to="/cuisine/Mexican">
        <GiTacos/>
        <p>Mexican</p>
      </SLink>
      <SLink to="/cuisine/Italian">
        <FaPizzaSlice/>
        <p>Italian</p>
      </SLink>
      <SLink to={'/cuisine/Japanese'}>
            <GiChopsticks/>
            <p>Japanese</p>
      </SLink>
      <SLink to={'/cuisine/Chinese'}>
            <GiNoodles/>
            <p>Chinese</p>
      </SLink>
      
    </ListaLinks>
  )
}
const ListaLinks=styled.div`
display: flex;
column-gap: .5rem;
text-align: center;
justify-content: center;

`
const SLink= styled(NavLink)`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
border-radius:50%;
margin-right:2rem;
text-decoration:nome;
background:black;
width:5rem;
height:5rem;
cursor:pointer;
transform:scale(0.8);

svg{
  color:white;
  width:25px;
  height: 25px;
}
p{
  text-decoration: none;
  color: white;
  font-size: .905rem;
}
`

export default Category