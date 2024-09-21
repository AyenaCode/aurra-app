import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import AutoScroll from "./components/AutoScroll";
import { Navbar } from "./components/Navbar";
import { ScrollToTop } from "./components/ScrollTop";
import Accueil from "./pages/Accueil";
import APropos from "./pages/APropos";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Services from "./pages/Services";

function App() {
  return (
    <Router>
      <AutoScroll />
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/a-propos" element={<APropos />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </Router>
  );
}

export default App;
