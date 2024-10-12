import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { IoClose, IoMenu } from 'react-icons/io5';
import Logos from '../../logo';

const NavigationLinks = ({ categories }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className='items-center hidden md:flex gap-x-8'>
        {categories?.map((category) => (
          <NavLink
            className={({ isActive }) =>
              isActive
                ? 'flex items-center justify-center transition duration-200 border-b'
                : 'text-white'
            }
            to={`/order/${category.name}`}
            key={category.id}
          >
            {category.name}
          </NavLink>
        ))}
      </div>

      <button
        className='flex items-center justify-center p-2 text-black transition duration-300 bg-gray-200 rounded-full md:hidden hover:bg-gray-300 focus:outline-none'
        onClick={openHandler}
      >
        {isOpen ? (
          <IoClose className='transition-transform transform rotate-180' size={24} />
        ) : (
          <IoMenu className='transition-transform transform rotate-0' size={24} />
        )}
      </button>

      <div
        className={`fixed top-0 right-0 z-50 flex flex-col py-6 items-center w-full bg-white shadow-xl transition-all duration-500 ease-in-out transform ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'
        } overflow-hidden`}
      >
        {isOpen && (
          <>
            <button
              className='absolute p-2 text-black bg-gray-200 rounded-full top-4 right-4 hover:bg-gray-300 focus:outline-none'
              onClick={openHandler}
            >
              <IoClose size={24} />
            </button>
            <div className='mt-8 mb-6'>
              <Logos className='w-auto h-16' />
            </div>
            <div className='flex flex-col items-center gap-6'>
              {categories?.map((category, index) => (
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? 'flex items-center justify-center transition duration-200 border-b text-black hover:bg-gray-100'
                      : 'flex items-center justify-center transition duration-200 text-black hover:bg-gray-100'
                  }
                  to={`/order/${category.name}`}
                  key={category.id}
                  onClick={openHandler}
                  style={{ transitionDelay: `${index * 0.1}s` }} 
                >
                  {category.name}
                </NavLink>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default NavigationLinks;
