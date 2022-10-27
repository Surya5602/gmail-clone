import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Signin from "./components/Signin/Signin";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/login" element={<Signin />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
