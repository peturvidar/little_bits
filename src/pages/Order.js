import styled from "styled-components";
import "@fontsource/playfair-display";
import DatePicker from "sassy-datepicker";
import { BsFillCaretRightFill } from "react-icons/bs";
import { BsFillCaretLeftFill } from "react-icons/bs";
import Color from "color";
import { Link } from "react-router-dom";
import { React, useState, useContext, useEffect } from "react";
import "./styles.css";
import OrderContext from "./OrderContext";


const Container1 = styled.div`
  margin-top: 100px;
  border: 2px black solid;
  height: 600px;
  width: auto;
  color: black;
  max-width: 800px;
`;

const FlexboxContainerRow = styled.div`
  display: flex;
  flex-direction: row;
`;
const FlexboxContainerRow2 = styled.div`
  margin-top: 110px;
  border: 2px blue solid;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Wrapper = styled.div`
  text-align: center;
  background: red;
  height: 100%;
  box-sizing: border-box;
  padding-top: 5rem;
`;

const FlexboxContainerCounter = styled.div`
  border: 2px purple solid;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 80px;
  margin-top: 10px;
`;
const InputField = styled.input`
  height: 30px;
  width: 200px;
  margin: 10px;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: #c16757;
  }
`;
const Text = styled.div`
  color: #c16757;
  font-size: 30px;
  font-family: "Playfair Display";
  font-weight: bold;
  margin-top: 20px;
`;
const OrderButton = styled.button`
  background: #c16757;
  color: white;
  font-size: 18px;
  border-radius: 3px;
  width: 150px;
  height: 50px;
`;
const FlexboxContainerCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px red solid;
  width: 400px;
  height: 400px;
`;

const DatePickerContainer = styled.div`
  margin-top: 10px;
`;

const Order = () => {
  const [counter, setCounter] = useState(0);
  const { userEmail, setUserEmail } = useContext(OrderContext);
  const [userInput, setUserInput] = useState("");
  

  const increment = () => {
    setCounter(counter + 1);
  };
  const decrement = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };
  
  return (
    <OrderContext.Provider value={{
      userEmail,
      setUserEmail,
    }}>
    <Container1
      style={{
        backgroundColor: Color("#3e6053").alpha(0.9).string(),
      }}
    >
      <FlexboxContainerRow>
        <FlexboxContainerCol>
          <Text>Select date</Text>
          <DatePickerContainer>
            <DatePicker />
          </DatePickerContainer>
        </FlexboxContainerCol>
        <FlexboxContainerCol>
          <Text>Number of guests</Text>
          <FlexboxContainerCounter>
            <BsFillCaretLeftFill onClick={decrement} />
            {counter}
            <BsFillCaretRightFill onClick={increment} />
          </FlexboxContainerCounter>
          <FlexboxContainerRow2>
            <Wrapper>
                        <InputField type="Text" onChange={(e) => setUserInput(e.target.value)} placeholder="Enter email here"></InputField>
              <Link to="/Receipt">
                <OrderButton onClick={() => setUserEmail(userInput)}>Order</OrderButton>
              </Link>
            </Wrapper>
          </FlexboxContainerRow2>
        </FlexboxContainerCol>
      </FlexboxContainerRow>
    </Container1>
    </OrderContext.Provider>
  );
};

export default Order;
