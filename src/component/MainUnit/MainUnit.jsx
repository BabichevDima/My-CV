import React, { useState } from "react";
import styled from "@emotion/styled";

import { Contact } from "./Contact";
import { Skills } from "./Skills";

export function MainUnit() {
  return (
    <Container>
      <Contact />
      <Skills />
    </Container>
  );
}

const Container = styled.div`
  max-width: 750px;
  padding: 0px 5px;
  @media (max-width: 1090px) {
    max-width: 950px;
    margin: auto;
  }
`;
