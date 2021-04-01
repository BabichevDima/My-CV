import React from "react";
import styled from "@emotion/styled";
import { Trans, useTranslation } from "react-i18next";

import MyPhoto from "../../../src/images/MyPhoto2.jpeg";
import QrCode from "../../../src/images/Qrcode.jpg";

export function Contact() {
  const { t, i18n } = useTranslation();

  return (
    <Wrapper>
      <Container>
        <div style={{ position: "relative" }}>
          <Img src={MyPhoto} alert="avatar" />
          <ImgQrCode src={QrCode} alert="Qrcode" />
        </div>
        <div>
          <h1 style={{ textAlign: "center", marginTop: "0px" }}>
            {t("description.part1")}
          </h1>
          <ul>
            <li>
              <b>Phone: </b> +375(25)-783-56-23
            </li>
            <li>
              <b>Email: </b> dima.babichev.1994@mail.ru
            </li>
            <li>
              <b>Skype: </b>live:.cid.ddfd644f75dfbce0
            </li>
            <li>
              <b>Telegram: </b>+375(29)-391-94-65
            </li>
            <li>
              <b>GitHub: </b>
              <Link target="_blank" href="https://github.com/BabichevDima">
                {t("description.part6")}
              </Link>
            </li>
            <li>
              <b>LinkedIn: </b>
              <Link
                target="_blank"
                href="https://www.linkedin.com/in/dmitry-babichev-64a431207/"
              >
                {t("description.part7")}
              </Link>
            </li>
          </ul>
        </div>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
`;

const Container = styled.div`
  color: #fff;
  @media (max-width: 1090px) {
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 30px;
  }
  @media (max-width: 560px) {
    flex-direction: column;
  }
`;

const Link = styled.a`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  text-decoration-line: none;
  color: #4985b7;
  &:hover {
    color: #0758fa;
    opacity: 0.9;
    transition: 0.5s;
  }
`;

const Img = styled.img`
  max-height: 300px;
  image-rendering: auto;
  display: none;
  @media (max-width: 1090px) {
    display: block;
  }
  @media (max-width: 560px) {
    max-width: 300px;
    margin: auto;
  }
`;

const ImgQrCode = styled.img`
  display: none;
  @media (max-width: 1090px) {
    display: block;
    position: absolute;
    height: 70px;
    image-rendering: auto;
    top: 230px;
    left: 0px;
  }
  @media (max-width: 560px) {
    display: none;
  }
`;
