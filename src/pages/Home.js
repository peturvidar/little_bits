import styled from 'styled-components';
import Carousel from './pages/carousel';

const Container1 = styled.div`
background: transparent;
border: 2px black solid;
height: 600px;
width: 800px;
color: black;
`;

const Container2 = styled.div`
border: 2px black solid;
height: 200px;
width: 400px;
margin: 10px;
color: black;
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

const FlexboxContainer = styled.div`
display: flex;
flex-direction: row;
`

const Home = () => {
    return(
        
        <Container1>
        <FlexboxContainer>
            <Carouselbox>

            </Carouselbox>

            <Container2>
                Order flow box
            </Container2>
            </FlexboxContainer>
            <FlexboxContainer>
                <Container3>
                    Order box
                </Container3>
                <Container3>
                    Order content
                </Container3>
            </FlexboxContainer>
        </Container1>
        
    )
}

export default Home;