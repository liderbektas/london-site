import { useState } from 'react';
import { IoMenu, IoClose } from 'react-icons/io5';
import Logos from '../logo';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <ul className='items-center justify-between hidden md:flex gap-x-20'>
        <li className='font-semibold transition duration-200 text-md hover:scale-110'>
          <a href='#home'>Home</a>
        </li>
        <li className='font-semibold transition duration-200 text-md hover:scale-110'>
          <a href='#menu'>Menu</a>
        </li>
        <li className='font-semibold transition duration-200 text-md hover:scale-110'>
          <a href='#about'>About</a>
        </li>
        <li className='font-semibold transition duration-200 text-md hover:scale-110'>
          <a href='#contact'>Contact</a>
        </li>
      </ul>

      <button
        className='flex items-center justify-center p-2 text-black transition duration-300 bg-gray-200 rounded-full md:hidden hover:bg-gray-300 focus:outline-none'
        onClick={handleToggle}
      >
        {toggle ? (
          <IoClose
            className='transition-transform transform rotate-180'
            size={24}
          />
        ) : (
          <IoMenu
            className='transition-transform transform rotate-0'
            size={24}
          />
        )}
      </button>

      {toggle && (
        <div
        className={`fixed top-0 right-0 z-50 flex flex-col py-6 items-center w-full bg-white shadow-xl transition-all duration-500 ease-in-out transform ${
          toggle ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'
        } overflow-hidden`}
        >
          <button
            className='absolute p-2 text-black bg-gray-200 rounded-full top-4 right-4 hover:bg-gray-300 focus:outline-none'
            onClick={handleToggle}
          >
            <IoClose size={24} />
          </button>
          <div className='mb-6'>
            <Logos className='w-auto h-16' />
          </div>
          <div className='flex flex-col items-center gap-4'>
            {['Home', 'Menu', 'About', 'Contact'].map((item, index) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className='flex items-center justify-center px-4 py-2 text-black transition duration-200 rounded-md hover:bg-gray-100'
                style={{ transitionDelay: `${index * 0.1}s` }} 
                onClick={handleToggle}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
