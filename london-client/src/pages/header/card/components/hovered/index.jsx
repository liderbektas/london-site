import { Link } from 'react-router-dom';

const Hovered = ({ cart }) => {
  return (
    <div className='absolute right-0 w-80 md:w-96 p-4 mt-2 bg-black border-white border-[0.5px] shadow-lg z-50 rounded-md flex flex-col'>
      <ul className='overflow-y-auto max-h-[350px] flex-grow'>
        {cart.items.map((product) => (
          <li
            key={product.item.item_id}
            className='flex items-center py-6 gap-x-4 border-b-[0.5px]'
          >
            <img
              src={product.item.image_url}
              alt={product.item.name}
              className='w-24 h-24 border-[0.5px] border-white'
            />
            <div className='flex flex-col ml-3 gap-y-1'>
              <h5 className='text-2xl'>{product.item.name}</h5>
              <p>Quantity : {product.item.quantity}</p>
              <p className='text-sm'>
                ${parseFloat(product.item.price).toFixed(2)}
              </p>
            </div>
          </li>
        ))}
      </ul>

      <div className='mt-4'>
        <p className='text-xl font-semibold'>
          Total: $
          {cart.items
            .reduce(
              (acc, curr) =>
                acc +
                parseFloat(curr.item.price) * parseFloat(curr.item.quantity),
              0
            )
            .toFixed(2)}
        </p>
      </div>

      <Link
        to='/cart'
        className='w-full py-2 mt-4 text-center bg-black border-white border-[0.5px] rounded-md hover:bg-white hover:text-black transition duration-200 ease-in-out font-bold'
      >
        View Cart & Checkout
      </Link>
    </div>
  );
};

export default Hovered;
