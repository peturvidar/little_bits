import styled from "styled-components";
import "@fontsource/playfair-display";
import Color from "color";
import React, { useState, useEffect, useContext, createContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import OrderContext from "./OrderContext";

const Container1 = styled.div`
  margin-top: 100px;
  border: 2px blue solid;
  height: auto;
  width: auto;
  color: black;
  max-width: 800px;
`;

const Container2 = styled.div`
  border: 2px red solid;
  height: 600px;
  width: 400px;
  margin: 10px;
  color: black;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 10px;
`;

const FlexboxContainerRow = styled.div`
  display: flex;
  flex-direction: row;
`;

const NextButton = styled.button`
  background: #c16757;
  color: white;
  font-size: 16px;
  border-radius: 3px;
  width: 150px;
  height: 40px;
  margin-bottom: 10px;
  margin-right: 75px;
  margin-left: 100px;
`;

const GenerateButton = styled.button`
  background: #c16757;
  color: white;
  font-size: 16px;
  border-radius: 3px;
  width: 220px;
  height: 50px;
  margin-bottom: 20px;
  position: sticky;
`;

const Text = styled.div`
  color: #c16757;
  font-size: 30px;
  font-family: "Playfair Display";
  font-weight: bold;
  align-items: center;
`;

const InputField = styled.input`
  ::placeholder,
  ::-webkit-input-placeholder {
    color: #c16757;
  }
`;

const Img = styled.img`
  max-height: 70%;
  max-width: 70%;
`;

const Card = styled.div`
  flex-direction: column;
  width: auto;
  height: auto;
  background: #e0e39a;
  font-weight: bold;
  padding: 15px;
  font-size: 30px;
  margin: 0.5rem;
  align-items: center;
  justify-content: center;
  display: flex;
`;
const FoodOrder = styled.div`
  font-family: "Playfair Display";
  font-weight: bold;
  width: 75%;
  height: auto;
  padding: 2rem;
  margin: 0.5rem;
  flex-direction: column;
  display: flex;
  grid-template-columns: repeat;
  border: 2px solid black;
  max-height: 300px;
  columns: 2 auto;
  flex-wrap: wrap;
`;

const Food = () =>  {
  const { dishOrder, setDishOrder } = useContext(OrderContext);
  const [ dish, setDish ] = useState();
  const [img, setImg] = useState();
  
  
  const getDish = async () => {
    const response = await axios.get(
      "https://themealdb.com/api/json/v1/1/random.php"
    );
      setImg(response.data.meals[0].strMealThumb);
    setDish(response.data.meals[0].strMeal);
    
  };

    useEffect(() => {  
    getDish();
    
  }, []);

  

  return (
  
    <Container1
      style={{
        backgroundColor: Color("#3e6053").alpha(0.9).string(),
      }}
    >
      <FlexboxContainerRow>
        <Container2>
          <Card onClick={() => setDishOrder([...dishOrder, dish])}>
            <Img src={img}></Img>
            <Text>{dish}</Text>
          </Card>
          <GenerateButton onClick={getDish}>Generate new dish</GenerateButton>
        </Container2>
        <Container2>
          <FoodOrder>
            
          </FoodOrder>
          <Link to="/Drinks">
            <NextButton>Next</NextButton>
          </Link>
        </Container2>
      </FlexboxContainerRow>
      <FlexboxContainerRow></FlexboxContainerRow>
    </Container1>
   
  );
};

export default Food;
