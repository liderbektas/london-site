import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Order from './pages/order';
import Layout from './layout';

const App = () => {
  return (
    <div className='overflow-auto text-white bg-black'>
      <Routes>
        <Route path='/' element={<Layout />} />
        <Route path='/order/:categoryName' element={<Order />} />
      </Routes>
    </div>
  );
};

export default App;
