import React from "react";
import ReactDOM from "react-dom/client";
import { Routes, Route, BrowserRouter, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import Art from "./components/art/index.js";
import Blog from "./components/blog/index.js";
import Code from "./components/code/index.js";
import Home from "./components/home/index.js";
import Contact from "./components/contact/index.js";

import Header from "./components/shared/Header.js";
import Footer from "./components/shared/Footer.js";
import Background from "./components/shared/Background.js";

import "./global.css";
import { ContentContainer, PageContainer } from "./components/shared/index.js";
import useBlogRoutes from "./components/blog/routes.js";
import BlogPost from "./components/blog/BlogPost.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HelmetProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </HelmetProvider>
);

function App() {
  const location = useLocation();
  const blogRoutes = useBlogRoutes();

  return (
    <React.StrictMode>
      <PageContainer>
        <Header location={location} />
        <Background />
        <ContentContainer test-id="content-container">
          <Routes>
            <Route path="/" index element={<Home />} />
            <Route path="/code/" element={<Code />} />
            <Route path="/art/" element={<Art />} />
            <Route path="/blog/" element={<Blog />} />
            <Route
              path="/blog/post/"
              element={<BlogPost />}
              children={blogRoutes}
            />
            <Route path="/contact/" element={<Contact />} />
          </Routes>
          <Footer />
        </ContentContainer>
      </PageContainer>
    </React.StrictMode>
  );
}
