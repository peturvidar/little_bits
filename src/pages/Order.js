import styled from 'styled-components';
import "@fontsource/playfair-display";
import DatePicker from 'sassy-datepicker';
import { BsFillCaretRightFill} from "react-icons/bs";
import { BsFillCaretLeftFill} from "react-icons/bs";
import Color from "color";

const Container1 = styled.div`
background: transparent;
border: 2px black solid;
height: 600px;
width: 800px;
color: black;
display: flex;
`;

const FlexboxContainerRow = styled.div`
display: flex;
flex-direction: row;
`;
const FlexboxContainerRow2 = styled.div`
border: 2px blue solid;
height: 300px;
display: flex;
flex-direction: column;
align-items: center;
`;

const FlexboxContainerCounter = styled.div`
border: 2px green solid;
height: 300px;
display: flex;
flex-direction: row;
align-items: top;    
`;


const InputField = styled.input`
height: 30px;
width: 200px;
::placeholder,
::-webkit-input-placeholder {
    color: #C16757;

}
`;

const Text = styled.div`
color: #C16757;
font-size: 30px;
font-family: "Playfair Display";
font-weight: bold;
`;

const OrderButton = styled.button`
background: #C16757;
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
`;

const LeftButton = styled.button`

`;

const Order = () => {
    return(
        <Container1 style={{ 
            backgroundColor: Color("#3e6053").alpha(0.9).string()
        }}>
            <FlexboxContainerRow>
                <FlexboxContainerCol>
                    <Text>Select date</Text>
                    <DatePicker />
                </FlexboxContainerCol>
                <FlexboxContainerCol>
                    <Text>Guests</Text>
                    <FlexboxContainerCounter>
                        <BsFillCaretLeftFill/>
                        <p>0</p>
                        <BsFillCaretRightFill/>
                    </FlexboxContainerCounter>
                    <FlexboxContainerRow2>
                    <InputField placeholder="Enter email here"/>
                    <OrderButton>Order</OrderButton>
                    </FlexboxContainerRow2>
                </FlexboxContainerCol>
            </FlexboxContainerRow>
        </Container1>
    )
}

export default Order;