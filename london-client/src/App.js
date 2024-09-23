import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Order from './pages/order';
import Layout from './layout';
import { Toaster } from 'react-hot-toast';
import Cart from './pages/cart';

const App = () => {
  return (
    <>
      <Toaster />
      <div className='overflow-auto text-white bg-black'>
        <Routes>
          <Route path='/' element={<Layout />} />
          <Route path='/order/:categoryName' element={<Order />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
