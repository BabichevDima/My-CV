import React from "react";
import styled from "@emotion/styled";

import { Header } from "./component/Header";

export function App() {
  return (
    <Container>
      <Header />
    </Container>
  );
}

const Container = styled.div`
  max-width: 1132px;
  width: 100%;
  margin: 20px auto;
  padding: 0px 16px;
  box-sizing: border-box;
  box-shadow: 0px 6px 30px 20px rgb(0 0 0 / 90%);
  position: relative;
  &::before {
    content: "";
    margin: auto;
    background: #2b2b2b;
    position: absolute;
    top: 0;
    left: 0;
    height: 350px;
    width: 100%;
    z-index: -1;
    @media (max-width: 1090px) {
      height: 470px;
    }
    @media (max-width: 560px) {
      height: 700px;
    }
  }
  &::after {
    content: "";
    background: #2b2b2b;
    position: absolute;
    bottom: 0px;
    left: 0px;
    height: 100px;
    width: 100%;
    z-index: -1;
    @media (max-width: 1090px) {
      height: 50px;
    }
  }
  @media (max-width: 1090px) {
    margin: auto;
  }
`;
