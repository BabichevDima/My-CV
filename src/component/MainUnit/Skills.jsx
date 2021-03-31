import React from "react";
import styled from "@emotion/styled";

export function Skills() {
  return (
    <div>
      <div style={{ marginBottom: "80px" }}>
        <Sections style={{ color: "" }}>Objective</Sections>
        <p style={{ color: "#fff", fontWeight: "500" }}>Front-end Developer</p>
      </div>

      <div>
        <Sections>Education</Sections>
        <p>
          <b>1.09.20 - 01.02.21</b> – Coding School TeachMeSkills Course: Front
          End - developer Description: Development with Javascript (and also
          React.js). During the course I learnt such technologies as JavaScript
          and React. In my work I used some libraries: Redux, react-redux,
          emotion/styled, axios, react-dom, react-router-dom, redux-thunk,
          redux-form and other.
        </p>
        <p>
          <b>1.09.11 - 23.06.16</b> – Belarusian State University of Transport
          (Construction faculty)
        </p>
      </div>

      <div>
        <Sections>Work experience</Sections>
        <p>
          Period (from 2016 - to 2019) - DRSU-113, construction master: - "I
          learned my main responsibilities in a short time. During my work here
          I was responsible, fast accurate in calculation and became a good
          specialist in the sphere”.
        </p>
        <p>
          Period (from 2020 - to now ) - I work for myself as an individual
          entrepreneur.
        </p>
      </div>

      <div>
        <Sections>Additional information </Sections>
        <p>
          Portfolio:{" "}
          <Link target="_blank" href="https://github.com/BabichevDima"> My GitHub</Link>
        </p>
      </div>

      <div>
        <Sections>Reason for applying for a job </Sections>
        <p>
          Describe your real motivation for job as a Front End developer in
          future (Why a company should hire you instead of another person?)
        </p>
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
