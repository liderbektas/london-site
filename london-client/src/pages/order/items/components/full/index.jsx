const Full = ({ products, openModal }) => {
  return (
    <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
      {products.items.map((product, index) => (
        <div
          onClick={() => openModal(product)}
          key={index}
          className='flex flex-col p-6 text-white transition-transform duration-300 bg-transparent rounded-lg shadow-lg cursor-pointer hover:scale-105'
        >
          <div className='flex items-start gap-4'>
            <img
              src={product.image}
              alt={product.name}
              className='object-cover w-32 h-32 rounded-lg shadow-md'
            />
            <div className='flex flex-col justify-between flex-grow'>
              <div>
                <h2 className='text-2xl font-bold'>{product.name}</h2>
                <p className='mb-2 text-sm md:w-[400px] md:flex-wrap my-3'>{product.description}</p>
              </div>
              <p className='text-lg font-bold'>£{product.price.toFixed(2)}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Full;
