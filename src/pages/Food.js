import styled from 'styled-components'

const Container = styled.div`
border: 2px black solid;
padding: 50px;
`;

const Food = () => {
    return(
        <Container>
            <p>Food</p>
        </Container>
    )
}

export default Food;