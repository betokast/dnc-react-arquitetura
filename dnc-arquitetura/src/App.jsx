// ==== ROUTES ====
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// ==== PAGES ====
import Home from './pages/home/Home'
import About from './pages/about/About'
import Projects from './pages/projects/Projects'
import Contact from './pages/contact/Contact'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </Router>
  )
}

export default App
