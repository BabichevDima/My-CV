import React from "react";
import styled from "@emotion/styled";

import MyPhoto from "../../../src/images/MyPhoto.jpg";

export function Contact() {
  return (
    <Container>
      <Img src={MyPhoto} alert="avatar" />

      <div>
        <h1 style={{ textAlign: "center", marginTop: "0px" }}>
          Babichev Dmitry
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
            <Link href="https://github.com/BabichevDima"> My GitHub</Link>
          </li>
          <li>
            <b>LinkedIn: </b>
            <Link href="https://github.com/BabichevDima"> My LinkedIn</Link>
          </li>
        </ul>
      </div>
    </Container>
  );
}

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
