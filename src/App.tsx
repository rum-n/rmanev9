import { Home } from "./pages/Home";
import { Projects } from "./pages/Projects";
import { BlogPost } from "./pages/BlogPost";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PathProvider } from "./context/PathContext";
import { ThemeProvider } from "./context/ThemeContext";
import { ColorProvider } from "./context/ColorContext";

function App() {
  return (
    <ThemeProvider>
      <ColorProvider>
        <PathProvider>
          <BrowserRouter>
            <AppContent />
          </BrowserRouter>
        </PathProvider>
      </ColorProvider>
    </ThemeProvider>
  );
}

const AppContent = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/writing/:slug" element={<BlogPost />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
};

export default App;
