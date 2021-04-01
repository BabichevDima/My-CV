import React from "react";
import styled from "@emotion/styled";
import { Trans, useTranslation } from "react-i18next";

export function Skills() {
  const { t, i18n } = useTranslation();

  return (
    <div>
      <div style={{ marginBottom: "80px" }}>
        <Sections style={{ color: "" }}>{t("description.part18")}</Sections>
        <p style={{ color: "#fff", fontWeight: "500" }}>Front-end Developer</p>
      </div>

      <div>
        <Sections>{t("description.part8")}</Sections>
        <p>
          <b>1.09.20 - 01.02.21</b> – {t("description.part9")}
        </p>
        <p>
          <b>1.09.11 - 23.06.16</b> – {t("description.part10")}
        </p>
      </div>

      <div>
        <Sections>{t("description.part11")}</Sections>
        <p>{t("description.part12")}</p>
        <p>{t("description.part13")}</p>
      </div>

      <div>
        <Sections>{t("description.part14")}</Sections>
        <p>
          {t("description.part15")}:{" "}
          <Link target="_blank" href="https://github.com/BabichevDima">
            {t("description.part6")}
          </Link>
        </p>
      </div>

      <div>
        <Sections>{t("description.part16")}</Sections>
        <p>{t("description.part17")}</p>
      </div>
    </div>
  );
}

const Sections = styled.div`
  background: #fff200;
  border-radius: 4px;
  font-weight: bold;
  padding: 3px 10px;
`;

const Link = styled.a`
  font-style: normal;
  font-weight: 650;
  line-height: 20px;
  text-decoration-line: none;
  color: #000000;
  &:hover {
    color: #3f78eb;
    opacity: 0.9;
    text-decoration-line: revert;
    transition: 0.3s;
  }
`;
