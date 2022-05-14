import styled from 'styled-components'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Container1 = styled.div`

border: 2px black solid;
height: 600px;
width: 800px;
color: black;
`;

const Drinks = () => {
    return(
        <Container>
            <Row className="mx-0">
                <Col className="p-6">
                    box1
                </Col>
                <Col className="p-6">
                    box2
                </Col>
            </Row>
        </Container>
    )
}

export default Drinks;