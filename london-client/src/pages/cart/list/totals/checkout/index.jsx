import { Link } from 'react-router-dom';

const Checkout = () => {
    return (
      <div className='flex items-center justify-center w-full my-5'>
        <Link to="/checkout" className='px-6 py-3 text-white bg-transparent border-white border-[0.5px] hover:bg-white hover:text-black transition duration-200 ease-in-out'>
          Proceed to Checkout
        </Link>
      </div>
    );
  };
  
  export default Checkout;