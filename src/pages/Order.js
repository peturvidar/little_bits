import styled from "styled-components";
import "@fontsource/playfair-display";
import DatePicker from "sassy-datepicker";
import { BsFillCaretRightFill } from "react-icons/bs";
import { BsFillCaretLeftFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { React, useState, useContext, useEffect } from "react";
import "./styles.css";
import OrderContext from "./OrderContext";

const FlexboxContainerCounter = styled.div`
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 40%;
  margin-top: 20px;
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
  font-size: 40px;
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

const Container = styled.div`
  border: 5px black solid;
  max-width: 1200px;
  max-height: 1000px;
  color: black;
  background: #3e6053;
  display: grid;
  height: 100vh;
  align-self: center;
  padding: 10px;
  margin: auto;
  margin-top: 150px;
  grid-template-areas:
    "content content2"
    "content content3";
  text-align: center;
  grid-gap: 2rem;
  @media (max-width: 550px) {
    grid-template-columns: 1fr;
    grid-template-rows: 0.4fr 0.4fr 2.2fr 1.2fr 1fr;
    grid-template-areas:
      "content"
      "content2"
      "content3";
  }
`;

const Content = styled.div`
  align-items: center;
  background: #e0e39a;
  flex-direction: column;
  display: flex;
  justify-content: center;
  justify-content: space-evenly;
  width: 100%;
  height: 100%;
  min-height: 400px;
`;

const Content2 = styled.div`
  align-items: center;
  flex-direction: column;
  display: flex;
  justify-content: center;
  width: 50%;
  height: 50%;
  align-items: top;
  min-width: 200px;
`;
const Content3 = styled.div`
  align-items: center;
  background: #e0e39a;
  flex-direction: column;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  min-height: 400px;
`;

const Counter = styled.div`
  font-size: 30px;
`;

export default function Order() {
  const [counter, setCounter] = useState(0);
  const { userEmail, setUserEmail } = useContext(OrderContext);
  const [userInput, setUserInput] = useState();
  const [startDate, setStartDate] = useState(new Date());
  const { date, setDate } = useContext(OrderContext);
  const { guests, setGuests } = useContext(OrderContext);

  const increment = () => {
    setCounter(counter + 1);
  };
  const decrement = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };
  console.log({ counter });
  console.log({ guests });

  const buttonFunction = () => {
    setGuests(counter + 1);
    increment();
    localStorage.setItem("guests", JSON.stringify(guests));
  };

  const setEmailButton = () => {
    setUserEmail(userInput);
    localStorage.setItem("userEmail", JSON.stringify(userInput));
  };

  useEffect(() => {
    console.log(userInput);
    console.log(guests);
    setDate(new Date());
    localStorage.setItem("date", JSON.stringify(new Date()));
  }, []);

  return (
    <Container>
      <Content>
        <Text>Select date</Text>
        <DatePicker
          minDate={new Date()}
          selected={startDate}
          onChange={(date) => setStartDate(date)}
        />
        {console.log({ startDate })}
      </Content>
      <Content3>
        <Content2>
          <Text>Number of guests</Text>
          <FlexboxContainerCounter>
            <BsFillCaretLeftFill onClick={decrement} size={"2em"} />
            <Counter>{counter}</Counter>
            <BsFillCaretRightFill onClick={buttonFunction} size={"2em"} />
          </FlexboxContainerCounter>
        </Content2>
        <Content2>
          <InputField
            type="Text"
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Enter email here"
          ></InputField>
          <Link to="/Receipt">
            <OrderButton onClick={() => setEmailButton(userInput)}>
              Order
            </OrderButton>
          </Link>
        </Content2>
      </Content3>
    </Container>
  );
}
