<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
  integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg=="
  crossorigin="anonymous"
  referrerpolicy="no-referrer"
/>;
import { useState } from "react";
import "./App.css";
import HeaderTop from "./Components/Navbar/Header-top";
import Navbar from "./Components/Navbar/Navbar";
import HeaderBottom from "./Components/Navbar/Header_bottom";
import Katalog from "./Components/Navbar/Katalog";
import Section1 from "./Components/Hero/Section1";
import Section2 from "./Components/Hero/Section2";
import { Route, Routes } from "react-router";
import About from "./Components/Hero/About";
import Home from "./Components/home";
function App() {
  return (
    <div>
      <HeaderTop />
      <Navbar />
      <HeaderBottom />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about/:id" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
