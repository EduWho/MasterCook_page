import React from 'react'
//import {Splide, SplideSlide} from '@splidejs/react-splide'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {useState, useEffect} from 'react'
import {Content ,Wrap,media} from '../globalStyles'


function Home() {

    const [popular,setPopular]= useState([]);
    useEffect(()=>{
        getPopular()
    },[])
    console.log("dasa")
   
    const getPopular = async () =>{
        const api= await fetch(
            `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=12`);
        const data = await api.json();
        setPopular(data.recipes)    
    }


  return (
    <Content>
        <h3>Popular recipes</h3>
        <Wrap>
            
            {popular.map((recipe)=>{
                return(
                    <SLink to={"/recipe/" +recipe.id}>
                        <Card key={recipe.id}>
                        
                            <img src={recipe.image} alt=''/>
                            <h4>{recipe.title}</h4>
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


export default Home