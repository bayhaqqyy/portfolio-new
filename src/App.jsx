import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Cursor from './components/Cursor';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import HomePage from './pages/HomePage';
import BlogList from './pages/BlogList';

function App() {
  return (
    <>
      <ScrollToTop />
      <Cursor />
      <Navbar />

      <main className="relative min-h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogList />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
