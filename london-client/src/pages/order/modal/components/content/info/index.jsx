const Info = ({ item, extras, selectedSize, handleAdd }) => {
  const selectedSizePrice =
    extras.sizes.find((item) => item.size_id === selectedSize)?.price || 0;

  return (
    <>
      <div className='flex flex-col mt-8 gap-y-4'>
        <span className='text-3xl font-bold text-center text-black'>
          Total Price: £{selectedSizePrice.toFixed(2)}
        </span>
      </div>

     <div className='flex justify-center w-full'>
     <button
        onClick={handleAdd}
        className='justify-center px-4 py-1 mt-8 text-xl text-white duration-200 bg-black rounded-lg w-[350px]  md:w-[420px]'
      >
        Add to Cart
      </button>
     </div>
    </>
  );
};

export default Info;
