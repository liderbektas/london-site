const Sizes = ({ extras, setSelectedSize, selectedSize }) => {
  const handleSizeChange = (sizeId) => {
    setSelectedSize(sizeId);
  };

  return (
    <>
      {extras && extras.sizes.length > 0 && (
        <div className='flex gap-x-9'>
          <div className='mt-4'>
            <h3 className='text-2xl font-semibold text-center text-black'>Sizes</h3>
            <div className='flex items-center mt-2 gap-x-4'>
              {extras.sizes.map((size) => (
                <label
                  key={size.size_id}
                  className={`cursor-pointer px-7 py-1 border-[0.5px] rounded-md text-center ${
                    selectedSize === size.size_id
                      ? 'bg-green-800 text-white'
                      : 'bg-black text-white'
                  }`}
                  onClick={() => handleSizeChange(size.size_id)}
                >
                  <span>{size.size_name}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Sizes;
