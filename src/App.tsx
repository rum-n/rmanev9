import { Home } from "./pages/Home";
import { BlogPost } from "./pages/BlogPost";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PathProvider } from "./context/PathContext";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <PathProvider>
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </PathProvider>
    </ThemeProvider>
  );
}

const AppContent = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/writing/:slug" element={<BlogPost />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
};

export default App;
