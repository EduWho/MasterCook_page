import React from 'react'
//import {Splide, SplideSlide} from '@splidejs/react-splide'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {useState, useEffect} from 'react'


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
                    <Link to={"/recipe/" +recipe.id}>
                        <Card key={recipe.id}>
                        
                            <img src={recipe.image} alt=''/>
                            <h4>{recipe.title}</h4>
                        </Card>
                    </Link>
                )
            })
            }
        
        </Wrap>
    </Content>
  )
}

const Content = styled.section`
width: fit-content;
    text-align: center;
    padding-top: 2rem;
    margin: auto;

    h3{
        margin-bottom: 3rem;
    }
`
const Wrap= styled.div`
    width: 100%;
    text-align: center;
    display: grid;
    grid-template-columns: repeat(4,400px);
    column-gap:2.5rem;
    row-gap: 2.5rem;
`;
const Card= styled.div`
width: 400px;
img{
    width: 100%;
}
`;


export default Home