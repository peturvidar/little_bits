import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import "@fontsource/playfair-display";
import Color from "color";

const Wrapper = styled.div`
display: flex;
align-items: center;
height: 100%;
box-sizing: border-box;
`;

const Card = styled.div`
width: 75%;

`;


const RandomDish = () => {
    const [randomDish, setRandomDish] = useState([]);
    const getRandomDish = async () => {
        const results = await axios('https://themealdb.com/api/json/v1/1/random.php');
        setRandomDish(results.data);
        console.log(results.data);
        console.log("api á að vera hér");

    };
    return (
        <Wrapper>
            console.log("api á ð vera hér");
                </Wrapper>
    );

};

export default RandomDish;
