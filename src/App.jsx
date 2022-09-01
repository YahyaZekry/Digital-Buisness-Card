import React from "react";
import Info from "./components/Info";
import About from "./components/About";
import Interests from "./components/Interests";
import Footer from "./components/Footer";
import containerCSS from "./components/App.module.css";

export default function App() {
  return (
    <div className={containerCSS["container--wrapper"]}>
      <Info />
      <About />
      <Interests />
      <Footer />
    </div>
  );
}
