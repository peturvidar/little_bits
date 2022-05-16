import styled from 'styled-components';
import "@fontsource/playfair-display";
import Color from "color";

const Container1 = styled.div`
background: transparent;
border: 2px black solid;
height: 600px;
width: 800px;
color: black;
display: flex;
`;


const FlexboxContainerCol1 = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
flex-wrap: wrap;
width: 800px;
height: 600px;
`;

const FlexboxContainerCol2 = styled.div`
display: flex;
flex-direction: column;
align-items: center;
flex-wrap: wrap;
justify-content: end;
border: 2px blue solid;
width: 360px;
height: 600px;
margin: 10px;
`;

const FlexboxContainerCol3 = styled.div`
flex-direction: column;
align-items: center;
justify-content: end;
display: flex;
border: 2px red solid;
width: 400px;
height: 300px;
margin-right: 10px;
margin-top: 10px;
`;
const FlexboxContainerCol4 = styled.div`
flex-direction: column;
align-items: center;
justify-content: end;
display: flex;
border: 2px red solid;
width: 170px;
height: 570px;
margin: 2px;
`;
const FlexboxContainerCol5 = styled.div`
flex-direction: column;
align-items: center;
justify-content: end;
display: flex;
border: 2px red solid;
width: 170px;
height: 150px;
margin: 1px;
border: 2px green solid;
`;

const Text = styled.div`
color: #C16757;
font-size: 30px;
font-family: "Playfair Display";
font-weight: bold;
`;

const NextButton = styled.button`
background: #C16757;
color: white;
font-size: 18px;
border-radius: 3px;
width: 150px;
height: 50px;
margin-bottom: 10px;
`;

const Drinks = () => {
    return(
        <Container1 style={{ 
            backgroundColor: Color("#3e6053").alpha(0.9).string()
        }}>
            <FlexboxContainerCol1>
            <FlexboxContainerCol2>
                <FlexboxContainerCol4>
                <FlexboxContainerCol5>drink option</FlexboxContainerCol5>
                <FlexboxContainerCol5>drink option</FlexboxContainerCol5>
                <FlexboxContainerCol5>drink option</FlexboxContainerCol5>
                <FlexboxContainerCol5>drink option</FlexboxContainerCol5>
                </FlexboxContainerCol4>
                <FlexboxContainerCol4>
                <FlexboxContainerCol5>drink option</FlexboxContainerCol5>
                <FlexboxContainerCol5>drink option</FlexboxContainerCol5>
                <FlexboxContainerCol5>drink option</FlexboxContainerCol5>
                <FlexboxContainerCol5>drink option</FlexboxContainerCol5>
                </FlexboxContainerCol4>
            </FlexboxContainerCol2>
            <FlexboxContainerCol3>
                <Text>Your drinks</Text>
                <Text>Your drinks</Text>
                <Text>Your drinks</Text>
                <Text>Your drinks</Text>
                <NextButton>Next</NextButton>
            </FlexboxContainerCol3>
            </FlexboxContainerCol1>
        </Container1>
    )
}

export default Drinks;