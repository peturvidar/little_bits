import "./App.css";
import Home from "./pages/Home";
import Drinks from "./pages/Drinks";
import Food from "./pages/Food";
import Order from "./pages/Order";
import Receipt from "./pages/Receipt";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Logo from "./pages/images/lilbits.png";
import "@fontsource/playfair-display";
import Header from "./pages/Header";


const Container1 = styled.div`
  min-height: 100vh;
  background-color: #e0e39a;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
  margin-bottom: 50px;
`;

const Container2 = styled.div`
  background-color: "#3e6053";
    height: 600px;
  width: 800px;
  align-items: center;
  justify-content: center;
  display: flex;
  border: 2px solid black;
`;

const NavBar = styled.nav`
  position: absolute;
  background: #C16757;
  top: 0;
  padding: 20px;
  border: 1px solid black;
  width: 1000px;
  justify-content: space-evenly;
  display: flex;
  font-family: "Playfair Display";
  font-weight: bold;
  margin-top: 350px;
`;




const App = () => {
  return (
     <><Header></Header>
     <Container1>
      <Container2>

        <Router>
          <Routes>
            <Route exact path="home" element={<Home />} />
            <Route exact path="food" element={<Food />} />
            <Route exact path="drinks" element={<Drinks />} />
            <Route exact path="order" element={<Order />} />
            <Route exact path="receipt" element={<Receipt />} />
          </Routes>
          <NavBar>
            <Link to="/home">Home</Link>
            <Link to="/food">Food</Link>
            <Link to="/drinks">Drinks</Link>
            <Link to="/order ">Order</Link>
            <Link to="/receipt ">Receipt</Link>
          </NavBar>
        </Router>
      </Container2>
    </Container1></>
      
    
  );
};

export default App;
