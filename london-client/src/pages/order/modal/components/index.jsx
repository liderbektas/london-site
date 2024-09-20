import Info from './content/info';
import Salad from './content/salad';
import Sauce from './content/sauce';

const Content = ({
  selectedSize,
  item,
  extras,
  selectedSaladToppings,
  setSelectedSaladToppings,
  selectedSauceToppings,
  setSelectedSauceToppings,
  handleAdd
}) => {
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
        <Salad
          saladToppings={extras.salad_toppings}
          selectedSaladToppings={selectedSaladToppings}
          setSelectedSaladToppings={setSelectedSaladToppings}
        />
      )}

      {extras.sauce_toppings?.length > 0 && (
        <Sauce
          sauceToppings={extras.sauce_toppings}
          selectedSauceToppings={selectedSauceToppings}
          setSelectedSauceToppings={setSelectedSauceToppings}
        />
      )}

      <Info item={item} selectedSize={selectedSize} extras={extras} handleAdd={handleAdd} />
    </div>
  );
};

export default Content;
