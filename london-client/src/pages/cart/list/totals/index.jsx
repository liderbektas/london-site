import Checkout from './checkout';

const Total = ({ subTotal, setIsOrderCompleted }) => {
  return (
    <>
      <h2 className='text-4xl'>Cart totals</h2>

      <table className='w-full'>
        <tbody>
          <tr className='border-b-[0.5px]'>
            <th className='py-4 text-xl text-left'>Subtotal</th>
            <td data-title='Subtotal' className='py-4 text-right'>
              <span>
                <bdi>
                  <span>$</span>
                  {subTotal.toFixed(2)}
                </bdi>
              </span>
            </td>
          </tr>

          <tr className='border-b-[0.5px]'>
            <th className='py-4 text-xl text-left'>Shipping</th>
            <td data-title='Shipping' className='py-4 text-right'>
              $2.00
            </td>
          </tr>

          <tr className='order-total'>
            <th className='py-4 text-xl font-semibold text-left'>Total</th>
            <td data-title='Total' className='py-4 text-right'>
              <strong>
                <span className='woocommerce-Price-amount amount'>
                  <bdi>
                    <span className='woocommerce-Price-currencySymbol'>$</span>
                    {(subTotal + 2).toFixed(2)}
                  </bdi>
                </span>
              </strong>
            </td>
          </tr>
        </tbody>
      </table>

      <Checkout setIsOrderCompleted={setIsOrderCompleted} />
    </>
  );
};

export default Total;
