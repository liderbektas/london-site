import { useState } from 'react';

const Sauce = ({
  sauceToppings,
  selectedSauceToppings,
  setSelectedSauceToppings,
}) => {
  const handleSauceToppingChange = (sauceId) => {
    setSelectedSauceToppings((prev) =>
      prev.includes(sauceId)
        ? prev.filter((id) => id !== sauceId)
        : [...prev, sauceId]
    );
  };

  return (
    <>
      {sauceToppings.length > 0 && (
        <div className='mt-8'>
          <h3 className='text-2xl font-semibold text-center text-black'>Sauce Toppings</h3>
          <div className='grid grid-cols-3 gap-3 mt-2'> {/* Use grid layout */}
            {sauceToppings.map((sauce) => (
              <label
                key={sauce.id}
                className={`cursor-pointer px-2 w-32 py-1 rounded-md text-center ${
                  selectedSauceToppings.includes(sauce.id)
                    ? 'bg-green-800 text-white'
                    : 'bg-black text-white' // Added text color for non-selected state
                }`}
                onClick={() => handleSauceToppingChange(sauce.id)}
              >
                <span>{sauce.name}</span>
              </label>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Sauce;
