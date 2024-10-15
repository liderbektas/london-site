const Full = ({ products, openModal }) => {
  return (
    <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
      {products.items.map((product) => (
        <div
          onClick={() => openModal(product)}
          key={product.id}
          className='flex flex-col p-4 text-white transition-transform duration-300 rounded-lg shadow-lg cursor-pointer bg-[#0a0a0b] to-black hover:scale-105 hover:shadow-xl'
        >
          <div className='relative'>
            <img
              src={product.image}
              alt={product.name}
              className='object-cover w-full h-64 transition-transform duration-300 transform rounded-lg shadow-md hover:scale-105' 
            />
            <div className='absolute inset-0 flex items-center justify-center transition-opacity duration-300 bg-black bg-opacity-50 rounded-lg opacity-0 hover:opacity-100'>
              <button className='px-3 py-1 text-lg font-semibold text-white transition duration-300 border border-white rounded hover:bg-white hover:text-black'>
                ORDER
              </button>
            </div>
          </div>

          <div className='flex flex-col justify-between flex-grow mt-3'>
            <div>
              <h2 className='text-lg font-bold'>{product.name}</h2> 
              <p className='mb-1 text-sm sm:w-[350px] my-2'>{product.description}</p> 
              <p className='text-lg font-bold'>£{product.price.toFixed(2)}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Full;