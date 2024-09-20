const Info = ({ item, extras, selectedSize, handleAdd }) => {
  const selectedSizePrice =
    extras.sizes.find((item) => item.size_id === selectedSize)?.price || 0;

  return (
    <>
      <div className='flex flex-col mt-8 gap-y-4'>
        <span className='text-2xl font-semibold'>
          Item Price: £{item.price}
        </span>
        <span className='text-2xl font-semibold'>
          Total Price: £{selectedSizePrice}
        </span>
      </div>

      <button
        onClick={handleAdd}
        className='justify-center w-full mt-8 text-xl text-black bg-white rounded hover:text-white hover:bg-transparent border-[0.5px] transition duration-200 px-4 py-1'
      >
        Add to Cart
      </button>
    </>
  );
};

export default Info;
