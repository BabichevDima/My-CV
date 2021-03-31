import React from "react";
import styled from "@emotion/styled";

import Developer from "../../../src/images/Developer4.png";
import { Sidebar } from "../Sidebar";
import { MainUnit } from "../MainUnit";

export function Header() {
  return (
    <div>
      <div>
        <Img src={Developer} alt="Developer" />
      </div>
      <Container>
        <Sidebar />
        <MainUnit />
      </Container>
      <div>
        <Img src={Developer} alt="Developer" />
      </div>
    </div>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 1090px) {
    flex-direction: column-reverse;
  }
`;

const Img = styled.img`
  height: 50px;
  width: 50px;
`;
