import Header from '../header';
import Items from './items';

const Order = () => {
  return (
    <div className='w-screen h-screen bg-black'>
      <div className='w-[1200px] mx-auto pt-2 flex flex-col'>
        <Header />
        <Items />
      </div>
    </div>
  );
};

export default Order;
