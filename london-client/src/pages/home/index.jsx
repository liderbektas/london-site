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

      <div className='absolute top-0 w-full pt-2 md:left-1/2 md:transform md:-translate-x-1/2 md:pt-4'>
        <Header />
      </div>

      <div className='w-full px-0 mt-8 md:mt-16 md:px-0 lg:px-0'>
        <Content />
      </div>
    </div>
  );
};

export default Home;
