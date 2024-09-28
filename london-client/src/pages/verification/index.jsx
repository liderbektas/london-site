import axios from 'axios';
import { useState } from 'react';
import { useHistory, useNavigate } from 'react-router-dom';

const Verification = () => {
  const [verification_code, setCode] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCode(e.target.value);
  };

  const verifyCode = async (e) => {
    e.preventDefault();
    try {
      // Kodun doğrulanması için backend'e gönder
      const response = await axios.post(
        'http://127.0.0.1:8000/payment/api/verify_phone',
        {
          verification_code: verification_code, // kodun burada doğru gönderildiğinden emin olun
        }
      );
      navigate('/complete');
      // Örnek: history.push('/next-page');
    } catch (error) {
      setMessage('Doğrulama başarısız oldu. Lütfen kodu kontrol edin.');
    }
  };

  return (
    <div className='flex items-center justify-center w-screen h-screen text-black'>
      <form
        className='w-full max-w-lg p-8 bg-white rounded shadow-md'
        onSubmit={verifyCode}
      >
        <h2 className='mb-6 text-2xl font-bold'>Doğrulama Kodu</h2>
        <div className='mb-4'>
          <label className='block text-gray-700' htmlFor='code'>
            6 Haneli Kod
          </label>
          <input
            type='text'
            id='code'
            name='verification_code'
            value={verification_code}
            onChange={handleChange}
            className='w-full px-3 py-2 border rounded'
            required
          />
        </div>
        <button
          type='submit'
          className='w-full px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600'
        >
          Doğrula
        </button>
        {message && <p>{message}</p>}
      </form>
    </div>
  );
};

export default Verification;
