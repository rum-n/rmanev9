import { Home } from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Projects } from "./pages/Projects";
import ThreeParticles from "./components/ThreeParticles";
import { PathProvider } from "./context/PathContext";
// import { Contact } from "./pages/Contact";

function App() {
  return (
    <PathProvider>
      <ThreeParticles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="projects" element={<Projects />}></Route>
          {/* <Route path="contact" element={<Contact />}></Route> */}
        </Routes>
      </BrowserRouter>
    </PathProvider>
  );
}

export default App;
