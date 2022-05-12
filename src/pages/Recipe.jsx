import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'

function Recipe() {
    const [recipe,setRecipe] = useState({})
    const [btnActive,setBtnActive] = useState('instructions')
    let params= useParams();

    const getRecipe=async () =>{
        const api= await fetch(`
        https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`);
        const data = await api.json();
        setRecipe(data)
    }

    useEffect(()=>{
      getRecipe(params.name)
    },[params.name]);

    console.log(btnActive)


  return (
    <Container>
      <Wrap>
        
        <Left>
          <h2>{recipe.title}</h2>
          <img src={recipe.image} alt="" />
        </Left>
        <Right>
         
            <Button className={btnActive === 'instructions'? 'active':''} 
            onClick={()=> setBtnActive('instructions')}>
              Instruction
            </Button>
            <Button className={btnActive === 'ingredients'? 'active':''} 
            onClick={()=> setBtnActive('ingredients')}>
              Ingredients
            </Button>
         
          {btnActive === 'instructions' && (
            <div>
              <h3 dangerouslySetInnerHTML={{ __html: recipe.summary }}></h3>
              <h3 dangerouslySetInnerHTML={{ __html: recipe.instructions }}></h3>

            </div>
          )

          }
          {btnActive === 'ingredients' &&(
              <ul>
              {recipe.extendedIngredients.map((ingredient) =>(
                  <li key={ingredient.id}>{ingredient.original}</li>
              ))}
          </ul> 
          )

          }

        </Right>
      </Wrap>
    </Container>
  )
}

const Container = styled.section`
margin-top:5rem;
width:1200px;
margin:5rem auto 0; `;
const Wrap = styled.div`
display:flex;
justify-content: center;
width: 100%;
column-gap: 2rem;
.active{
  background-color: #fff;
  color: black;

  border: black solid .15rem;
}

`;
const Left = styled.div`
text-align:center;
h2{
  margin-bottom: 2rem;
}`;
const Right = styled.div`
h3{
  margin-top: 2rem;
  text-decoration: none;
  font-size:1.1rem;
  font-weight: 400;
}
a{
  text-decoration: none;
  color:black;
}
ul{
  list-style: none;
  margin-top: 2rem;
  
}
li{
  font-size:medium;
  line-height:2rem;
}


`;

const Button= styled.button`
text-align:center;
background-color: black;
color:#fff;
padding:1rem 2rem;
border:none;
border-radius: 1.5rem;
margin-right: 2rem;
font-weight: 600;


`;




export default Recipe