import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { useCart } from '../../redux/hooks/hooks';

const Complete = () => {
  const [data, setData] = useState(null);
  const cart = useCart();
  const navigate = useNavigate();

  const fetch = async () => {
    try {
      const response = await axios.get(
        'http://127.0.0.1:8000/payment/api/order_summary'
      );
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const orderComplete = async () => {
    try {
      const response = await axios.post(
        'http://127.0.0.1:8000/payment/api/order_complete',
        {}
      );
      alert(response.data.message); // Show confirmation message
      navigate('/success');
    } catch (error) {
      console.log(
        'Error completing order:',
        error.response ? error.response.data : error.message
      );
      alert('Failed to complete the order. Please try again.');
    }
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <div className='w-screen h-screen p-4'>
      <h1 className='mb-4 text-2xl font-bold'>Order Summary</h1>
      {data && (
        <div className='mb-6'>
          <h2 className='text-xl font-semibold'>User Information</h2>
          <p>
            <strong>First Name:</strong> {data.first_name}
          </p>
          <p>
            <strong>Last Name:</strong> {data.last_name}
          </p>
          <p>
            <strong>Road Name:</strong> {data.road_name}
          </p>
          <p>
            <strong>Apartment Name:</strong> {data.apartment_name}
          </p>
          <p>
            <strong>Flat Number:</strong> {data.flat_number}
          </p>
          <p>
            <strong>Phone Number:</strong> {data.phone_number}
          </p>
          <p>
            <strong>Post Code:</strong> {data.post_code}
          </p>
        </div>
      )}
      <div>
        <h2 className='text-xl font-semibold'>Cart Items</h2>
        {cart.items.length > 0 ? (
          cart.items.map((cartItem, index) => (
            <div key={index} className='mb-2'>
              <p>
                <strong>Item:</strong> {cartItem.item.name}
              </p>
              <p>
                <strong>Message:</strong> {cartItem.message}
              </p>
            </div>
          ))
        ) : (
          <p>No items in the cart.</p>
        )}
      </div>
      <button onClick={orderComplete} className='px-4 py-2 border-[0.5px]'>
        Complete Order
      </button>
    </div>
  );
};

export default Complete;
