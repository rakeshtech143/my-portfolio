/* eslint-disable jsx-a11y/anchor-is-valid */
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import './index.css'; // GOOD
import './App.css'
import Header from './header/header';
import Contact from './Contact/contact';
import Footer from './Footer/footer';
import About from './About/about';
import Resume from './Resume/resume';
import Projects from './Projects/projects';
import Home from './Home/home';


function App() {
  const [darkMode, setDarkMode] = useState(false);
   
   return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <Router>
          <Header setDarkMode={setDarkMode} darkMode={darkMode}/>
          <main className="p-6">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/portfolio" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </Router>
      </div>
      <a href="#" id="scroll-top" className="scroll-top d-flex align-items-center justify-content-center active">
        <i class="bi bi-arrow-up-short"></i>
      </a>
    </div>
  );
}

export default App;
