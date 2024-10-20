import Header from '../header';
import Items from './items';
import Checker from './checker';

const Order = ({ checker, setChecker }) => {
  return (
    <div className='w-screen bg-black'>
      <div className='lg:w-[1200px] mx-auto pt-2 flex flex-col'>
        <Header checker={checker} />
        {checker ? <Items /> : <Checker setChecker={setChecker} />}
      </div>
    </div>
  );
};

export default Order;