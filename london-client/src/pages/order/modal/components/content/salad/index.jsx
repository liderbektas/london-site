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
        <div className='md:mt-4'>
          <h3 className='mt-3 text-2xl font-semibold text-center text-black'>Salad Toppings</h3>
          <div className='grid grid-cols-2 gap-3 mt-2'> {/* grid-cols-2 ile her satırda 2 seçenek */}
            {saladToppings.map((topping) => (
              <label
                key={topping.id}
                className={`cursor-pointer px-2 py-1 border-[0.5px] rounded-md text-center ${
                  selectedSaladToppings.includes(topping.id)
                    ? 'bg-green-800 text-white'
                    : 'bg-black text-white' 
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
