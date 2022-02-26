import './App.css';
import React from "react";
import { BrowserRouter as Router,Routes, Route, Link } from "react-router-dom";
import Navbar from './component/NavbarComponent/navbarComponent';
import Home from './component/HomeComponent/homeComponent';
import Footer from './component/FooterCompnent/FooterComponent';


function App() {
  return (
    <Router>
    <div>
        <Navbar />
        

    <Routes>    
      <Route path="/" exact element={<Home />} />
    </Routes>
        
      <Footer />
    </div>
  </Router>
  );
}

export default App;
