import React from 'react';
import Slider from '../../components/slider';
import Header from '../header';
import Content from './components/content';


const Home = () => {
  return (
    <div className='relative overflow-hidden'>
      <Slider />
      <div className='absolute top-0 w-full pt-2 md:-translate-x-1/2 md:transform md:left-1/2'>
        <Header />
      </div>
        <Content />
    </div>
  );
};

export default Home;
