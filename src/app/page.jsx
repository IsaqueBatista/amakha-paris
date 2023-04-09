import React from "react";
import Navbar from "../components/Navbar";
import VideoAbout from "../components/VideoAbout";
import CallBanner from "../components/CallBanner";
import Products from "../components/Products";
import Catalog from "../components/Catalog";
import Depositions from "../components/Depositions";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import About from "../components/About";

export default function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <About />
        <VideoAbout />
        <CallBanner />
        <Products />
        <Catalog />
        <CallBanner />
        <Depositions />
        <CallBanner />
      </main>
      <footer>
        <Contact />
        <Footer />
      </footer>
    </>
  );
}
