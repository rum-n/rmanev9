import { Home } from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Projects } from "./pages/Projects";
import { PathProvider } from "./context/PathContext";
import { Writing } from "./pages/Writing";
import { BlogPost } from "./pages/BlogPost";
import { Contact } from "./pages/Contact";

function App() {
  return (
    <PathProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </PathProvider>
  );
}

const AppContent = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="projects" element={<Projects />}></Route>
      <Route path="writing" element={<Writing />}></Route>
      <Route path="writing/:slug" element={<BlogPost />} />
      <Route path="contact" element={<Contact />} />
    </Routes>
  );
};

export default App;
