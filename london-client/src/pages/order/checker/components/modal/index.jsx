import { useState, useEffect, useMemo, useCallback } from 'react';
import postCodeData from '../../../../../assets/postCode/postCode';
import toast from 'react-hot-toast';

const CheckerModal = ({ setChecker }) => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [zip, setZip] = useState('');
  const [canOrder, setCanOrder] = useState(false);

  const startOrder = '12:00:00';
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

  const handleCheck = useCallback(() => {
    const currentTime = new Date().toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    });

    if (!(startOrder <= currentTime && currentTime < closeOrder)) {
      toast.error("We don't do delivery at this time.", {
        duration: 5000,
        position: 'top-center',
      });
    } else if (!zip) {
      toast.error('Please enter a postcode.', {
        duration: 5000,
        position: 'top-center',
      });
    } else if (!canOrder) {
      toast.error("Sorry, we don't deliver to your area.", {
        duration: 5000,
        position: 'top-center',
      });
    } else {
      setChecker(true);
    }
  }, [zip, canOrder, setChecker]);

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center text-black bg-black bg-opacity-50'>
      <div className='h-[200px] w-[400px] flex items-center flex-col bg-white rounded-md text-black p-4'>
        <h2 className='mb-6 text-3xl font-bold text-center'>
          Check Your PostCode
        </h2>
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
