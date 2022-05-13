import styled, {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
        font-family: 'Poppins', sans-serif;
        
        
    }

    html,body{
        overflow-x:hidden;
        
    }
    
`;
export const media={
    desktop:'@media(max-width:1400px)'
}
export const Content = styled.section`
width: fit-content;
    text-align: center;
    padding-top: 2rem;
    margin: auto;

    h3{
        margin-bottom: 3rem;
    }
`
export const Wrap= styled.div`
    width: 100%;
    text-align: center;
    display: grid;
    grid-template-columns: repeat(4,400px);
    column-gap:2.5rem;
    row-gap: 2.5rem;

    ${media.desktop}{
    grid-template-columns: repeat(3,400px);
    }

`;
export default GlobalStyle
