import React from 'react';
import Slider from '../../components/slider';
import Header from '../header';
import Content from './content';

const Home = () => {
  return (
    <div className='relative'>
      <Slider />
      <div className='absolute top-0 left-1/2 transform -translate-x-1/2 w-[1200px] pt-2'>
        <Header />
      </div>
        <Content />
    </div>
  );
};

export default Home;
