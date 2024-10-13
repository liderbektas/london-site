import { useDispatch } from 'react-redux';
import { removeFromCart } from '../../../../redux/cart/slice';
import { FaTrash } from 'react-icons/fa6';

const Items = ({ cart }) => {
  const dispatch = useDispatch();

  const handleRemoveItem = (cartItemId) => {
    dispatch(removeFromCart(cartItemId));
  };

  return (
    <div className='flex flex-col'>
      {cart.items.map((product) => (
        <div
          key={product.cartItemId}
          className='flex flex-col py-4 transition-transform transform border-b lg:flex-row lg:items-center'
        >
          <div className='flex justify-center mb-4 lg:mb-0 lg:flex-1'>
            <img
              src={product.item.image_url}
              alt={product.item.name}
              className='object-cover w-48 h-48 bg-center rounded-lg shadow-md'
            />
          </div>
          <div className='flex flex-col items-center px-4 lg:flex-1'>
            <span className='text-2xl font-bold text-center text-white'>
              {product.item.name}
            </span>
            <div className='mt-2 text-lg text-center text-white'>
              {product.item.description}
            </div>
          </div>
          <div className='flex px-4'>
            <div className='flex space-x-8 w-96'>
              <div className='flex flex-col'>
                <h3 className='text-2xl font-semibold text-center'>Salad Toppings</h3>
                <div className='flex flex-wrap justify-center gap-2'>
                  {product.item.salad_toppings?.map((topping, index) => (
                    <span
                      key={topping.id}
                      className='w-1/3 text-center text-white text-md'
                    >
                      {topping.name}
                    </span>
                  ))}
                </div>
              </div>
              <div className='flex flex-col'>
                <h3 className='text-2xl font-semibold text-center'>Sauce Toppings</h3>
                <div className='flex flex-wrap justify-center gap-2'>
                  {product.item.sauce_toppings?.map((topping, index) => (
                    <span
                      key={topping.id}
                      className='w-1/3 px-2 py-1 text-sm text-center'
                    >
                      {topping.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className='text-2xl font-semibold text-right lg:flex-1'>
            ${parseFloat(product.item.price).toFixed(2)}
          </div>
          <div className='flex justify-end mt-4 lg:flex-1 lg:mt-0'>
            <button
              onClick={() => handleRemoveItem(product.cartItemId)}
              className='text-red-500 transition-colors hover:text-red-700'
              title='Remove from cart'
            >
              <FaTrash className='w-6 h-6' />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Items;
