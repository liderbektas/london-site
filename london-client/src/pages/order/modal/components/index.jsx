import Info from './content/info';
import Salad from './content/salad';
import Sauce from './content/sauce';

const Content = ({ selectedSize, item, extras }) => {
  if (!extras) {
    return null;
  }

  return (
    <div className='flex flex-col mt-12'>
      {(extras.salad_toppings?.length > 0 ||
        extras.sauce_toppings.length > 0) && (
        <h3 className='text-3xl font-semibold'>Free Additions</h3>
      )}

      {extras.salad_toppings?.length > 0 && (
        <Salad saladToppings={extras.salad_toppings} />
      )}

      {extras.sauce_toppings?.length > 0 && (
        <Sauce sauceToppings={extras.sauce_toppings} />
      )}

      <Info item={item} selectedSize={selectedSize} extras={extras} />
    </div>
  );
};

export default Content;
