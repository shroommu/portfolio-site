import React from "react";
import ReactDOM from "react-dom/client";
import ReactBreakpoints from "react-breakpoints";
import App from "./App";
import "./global.css";

const breakpoints = {
  mobile: 320,
  mobileLandscape: 480,
  tablet: 768,
  tabletLandscape: 1024,
  desktop: 1200,
  desktopLarge: 1500,
  desktopWide: 1920,
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ReactBreakpoints breakpoints={breakpoints}>
      <App />
    </ReactBreakpoints>
  </React.StrictMode>
);
