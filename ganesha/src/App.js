import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Services from './components/services';
import Contact from './components/contact';
import Footer from './components/footer';
import Header from './components/header';
import About from './components/about';
import Community from './components/community';


const App = () => {
  return (
    <Router>
      <div className="App">
        
         
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/community" element={<Community />} />
          
        </Routes>
<Footer />
      
      </div>
    </Router>
  );
};

export default App;
