import React, { useState } from 'react';
import styled from '@emotion/styled';

import MyPhoto from '../../../src/images/MyPhoto.jpg';

export function Avatar() {
  return (
    <Container>
      <Img src={MyPhoto} alert='avatar' />
    </Container>
  );
}

const Container = styled.div`
  text-align: center;
  margin-bottom: 30px;
  @media (max-width: 1090px) {
    display: none;
  }
`;
const Img = styled.img`
  max-height: 300px;
  image-rendering: auto;
  position: relative;
`;
