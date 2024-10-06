import OtpInput from 'react-otp-input';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { IoArrowBackOutline } from 'react-icons/io5';
import usePost from '../../hooks/post/custom';

const Verification = ({ setIsVerificationPage }) => {
  const { postData } = usePost(
    'http://127.0.0.1:8000/payment/api/verify_phone',
    'Code has been verified'
  );
  const [otp, setOtp] = useState('');
  const navigate = useNavigate();

  const handleChange = (otp) => {
    setOtp(otp);
  };

  const verifyCode = async (e) => {
    e.preventDefault();
    const response = await postData({ verification_code: otp });
    if (response) {
      navigate('/complete');
    }
  };

  return (
    <form className='relative' onSubmit={verifyCode}>
      <h2 className='mb-6 text-2xl font-bold text-center'>Doğrulama Kodu</h2>
      <label className='block mb-4 text-center text-gray-700'>
        5 Haneli Kod
      </label>
      <OtpInput
        value={otp}
        onChange={handleChange}
        numInputs={5}
        separator={<span>-</span>}
        containerStyle={{ display: 'flex', justifyContent: 'center' }}
        inputStyle={{
          width: '50px',
          height: '50px',
          margin: '0 5px',
          fontSize: '24px',
          borderRadius: '5px',
          border: '1px solid #ccc',
          textAlign: 'center',
        }}
        renderInput={(props) => <input {...props} />}
      />
      <button
        type='submit'
        className='w-full px-4 py-2 mt-6 text-white bg-black rounded-md'
      >
        Doğrula
      </button>
      <IoArrowBackOutline
        onClick={() => setIsVerificationPage(false)}
        className='absolute top-0 left-0 text-xl cursor-pointer'
      />
    </form>
  );
};

export default Verification;
