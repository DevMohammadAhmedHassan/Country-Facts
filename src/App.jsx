import "./App.css";
import { Routes , Route } from "react-router";
import Home from "./pages/Home";
import Country from "./pages/country";
import Contact from "./pages/Contact";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/contact" element={<Contact />}/>
      <Route path="/country" element={<Country />}/>
      <Route path="/" element={<Home />}/>
      <Route path="/" element={<Home />}/>
    </Routes>
  );
}

export default App;
