import "./App.css";
import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Country from "./pages/Country";
import Contact from "./pages/Contact";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <div className="min-h-screen w-full relative">
      {/* Background */}
      <div
        className="fixed inset-0 z-0"
        style={{
          background: `linear-gradient(45deg, #FFB3D9 0%, #FFD1DC 20%, #FFF0F5 40%, #E6F3FF 60%, #D1E7FF 80%, #C7E9F1 100%)`,
        }}
      />

      {/* All Routes */}
      <div className="relative z-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/country" element={<Country />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
