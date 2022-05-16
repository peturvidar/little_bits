import styled from 'styled-components';
import Carousel from './Carousel';
import "@fontsource/playfair-display";
import Color from "color";

const Container1 = styled.div`
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
`
const Container3 = styled.div`
border: 2px black solid;
height: 350px;
width: 400px;
margin: 10px;
color: black;
`
const Carouselbox = styled.div`
border: 2px black solid;
height: 200px;
width: 400px;
margin: 10px;
color: black;
`;

const FlexboxContainerRow = styled.div`
border: 2px blue solid;
display: flex;
flex-direction: row;
`;

const FlexboxContainerCol = styled.div`
height: 350px;
border: 2px green solid;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
flex-wrap: wrap;
`;
const FlexboxContainerCol2 = styled.div`
width: 370px;
height: 200px;
border: 2px green solid;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
flex-wrap: wrap;
`;

const OrderButton = styled.button`
background: #C16757;
color: white;
font-size: 18px;
border-radius: 3px;
width: 150px;
height: 50px;
margin-bottom: 10px;
`;

const FindButton = styled.button`
background: #C16757;
color: white;
font-size: 18px;
border-radius: 3px;
width: 150px;
height: 50px;
margin-bottom: 10px;
`;

const Text = styled.div`
color: #C16757;
font-size: 30px;
font-family: "Playfair Display";
font-weight: bold;
`;

const InputField = styled.input`
::placeholder,
::-webkit-input-placeholder {
    color: #C16757;
    margin-top: 100px;
    align-items: end;

}
`;
const Receipt = () => {
    return(
        
        <Container1 style={{ 
            backgroundColor: Color("#3e6053").alpha(0.9).string()
        }}>
        
        </Container1>
        
    )
}

export default Receipt;