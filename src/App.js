import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cuisine from './pages/Cuisine';
import Recipe from './pages/Recipe';
import GlobalStyle from "./globalStyles";
import Category from './components/Category';
import Searched from './pages/Searched';


function App() {
  return (
    <Router>
      <GlobalStyle/>
      <Navbar/>
      <Category/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cuisine/:type' element={<Cuisine/>}/>
        <Route path='/searched/:search' element={<Searched/>}/>
        <Route path='/recipe/:name' element={<Recipe/>}/>
      </Routes>
  </Router>
  );
}

export default App;
