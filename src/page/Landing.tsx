import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import { PageDiv, LogoBg } from "../PageStype";

import landingLogo from "../icon/landing_icon.png";

const Landing = () => {
  const nav = useNavigate();

  return (
    <LadingDiv>
      <Logo bgicon={landingLogo} />
      <PageMoveBtn onClick={() => nav("/order")}>주문하러 가기</PageMoveBtn>
    </LadingDiv>
  );
};

const LadingDiv = styled(PageDiv)`
  background-color: black;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px 0px;
`;

const Logo = styled(LogoBg)<{ bgicon: string }>`
  width: 50%;
  height: 50px;
`;

const PageMoveBtn = styled.button`
  width: 30%;
  height: 80px;

  border: 3px solid transparent;
  border-radius: 20px;

  background-color: white;

  font-size: 1.2rem;
  font-weight: 700;

  transition: 0.3s;

  &:hover {
    cursor: pointer;
    border: 3px solid gray;
  }
`;

export default Landing;
