import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useCart } from '../../../redux/hooks/hooks';
import { FaShoppingCart } from "react-icons/fa";
import Hovered from './components/hovered';
import UnHovered from './components/unhovered';

const Card = () => {
  const cart = useCart();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className='relative'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to='/cart' className='pb-2 cursor-pointer hover:border-blue-500 md:block'>
        <div className='relative flex items-center'>
          <FaShoppingCart className='text-2xl text-white' />
          <span className='absolute top-0 right-0 flex items-center justify-center w-5 h-5 -mt-2 -mr-2 text-xs text-black bg-white rounded-full'>
            {cart.items.length}
          </span>
        </div>
      </Link>

      {isHovered &&
        (cart.items.length > 0 ? <Hovered cart={cart} /> : <UnHovered />)}
    </div>
  );
};

export default Card;