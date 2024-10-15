import Header from '../header';
import List from './list';
import { useEffect } from 'react';
import { useCart } from '../../redux/hooks/hooks';
import { Link } from 'react-router-dom';
import Checker from '../order/checker';
import CheckerModal from '../order/checker/components/modal';

const Cart = ({ setIsOrderCompleted, checker, setChecker }) => {
  const cart = useCart();

  console.log(checker);

  return (
    <div className='flex flex-col w-screen bg-[#0a0a0b]'>
      <Header checker={checker} />
      <div className='px-4 mx-auto mt-20 lg:w-[1200px] lg:px-0'>
        {cart.items.length > 0 ? (
          checker ? (
            <List setIsOrderCompleted={setIsOrderCompleted} cart={cart} />
          ) : (
            <CheckerModal setChecker={setChecker} />
          )
        ) : (
          <div className='flex flex-col h-[550px] pb-96 items-center justify-center mt-48 gap-y-16'>
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