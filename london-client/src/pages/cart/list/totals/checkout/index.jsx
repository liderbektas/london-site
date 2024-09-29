import { useState } from 'react';
import Modal from './components/modal';

const Checkout = ({ setIsOrderCompleted }) => {
  const [modal, setModal] = useState(false);

  return (
    <div className='relative flex items-center justify-center w-full my-5'>
      <button
        className='px-6 py-3 text-white bg-transparent border-white border-[0.5px] hover:bg-white hover:text-black transition duration-200 ease-in-out'
        onClick={() => {
          setModal(true);
          setIsOrderCompleted(true);
        }}
      >
        Proceed to Checkout
      </button>
      {modal && <Modal setModal={setModal} />}
    </div>
  );
};

export default Checkout;
