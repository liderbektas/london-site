import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCheck } from 'react-icons/fa';

const Success = ({ setIsOrderCompleted }) => {
  const navigate = useNavigate();

  const returnHome = () => {
    navigate('/');
    setIsOrderCompleted(false);
  };

  return (
    <div className='flex flex-col items-center justify-center w-screen h-screen bg-gradient-to-r from-black via-gray-900 to-black'>
      <div className='w-[350px] md:w-[700px] md:h-[400px] flex flex-col items-center justify-center bg-white rounded-lg shadow-xl py-8 md:py-0'>
        <div className='flex items-center justify-center w-16 h-16 mb-6 bg-green-100 rounded-full shadow-lg md:w-28 md:h-28'>
          <FaCheck className='w-8 h-8 text-green-500 md:h-16 md:w-16' />
        </div>

        <h1 className='mb-4 text-lg font-extrabold text-green-600 md:text-5xl'>
          Order Successful!
        </h1>

        <p className='mb-6 text-base text-gray-700 md:text-lg'>
          Your order has been successfully taken.
          <br />
        </p>

        <button
          onClick={returnHome}
          className='px-4 py-2 md:px-8 md:py-3 text-lg text-black transition duration-300 transform bg-white rounded-full shadow-md hover:bg-black border-[1px] border-zinc-700 hover:text-white focus:ring-4 focus:ring-green-300 hover:scale-105'
        >
          Return to Homepage
        </button>
      </div>
    </div>
  );
};

export default Success;
