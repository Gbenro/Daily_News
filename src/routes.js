import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import MainLayout from "./components/hoc/mainLayout";

import Home from "./components/home";
import Header from "./components/header";

const IRoutes = () => (
  <BrowserRouter>
    <Header />
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </MainLayout>
  </BrowserRouter>
);

export default IRoutes;
