// Import global npm modules
import React from "react";

// Import local ui modules
import Container from "./ui/container";
import Sidebar from "./ui/sidebar";
import Photos from "./ui/photos";

// Create Index main
const Index = () => {
  // Return jsx
  return (
    <Container>
      <Photos />
      <Sidebar />
    </Container>
  );
};

// Export default Index main
export default Index;
