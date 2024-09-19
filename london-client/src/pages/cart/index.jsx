import Header from '../header';
import List from './list';

const Cart = () => {
  return (
    <div className='w-screen h-screen'>
      <Header />

      <div className='mt-40 w-[1200px] mx-auto'>

        <List />
      </div>
    </div>
  );
};

export default Cart;
