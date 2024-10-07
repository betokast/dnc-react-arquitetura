import { useContext } from "react";
// ==== ROUTES ====
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// ==== PAGES ====
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Projects from "./pages/projects/Projects";
import Contact from "./pages/contact/Contact";

// ==== UTILS ====
import ScrollToTop from "./utils/ScrollToTop";
import { AppContext } from "./contexts/AppContext";

function App() {
  const appContext = useContext(AppContext);

  if(appContext.loading) {
    return 'Loading...'
  }
  
  return (
    <Router>
      <ScrollToTop /> {/*Função sendo chamada para atualizar a montagem */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
