import Header from '../header';
import Items from './items';
import Checker from './checker';

const Order = ({ checker, setChecker }) => {
  return (
    <div className='w-screen h-screen bg-gradient-to-b from-black via-gray-900 to-black'>
      <div className='md:w-[1200px] mx-auto pt-2 flex flex-col'>
        <Header checker={checker} />
        {checker ? <Items /> : <Checker setChecker={setChecker} />}
      </div>
    </div>
  );
};

export default Order;