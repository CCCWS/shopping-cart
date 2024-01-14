import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import headerLogo from "../../icon/header_icon.png";
import { LogoBg } from "../../PageStype";

const Header = () => {
  const nav = useNavigate();

  return (
    <HeaderDiv>
      <Logo onClick={() => nav("/")} bgicon={headerLogo} />
    </HeaderDiv>
  );
};

const HeaderDiv = styled.header`
  width: 100%;
  height: 5%;

  background-color: black;

  display: flex;
  align-items: center;

  position: sticky;
  top: 0;

  padding-left: 1rem;

  z-index: 1;
`;

const Logo = styled(LogoBg)<{ bgicon: string }>`
  width: 20%;
  height: 60%;

  &:hover {
    cursor: pointer;
  }
`;

export default Header;
