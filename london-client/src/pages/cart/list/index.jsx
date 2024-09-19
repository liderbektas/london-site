import React from 'react';

const List = () => {
  return (
    <table className='w-full'>
      <thead>
        <tr className='text-2xl border-b-[0.5px]'>
          <th className='px-4 py-4 text-left'>Product</th>
          <th className='px-4 py-4 text-left'>Price</th>
          <th className='px-4 py-4 text-left'>Quantity</th>
          <th className='px-4 py-4 text-left'>Subtotal</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td className='px-4 py-8'>Apple</td>
          <td className='px-4 py-8'>$1.00</td>
          <td className='px-4 py-8'>3</td>
          <td className='px-4 py-8'>$3.00</td>
        </tr>
        <tr className=''>
          <td className='px-4 py-8'>Banana</td>
          <td className='px-4 py-8'>$0.50</td>
          <td className='px-4 py-8'>5</td>
          <td className='px-4 py-8'>$2.50</td>
        </tr>
      </tbody>
    </table>
  );
};

export default List;
