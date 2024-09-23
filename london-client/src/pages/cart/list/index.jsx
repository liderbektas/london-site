import { useCart } from '../../../redux/hooks/hooks';
import Items from './items';
import Total from './totals';

const List = ({ cart }) => {
  const subTotal = cart.items.reduce(
    (acc, curr) =>
      acc + parseFloat(curr.item.price) * parseFloat(curr.item.quantity),
    0
  );
  return (
    <div className='flex flex-col gap-y-14'>
      <Items cart={cart} />
      <Total subTotal={subTotal} />
    </div>
  );
};

export default List;