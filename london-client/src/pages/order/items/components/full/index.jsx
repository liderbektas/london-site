const Full = ({ products, openModal }) => {
  return (
    <div className='grid grid-cols-2 gap-4'>
      {products.items.map((product, index) => (
        <div
          onClick={() => openModal(product)}
          key={index}
          className='flex flex-col justify-between p-4 bg-black shadow-md cursor-pointer'
        >
          <div className='flex items-start gap-x-4'>
            <div className='w-1/4'>
              <img
                src={product.image}
                alt={product.name}
                className='object-cover w-full h-24 mb-4 rounded-md rounded-t-lg'
              />
            </div>
            <div className='flex flex-col w-3/4 h-full'>
              <div className='flex items-center justify-between'>
                <h2 className='mb-2 text-xl font-semibold'>{product.name}</h2>
                <p className='text-lg font-bold'>£{product.price.toFixed(2)}</p>
              </div>
              <p className='mb-2 text-sm truncate'>{product.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Full;
