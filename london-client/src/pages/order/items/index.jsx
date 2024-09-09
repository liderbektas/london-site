import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Modal from "../modal";
import Burger from "../../../assets/img/singleburger.avif";

const Items = () => {
  const { categoryName } = useParams();
  const [categories, setCategories] = useState([]);
  const [modal, setModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const getCategories = async () => {
    try {
      const { data } = await axios.get("http://127.0.0.1:8000/api/categories");
      setCategories(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  const item = categories.find((category) => category.name === categoryName);

  const openModal = (product) => {
    setSelectedProduct(product);
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
    setSelectedProduct(null);
  };

  return (
    <div className="relative pt-24">
      {item ? (
        <div className="grid grid-cols-2 gap-4">
          {item.items.map((product) => (
            <div
              onClick={() => openModal(product)}
              key={product._id}
              className="flex flex-col justify-between p-4 bg-black shadow-md cursor-pointer"
            >
              <div className="flex items-start gap-x-4">
                <div className="w-1/4">
                  <img
                    src={Burger}
                    alt={product.name}
                    className="object-cover w-full h-24 mb-4 rounded-t-lg rounded-md"
                  />
                </div>
                <div className="w-3/4 h-full flex flex-col">
                  <div className="flex justify-between items-center">
                    <h2 className="mb-2 text-xl font-semibold">
                      {product.name}
                    </h2>
                    <p className="text-lg font-bold">£{product.price}</p>
                  </div>
                  <p className="mb-2 text-sm truncate">{product.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center">Kategori bulunamadı.</p>
      )}
      {modal && <Modal item={selectedProduct} closeModal={closeModal} />}
    </div>
  );
};

export default Items;
