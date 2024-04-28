import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './assets/Pages/Home';
import Programpage from './assets/Pages/Programpage';
import Admissioncriteria from './assets/Pages/Admissioncriteria';
import Programs from './assets/Components/Programs/Programs';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/nile/home" element={<Home />} />
          <Route path="/nile/programpage" element={<Programpage />} />
          <Route path="/nile/admission-criteria" element={<Admissioncriteria />} />
          <Route path="/nile/home/programs" element={<Programs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
