import { useParams } from 'react-router-dom';
import { useState, useCallback } from 'react';
import Modal from '../modal';
import useFetch from '../../../hooks/custom';
import Full from './components/full';
import Empty from './components/empty';

const Items = () => {
  const { data: categories } = useFetch('http://127.0.0.1:8000/api/categories');
  const { categoryName } = useParams();
  const [modal, setModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openModal = useCallback((product) => {
    setModal(true);
    setSelectedProduct(product);
  });

  const closeModal = useCallback(() => {
    setModal(false);
    setSelectedProduct(null);
  });

  const products = categories?.find(
    (category) => category.name === categoryName
  );

  return (
    <div className='relative pt-24'>
      {products ? (
        <Full products={products} openModal={openModal} />
      ) : (
        <Empty />
      )}
      {modal && <Modal item={selectedProduct} closeModal={closeModal} />}
    </div>
  );
};

export default Items;
