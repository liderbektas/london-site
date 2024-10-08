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
    <div className='w-screen h-screen bg-gradient-to-b from-black via-gray-900 to-black'>
      <Header />
      <div className='mt-20 w-[1200px] mx-auto'>
        {cart.items.length > 0 ? (
          <List setIsOrderCompleted={setIsOrderCompleted} cart={cart} />
        ) : (
          <div className='flex flex-col items-center justify-center mt-48 gap-y-16'>
            <div className='text-2xl p-4 border-[0.5px] border-white w-full text-center'>
              Your cart is currently empty.
            </div>
            <Link
              to='/order/Kebab'
              className='px-6 py-3 text-white bg-transparent border-white border-[0.5px] hover:bg-white hover:text-black transition duration-200 ease-in-out'
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
