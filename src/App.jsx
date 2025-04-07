import ParticlesBackground from "./components/ParticlesBackground/ParticlesBackground";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import Navbar from "./components/Navbar/Navbar";
import { HOME_ROUTE, PROJECTS_ROUTE, CONTACT_ROUTE, ABOUT_ROUTE } from "./config/routes";
import Contact from "./pages/Contact/Contact";
import AboutMe from "./pages/AboutMe/AboutMe";

function App() {
  const location = useLocation();
  const showNavbarRoutes = [PROJECTS_ROUTE, ABOUT_ROUTE, CONTACT_ROUTE];
  const shouldShowNavbar = showNavbarRoutes.includes(location.pathname);


  return (
    <>
      <ParticlesBackground />
      {shouldShowNavbar && <Navbar />}

      <Routes>
        <Route path={HOME_ROUTE} element={<Home />} />
        <Route path={PROJECTS_ROUTE} element={<Projects />} />
        <Route path={ABOUT_ROUTE} element={<AboutMe />} />
        <Route path={CONTACT_ROUTE} element={<Contact />} />
      </Routes>
      {location.pathname === HOME_ROUTE && <small className="signature">Yolène CONSTABLE - Site développé avec React (2025)</small>}
    </>
  )
}

export default App
