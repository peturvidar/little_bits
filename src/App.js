import "./App.css";
import Home from "./pages/Home";
import Drinks from "./pages/Drinks";
import Food from "./pages/Food";
import Carousel from "./pages/carousel";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Logo from './images/lilbits.png';




const Container1 = styled.div`
background: white;
min-height: 100vh;
display:flex;
flex-direction: column;
align-items: center;
justify-content: center;
font-size: calc(10px + 2vmin);
color: white;
z-index: 1;
`;

const Container2 = styled.div`
background-color: '#3e6053';
margin-top: 150px;
height: 600px;
width: 800px;
align-items: center;
justify-content: center;
display: flex;
border: 2px solid black;
z-index: 2;
`;

const NavBar = styled.nav`
position: absolute;
top: 0;
padding: 20px;
border: 1px solid black;
width: 1000px;
justify-content: space-evenly;
display:flex;

`;



const App = () => {
  return (
    <Container1>

      <Container2>
        <Router>
          <Routes>
            <Route exact path="home" element={<Home />} />
            <Route exact path="food" element={<Food />} />
            <Route exact path="drinks" element={<Drinks />} />
          </Routes>
          <NavBar>
            <img src={Logo} alt="logo"></img>
            <Link to="/home">Home</Link>
            <Link to="/food">Food</Link>
            <Link to="/drinks">Drinks</Link>
          </NavBar>

        </Router>
      </Container2>
    </Container1>
  
      
  
  );
};

export default App;
