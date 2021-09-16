import React, { useState } from "react";
import styled from "styled-components";
import Logo from "./Logo.png";
import Verify from "./verify";
import Vector from "./truck.png";

const StyledHelp = styled.div`
  position: absolute;
  width: 107px;
  height: 36px;
  right: 10px;
  top: 8px;
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 27px;
  color: #ffffff;
`;

const StyledContainer = styled.div`
  height: 97vh;
  width: 100vw;
  background: #ffffff;
  margin: 0;
  padding: 0;
  display: flex;
  background: #ffffff;
`;

const StyledContainer2 = styled.div`
  position: absolute;
  flex-direction: column;
  width: ${(props) => props.inputWidth};
  height: ${(props) => props.inputHeight};
  top: 0px;
  right: 0px;
  background: #2b6350;
  display: flex;
  justify-content: center;
  align-items: center;

  border-top-right-radius: ${(props) => props.inputBorder || 0};
  border-bottom-right-radius: ${(props) => props.inputBorder || 0};
`;

const StyledVector = styled.div`
  position: relative;

  background: url(${(props) => props.inputImg}) no-repeat;

  width: 24%;

  background-size: contain;
  height: 21%;
  right: -8%;
  bottom: -79%;
`;

const StyledContainer3 = styled.div`
  position: absolute;
  margin: 21px;
  width: 83vw;
  height: 75vh;
  background: #ffffff;
  box-shadow: 0px 4px 59px rgb(0 0 0 / 25%);
  border-radius: 17px;
`;
const StyledYo = styled.div`
  display: flex;
  justify-content: center;
  width: 104vw;
  height: 98vh;
  align-items: center;
`;

const StyledLogo = styled.div`
  background: url(${(props) => props.inputImg}) no-repeat;
  background-size: contain;
  position: absolute;
  width: 37%;
  height: 39%;
  left: 3%;
  bottom: 56%;
  background-size: contain;
`;

function Card() {
  return (
    <StyledContainer>
      <StyledContainer2
        inputWidth="60vw"
        inputHeight="100vh"
      ></StyledContainer2>
      <StyledYo>
        <StyledHelp>Need Help?</StyledHelp>
        <StyledContainer3>
          <StyledLogo inputImg={Logo}></StyledLogo>
          <StyledVector inputImg={Vector}></StyledVector>

          <StyledContainer2
            inputWidth="51.5vw"
            inputHeight="75vh"
            inputBorder="15px"
          >
            <Verify />
          </StyledContainer2>
        </StyledContainer3>
      </StyledYo>
    </StyledContainer>
  );
}

export default Card;
