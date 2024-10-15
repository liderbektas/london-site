import { useState, useEffect, useMemo, useCallback } from 'react';
import postCodeData from '../../../../../assets/postCode/postCode';
import toast from 'react-hot-toast';

const CheckerModal = ({ setChecker }) => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [zip, setZip] = useState('');
  const [canOrder, setCanOrder] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);

  const startOrder = '12:00:00';
  const closeOrder = '23:30:00';

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
    if (!isWithinOrderTime) {
      setShowErrorModal(true);
    } else if (!zip) {
      setShowErrorModal(false);
      toast.error('Please enter a postcode.', {
        duration: 3000,
        position: 'top-center',
      });
    } else if (!canOrder) {
      setShowErrorModal(false);
      toast.error("Sorry, we don't deliver to your area.", {
        duration: 3000,
        position: 'top-center', 
      });
    } else {
      setShowErrorModal(false);
      setChecker(true); 
    }
  }, [zip, canOrder, setChecker, time, isWithinOrderTime]);

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center text-black bg-black'>
      <div className='w-full max-w-[500px] mx-4 flex items-center flex-col bg-white rounded-md text-black p-6 md:p-8'>
        <h2 className='mb-6 text-2xl font-bold text-center md:text-3xl'>
          Check Postcode Availability
        </h2>

        <input
          onChange={(e) => setZip(e.target.value)}
          placeholder='PostCode'
          className='w-full px-4 py-3 text-lg text-black border-[1.5px] border-black outline-none mb-6'
        />
        {showErrorModal && (
          <div className='mb-6 text-center'>
            <span className='block text-sm md:text-lg font-bold'>
              Sorry, we are not accepting orders at this time.
            </span>
            <span className='block text-xs md:text-md'>
              Our service hours are between{' '}
              <span className='font-bold text-xs md:text-md text-red-600'>12:00 AM and 11:30 PM</span>.
            </span>
          </div>
        )}

        <button
          onClick={handleCheck}
          className='w-full px-6 py-3 text-lg text-white bg-black rounded-md'
        >
          Check
        </button>
      </div>
    </div>
  );
};

export default CheckerModal;
