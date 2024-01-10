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

const HeaderDiv = styled.div`
  width: 100%;
  height: 100%;
  background-color: black;

  display: flex;
  align-items: center;
`;

const Logo = styled(LogoBg)<{ bgicon: string }>`
  width: 120px;
  height: 60%;

  &:hover {
    cursor: pointer;
  }
`;

export default Header;
