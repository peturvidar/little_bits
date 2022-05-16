import React from 'react';
import styled from 'styled-components';
import logo from "./images/lilbits.png";

const StyledHeader = styled.header`
display:flex;
align-items: center;
justify-content: center;
height: 300px;
width: 100%;
background: #e0e39a;
`;

const ImgContainer = styled.div`
height: 100%;
display: flex;
justify-content: center;
align-items: center;
`;

const Img = styled.img`
height: 70%;
`;

const Header = () => {
    return(
        <StyledHeader>
            <ImgContainer>
            <Img src={logo}></Img>
            </ImgContainer>
        </StyledHeader>
    );
};

export default Header;