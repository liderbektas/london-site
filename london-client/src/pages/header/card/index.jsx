import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useCart } from '../../../redux/hooks/hooks';
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
      <Link to='/cart' className='pb-2 border-b cursor-pointer md:block'>
        Cart ({cart.items.length})
      </Link>

      {isHovered &&
        (cart.items.length > 0 ? <Hovered cart={cart} /> : <UnHovered />)}
    </div>
  );
};

export default Card;