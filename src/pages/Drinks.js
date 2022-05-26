import styled from "styled-components";
import "@fontsource/playfair-display";
import Color from "color";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  useEffect,
  useState,
  useContext,
  createContext,
  setState,
} from "react";
import "../App.css";
import OrderContext from "./OrderContext";

const Wrapper = styled.div`
text-align: center;
background: red;
height: 100%;
box-sizing: border-box;
padding-top: 5rem;
`;

const Container1 = styled.div`
  margin-top: 100px;
  border: 2px black solid;
  height: auto;
  width: auto;
  color: black;
  display: flex;
  max-width: 800px;
`;

const FlexboxContainerCol1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 800px;
  height: 600px;
`;

const FlexboxContainerCol2 = styled.div`
  column-count: 2;
  border: 2px blue solid;
  flex-direction: column;
  display: flex;
  align-items: center;
  text-align: center;
  height: 100%;
  width: 50%;
  background: #3e6053;
  overflow-y: scroll;
  padding-top: 2rem;
`;

const FlexboxContainerCol3 = styled.div`
  flex-direction: column;
  align-items: center;
  justify-content: end;
  display: flex;
  border: 2px red solid;
  width: 45%;
  height: auto;
  margin-right: 10px;
  margin-top: 10px;
  max-height: 400px;
`;

const Text = styled.div`
  color: #c16757;
  font-size: 30px;
  font-family: "Playfair Display";
  font-weight: bold;
  max-height: 300px;
  display: inline-block;
`;

const NextButton = styled.button`
  background: #c16757;
  color: white;
  font-size: 18px;
  border-radius: 3px;
  width: 150px;
  height: 50px;
  margin-bottom: 20px;
`;

const Img = styled.img`
  max-height: 50%;
  max-width: 50%;
`;

const Card = styled.div`
  width: 75%;
  height: 40%;
  background: #e0e39a;
  font-weight: bold;
  padding: 2rem;
  font-size: 30px;
  margin: 0.5rem;
`;

const Drinks = () =>  {
  const { drinkOrder, setDrinkOrder } = useContext(OrderContext);
  const [drinks, setDrinks] = useState([]);

  const getDrinks = async () => {
    const response = await axios.get("https://api.punkapi.com/v2/beers");
    setDrinks(response.data);
    console.log(response.data);
  };
  useEffect(() => {
    getDrinks();
  }, []);
  

 
  return (
    <Container1
      style={{
        backgroundColor: Color("#3e6053").alpha(0.9).string(),
      }}
    >
      <FlexboxContainerCol1>
        <FlexboxContainerCol2>
          {drinks.map((drink) => (
            <Card onClick={() => setDrinkOrder([...drinkOrder, drink.name])}>
              <Img src={drink.image_url} />
              <div>{drink.name}</div>
            </Card>
          ))}
        </FlexboxContainerCol2>
        <FlexboxContainerCol3>
          
        </FlexboxContainerCol3>
        <Link to="/Order">
          <NextButton>Next</NextButton>
        </Link>
      </FlexboxContainerCol1>
    </Container1>
  );
};

export default Drinks;
