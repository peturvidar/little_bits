import styled from "styled-components";
import "@fontsource/playfair-display";
import Color from "color";
import React, { useState, useEffect, useContext } from "react";
import axios from "axios";

const Container1 = styled.div`
  background-color: "#3e6053";
  background: transparent;
  border: 2px black solid;
  height: 600px;
  width: 800px;
  color: black;
`;

const Container2 = styled.div`
  border: 2px red solid;
  height: 200px;
  width: 400px;
  margin: 10px;
  color: black;
  display: flex;
  align-items: end;
`;
const Container3 = styled.div`
  border: 2px black solid;
  height: 350px;
  width: 400px;
  margin: 10px;
  color: black;
`;

const FlexboxContainerRow = styled.div`
  display: flex;
  flex-direction: row;
`;

const FlexboxContainerCol = styled.div`
  border: 2px green solid;
  height: 200px;
  width: 370px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;
const FlexboxContainerCol2 = styled.div`
  border: 2px green solid;
  height: 350px;
  width: 370px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
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
  width: 150px;
  height: 40px;
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
  }
`;

const Wrapper = styled.div`
display: flex;
align-items: center;
height: 100%;
box-sizing: border-box;
`;

const Food = () => {
  const [randomDish, setRandomDish] = useState([]);
  const getRandomDish = async () => {
    const results = await axios(
      'https://themealdb.com/api/json/v1/1/random.php'
    );
    setRandomDish(results.data);
    console.log(results.data);
  };
  useEffect(() => {
    getRandomDish();
  }, []);
  return (
    <Container1
      style={{
        backgroundColor: Color("#3e6053").alpha(0.9).string(),
      }}
    >
      <FlexboxContainerRow>
        <Container2>
          <FlexboxContainerCol>
              <Wrapper>
                  {randomDish.map(dish => (
                  <p>{dish.meals}</p>
              ))}
              </Wrapper>
          </FlexboxContainerCol>
        </Container2>
        <Container2>
          <FlexboxContainerCol>
            <Text>Food items</Text>
            <NextButton>Next</NextButton>
          </FlexboxContainerCol>
        </Container2>
      </FlexboxContainerRow>
      <FlexboxContainerRow>
        <Container3>
          <FlexboxContainerCol2>
            <Text>Generated dish appears hear</Text>
            <GenerateButton>Generate new dish</GenerateButton>
          </FlexboxContainerCol2>
        </Container3>
        <Container3>Empty</Container3>
      </FlexboxContainerRow>
    </Container1>
  );
};

export default Food;
