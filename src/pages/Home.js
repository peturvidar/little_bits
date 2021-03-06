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
  width: 50%;
  height: 100%;
  margin-top: 50px;
`;

const SearchButton = styled.button`
  background: #c16757;
  color: white;
  font-size: 18px;
  border-radius: 3px;
  width: 40%;
  height: 10%;
  margin-bottom: 10px;
`;

const Text = styled.div`
  color: #c16757;
  font-size: 40px;
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
  max-width: 1200px;
  max-height: auto;
  min-width: 370px;
  color: black;
  background: #3e6053;
  display: grid;
  height: 100vh;
  align-self: center;
  padding: 2rem;
  margin: auto;
  margin-top: 150px;
  grid-template-areas:
    "content content"
    "content2 content2";
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
  background: #e0e39a;
  flex-direction: column;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  justify-content: space-evenly;
  min-height: 200px;
`;

const Content2 = styled.div`
  flex-direction: column;
  display: flex;
  justify-content: space-evenly;
  background: #e0e39a;
  width: 100%;
  height: 100%;
  align-items: center;
`;

const Home = () => {
  const { userEmail } = useContext(OrderContext);
  const [userInput, setUserInput] = useState("");
 
  function searchForOrder(){
    const searchOrder = localStorage.getItem("userEmail");
    console.log(searchOrder);
    console.log(userInput);
    if(searchOrder === userInput){
      alert("works")
    }else{
      alert("not working");
    }
  };
  useEffect(() => {
  }, []);
  return (
    <Container>
      <Content>
        <Carousel></Carousel>
      </Content>
      <Content>
        <Link to="/Food">
          <OrderButton>Order here</OrderButton>
        </Link>
      </Content>
      <Content2>
        <Text>Find your order</Text>
        <InputField style={{ width: "50%", height: "5%"}}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Enter email here"
        ></InputField>
        <SearchButton onClick={searchForOrder}>Search</SearchButton>
      </Content2>
      <Content2>
        <Text>Your order</Text>
        Order content
      </Content2>
    </Container>
  );
};

export default Home;
