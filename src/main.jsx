import React from "react";
import ReactDOM from "react-dom/client";
import {
  RouterProvider,
  Route,
  createRoutesFromElements,
  createBrowserRouter,
} from "react-router-dom";
import "./index.css";
import Home from "./components/Home";

const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/*" element={Home}></Route>)
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
