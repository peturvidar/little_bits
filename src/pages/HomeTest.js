import styled from "styled-components";
import Carousel from "./Carousel";
import "@fontsource/playfair-display";
import { Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import OrderContext from "./OrderContext";




const OrderButton = styled.button`
  background: #c16757;
  color: white;
  font-size: 18px;
  border-radius: 3px;
  width: 150px;
  height: 50px;
  margin-top: 50px;
`;

const FindButton = styled.button`
  background: #c16757;
  color: white;
  font-size: 18px;
  border-radius: 3px;
  width: 150px;
  height: 50px;
  margin-bottom: 10px;
`;

const Text = styled.div`
  color: #c16757;
  font-size: 30px;
  font-family: "Playfair Display";
  font-weight: bold;
`;

const InputField = styled.input`
  ::placeholder,
  ::-webkit-input-placeholder {
    color: #c16757;
    margin-top: 100px;
    align-items: end;
  }
`;

const Container = styled.div`
  border: 5px black solid;
  max-width: 800px;
  max-height: 800px;
  color: black;
  background: #3e6053;
  display: grid;
  height: 100vh;
  align-self: center;
  padding: 10px;
  margin: auto;
  margin-top: 150px;
  grid-template-areas:
    "content content"
    "content2 content2";
  text-align: center;
  grid-gap: 0.25rem;
  @media (max-width: 550px) {
    grid-template-columns: 1fr;
    grid-template-rows: 0.4fr 0.4fr 2.2fr 1.2fr 1fr;
    grid-template-areas:
      "content"
      "content1";
  }
`;

const Content = styled.div`
  background: #a6b8b9;
  flex-direction: column;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const Content2 = styled.div`
  flex-direction: column;
  display: flex;
  justify-content: space-evenly;
  background: black;
  width: 100%;
  height: 100%;
  align-items: center;
  
`;

const HomeTest = () => {
  const { userEmail } = useContext(OrderContext);
  const [userInput, setUserInput] = useState("");

  const searchForOrder = () => {
    localStorage.getItem(userEmail);
    if ((userInput = userEmail)) {
      <Link to="/Receipt"></Link>;
    } else {
      alert("engin pöntun fannst vinsamlegast gerið nýja pöntun");
    }
  };
  useEffect(() => {
    console.log(userEmail);
    localStorage.getItem(userEmail);
    console.log(userInput);
  }, []);
  return (
    <Container>
      <Content>
        <Carousel></Carousel>
      </Content>
      <Content>
        <Text>Order flow box</Text>
        <Link to="/Food">
          <OrderButton>Order here</OrderButton>
        </Link>
      </Content>
      <Content2>
        <InputField
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Enter email here"
        ></InputField>
        <FindButton onClick={() => searchForOrder()}>Find</FindButton>
      </Content2>
      <Content2>
        <Text>Your order</Text>
        Order content
      </Content2>
    </Container>
  );
};

export default HomeTest;
