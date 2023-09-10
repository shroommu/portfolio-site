import React from "react";
import ReactDOM from "react-dom/client";
import { Routes, Route, BrowserRouter, useLocation } from "react-router-dom";

import Art from "./components/art/index.js";
import Blog from "./components/blog/index.js";
import Code from "./components/code/index.js";
import Home from "./components/home/index.js";
import Header from "./components/shared/Header.js";
import Footer from "./components/shared/Footer.js";

import "./global.css";
import { PageContainer } from "./components/shared/index.js";
import Contact from "./components/contact/index.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

function App() {
  const location = useLocation();

  return (
    <React.StrictMode>
      <PageContainer>
        <Header location={location} />
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/code" element={<Code />} />
          <Route path="/art" element={<Art />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </PageContainer>
    </React.StrictMode>
  );
}
