import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from '../modal';

const Items = () => {
  const { categoryName } = useParams();
  const [categories, setCategories] = useState([]);
  const [modal, setModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const getCategories = async () => {
    try {
      const { data } = await axios.get('http://127.0.0.1:8000/api/categories');
      setCategories(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  const openModal = (product) => {
    setSelectedProduct(product);
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
    setSelectedProduct(null);
  };

  const item = categories.find((category) => category.name === categoryName);

  return (
    <div className='relative pt-24'>
      {item ? (
        <div className='grid grid-cols-2 gap-4'>
          {item.items.map((product) => (
            <div
              onClick={() => openModal(product)}
              key={product._id}
              className='flex flex-col justify-between p-4 bg-black shadow-md cursor-pointer'
            >
              <div className='flex items-start gap-x-4'>
                <div className='w-1/4'>
                  <img
                    src={product.image}
                    alt={product.name}
                    className='object-cover w-full h-24 mb-4 rounded-md rounded-t-lg'
                  />
                </div>
                <div className='flex flex-col w-3/4 h-full'>
                  <div className='flex items-center justify-between'>
                    <h2 className='mb-2 text-xl font-semibold'>
                      {product.name}
                    </h2>
                    <p className='text-lg font-bold'>
                      £{product.price.toFixed(2)}
                    </p>
                  </div>
                  <p className='mb-2 text-sm truncate'>{product.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className='text-center'>Kategori bulunamadı.</p>
      )}
      {modal && <Modal item={selectedProduct} closeModal={closeModal} />}
    </div>
  );
};

export default Items;
