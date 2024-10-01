import { useNavigate } from 'react-router-dom';
import { useCart } from '../../redux/hooks/hooks';
import useFetch from '../../hooks/custom';
import usePost from '../../hooks/post/custom';
import axios from 'axios';

const Complete = () => {
  const { data } = useFetch('http://127.0.0.1:8000/payment/api/order_summary');
  const { postData } = usePost(
    'http://127.0.0.1:8000/payment/api/order_complete',
    'Order Successfully Completed'
  );
  const cart = useCart();
  const navigate = useNavigate();

  const orderComplete = async () => {
    const response = await postData({});
    if (response) {
      navigate('/success');
    }
  };

  
  const sizeMap = {
    1: 'Small',
    2: 'Medium',
    3: 'Large',
    4: 'Extra Large',
    5: 'Standard',
  };

  const postOrder = async () => {
    const response = await axios.post(
      'http://127.0.0.1:8000/payment/api/add_order_to_db',
      {
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
          salad_toppings: i?.item?.salad_toppings?.map(topping => topping.name) || [], 
          sauce_toppings: i?.item?.sauce_toppings?.map(sauce => sauce.name) || [],
        })) || [], 
      }
    );
  
    if (response.status === 200) {
      console.log('Order successfully sent!');
    } else {
      console.error('Order submission failed');
    }
  };
  
  const submitHandler = () => {
    orderComplete();
    postOrder();
  };

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
      <button onClick={submitHandler} className='px-4 py-2 border-[0.5px]'>
        Complete Order
      </button>
    </div>
  );
};

export default Complete;
