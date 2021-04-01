import React, { useState } from "react";
import styled from "@emotion/styled";
import { Trans, useTranslation } from "react-i18next";

import { Avatar } from "./Avatar";

export function Sidebar() {
  const { t, i18n } = useTranslation();
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
        <Sections /*onClick={showDescription}*/>
          {t("description.part2")}
        </Sections>
        {show ? <p>{t("description.part3")}</p> : null}
      </div>

      <div>
        <Sections /*onClick={showDescription}*/>
          {t("description.part4")}
        </Sections>
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
        <b>{t("description.part5")}</b>
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
