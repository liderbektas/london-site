import sizeMap from '../../../../assets/sizes/sizes';

const CartItems = ({ cart }) => {
  return (
    <div className='flex flex-col'>
      {cart.items.map((cartItem, index) => (
        <div key={index} className='px-4 py-6 mb-4 border-b border-gray-600'>
          <div className='flex flex-col md:flex-row md:items-center md:gap-6'>
            <img
              src={cartItem.item.image_url}
              alt={cartItem.item.name}
              className='object-cover w-full h-32 rounded-lg shadow-md md:w-32 md:h-32'
            />
            <div className='flex-grow mt-4 md:mt-0'>
              <p className='text-xl font-semibold'>
                <strong>{cartItem.item?.name}</strong>
              </p>
              <p>
                <strong>Size:</strong>{' '}
                {sizeMap[cartItem.item.selected_size.size_id] || 'Unknown'}
              </p>
              <p>
                <strong>Quantity:</strong> {cartItem.item.quantity}
              </p>
              <p>
                <strong>Price:</strong> £
                {Number(cartItem.item.price).toFixed(2)}
              </p>
            </div>
          </div>
          {(cartItem?.item.salad_toppings?.length > 0) && (
            <p className='mt-2 text-lg'>
              <strong>Salad Toppings:</strong>{' '}
              {cartItem.item.salad_toppings
                .map((salad) => salad.name)
                .join(', ')}
            </p>
          )}

          {(cartItem?.item.sauce_toppings?.length > 0) && (
            <p className='mt-2 text-lg'>
              <strong>Sauce Toppings:</strong>{' '}
              {cartItem.item.sauce_toppings
                .map((sauce) => sauce.name)
                .join(', ')}
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

export default CartItems;
