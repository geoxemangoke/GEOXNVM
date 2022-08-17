import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Interest from './pages/Interest';
import Awards from './pages/Awards';
import Experience from './pages/Experience';

function App() {
  return (
    <Router>
      <Layout>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="experience" element={<Experience/>} />
          <Route path="skills" element={<Skills />} />
          <Route path="interest" element={<Interest />} />
          <Route path="awards" element={<Awards />} />
      </Routes>
      </Layout>
    </Router>
  );
}

export default App;
