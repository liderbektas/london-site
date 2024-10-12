import Header from '../header';
import List from './list';
import { useEffect } from 'react';
import { useCart } from '../../redux/hooks/hooks';
import { Link } from 'react-router-dom';

const Cart = ({ setIsOrderCompleted, setChecker }) => {
  const cart = useCart();

  const setCartChecker = () => {
    setChecker(true);
  };

  useEffect(() => {
    setCartChecker();
  }, [setChecker]);

  return (
    <div className='flex flex-col w-screen h-screen bg-gradient-to-b from-black via-gray-900 to-black'>
      <Header />
      <div className='px-4 mx-auto mt-20 md:w-[1200px] md:px-0'>
        {cart.items.length > 0 ? (
          <List setIsOrderCompleted={setIsOrderCompleted} cart={cart} />
        ) : (
          <div className='flex flex-col items-center justify-center mt-48 gap-y-16'>
            <div className='w-full max-w-md p-4 text-2xl text-center'>
              Your cart is currently empty.
            </div>
            <Link
              to='/order/Kebab'
              className='px-6 py-3 text-white transition duration-200 ease-in-out bg-transparent border border-white hover:bg-white hover:text-black'
            >
              Return to Shop
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
