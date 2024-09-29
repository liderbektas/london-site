import usePost from '../../../../../../../hooks/post/custom';
import Verification from '../../../../../../verification';
import Form from './form';
import { useState } from 'react';
import { useFormik } from 'formik';
import { IoIosClose } from 'react-icons/io';

const Modal = ({ setModal }) => {
  const [isVerificationPage, setIsVerificationPage] = useState(false);
  const { postData } = usePost(
    'http://127.0.0.1:8000/payment/api/checkout',
    'Verify code sent your phone'
  );

  const formik = useFormik({
    initialValues: {
      first_name: '',
      last_name: '',
      road_name: '',
      apartment_name: '',
      flat_number: '',
      phone_number: '',
      post_code: '',
    },
    onSubmit: async (values) => {
      const response = await postData(values);
      if (response) {
        setIsVerificationPage(true);
      }
    },
  });

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center text-black'>
      <div className='absolute inset-0 bg-black opacity-50'></div>

      <div className='relative z-10 w-full max-w-lg p-8 bg-white rounded shadow-md'>
        <IoIosClose
          onClick={() => setModal(false)}
          className='absolute text-4xl cursor-pointer top-1 right-2'
        />
        {!isVerificationPage ? (
          <Form formik={formik} />
        ) : (
          <Verification setIsVerificationPage={setIsVerificationPage} />
        )}
      </div>
    </div>
  );
};

export default Modal;
