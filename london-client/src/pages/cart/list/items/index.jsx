const Items = ({ cart }) => {
    return (
      <table className='w-full'>
        <thead>
          <tr className='text-4xl border-b-[0.5px]'>
            <th className='px-4 py-4 text-left'>Product</th>
            <th className='px-4 py-4 text-left'>Description</th>
            <th className='px-4 py-4 text-left'>Quantity</th>
            <th className='px-4 py-4 text-left'>Price</th>
          </tr>
        </thead>
        <tbody className='border-b-[0.5px]'>
          {cart.items.map((product) => (
            <tr key={product.item.item_id}>
              <td className='flex items-center px-4 py-8 text-2xl gap-x-12'>
                <img
                  src={product.item.image_url}
                  alt={product.item.name}
                  className='w-48 h-48 bg-center'
                />
                <span className='font-bold'>{product.item.name}</span>
              </td>
              <td className='px-4 py-8 text-wrap w-[288px]'>
                {product.item.description}
              </td>
              <td className='px-4 py-8 text-center'>{product.item.quantity}</td>
              <td className='px-4 py-8 text-right'>
                ${parseFloat(product.item.price).toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  
  export default Items;