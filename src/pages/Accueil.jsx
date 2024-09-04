import { AboutSection } from "../components/AboutSection";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
// import { Navbar } from "../components/Navbar";
import { ProjectSection } from "../components/ProjectSection";
import ScrollToTop from "../components/ScrollTop";
import { ServiceSection } from "../components/ServiceSection";

const Accueil = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <Header />
      <AboutSection />
      <ServiceSection />
      <ProjectSection />
      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default Accueil;
