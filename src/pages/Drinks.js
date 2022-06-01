import styled from "styled-components";
import "@fontsource/playfair-display";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  useEffect,
  useState,
  useContext,
} from "react";
import "../App.css";
import OrderContext from "./OrderContext";

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
  border: 5px red solid;
  width: 50%;
  height: 80%;
  background: #e0e39a;
  font-weight: bold;
  padding: 2rem;
  font-size: 2rem;
  align-self: center;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const Container = styled.div`
  border: 5px black solid;
  max-width: 1200px;
  max-height: auto;
  color: black;
  background: #3e6053;
  display: grid;
  height: 100vh;
  align-self: center;
  padding: 10px;
  margin: auto;
  margin-top: 150px;
  grid-template-areas: "content content1";
  text-align: center;
  grid-gap: 2rem;
  @media (max-width: 550px) {
    grid-template-columns: 1fr;
    grid-template-rows: 0.4fr 0.4fr 2.2fr 1.2fr 1fr;
    grid-template-areas:
      "content"
      "content1";
  }
`;

const Content = styled.div`
  border: 5px blue solid;
  grid-template-columns: repeat(2, 1fr);

  display: grid;
  overflow-y: scroll;
  background: #3e6053;
  width: 100%;
  height: 100%;
  min-height: 500px;
`;

const Content2 = styled.div`
  background: #e0e39a;
  flex-direction: column;
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  height: 100%;
  align-items: center;
  min-width: 300px;
`;

const DrinkOrder = styled.div`
  background: #3e6053;
  font-size: 1.7rem;
  font-family: "Playfair Display";
  font-weight: bold;
  width: 70%;
  height: 100%;
  padding: 2rem;
  margin: 0.5rem;
  flex-direction: column;
  display: flex;
  border: 5px solid yellow;
  max-height: 600px;
  flex-wrap: wrap;
`;

const Drinks = () => {
  const { drinkOrder, setDrinkOrder } = useContext(OrderContext);
  const { totalOrder, setTotalOrder } = useContext(OrderContext);
  const [drinks, setDrinks] = useState([]);

  const getDrinks = async () => {
    const response = await axios.get("https://api.punkapi.com/v2/beers");
    setDrinks(response.data);
    console.log(response.data);
  };
  useEffect(() => {
    getDrinks();
  }, []);

  function setOrder(props) {
    setDrinkOrder([...drinkOrder, props]);
    setTotalOrder([...totalOrder, props]);
    localStorage.setItem("drinkOrder", setDrinkOrder);
    console.log(props);
  }

  return (
    <Container>
      <Content>
        {drinks.map((drink) => (
          <Card onClick={() => setOrder(drink.name)}>
            <Img src={drink.image_url} />
            <div>{drink.name}</div>
          </Card>
        ))}
      </Content>

      <Content2>
        <DrinkOrder>
          <Text>Your Drinks:</Text>
          <table {...drinkOrder}>
            <thead>
              {drinkOrder.map((drink) => (
                <tr>{drink}</tr>
              ))}
            </thead>
          </table>
        </DrinkOrder>
        <Link to="/Order">
          <NextButton>Next</NextButton>
        </Link>
      </Content2>
    </Container>
  );
};

export default Drinks;
