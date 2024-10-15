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
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();
  const cart = useCart();
  const navigate = useNavigate();
  const { data } = useFetch('http://127.0.0.1:8000/payment/api/order_summary');
  const { postData } = usePost(
    'http://127.0.0.1:8000/payment/api/order_complete',
    'Order Successfully Completed'
  );

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
        items:
          cart?.items?.map((i) => ({
            item_name: i?.item?.name || 'Unknown',
            size_name: i?.item?.selected_size?.size_id
              ? sizeMap[i?.item?.selected_size.size_id]
              : 'Unknown',
            quantity: i?.item?.quantity || 1,
            price: i?.item?.price || '0',
            salad_toppings:
              i?.item?.salad_toppings?.map((topping) => topping.name) || [],
            sauce_toppings:
              i?.item?.sauce_toppings?.map((sauce) => sauce.name) || [],
          })) || [],
        message: message || 'No message',
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

  return (
    <div className='flex flex-col items-center w-full h-auto p-8 overflow-hidden text-white bg-[#0a0a0b]'>
      <h1 className='mb-6 text-5xl font-bold text-center text-[#f8f8f8]'>
        Order Summary
      </h1>
      <div className='flex flex-col w-full max-w-5xl py-5 border rounded-lg shadow-lg md:flex-row'>
        <div className='w-full p-6 border-b border-gray-600 md:w-1/2 md:border-b-0 md:border-r'>
          {data && (
            <div className='mb-6'>
              <h2 className='mb-4 text-3xl font-bold text-center'>
                User Information
              </h2>
              <UserSummary data={data} />
            </div>
          )}
        </div>
        <div className='w-full p-6 border-b border-black md:w-1/2 md:border-b-0 md:border-l'>
          <CartSummary cart={cart} />
        </div>
      </div>
      <div className='w-full max-w-5xl mt-8'>
        <h2 className='mb-4 text-3xl font-bold text-center'>Leave a Message</h2>
        <textarea
          rows='4'
          className='flex justify-center w-3/4 p-4 mx-auto mb-6 text-white transition-all duration-200 ease-in-out bg-[#27272a] border border-gray-700 rounded-lg shadow-sm focus:outline-none focus:ring-[0.5px] focus:ring-white hover:shadow-lg'
          placeholder='Write your message here...'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </div>

      <div className='flex justify-center mt-8'>
        <button
          onClick={submitHandler}
          className='px-12 py-3 text-white transition duration-200 ease-in-out bg-transparent border border-white hover:bg-white hover:text-black'
        >
          Complete Order
        </button>
      </div>
    </div>
  );
};

export default Complete;
