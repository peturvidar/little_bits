import styled from "styled-components";
import "@fontsource/playfair-display";
import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import OrderContext from "./OrderContext";

const Container = styled.div`
  border: 5px black solid;
  max-width: 1200px;
  max-height: 100%;
  color: black;
  background: #3e6053;
  display: grid;
  height: 100vh;
  align-self: center;
  padding: 10px;
  margin: auto;
  margin-top: 150px;
  grid-template-areas: "content content2";
  text-align: center;
  grid-gap: 2rem;
  @media (max-width: 550px) {
    grid-template-columns: 1fr;
    grid-template-rows: 0.4fr 0.4fr 2.2fr 1.2fr 1fr;
    grid-template-areas:
      "content"
      "content2";
  }
`;

const NextButton = styled.button`
  background: #c16757;
  color: white;
  font-size: 16px;
  border-radius: 3px;
  width: 100%;
  min-width: 100px;
  height: 40px;
  margin-top: 20px;
`;

const GenerateButton = styled.button`
  background: #c16757;
  color: white;
  font-size: 1rem;
  border-radius: 3px;
  width: auto;
  height: 50px;
  margin-bottom: 20px;
  position: sticky;
  bottom: 0;
  align-self: center;
`;

const Text = styled.div`
  color: #c16757;
  font-size: 30px;
  font-family: "Playfair Display";
  font-weight: bold;
  align-items: center;
`;

const Img = styled.img`
  max-height: 70%;
  max-width: 70%;
`;

const Card = styled.div`
  flex-direction: column;
  width: 80%;
  height: auto;
  background: #3e6053;
  font-weight: bold;
  padding: 15px;
  font-size: 30px;
  margin: 0.5rem;
  align-items: center;
  justify-content: center;
  display: flex;
  align-self: center;
`;
const FoodOrder = styled.div`
  background: #3e6053;
  font-size: 1.7rem;
  font-family: "Playfair Display";
  font-weight: bold;
  width: 75%;
  height: 100%;
  padding: 2rem;
  margin: 0.5rem;
  flex-direction: column;
  display: flex;
  border: 5px solid yellow;
  flex-wrap: wrap;
  max-height: 600px;
  justify-content: space-evenly;
`;
const Content = styled.div`
  background: #e0e39a;
  flex-direction: column;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const Content2 = styled.div`
  background: #e0e39a;
  flex-direction: column;
  display: flex;
  justify-content: space-evenly;
  width: 98%;
  height: 100%;
  align-items: center;
  min-width: 300px;
  flex-wrap: wrap;
  padding: 0.25rem;
`;

const Food = () => {
  const { dishOrder, setDishOrder } = useContext(OrderContext);
  const { totalOrder, setTotalOrder } = useContext(OrderContext);
  const [dish, setDish] = useState();
  const [img, setImg] = useState();
  const [category, setCategory] = useState("");

  const getDish = async () => {
    const response = await axios.get(
      "https://themealdb.com/api/json/v1/1/random.php"
    );
    setImg(response.data.meals[0].strMealThumb);
    setDish(response.data.meals[0].strMeal);
    setCategory(response.data.meals[0].strCategory);
  };

  useEffect(() => {
    getDish();
    setDishOrder([...dishOrder, dish]);
  }, []);

  function setOrder() {
    setDishOrder([...dishOrder, dish]);
    setTotalOrder([...totalOrder, dish]);
    localStorage.setItem("dishOrder", dishOrder);
  }

  return (
    <Container>
      <Content>
        <Card onClick={setOrder}>
          <Img src={img}></Img>
          <Text>{dish}</Text>
          <Text>{category}</Text>
        </Card>
        <GenerateButton onClick={getDish}>Generate new dish</GenerateButton>
      </Content>
      <Content2>
        <FoodOrder>
          <Text>Your food:</Text>
          <table {...dishOrder}>
            <thead>
              {dishOrder.map((dishOrder) => (
                <tr>{dishOrder}</tr>
              ))}
            </thead>
          </table>
          <Link to="/Drinks">
            <NextButton>Next</NextButton>
          </Link>
        </FoodOrder>
      </Content2>
    </Container>
  );
};

export default Food;
