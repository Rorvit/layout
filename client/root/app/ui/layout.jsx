// Import global npm modules
import React from "react";

// Import client layouts modules
import Index from "#/layouts/index";

// Create Layout ui
const Layout = ({ children }) => {
  // Return jsx
  return <Index>{children}</Index>;
};

// Export default Layout ui
export default Layout;
