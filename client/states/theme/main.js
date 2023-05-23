// Import global npm modules
import { atom } from "jotai";

// Light theme
const lightTheme = atom({
  // Set values
  container: 1240,
  margin: 50,
  padding: 20,
  radius: 6,

  // Set fonts
  inter: "Inter, sans-serif",

  // Set breakpoints
  tablet: "@media (max-width: 768px)",
  phone: "@media (max-width: 576px)",

  // Set colors
  primary: "#0070f3",
  secondary: "#FC2F48",
  deepBlue: "#12376B",
  darkBlue: "#1E539D",
  transparentBlue: "rgba(30, 83, 157, 0.05)",
  lightBlue: "#1e539d0d",
  background: "#fff",
  card: "#ffffff",
  border: "#eeeeee",
  text: "#242931",
  light: "#888888",
  hover: "#cccccc",
});

export { lightTheme };
