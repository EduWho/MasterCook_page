import React, { useEffect, useState } from 'react'
import { useParams,Link } from 'react-router-dom'
import styled from 'styled-components';
import {Content ,Wrap,media} from '../globalStyles'

function Cuisine() {
    const [cuisine,setCuisine] = useState([])
    let params=useParams();

  

    const getCuisine = async (name) =>{
        const api= await fetch(
            `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}&number=12`)
        const data = await api.json();
        setCuisine(data.results)    
    } 

    useEffect(()=>{
        getCuisine(params.type);
    },[params.type])    
   
  return (
    <Content>
        <h3>{params.type}</h3>
        <Wrap>
            
            {cuisine.map((item)=>{
                return(
                    <SLink to={"/recipe/" +item.id}>
                        <Card key={item.id}>
                            <img src={item.image !== 'N/A'? item.image : 'https://via.placeholder.com/400' } alt=''/>
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


export default Cuisine