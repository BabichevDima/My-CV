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
            A year ago, programming became one of my main hobbies. I started
            learning HTML, CSS on my own. When I realized that programming as a
            hobby was not enough for me, I signed up for a front-end developer
            course. I am a fast learner because I love it. I am persistent and
            very motivated. I strive for high results, because I want to change
            not only my profession, but also my life.
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
