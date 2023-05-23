// Import global npm modules
import React from "react";

// Import client proveders modules
import Theme from "#/providers/theme";

// Create Providers ui
const Providers = ({ children }) => {
  // Return jsx
  return <Theme>{children}</Theme>;
};

// Export default Providers ui
export default Providers;
