import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { PageDiv, LogoBg } from "../../PageStype";

interface ResultBaseProps {
  comment: string;
  icon?: string;
}

const ResultBase = ({ comment, icon }: ResultBaseProps) => {
  const nav = useNavigate();

  useEffect(() => {
    const movePage = setTimeout(() => {
      nav(-1);
    }, 3000);

    return () => clearTimeout(movePage);
  }, [nav]);

  return (
    <CompleteDiv>
      <Logo bgicon={icon && icon} />
      {comment}
    </CompleteDiv>
  );
};

const CompleteDiv = styled(PageDiv)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;
  font-weight: 700;
  white-space: pre-line;
`;

const Logo = styled(LogoBg)<{ bgicon?: string }>`
  width: 50%;
  height: 50px;
`;

export default ResultBase;
