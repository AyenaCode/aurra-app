import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar"; // Ajoutez cette ligne
import ScrollToTop from "./components/ScrollTop";
import Accueil from "./pages/Accueil";
import APropos from "./pages/APropos";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Services from "./pages/Services";

const App = () => {
  return (
    <div className="theme-night">
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/services" element={<Services />} />
          <Route path="/a-propos" element={<APropos />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="*" element={<Accueil />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
