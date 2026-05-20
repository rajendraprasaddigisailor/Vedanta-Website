import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import useCommonSetup from './useCommonSetup';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import QuickLinksSidebar from './components/QuickLinksSidebar';
import Home from './pages/Home';
import About from './pages/About';
import Business from './pages/Business';
import Investors from './pages/Investors';
import Sustainability from './pages/Sustainability';
import News from './pages/News';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import Buy from './pages/Buy';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <SetupRunner />
      <Navbar />
      <QuickLinksSidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/business" element={<Business />} />
        <Route path="/investors" element={<Investors />} />
        <Route path="/sustainability" element={<Sustainability />} />
        <Route path="/news" element={<News />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/buy" element={<Buy />} />
      </Routes>
      <Footer />
    </Router>
  );
}

function SetupRunner() { useCommonSetup(); return null; }
