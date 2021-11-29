import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Trans, useTranslation } from 'react-i18next';

import { Avatar } from './Avatar';

export function Sidebar() {
  const { t, i18n } = useTranslation();

  return (
    <Container>
      <Avatar />
      <div>
        <Sections>{t('description.part2')}</Sections>
        <p>{t('description.part3')}</p>
      </div>

      <div>
        <Sections>{t('description.part4')}</Sections>
        <ul>
          <li>HTML5</li>
          <li>CSS3 (Sass/Less/Scss)</li>
          <li>JavaScript (ECMAScript 5-7)</li>
          <li>Node.js</li>
          <li>Basic understanding of React</li>
          <li>GIT (GitHub)</li>
          <li>NPM, Yarn</li>
          <li>Webpack</li>
          <li>Photoshop</li>
          <li>Figma</li>
          <li>Visual Studio Code</li>
        </ul>
      </div>
      <div style={{ marginBottom: '10px' }}>
        <b>{t('description.part5')}</b>
      </div>
    </Container>
  );
}

const Container = styled.div`
  max-width: 250px;
  background: #ffd900;
  padding: 55px 10px 0px 10px;
  @media (max-width: 1090px) {
    max-width: 950px;
    margin: auto;
    background: none;
  }
`;

const Sections = styled.div`
  background: #fff200;
  border-radius: 4px;
  font-weight: bold;
  padding: 3px 10px;
`;
