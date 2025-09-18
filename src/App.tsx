import { Home } from "./pages/Home";
import { BlogPost } from "./pages/BlogPost";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PathProvider } from "./context/PathContext";
import { VersionProvider } from "./context/VersionContext";

function App() {
  return (
    <VersionProvider>
      <PathProvider>
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </PathProvider>
    </VersionProvider>
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
