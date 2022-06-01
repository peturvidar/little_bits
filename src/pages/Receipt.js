import styled from "styled-components";
import React, { useState, useEffect, useContext } from "react";
import "@fontsource/playfair-display";
import OrderContext from "./OrderContext";

const Container = styled.div`
  border: 5px black solid;
  max-width: 800px;
  max-height: 800px;
  color: black;
  background: #3e6053;
  display: grid;
  height: 100vh;
  align-items: left;
  padding: 10px;
  margin: auto;
  margin-top: 150px;
  grid-template-areas: "content content2";
  text-align: left;
  grid-gap: 0.25rem;
  @media (max-width: 550px) {
    grid-template-columns: 1fr;
    grid-template-rows: 0.4fr 0.4fr 2.2fr 1.2fr 1fr;
    grid-template-areas:
      "content"
      "content2";
  }
`;

const Text = styled.div`
  color: #c16757;
  font-size: 30px;
  font-family: "Playfair Display";
  font-weight: bold;
  align-items: left;
  margin-left: 10px;
`;
const Text2 = styled.div`
  font-weight: bold;
  font-size: 25px;
  font-family: "Playfair Display";
  padding: 10px;
  margin-left: 10px;
`;

const TotalOrder = styled.div`
  background: #3e6053;
  font-size: 1.2rem;
  font-family: "Playfair Display";
  font-weight: bold;
  width: auto;
  height: auto;
  padding: 2rem;
  flex-direction: column;
  display: flex;
  flex-wrap: wrap;
  max-height: 600px;
  align-items: left;
`;

export default function Receipt() {
  const { totalOrder } = useContext(OrderContext);

  return (
    <Container>
      <OrderContext.Consumer>
        {(props) => {
          console.log(props);
          return (
            <div>
              <Text>Your order:</Text>
              <Text2>Date: {JSON.stringify(props.date)}</Text2>
              <Text2>Guests: {props.guests}</Text2>
              <Text2>Email: {props.userEmail}</Text2>
              <TotalOrder>
                <table {...totalOrder}>
                  <thead>
                    {totalOrder.map((item) => (
                      <tr>{item}</tr>
                    ))}
                  </thead>
                </table>
              </TotalOrder>
            </div>
          );
        }}
      </OrderContext.Consumer>
    </Container>
  );
}
