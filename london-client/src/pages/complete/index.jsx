import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import useFetch from '../../hooks/custom';
import usePost from '../../hooks/post/custom';
import axios from 'axios';
import CartSummary from './cartSummary';
import sizeMap from '../../assets/sizes/sizes';
import UserSummary from './userSummary';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../redux/hooks/hooks';
import { clearCart } from '../../redux/cart/slice';

const Complete = () => {
  const dispatch = useDispatch();
  const { data } = useFetch('http://127.0.0.1:8000/payment/api/order_summary');
  const { postData } = usePost('http://127.0.0.1:8000/payment/api/order_complete', 'Order Successfully Completed');
  const cart = useCart();
  const navigate = useNavigate();
  const [message, setMessage] = useState(''); // Message state

  const orderComplete = useCallback(async () => {
    try {
      const response = await postData({});
      if (response) {
        navigate('/success');
      }
    } catch (error) {
      console.error('Order completion failed', error);
    }
  }, [postData, navigate]);

  const clearCartItems = () => {
    dispatch(clearCart());
  };

  const postOrder = async () => {
    try {
      await axios.post('http://127.0.0.1:8000/payment/api/add_order_to_db', {
        first_name: data?.first_name || 'Unknown',
        last_name: data?.last_name || 'Unknown',
        road_name: data?.road_name || 'Unknown',
        apartment_name: data?.apartment_name || 'Unknown',
        flat_number: data?.flat_number || 'Unknown',
        post_code: data?.post_code || 'Unknown',
        phone_number: data?.phone_number || 'Unknown',
        items: cart?.items?.map((i) => ({
          item_name: i?.item?.name || 'Unknown',
          size_name: i?.item?.selected_size?.size_id ? sizeMap[i?.item?.selected_size.size_id] : 'Unknown',
          quantity: i?.item?.quantity || 1,
          price: i?.item?.price || '0',
          salad_toppings: i?.item?.salad_toppings?.map((topping) => topping.name) || [],
          sauce_toppings: i?.item?.sauce_toppings?.map((sauce) => sauce.name) || [],
        })) || [],
        message: message || 'No message', // Send the message
      });
    } catch (error) {
      console.error('Failed to post order', error);
    }
  };

  const submitHandler = useCallback(async () => {
    await orderComplete();
    await postOrder();
    clearCartItems();
  }, [postOrder, orderComplete]);

  if (!data) {
    return <p>Loading...</p>;
  }

  return (
    <div className='flex flex-col items-center w-full h-auto overflow-hidden p-8 text-white bg-gradient-to-b from-black via-gray-900 to-black'>
      <h1 className='mb-6 text-5xl font-bold text-center text-[#f8f8f8]'>Order Summary</h1>
      <div className='flex w-full max-w-5xl py-5 border rounded-lg shadow-lg'>
        <CartSummary cart={cart} />
        <div className='w-1/2 p-6 border-l border-gray-600'>
          {data && (
            <div className='mb-6'>
              <h2 className='mb-4 text-3xl font-bold text-center'>User Information</h2>
              <UserSummary data={data} />
            </div>
          )}
        </div>
      </div>

      {/* Message Form Section */}
      <div className='mt-8 w-full'>
  <h2 className='text-3xl font-bold mb-4 text-center'>Leave a Message</h2>
  <textarea
    rows='4'
    className='flex justify-center w-3/4 mx-auto border border-gray-700 bg-gray-800 text-white rounded-lg p-4 mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 ease-in-out shadow-sm hover:shadow-lg'
    placeholder='Write your message here...'
    value={message}
    onChange={(e) => setMessage(e.target.value)}
    required
  />
</div>



      <div className='flex justify-center mt-8'>
        <button
          onClick={submitHandler}
          className='px-64 py-3 text-white bg-transparent border-white border-[0.5px] hover:bg-white hover:text-black transition duration-200 ease-in-out'
        >
          Complete Order
        </button>
      </div>
    </div>
  );
};

export default Complete;
