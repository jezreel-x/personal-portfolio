import React from 'react';
import Navbar from './Components/nav-links/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/nav-links/Home';
import Contacts from './Components/nav-links/Contacts';
import About from './Components/nav-links/About';
import Services from './Components/nav-links/Services';
import Projects from './Components/nav-links/Projects';

function App() {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Navbar />}>
                    <Route index element={<Home />} />
                    <Route path='about' element={<About />} />
                    <Route path='services' element={<Services />} />
                    <Route path='projects' element={<Projects />} />
                    <Route path='contact' element={<Contacts />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
