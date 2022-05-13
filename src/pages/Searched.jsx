import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import styled from 'styled-components'
import {Content ,Wrap,media} from '../globalStyles'



function Searched() {
    const [searchRecipe, setSearchRecipe] = useState([])
    let params= useParams();



    const getSearch=async (name) =>{
        const api= await fetch(
            `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}&number=6`)
        const data = await api.json();
        setSearchRecipe(data.results) 
    } 

    useEffect(()=>{
        getSearch(params.search)
    },[params.search])

  return (
    <Content>

    <Wrap>
        
        {searchRecipe.map((item)=>{
            return(
                <SLink to={"/recipe/" +item.id}>
                    <Card key={item.id}>
                        <img src={item.image} alt=''/>
                        <h4>{item.title}</h4>
                    </Card>
                </SLink>
            )
        })
        }
    
    </Wrap>
</Content>
)
}



const SLink= styled(Link)`
    text-decoration: none;
    color:black;
`
const Card= styled.div`
width: 400px;
img{
width: 100%;
}
`;
  


export default Searched