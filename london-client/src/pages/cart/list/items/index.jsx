import { useDispatch } from 'react-redux';
import { removeFromCart, increaseQuantity } from '../../../../redux/cart/slice'; 
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";




const Items = ({ cart }) => {
  const dispatch = useDispatch();
  
  const handleRemoveItem = (item_id) => {
    dispatch(removeFromCart(item_id));
  };

  const handleIncreaseQuantity = (item_id) => {
    dispatch(increaseQuantity(item_id));
  };

  return (
    <div className='flex flex-col'>
      {cart.items.map((product) => (
        <div key={product.item.item_id} className='flex flex-col py-4 border-b lg:flex-row lg:items-center'>
          <div className='flex justify-center mb-4 lg:mb-0 lg:flex-1'>
            <img
              src={product.item.image_url}
              alt={product.item.name}
              className='object-cover w-48 h-48 bg-center rounded'
            />
          </div>
          <div className='flex flex-col items-center px-4 lg:flex-1'>
            <span className='text-2xl font-bold text-center'>{product.item.name}</span>
            <div className='mt-4 text-lg text-center'>{product.item.description}</div>
          </div>
          <div className='flex items-center justify-center px-4 mt-4 lg:flex-1'>
            <div className='flex items-center gap-x-4'>
              <button
                onClick={() => handleRemoveItem(product.item.item_id)}
              >
              <FaMinus />
              </button>
              <span className='mx-2 text-xl font-semibold'>{product.item.quantity}</span>
              <button
                onClick={() => handleIncreaseQuantity(product.item.item_id)}
              >
                <FaPlus />
              </button>
            </div>
          </div>
          <div className='text-2xl font-semibold text-right lg:flex-1'>
            ${parseFloat(product.item.price).toFixed(2)}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Items;
