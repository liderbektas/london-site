import CartItems from './cartItems';

const CartSummary = ({ cart }) => {
  const totalPrice = cart.items.reduce((total, item) => {
    return total + Number(item.item.price) * item.item.quantity;
  }, 0);

  return (
    <div className='flex flex-col w-1/2 px-6 overflow-hidden'>
      <h2 className='mb-4 text-3xl font-semibold text-center'>Cart Items</h2>
      <div className='flex-grow overflow-auto h-[500px]'>
        {cart.items.length > 0 ? (
          <CartItems cart={cart} />
        ) : (
          <p className='text-lg'>No items in the cart.</p>
        )}
      </div>
      <div className='sticky bottom-0 px-4 my-2'>
        <p className='mt-4 text-2xl font-semibold text-start'>
          <strong>Total Price: </strong>£{totalPrice.toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default CartSummary;
