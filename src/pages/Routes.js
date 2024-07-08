import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Whyus from "./Whyus";
import Trainer from "./Trainer";
import Contact from "./ContactUs";

export default function Index() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/whyus" element={<Whyus />} />
        <Route path="/trainer" element={<Trainer />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="*"
          element={<h1 className="text-center py-5">404 Page Not Found</h1>}
        />
        <Route />
      </Routes>
      <Footer />
    </>
  );
}
