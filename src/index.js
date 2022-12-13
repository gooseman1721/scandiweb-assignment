/** @jsxImportSource @emotion/react */

import React from "react";
import { css, Global } from "@emotion/react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";

import { createBrowserRouter, RouterProvider, ScrollRestoration } from "react-router-dom";

import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import CategoryPage from "./routes/CategoryPage";
import ProductDisplayPage from "./routes/ProductDisplayPage";
import CartPage from "./routes/CartPage";

const container = document.getElementById("root");
const root = createRoot(container);

const fontStyle = css`
  font-family: "Raleway";
`;

const router = createBrowserRouter([
  {
    path: "/",
    element: <><App/> <ScrollRestoration/></>,
    children: [
      {
        index: true,
        element: <CategoryPage />,
      },
      {
        path: "product/:productId",
        element: <ProductDisplayPage />,
      },
      {
        path: "cart/",
        element: <CartPage/>
      }
    ],
  },
]);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
      <Global styles={fontStyle} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
