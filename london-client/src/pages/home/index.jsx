import React from 'react';
import Slider from '../../components/slider';
import Header from '../header';
import Content from './components/content';

const Home = () => {
  return (
    <div className='relative min-h-screen overflow-hidden'>
      <div className='w-full'>
        <Slider />
      </div>

      <div className='absolute top-0 w-full pt-2 lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:pt-4'>
        <Header />
      </div>

      <div className='w-full px-0 mt-8 lg:mt-16 lg:px-0'>
        <Content />
      </div>
    </div>
  );
};

export default Home;
