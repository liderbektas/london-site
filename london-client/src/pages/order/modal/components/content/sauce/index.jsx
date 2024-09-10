import { useState } from 'react';

const Sauce = ({ sauceToppings }) => {
  const [selectedSauceToppings, setSelectedSauceToppings] = useState([]);

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
          <h3 className='text-2xl font-semibold'>Sauce Toppings</h3>
          <div className='flex flex-wrap gap-2 mt-2'>
            {sauceToppings.map((sauce) => (
              <label
                key={sauce.id}
                className={`cursor-pointer px-7 py-1 border-[0.5px] rounded-md text-center ${
                  selectedSauceToppings.includes(sauce.id)
                    ? 'bg-green-800 text-white'
                    : 'bg-black'
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
