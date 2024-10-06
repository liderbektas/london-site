import { createSlice } from '@reduxjs/toolkit';
import useFetch from '../../hooks/custom';
import usePost from '../../hooks/post/custom';
import axios from 'axios';
import CartSummary from './cartSummary';
import sizeMap from '../../assets/sizes/sizes';
import UserSummary from './userSummary';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../redux/hooks/hooks';
import { useDispatch } from 'react-redux';
import { clearCart } from '../../redux/cart/slice';

const Complete = () => {
  const dispatch = useDispatch();
  const { data } = useFetch('http://127.0.0.1:8000/payment/api/order_summary');
  const { postData } = usePost(
    'http://127.0.0.1:8000/payment/api/order_complete',
    'Order Successfully Completed'
  );
  const cart = useCart();
  const navigate = useNavigate();

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
    });
  };

  const submitHandler = useCallback(async () => {
    await orderComplete();
    await postOrder();
    clearCartItems();
  }, [postOrder, orderComplete]);

  if (!data) {
    return <p>Loading...</p>; // Yüklenme durumu
  }

  return (
    <div className='flex flex-col items-center w-full h-[812px] overflow-hidden p-8 text-white bg-gradient-to-b from-black via-gray-900 to-black'>
      <h1 className='mb-6 text-5xl font-bold text-center text-[#f8f8f8]'>
        Order Summary
      </h1>
      <div className='flex w-full max-w-5xl h-[625px] py-5 border rounded-lg shadow-lg'>
        <CartSummary cart={cart} />

        <div className='w-1/2 p-6 border-l border-gray-600'>
          {data && (
            <div className='mb-6'>
              <h2 className='mb-4 text-3xl font-bold text-center'>
                User Information
              </h2>
              <UserSummary data={data} />
            </div>
          )}
        </div>
      </div>
      <div className='flex justify-center mt-4'> 
        <button
          onClick={submitHandler}
          className='px-6 py-3 text-black transition-transform transform bg-white rounded-lg shadow-md hover:scale-105 w-[400px]'
        >
          Complete Order
        </button>
      </div>
    </div>
  );
};

export default Complete;
