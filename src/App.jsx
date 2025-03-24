import ParticlesBackground from "./components/ParticlesBackground/ParticlesBackground";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const location = useLocation();
  const showNavbarRoutes = ["/mes-projets", "/contact", "/a-propos-de-moi"];
  const shouldShowNavbar = showNavbarRoutes.includes(location.pathname);

  
  return (
    <>
      <ParticlesBackground />
      {shouldShowNavbar && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mes-projets" element={<Projects />} />
      </Routes>
    </>
  )
}

export default App
