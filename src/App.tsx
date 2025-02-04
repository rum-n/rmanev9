import { Home } from "./pages/Home";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Projects } from "./pages/Projects";
import ThreeParticles from "./components/ThreeParticles";
import { PathProvider } from "./context/PathContext";
import { Writing } from "./pages/Writing";
import { BlogPost } from "./pages/BlogPost";
import { useEffect, useState } from "react";

function App() {
  return (
    <PathProvider>
      <BrowserRouter>
        <ParticlesWrapper />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="projects" element={<Projects />}></Route>
          <Route path="writing" element={<Writing />}></Route>
          <Route path="writing/:slug" element={<BlogPost />} />
        </Routes>
      </BrowserRouter>
    </PathProvider>
  );
}

const ParticlesWrapper = () => {
  const [showParticles, setShowParticles] = useState(true);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes("/writing")) {
      setShowParticles(false);
    } else {
      setShowParticles(true);
    }
  }, [location.pathname]);

  return showParticles ? <ThreeParticles /> : null;
};

export default App;
