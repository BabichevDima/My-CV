import React, { useState } from "react";
import styled from "@emotion/styled";

import { Avatar } from "./Avatar";

export function Sidebar() {
  const [show, setShow] = useState(true);

  // const showDescription = () => {
  //   if (!show) {
  //     return setShow(true);
  //   }
  //   return setShow(false);
  // };

  return (
    <Container>
      <Avatar />
      <div>
        <Sections /*onClick={showDescription}*/>Summary</Sections>
        {show ? (
          <p>
            By education I am a civil engineer, a couple of years ago I got
            carried away with programming. When I realized that programming as a
            hobby was not enough for me, I signed up for a front-end developer
            course. I learn quickly because I love it. I am persistent and
            highly motivated. Programming became one of my main hobbies a year
            ago. I started to learn HTML, CSS by myself. I strive for high
            results, because I want to change not only my profession, but also
            my life.
          </p>
        ) : null}
      </div>

      <div>
        <Sections /*onClick={showDescription}*/>Skills</Sections>
        {show ? (
          <ul>
            <li>React</li>
            <li>JavaScript</li>
            <li>GIT</li>
            <li>HTML</li>
            <li>CSS, Sass</li>
            <li>Photoshop</li>
            <li>Figma</li>
          </ul>
        ) : null}
      </div>
      <div style={{ marginBottom: "10px" }}>
        <b>
          My level of English is A1. I am constantly improving my English. I
          read books, watch you-tube channels and use applications.
        </b>
      </div>
      <div>
        <Sections /*onClick={showDescription}*/>References</Sections>
        {show ? (
          <ul>
            <li>
              My trainer <a href="#">Тут может будет ссылка на Linkdin Арса</a>
            </li>
          </ul>
        ) : null}
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
