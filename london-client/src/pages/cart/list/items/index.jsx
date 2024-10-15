import { useDispatch } from 'react-redux';
import { removeFromCart } from '../../../../redux/cart/slice';
import { FaTrash } from 'react-icons/fa6';

const Items = ({ cart }) => {
  const dispatch = useDispatch();

  const handleRemoveItem = (cartItemId) => {
    dispatch(removeFromCart(cartItemId));
  };

  const sizeMapping = {
    1: 'Small',
    2: 'Medium',
    3: 'Large',
    4: 'X-Large',
    5: 'Standard',
  };

  return (
    <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
      {cart.items.map((product) => (
        <div
          key={product.cartItemId}
          className='flex flex-col justify-between p-6 bg-gradient-to-b from-black via-gray-900 to-black rounded-lg shadow-lg'
        >
          {/* Image */}
          <div className='flex justify-center'>
            <img
              src={product.item.image_url}
              alt={product.item.name}
              className='object-cover w-48 h-48 bg-center rounded-lg shadow-md'
            />
          </div>

          {/* Product Info */}
          <div className='flex flex-col flex-grow mt-4'>
            <h2 className='text-2xl font-bold text-center text-white'>
              {product.item.name} 
              {product.item.selected_size.size_id && (
                <span className='text-lg text-white'> ({sizeMapping[product.item.selected_size.size_id] || 'Unknown'})</span>
              )}
            </h2>
            <p className='mt-2 text-center text-white'>{product.item.description}</p>

            {/* Salad Toppings */}
            <div className='mt-4'>
              <h3 className='text-xl font-medium text-center text-white'>Salad Toppings</h3>
              {product.item.salad_toppings && product.item.salad_toppings.length > 0 ? (
                <div className='flex flex-wrap justify-center gap-2 mt-2'>
                  {product.item.salad_toppings.map((topping) => (
                    <span
                      key={topping.id}
                      className='px-3 py-1 bg-gray-800 rounded-md text-white text-sm'
                    >
                      {topping.name}
                    </span>
                  ))}
                </div>
              ) : (
                <p className='text-center text-gray-400'>No salad toppings selected</p>
              )}
            </div>

            {/* Sauce Toppings */}
            <div className='mt-4'>
              <h3 className='text-xl font-medium text-center text-white'>Sauce Toppings</h3>
              {product.item.sauce_toppings && product.item.sauce_toppings.length > 0 ? (
                <div className='flex flex-wrap justify-center gap-2 mt-2'>
                  {product.item.sauce_toppings.map((topping) => (
                    <span
                      key={topping.id}
                      className='px-3 py-1 bg-gray-800 rounded-md text-white text-sm'
                    >
                      {topping.name}
                    </span>
                  ))}
                </div>
              ) : (
                <p className='text-center text-gray-400'>No sauce toppings selected</p>
              )}
            </div>
          </div>

          {/* Price and Remove Button */}
          <div className='flex justify-between items-center mt-4'>
            <span className='text-2xl font-semibold text-white'>
              £{parseFloat(product.item.price).toFixed(2)}
            </span>
            <button
              onClick={() => handleRemoveItem(product.cartItemId)}
              className='text-red-500 hover:text-red-700 transition-colors'
              title='Remove from cart'
            >
              <FaTrash className='w-6 h-6 text-white' /> 
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Items;
