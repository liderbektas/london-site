import { useState } from 'react';

const Salad = ({
  saladToppings,
  selectedSaladToppings,
  setSelectedSaladToppings,
}) => {
  const handleSaladToppingChange = (toppingId) => {
    setSelectedSaladToppings((prev) =>
      prev.includes(toppingId)
        ? prev.filter((id) => id !== toppingId)
        : [...prev, toppingId]
    );
  };

  return (
    <>
      {saladToppings.length > 0 && (
        <div className='mt-4'>
          <h3 className='text-2xl font-semibold'>Salad Toppings</h3>
          <div className='flex flex-wrap gap-2 mt-2'>
            {saladToppings.map((topping) => (
              <label
                key={topping.id}
                className={`cursor-pointer px-7 py-1 border-[0.5px] rounded-md text-center ${
                  selectedSaladToppings.includes(topping.id)
                    ? 'bg-green-800 text-white'
                    : 'bg-black'
                }`}
                onClick={() => handleSaladToppingChange(topping.id)}
              >
                <span>{topping.name}</span>
              </label>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Salad;
