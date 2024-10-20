import { useDispatch } from 'react-redux';
import { increaseQuantity, removeFromCart } from '../../../../redux/cart/slice';
import { FaTrash } from 'react-icons/fa6';
import { FaPlus } from 'react-icons/fa6';
import { TiMinus } from 'react-icons/ti';

const Items = ({ cart }) => {
  const dispatch = useDispatch();

  const handleRemoveItem = (cartItemId) => {
    dispatch(removeFromCart(cartItemId));
  };

  const handleIncreaseItem = (cartItemId) => {
    dispatch(increaseQuantity(cartItemId));
  };

  const sizeMapping = {
    1: 'Small',
    2: 'Medium',
    3: 'Large',
    4: 'Extra Large',
    5: 'Standard',
  };

  console.log(cart.items);

  return (
    <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
      {cart.items.map((product) => (
        <div
          key={product.cartItemId}
          className='flex flex-col justify-between p-6 border-[0.5px] rounded-lg border-zinc-600 bg-[#0a0a0b]'
        >
          <div className='flex justify-center'>
            <img
              src={product.item.image_url}
              alt={product.item.name}
              className='object-cover w-48 h-48 bg-center rounded-2xl'
            />
          </div>

          <div className='flex flex-col flex-grow mt-4'>
            <h2 className='text-2xl font-bold text-center text-white'>
              {product.item.name}
              {product.item.selected_size.size_id && (
                <span className='text-lg text-white'>
                  {' '}
                  (
                  {sizeMapping[product.item.selected_size.size_id] || 'Unknown'}
                  )
                </span>
              )}
            </h2>
            <p className='mt-2 text-center text-white'>
              {product.item.description}
            </p>

            <div className='mt-4'>
              <h3 className='text-xl font-medium text-center text-white'>
                Salad Toppings
              </h3>
              {product.item.salad_toppings &&
              product.item.salad_toppings.length > 0 ? (
                <div className='flex flex-wrap justify-center gap-2 mt-2'>
                  {product.item.salad_toppings.map((topping) => (
                    <span
                      key={topping.id}
                      className='px-3 py-1 text-sm text-white bg-gray-800 rounded-md'
                    >
                      {topping.name}
                    </span>
                  ))}
                </div>
              ) : (
                <p className='text-center text-gray-400'>
                  No salad toppings selected
                </p>
              )}
            </div>

            <div className='mt-4'>
              <h3 className='text-xl font-medium text-center text-white'>
                Sauce Toppings
              </h3>
              {product.item.sauce_toppings &&
              product.item.sauce_toppings.length > 0 ? (
                <div className='flex flex-wrap justify-center gap-2 mt-2'>
                  {product.item.sauce_toppings.map((topping) => (
                    <span
                      key={topping.id}
                      className='px-3 py-1 text-sm text-white bg-gray-800 rounded-md'
                    >
                      {topping.name}
                    </span>
                  ))}
                </div>
              ) : (
                <p className='text-center text-gray-400'>
                  No sauce toppings selected
                </p>
              )}
            </div>
          </div>

          <div className='flex items-center justify-between mt-4'>
            <span className='text-2xl font-semibold text-white'>
              £{parseFloat(product.item.price).toFixed(2)}
            </span>
            <div className='flex items-center gap-2'>
              <button
                onClick={() => handleRemoveItem(product.cartItemId)}
                className='p-2 text-white '
              >
                {product.item.quantity > 1 ? (
                  <TiMinus className='w-5 h-5' />
                ) : (
                  <FaTrash />
                )}
              </button>
              <span className='px-4 py-2 text-xl font-medium'>
                {product.item.quantity}
              </span>
              <button
                onClick={() => handleIncreaseItem(product.cartItemId)}
                className='p-2 text-white'
              >
                <FaPlus className='w-5 h-5' />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Items;
