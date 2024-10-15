import CartItems from '../cartSummary/cartItems'; 

const CartSummary = ({ cart }) => {
  const totalPrice = cart.items.reduce((total, item) => {
    return total + Number(item.item.price) * item.item.quantity;
  }, 0);

  return (
    <div className="flex flex-col w-full max-w-4xl px-4 mx-auto">
      {/* Cart Title */}
      <h2 className="mb-6 text-3xl font-bold text-center text-white">Your Cart</h2>
      
      {/* Cart Items Section */}
      <div className="flex-grow overflow-auto h-[500px] rounded-lg p-4">
        {cart.items.length > 0 ? (
          <CartItems cart={cart} />
        ) : (
          <p className="text-lg text-gray-300">Your cart is currently empty.</p>
        )}
      </div>
      
      {/* Total Price Section */}
      <div className="flex justify-between items-center sticky bottom-0 py-4 rounded-lg px-6 mt-4">
        <p className="text-2xl font-semibold text-white">
          <strong>Total:</strong> £{totalPrice.toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default CartSummary;
