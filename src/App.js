import React from 'react';
// import Navbar from './Components/nav-links/Navbar';
/* 
import { Routes, Route, BrowserRouter, Router } from 'react-router-dom';
import Home from './Components/nav-links/About';
import Contacts from './Components/nav-links/Contacts';
import Services from './Components/nav-links/Services';
import Projects from './Components/nav-links/Projects';
*/
// import Car from './Components/Car';

import Home from './Components/Navbar-Components/Home';
import {Route, Routes } from 'react-router-dom';
import About from './Components/Footer-Components/About';
import Products from './Components/Footer-Components/Products';
import Pricing from './Components/Footer-Components/Pricing';
import Payments from './Components/Footer-Components/Payments';
import Contacts from './Components/Footer-Components/Contacts';
import useScrollWithOffset from './Components/Additional-Components/UseScrollWithOffset';

// import ScrollBasedReveal from './Components/Additional-Components/Scroll-based-reveal';
// import Component1 from './Components/Additional-Components/Component1';


const App = () => {
  useScrollWithOffset(10);
  return (
    <div>
      
      <Routes>
        <Route path='/' index element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/products' element={<Products />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/payments' element={<Payments />} />
        <Route path='/contact' element={<Contacts />} />
      </Routes>
    
      {/* <ScrollBasedReveal /> */}
    </div>
  );
};

export default App;
