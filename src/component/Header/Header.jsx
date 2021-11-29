import React, { useState } from 'react';
import styled from '@emotion/styled';
import { useTranslation } from 'react-i18next';

import Developer from '../../../src/images/Developer4.png';
import Russia from '../../../src/images/Russia.png';
import England from '../../../src/images/England.png';
import { Sidebar } from '../Sidebar';
import { MainUnit } from '../MainUnit';

export function Header() {
  const [rus, setRus] = useState(true);
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    if (rus) {
      return setRus(false);
    }
    return setRus(true);
  };

  return (
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <Img src={Developer} alt='Developer' />
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between'
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            <Button
              style={
                !rus
                  ? {}
                  : {
                      backgroundColor: '#fff200'
                    }
              }
              onClick={() => changeLanguage('en')}
            >
              EN
            </Button>
            <ImgFlag
              style={
                rus
                  ? {}
                  : {
                      display: 'none'
                    }
              }
              src={England}
              alt='Developer'
            />
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            <Button
              style={
                rus
                  ? {}
                  : {
                      backgroundColor: '#fff200'
                    }
              }
              onClick={() => changeLanguage('rus')}
            >
              RUS
            </Button>
            <ImgFlag
              style={
                !rus
                  ? {}
                  : {
                      display: 'none'
                    }
              }
              src={Russia}
              alt='Developer'
            />
          </div>
        </div>
      </div>
      <Container>
        <Sidebar />
        <MainUnit />
      </Container>
      <div>
        <Img src={Developer} alt='Developer' />
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

const ImgFlag = styled.img`
  height: 35px;
  width: 35px;
`;

const Button = styled.button`
  &:hover {
    cursor: pointer;
    background-color: #7c7c7c;
  }
`;
