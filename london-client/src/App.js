import React, { useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Order from './pages/order';
import Layout from './layout';
import { Toaster } from 'react-hot-toast';
import Cart from './pages/cart';
import Complete from './pages/complete';
import Success from './pages/success';
import Checker from './pages/order/checker';

const App = () => {
  const [isOrderCompleted, setIsOrderCompleted] = useState(false);
  const [checker, setChecker] = useState(false);

  return (
    <>
      <Toaster />
      <div className='overflow-auto text-white bg-black'>
        <Routes>
          <Route path='/' element={<Layout />} />
          <Route
            path='/order/:categoryName'
            element={<Order setChecker={setChecker} checker={checker} />}
          />
          <Route
            path='/cart'
            element={
              checker ? (
                <Cart
                  setIsOrderCompleted={setIsOrderCompleted}
                  setChecker={setChecker}
                />
              ) : (
                <Checker />
              )
            }
          />
          <Route
            path='/complete'
            element={isOrderCompleted ? <Complete /> : <Navigate to='/' />}
          />
          <Route
            path='/success'
            element={
              isOrderCompleted ? (
                <Success setIsOrderCompleted={setIsOrderCompleted} />
              ) : (
                <Navigate to='/' />
              )
            }
          />
        </Routes>
      </div>
    </>
  );
};

export default App;
