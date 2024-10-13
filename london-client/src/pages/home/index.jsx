import React from 'react';
import Slider from '../../components/slider';
import Header from '../header';
import Content from './components/content';

const Home = () => {
  return (
    <div className='relative overflow-hidden min-h-screen'>
      {/* Slider at the top, responsive spacing */}
      <div className='w-full'>
        <Slider />
      </div>

      {/* Header positioned in the middle on larger screens */}
      <div className='absolute top-0 w-full md:left-1/2 md:transform md:-translate-x-1/2 md:pt-4 pt-2'>
        <Header />
      </div>

      {/* Content section with responsive padding */}
      <div className='w-full mt-8 md:mt-16 px-0 md:px-0 lg:px-0'>
        <Content />
      </div>
    </div>
  );
};

export default Home;
