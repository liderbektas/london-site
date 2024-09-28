import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    road_name: '',
    apartment_name: '',
    flat_number: '',
    phone_number: '',
    post_code: '',
  });
  const [message, setMessage] = useState();

  const navigate = useNavigate(); // useHistory yerine useNavigate kullanılıyor

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const sendMessage = async (e) => {
    e.preventDefault();
    try {
      // Bilgileri backend'e gönder
      const { data } = await axios.post(
        'http://127.0.0.1:8000/payment/api/checkout',
        formData
      );

      // Doğrulama sayfasına yönlendir
      navigate('/verification'); // history.push yerine navigate kullanılıyor
    } catch (error) {
      console.log('Error', error);
    }
  };

  return (
    <div className='flex items-center justify-center w-screen h-screen text-black'>
      <form
        className='w-full max-w-lg p-8 bg-white rounded shadow-md'
        onSubmit={sendMessage}
      >
        <h2 className='mb-6 text-2xl font-bold'>Checkout Form</h2>

        {/* Form alanları burada */}
        <div className='mb-4'>
          <label className='block text-gray-700' htmlFor='first_name'>
            First Name
          </label>
          <input
            type='text'
            id='first_name'
            name='first_name'
            value={formData.first_name}
            onChange={handleChange}
            className='w-full px-3 py-2 border rounded'
            required
          />
        </div>

        <div className='mb-4'>
          <label className='block text-gray-700' htmlFor='last_name'>
            Last Name
          </label>
          <input
            type='text'
            id='last_name'
            name='last_name'
            value={formData.last_name}
            onChange={handleChange}
            className='w-full px-3 py-2 border rounded'
            required
          />
        </div>

        <div className='mb-4'>
          <label className='block text-gray-700' htmlFor='road_name'>
            Road Name
          </label>
          <input
            type='text'
            id='road_name'
            name='road_name'
            value={formData.road_name}
            onChange={handleChange}
            className='w-full px-3 py-2 border rounded'
            required
          />
        </div>

        <div className='mb-4'>
          <label className='block text-gray-700' htmlFor='apartment_name'>
            Apartment Name
          </label>
          <input
            type='text'
            id='apartment_name'
            name='apartment_name'
            value={formData.apartment_name}
            onChange={handleChange}
            className='w-full px-3 py-2 border rounded'
          />
        </div>

        <div className='mb-4'>
          <label className='block text-gray-700' htmlFor='flat_number'>
            Flat Number
          </label>
          <input
            type='text'
            id='flat_number'
            name='flat_number'
            value={formData.flat_number}
            onChange={handleChange}
            className='w-full px-3 py-2 border rounded'
            required
          />
        </div>

        <div className='mb-4'>
          <label className='block text-gray-700' htmlFor='phone_number'>
            Phone Number
          </label>
          <input
            type='tel'
            id='phone_number'
            name='phone_number'
            value={formData.phone_number}
            onChange={handleChange}
            className='w-full px-3 py-2 border rounded'
            required
          />
        </div>

        <div className='mb-4'>
          <label className='block text-gray-700' htmlFor='post_code'>
            Post Code
          </label>
          <input
            type='tel'
            id='post_code'
            name='post_code'
            value={formData.post_code}
            onChange={handleChange}
            className='w-full px-3 py-2 border rounded'
            required
          />
        </div>

        <button
          type='submit'
          className='w-full px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600'
        >
          Submit
        </button>
      </form>

      {/* Sunucudan gelen mesajı göster */}
      {message && <p>{message}</p>}
    </div>
  );
};

export default Checkout;
