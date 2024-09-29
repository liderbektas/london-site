import { useCart } from '../../redux/hooks/hooks';
import Header from '../header';
import { Link } from 'react-router-dom';
import List from './list';

const Cart = ({ setIsOrderCompleted }) => {
  const cart = useCart();

  return (
    <div className='w-screen h-screen'>
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
