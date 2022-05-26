import styled from 'styled-components';
import Carousel from './Carousel';
import "@fontsource/playfair-display";
import Color from "color";
import {Link} from "react-router-dom";


const Container1 = styled.div`
margin-top: 100px;
border: 2px black solid;
height: auto;
width: auto;
color: black;
`;

const Container2 = styled.div`
background-color: "#3e6053";
opacity: 100%;
border: 2px red solid;
height: 200px;
width: 400px;
margin: 10px;
color: black;
display: flex;
align-items: end;
`;
const Container3 = styled.div`
border: 2px red solid;
height: 350px;
width: 400px;
margin: 10px;
color: black;
`;
const Carouselbox = styled.div`
border: 2px purple solid;
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
const Home = () => {
    return(
        
        <Container1 style={{ 
            backgroundColor: Color("#3e6053").alpha(0.7).string()
        }}>
        <FlexboxContainerRow>
            <Carouselbox>
            <Carousel></Carousel>
            </Carouselbox>
            <Container2>
                <FlexboxContainerCol2>
                <Text>Order flow box</Text>
                <Link to="/Food"><OrderButton>Order here</OrderButton></Link>
                </FlexboxContainerCol2>
            </Container2>
            </FlexboxContainerRow>
            <FlexboxContainerRow>
                <Container3>
                    <FlexboxContainerCol>
                    <Text>Find your order</Text>
                    <InputField placeholder="Enter email here"></InputField>
                    <FindButton>Find</FindButton>
                    </FlexboxContainerCol>
                </Container3>
                
                <Container3>
                    <FlexboxContainerCol>
                    <Text>Your order</Text>
                    Order content
                    </FlexboxContainerCol>
                </Container3>
            </FlexboxContainerRow>
        </Container1>
    
    )
}

export default Home;