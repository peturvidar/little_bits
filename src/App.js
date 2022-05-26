import "./App.css";
import React, { useState } from "react";
import OrderContext from "./pages/OrderContext";
import Home from "./pages/Home";
import Drinks from "./pages/Drinks";
import Food from "./pages/Food";
import Order from "./pages/Order";
import Receipt from "./pages/Receipt";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Logo from "./pages/images/lilbits.png";
import "@fontsource/playfair-display";

const Container1 = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #e0e39a;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(2px + 2vmin);
  border: 2px solid green;
  color: white;
`;

const NavBar = styled.nav`
  align-items: center;
  position: absolute;
  background: #c16757;
  top: 0;
  padding: 20px;
  border: 1px solid black;
  justify-content: space-evenly;
  display: flex;
  font-family: "Playfair Display";
  font-weight: bold;
  max-width: 100%;
  min-width: 50%;
  min-height: 1%;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 10px;
`;

const Img = styled.img`
  height: 60px;
  width: auto;
`;

const App = () => {
  const [userEmail, setUserEmail] = useState("");
  const [dish, setDish] = useState([]);
  const [drinkItem, setDrinkItem] = useState([]);
  const [ date, setDate] = useState("");

  const value = {userEmail, setUserEmail};
  return (
    <OrderContext.Provider
    value={{
    userEmail,
    setUserEmail,
    dish,
    setDish,
    drinkItem,
    setDrinkItem,
    date, 
    setDate,
    }}
    >
    <Container1>
      <Router>
        <Routes>
          <Route exact path="home" element={<Home />} />
          <Route exact path="food" element={<Food />} />
          <Route exact path="drinks" element={<Drinks />} />
          <Route exact path="order" element={<Order />} />
          <Route exact path="receipt" element={<Receipt />} />
        </Routes>
        <NavBar>
          <Img src={Logo}></Img>
          <Link to="/home">Home</Link>
          <Link to="/food">Food</Link>
          <Link to="/drinks">Drinks</Link>
          <Link to="/order ">Order</Link>
          <Link to="/receipt ">Receipt</Link>
        </NavBar>
      </Router>
    </Container1>
    </OrderContext.Provider>
  );
};

export default App;
