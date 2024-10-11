import { useState, useEffect, useMemo, useCallback } from 'react';
import postCodeData from '../../../../../assets/postCode/postCode';
import toast from 'react-hot-toast';

const CheckerModal = ({ setChecker }) => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [zip, setZip] = useState('');
  const [canOrder, setCanOrder] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);

  const startOrder = '11:00:00';
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
    if (!isWithinOrderTime) {
      setShowErrorModal(true); // Show the error modal for working hours
    } else if (!zip) {
      setShowErrorModal(false);
      toast.error('Please enter a postcode.', {
        duration: 3000,
        position: 'top-center', // Set position to middle
      });
    } else if (!canOrder) {
      setShowErrorModal(false);
      toast.error("Sorry, we don't deliver to your area.", {
        duration: 3000,
        position: 'top-center', // Set position to middle
      });
    } else {
      setShowErrorModal(false);
      setChecker(true); // Proceed if everything is fine
    }
  }, [zip, canOrder, setChecker, time, isWithinOrderTime]);

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center text-black bg-black bg-opacity-50'>
      <div className='h-auto w-[500px] flex items-center flex-col bg-white rounded-md text-black p-8'>
        <h2 className='mb-6 text-3xl font-bold text-center'>
          Check Postcode Availability
        </h2>

        <input
          onChange={(e) => setZip(e.target.value)}
          placeholder='PostCode'
          className='w-3/4 px-6 py-3 text-lg text-black border-[1.5px] border-black outline-none mb-8'
        />

        {/* Conditionally render the second modal (error message) if not within order time */}
        {showErrorModal && (
          <div className='mb-6 text-center'>
            <span className='block font-bold text-lg'>
              Sorry, we are not accepting orders at this time.
            </span>

            <span className='block'>
              Our service hours are between{' '}
              <span className='font-bold text-red-600'>11:00 AM and 11:00 PM</span>.
            </span>
          </div>
        )}

        <button
          onClick={handleCheck}
          type='submit'
          className='w-3/4 px-6 py-3 text-white bg-black rounded-md text-lg'
        >
          Check
        </button>
      </div>

      {/* No need for ToastContainer as react-hot-toast automatically handles it */}
    </div>
  );
};

export default CheckerModal;
