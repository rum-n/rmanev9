import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Projects } from "./pages/Projects";
import { PathProvider } from "./context/PathContext";
import { Writing } from "./pages/Writing";
import { BlogPost } from "./pages/BlogPost";
import { Contact } from "./pages/Contact";
import { Desktop } from "./components/Desktop";
import { Taskbar } from "./components/Taskbar";

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
  const location = useLocation();
  const isDesktop = location.pathname === "/";

  return (
    <>
      {isDesktop && <Desktop />}
      <Routes>
        <Route path="/" element={null} />
        <Route path="projects" element={<Projects />}></Route>
        <Route path="writing" element={<Writing />}></Route>
        <Route path="writing/:slug" element={<BlogPost />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <Taskbar />
    </>
  );
};

export default App;
