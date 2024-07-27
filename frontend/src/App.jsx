import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar.jsx';
import Home from './Pages/Home/Home.jsx';
import Footer from './Components/Footer/Footer.jsx';
import { useRef } from "react";
import Product1 from './Pages/Product1/Product1.jsx';
import Product2 from './Pages/Product2/Product2.jsx';
import Product3 from './Pages/Product3/Product3.jsx';
import AboutUs from './Pages/AboutUs/AboutUs.jsx';
import Products from './Pages/Products/Products.jsx';
import Rentals from './Pages/Rentals/Rentals.jsx';
import CompareAll from './Pages/CompareAll/CompareAll.jsx';
import PreBook from './Pages/PreBook/PreBook.jsx';

const App = () => {
  const cursor = useRef(null);
  const changePosition = (e) => {
    cursor.current.style.top = `${e.clientY}px`;
    cursor.current.style.left = `${e.clientX}px`;
  };

  return (
    <>
      <div onMouseMove={changePosition} className="app">
        <div className="cursor-style" ref={cursor}></div>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/product1' element={<Product1 />} />
          <Route path='/product2' element={<Product2 />} />
          <Route path='/product3' element={<Product3 />} />
          <Route path='/aboutus' element={<AboutUs />} />
          <Route path='/rentals' element={<Rentals />} />
          <Route path='/compareall' element={<CompareAll />} />
          <Route path='/prebook' element={<PreBook />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
