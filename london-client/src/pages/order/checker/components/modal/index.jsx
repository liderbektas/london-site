import { useState, useEffect, useMemo, useCallback } from 'react';
import postCodeData from '../../../../../assets/postCode/postCode';
import toast from 'react-hot-toast';

const CheckerModal = ({ setChecker }) => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [zip, setZip] = useState('');
  const [canOrder, setCanOrder] = useState(false);

  const startOrder = '00:00:00';
  const closeOrder = '23:00:00';

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const isValidZip = useMemo(() => {
    return postCodeData.some(
      (p) =>
        p.postalCode.substring(0, 3).toLocaleUpperCase() ===
        zip.substring(0, 3).toLocaleUpperCase()
    );
  }, [zip]);

  const isWithinOrderTime = useMemo(() => {
    return startOrder <= time && time < closeOrder;
  }, [time]);

  useEffect(() => {
    setCanOrder(isValidZip && isWithinOrderTime);
  }, [isValidZip, isWithinOrderTime]);

  const showError = (message) => {
    toast.error(message, { duration: 5000, position: 'top-center' });
  };

  const handleCheck = useCallback(() => {
    if (!(startOrder <= time && time < closeOrder)) {
      showError("We don't do delivery at this time");
    } else if (!zip) {
      showError('Please enter a postcode.');
    } else if (!canOrder) {
      showError("Sorry, we don't deliver to your area.");
    } else {
      setChecker(true);
    }
  }, [zip, canOrder, setChecker, time]);

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center text-black bg-black bg-opacity-50'>
      <div className='h-[300px] w-[600px] flex items-center flex-col bg-white rounded-md text-black p-4'>
        <h2 className='mb-4 text-3xl font-bold text-center'>
        Check Postcode Availability and Delivery Time
        </h2>

        <p className='mb-6 text-lg text-center'>
          Our working hours are between 12:00 PM and 11:00 PM.
          <br />
          <span className='text-red-600'>Current time: {time}</span>
        </p>

        <input
          onChange={(e) => setZip(e.target.value)}
          placeholder='PostCode'
          className='w-1/2 px-4 py-2 text-sm text-black border-[1.5px] border-black outline-none'
        />

        <button
          onClick={handleCheck}
          type='submit'
          className='w-full px-4 py-2 mt-6 text-white bg-black rounded-md'
        >
          Check
        </button>
      </div>
    </div>
  );
};

export default CheckerModal;
