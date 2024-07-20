import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Programpage from './Pages/Programpage';
import Boardofdirectors from './Pages/Boardofdirectors';
import Data from './Pages/Data';
import Navbar from './Components/Navbar/Navbar';
import Activities from './Pages/Activities';
import About from './Components/About/About';
import PaymentMethods from './Components/PaymentMethods/PaymentMethods'; // Import the new component


function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/programpage" element={<Programpage />} />
          <Route path="/boardofdirectors" element={<Boardofdirectors/>} />
          <Route path="/activities" element={<Activities/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/data" element={<Data/>} />
          <Route path="/home/programs" element={<Navbar/>} />
          <Route path="/payment-methods" element={<PaymentMethods />} /> {/* Add the new route */}

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
