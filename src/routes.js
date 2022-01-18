import React from "react";
import Home from "./components/home";
import { Routes, Route, BrowserRouter } from "react-router-dom";
const IRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </BrowserRouter>
);

export default IRoutes;
