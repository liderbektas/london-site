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
          <h3 className='text-2xl font-semibold text-center text-black'>
            Sauce Toppings
          </h3>
          <div className='grid grid-cols-2 gap-3 mt-2'>
            {sauceToppings.map((sauce) => (
              <label
                key={sauce.id}
                className={`cursor-pointer px-2 py-1 rounded-md text-center ${
                  selectedSauceToppings.includes(sauce.id)
                    ? 'bg-green-800 text-white'
                    : 'bg-black text-white'
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

/* 
import { toast } from 'react-toastify'; // You can keep this import if you're using toast
import 'react-toastify/dist/ReactToastify.css';

const Sauce = ({
  sauceToppings,
  selectedSauceToppings,
  setSelectedSauceToppings,
}) => {
  const handleSauceToppingChange = (sauceId) => {
    if (selectedSauceToppings.includes(sauceId)) {
      // Remove the sauce topping if it's already selected
      setSelectedSauceToppings((prev) =>
        prev.filter((id) => id !== sauceId)
      );
    } else if (selectedSauceToppings.length < 3) {
      // Add the sauce topping only if the limit is not reached
      setSelectedSauceToppings((prev) => [...prev, sauceId]);
    } else {
      // Show a toast notification if the limit is reached
      toast.error("You can only select up to 3 sauce toppings.");
    }
  };

  return (
    <>
      {sauceToppings.length > 0 && (
        <div className='mt-8'>
          <h3 className='text-2xl font-semibold text-center text-black'>
            Sauce Toppings
          </h3>
          <div className='grid grid-cols-2 gap-3 mt-2'>
            {sauceToppings.map((sauce) => (
              <label
                key={sauce.id}
                className={`cursor-pointer px-2 py-1 rounded-md text-center ${
                  selectedSauceToppings.includes(sauce.id)
                    ? 'bg-green-800 text-white'
                    : 'bg-black text-white'
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
*/