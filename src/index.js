import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";

import Art from "./components/art/index.js";
import Blog from "./components/blog/index.js";
import Code from "./components/code/index.js";
import Home from "./components/home/index.js";
import Header from "./components/shared/Header.js";
import Footer from "./components/shared/Footer.js";

import "./global.css";
import { PageContainer } from "./components/shared/index.js";

const commonLayout = () => {
  return (
    <PageContainer>
      <Header />
      <Outlet />
      <Footer />
    </PageContainer>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: commonLayout(),
    children: [
      { path: "/", element: <Home /> },
      {
        path: "blog/",
        element: <Blog />,
      },
      {
        path: "art/",
        element: <Art />,
      },
      {
        path: "code/",
        element: <Code />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <Home />
    </RouterProvider>
  </React.StrictMode>
);
