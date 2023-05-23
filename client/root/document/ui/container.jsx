// Import global npm modules
import React, { Suspense } from "react";
import { Html, Head } from "next/document";

// Create Container ui
const Container = ({ children }) => {
  // Return jsx
  return (
    <Html lang="ru">
      <Head />
      <Suspense fallback={<></>}>{children}</Suspense>
    </Html>
  );
};

// Export default Container ui
export default Container;
