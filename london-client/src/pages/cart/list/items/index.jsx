import { useDispatch } from 'react-redux';
import { removeFromCart, increaseQuantity } from '../../../../redux/cart/slice'; 

const Items = ({ cart }) => {
  const dispatch = useDispatch();
  
  const handleRemoveItem = (item_id) => {
    dispatch(removeFromCart(item_id));
  };

  const handleIncreaseQuantity = (item_id) => {
    dispatch(increaseQuantity(item_id));
  };

  return (
    <div>
      <table className='w-full'>
        <thead>
          <tr className='text-4xl border-b-[0.5px]'>
            <th className='px-4 py-4 text-left'>Product</th>
            <th className='px-4 py-4 text-left'>Description</th>
            <th className='px-4 py-4 text-left'>Quantity</th>
            <th className='px-4 py-4 text-left'>Price</th>
          </tr>
        </thead>
        <tbody className='border-b-[0.5px]'>
          {cart.items.map((product) => (
            <tr key={product.item.item_id}>
              <td className='flex items-center px-4 py-8 text-2xl gap-x-12'>
                <img
                  src={product.item.image_url}
                  alt={product.item.name}
                  className='w-48 h-48 bg-center'
                />
                <span className='font-bold'>{product.item.name}</span>
              </td>
              <td className='px-4 py-8 text-wrap w-[288px]'>
                {product.item.description}
              </td>
              <td className='px-4 py-8 text-center'>
                <div className='flex items-center justify-center gap-x-4'>
                  <button
                    className='px-5 py-1 bg-red-500 text-white rounded-full hover:bg-red-600 transition duration-200'
                    onClick={() => handleRemoveItem(product.item.item_id)}
                  >
                    -
                  </button>
                  <span className='text-xl font-semibold'>{product.item.quantity}</span>
                  <button
                    className='px-5 py-1 bg-green-500 text-white rounded-full hover:bg-green-600 transition duration-200'
                    onClick={() => handleIncreaseQuantity(product.item.item_id)}
                  >
                    +
                  </button>
                </div>
              </td>
              <td className='px-4 py-8 text-right'>
                ${parseFloat(product.item.price).toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Items;
