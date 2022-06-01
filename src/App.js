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

const NavBar = styled.nav`
  width: 100%;
  font-size: 2rem;
   position: absolute;
  align-items: center;
  justify-content: space-evenly;
  background: #c16757;
  top: 0;
  padding: 10px;
  align-self: center;
  display: flex;
  font-family: "Playfair Display";
  font-weight: bold;
  margin-right: auto;
  margin-left: auto;
  max-height: 100%;
  margin-bottom: 30px;
  box-sizing: border-box;
  @media (max-width: 2560px) {
    flex-direction: row;
}
 
`;

const Img = styled.img`
  height: 100px;
  width: auto;
`;


const App = () => {
  const [userEmail, setUserEmail] = useState("");
  const [dishOrder, setDishOrder] = useState([]);
  const [drinkOrder, setDrinkOrder] = useState([]);
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState("");
  const [totalOrder, setTotalOrder] = useState([]);
  return (
    <OrderContext.Provider
      value={{
        userEmail,
        setUserEmail,
        dishOrder,
        setDishOrder,
        drinkOrder,
        setDrinkOrder,
        date,
        setDate,
        guests,
        setGuests,
        totalOrder,
        setTotalOrder,
      }}
    >
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="home" element={<Home />} />
          <Route exact path="food" element={<Food />} />
          <Route exact path="drinks" element={<Drinks />} />
          <Route exact path="order" element={<Order />} />
          <Route exact path="receipt" element={<Receipt />} />
        </Routes>
        <NavBar>
          <Img src={Logo}></Img>
          <Link className="isDisabled" to="/home">
            Home
          </Link>
          <Link className="isDisabled" to="/food">
            Food
          </Link>
          <Link className="isDisabled" to="/drinks">
            Drinks
          </Link>
          <Link className="isDisabled" to="/order ">
            Order
          </Link>
          <Link className="isDisabled" to="/receipt ">
            Receipt
          </Link>
        </NavBar>
      </Router>
    </OrderContext.Provider>
  );
};

export default App;
