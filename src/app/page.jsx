import React from "react";
import Navbar from "../components/Navbar";
import About from "../components/About";
import CallBanner from "../components/CallBanner";
import Products from "../components/Products";
import Catalog from "../components/Catalog";
import Depositions from "../components/Depositions"
import Contact from "../components/Contact";

export default function Home() {
  return (
    <div>      
      <Navbar />
      <About />
      <CallBanner />
      <Products />
      <Catalog />
      <CallBanner />
      <Depositions />
      <CallBanner />
      <Contact />
    </div>
  );
}
