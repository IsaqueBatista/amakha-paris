import React from "react";
import Navbar from "../components/Navbar";
import About from "../components/About";
import CallBanner from "../components/CallBanner";
import Perfumary from "../components/Perfumary";

export default function Home() {
  return (
    <div>      
      <Navbar />
      <About />
      <CallBanner />
      <Perfumary />
    </div>
  );
}
