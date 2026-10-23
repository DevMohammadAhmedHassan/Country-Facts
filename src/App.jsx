import "./App.css";
import { Routes , Route } from "react-router";
import Home from "./pages/Home";
import Country from "./pages/Country";
import Contact from "./pages/Contact";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/contact" element={<Contact />}/>
      <Route path="/country" element={<Country />}/>
      
      <Route path="*" element={<PageNotFound/>}/>
    </Routes>
  );
}

export default App;
