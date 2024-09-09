import axios from "axios";
import { useEffect, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import Burger from "../../../assets/img/singleburger.avif";

const Modal = ({ item, closeModal }) => {
  const [sizes, setSizes] = useState([]);
  const [saladToppings, setSaladToppings] = useState([]);
  const [sauceToppings, setSauceToppings] = useState([]);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedSaladToppings, setSelectedSaladToppings] = useState([]);
  const [selectedSauceToppings, setSelectedSauceToppings] = useState([]);
  const [extraInfo, setExtraInfo] = useState([]);

  const getInfo = async () => {
    try {
      const { data } = await axios.get(
        `http://127.0.0.1:8000/api/item/${item.id}`,
      );
      setSizes(data.sizes || []);
      setSaladToppings(data.salad_toppings || []);
      setSauceToppings(data.sauce_toppings || []);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getInfo();
    if (item.id === 41) {
      const extra = item.description.split(",");
      setExtraInfo(
        extra.map((info, index) => ({ id: index, name: info.trim() })),
      );
    }
  }, [item.id, item.description]);

  const handleSizeChange = (sizeId) => {
    setSelectedSize(sizeId);
  };

  const handleSaladToppingChange = (toppingId) => {
    setSelectedSaladToppings((prev) =>
      prev.includes(toppingId)
        ? prev.filter((id) => id !== toppingId)
        : [...prev, toppingId],
    );
  };

  const handleSauceToppingChange = (sauceId) => {
    setSelectedSauceToppings((prev) =>
      prev.includes(sauceId)
        ? prev.filter((id) => id !== sauceId)
        : [...prev, sauceId],
    );
  };

  console.log(sizes);

  const selectedSizePrice =
    sizes.find((item) => item.size_id === selectedSize)?.price || 0;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative w-[800px] h-[750px] p-6 mx-4 overflow-y-auto bg-black border-[0.5px] border-white rounded-lg">
        <button
          onClick={closeModal}
          className="absolute top-2 right-2 text-3xl"
        >
          <IoCloseOutline />
        </button>
        <div className="flex flex-col">
          <h2 className="text-3xl font-semibold text-center">{item.name}</h2>
          <p className="mt-2 text-center text-xl">{item.description}</p>

          {sizes.length > 0 && (
            <div className="mt-4">
              <h3 className="text-2xl font-semibold">Sizes</h3>
              <div className="mt-2 flex gap-x-4 items-center">
                {sizes.map((size) => (
                  <label
                    key={size.size_id}
                    className={`cursor-pointer px-7 py-1 border-[0.5px] rounded-md text-center ${
                      selectedSize === size.size_id
                        ? "bg-green-800 text-white"
                        : "bg-black text-white"
                    }`}
                    onClick={() => handleSizeChange(size.size_id)}
                  >
                    <span>{size.size_name}</span>
                  </label>
                ))}
              </div>
            </div>
          )}

          <div className="flex flex-col mt-12">
            <h3 className="text-3xl font-semibold">Free Additions</h3>

            {saladToppings.length > 0 && (
              <div className="mt-4">
                <h3 className="text-2xl font-semibold">Salad Toppings</h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  {saladToppings.map((topping) => (
                    <label
                      key={topping.id}
                      className={`cursor-pointer px-7 py-1 border-[0.5px] rounded-md text-center ${
                        selectedSaladToppings.includes(topping.id)
                          ? "bg-green-800 text-white"
                          : "bg-black"
                      }`}
                      onClick={() => handleSaladToppingChange(topping.id)}
                    >
                      <span>{topping.name}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}

            {sauceToppings.length > 0 && (
              <div className="mt-8">
                <h3 className="text-2xl font-semibold">Sauce Toppings</h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  {sauceToppings.map((sauce) => (
                    <label
                      key={sauce.id}
                      className={`cursor-pointer px-7 py-1 border-[0.5px] rounded-md text-center ${
                        selectedSauceToppings.includes(sauce.id)
                          ? "bg-green-800 text-white"
                          : "bg-black"
                      }`}
                      onClick={() => handleSauceToppingChange(sauce.id)}
                    >
                      <span>{sauce.name}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}

            {item.id === 41 && extraInfo.length > 0 && (
              <div className="mt-4">
                <h3 className="text-xl font-semibold">Extra Options</h3>
                <div className="mt-2 space-y-2">
                  {extraInfo.map((info) => (
                    <label key={info.id} className="flex items-center">
                      <input type="checkbox" value={info.id} className="mr-2" />
                      <span>{info.name}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}

            <span className="mt-12 text-2xl font-semibold">
              Total Price: £{selectedSizePrice}
            </span>

            <button className="w-full bg-white"></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
