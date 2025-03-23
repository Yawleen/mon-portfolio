import ParticlesBackground from "./components/ParticlesBackground/ParticlesBackground";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";

function App() {

  return (
    <BrowserRouter>
      <ParticlesBackground />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mes-projets" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
