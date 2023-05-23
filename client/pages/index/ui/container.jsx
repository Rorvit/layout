// Import global npm modules
import React from "react";
import styled from "@emotion/styled";

// Create Container ui
const Container = ({ children }) => {
  // Return jsx
  return <Main>{children}</Main>;
};

// Create Main styled component
const Main = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 50px;
  max-width: 1040px;
  padding: 0 20px;
  margin: 140px auto;
`;

// Export default Container ui
export default Container;
