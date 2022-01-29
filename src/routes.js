import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import MainLayout from "./hoc/mainLayout";

import Home from "./components/home";
import Header from "./components/header";
import PostComponent from "./components/posts";
import Contact from "./components/contact";

const IRoutes = () => (
  <BrowserRouter>
    <Header />
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/article/:id" exact element={<PostComponent />} />
      </Routes>
    </MainLayout>
  </BrowserRouter>
);

export default IRoutes;
