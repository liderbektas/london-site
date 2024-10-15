import sizeMap from '../../../../assets/sizes/sizes';

const CartItems = ({ cart }) => {
  return (
    <div className="flex flex-col space-y-6">
      {cart.items.map((cartItem, index) => (
        <div key={index} className="p-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:gap-8">
            <img
              src={cartItem.item.image_url}
              alt={cartItem.item.name}
              className="w-full h-48 object-cover rounded-lg lg:w-48"
            />
            <div className="flex-grow mt-4 lg:mt-0 text-center lg:text-left">
              <p className="text-xl font-semibold text-white">
                {cartItem.item?.name}
              </p>
              <p className="mt-2 text-white">
                <strong>Size:</strong> {sizeMap[cartItem.item.selected_size.size_id] || 'Unknown'}
              </p>
              <p className="mt-1 text-white">
                <strong>Quantity:</strong> {cartItem.item.quantity}
              </p>
              <p className="mt-1 text-white">
                <strong>Price:</strong> £{Number(cartItem.item.price).toFixed(2)}
              </p>
            </div>
          </div>

          <div className="mt-4 text-center lg:text-left">
            <p className="text-white">
              <strong>Salad Toppings:</strong>{' '}
              {cartItem?.item.salad_toppings?.length > 0
                ? cartItem.item.salad_toppings.map((salad) => salad.name).join(', ')
                : 'Not selected'}
            </p>
            <p className="mt-2 text-white">
              <strong>Sauce Toppings:</strong>{' '}
              {cartItem?.item.sauce_toppings?.length > 0
                ? cartItem.item.sauce_toppings.map((sauce) => sauce.name).join(', ')
                : 'Not selected'}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartItems;
