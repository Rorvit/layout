// Import global npm modules
import React from "react";
import styled from "@emotion/styled";

// Create Container ui
const Photos = ({ children }) => {
  // Return jsx
  return (
    <Main>
      <Photo src="/images/img1.png" alt="img1" />
      <Photo src="/images/img2.png" alt="img2" />
      <Photo src="/images/img2.png" alt="img2" />
      <Photo src="/images/img3.png" alt="img3" />
    </Main>
  );
};

// Create Main styled component
const Main = styled.div`
  display: grid;
  grid-template-columns: 130px 1fr;
  grid-template-rows: repeat(3, 180px);
  grid-gap: 10px;
`;
const Photo = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  /* grid-row-start: 1;
  grid-row-end: 4;
  grid-column-start: 1;
  grid-column-end: 2; */
  &:nth-of-type(2) {
    grid-row-start: 1;
    grid-row-end: 4;
    grid-column-start: 2;
    grid-column-end: 3;
  }
`;

// Export default Container ui
export default Photos;
