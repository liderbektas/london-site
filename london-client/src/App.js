import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Order from './pages/order';
import Layout from './layout';
import { Toaster } from 'react-hot-toast';
import Cart from './pages/cart';
import Checkout from './pages/checkout';
import Verification from './pages/verification';
import Complete from './pages/complete';
import Success from './pages/success';

const App = () => {
  return (
    <>
      <Toaster />
      <div className='overflow-auto text-white bg-black'>
        <Routes>
          <Route path='/' element={<Layout />} />
          <Route path='/order/:categoryName' element={<Order />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/verification' element={<Verification />} />
          <Route path='/complete' element={<Complete />} />
          <Route path='/success' element={<Success />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
