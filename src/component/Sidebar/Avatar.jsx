import React, { useState } from "react";
import styled from "@emotion/styled";

import MyPhoto from "../../../src/images/MyPhoto.jpg";

// const toBase64 = (file) =>
//   new Promise((resolve, reject) => {
//     const reader = new FileReader();
//     reader.readAsDataURL(file);
//     reader.onload = () => resolve(reader.result);
//     reader.onerror = (error) => reject(error);
//   });

export function Avatar() {
  // const [photo, setPhoto] = useState(null);

  // const onMainPhotoSelected = async (e) => {
  //   if (e.target.files.length) {
  //     const img = await toBase64(e.target.files[0]);
  //     console.log(img);
  //     setPhoto(img);
  //   }
  // };

  return (
    <Container>
      <Img src={MyPhoto} alert="avatar" />
      {/* <input type="file" onChange={onMainPhotoSelected} /> */}
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
`;