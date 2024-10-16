import { useCallback, useEffect, useState } from 'react';
import { IoCloseOutline } from 'react-icons/io5';
import { useDispatch } from 'react-redux';
import { addToCartAPI } from '../../../redux/cart/actions';
import toast from 'react-hot-toast';
import Sizes from './components/content/sizes';
import Content from './components';
import useFetch from '../../../hooks/custom';

const Modal = ({ item, closeModal }) => {
  const dispatch = useDispatch();
  const { data , loading } = useFetch(`http://127.0.0.1:8000/api/item/${item.id}`);
  const [extras, setExtras] = useState(null);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedSaladToppings, setSelectedSaladToppings] = useState([]);
  const [selectedSauceToppings, setSelectedSauceToppings] = useState([]);

  useEffect(() => {
    if (data) {
      setExtras(data);
      if (data.sizes && data.sizes.length > 0) {
        setSelectedSize(data.sizes[0].size_id);
      }
    }
  }, [data]);

  const handleAdd = useCallback(async () => {
    try {
      dispatch(addToCartAPI(item.id, selectedSize, selectedSaladToppings, selectedSauceToppings));
      toast.success('Added to Cart', { duration: 3000, position: 'top-center' });
      closeModal();
    } catch {
      toast.error('Failed Adding to Cart', { duration: 3000, position: 'top-center' });
    }
  }, [dispatch, item.id, selectedSize, selectedSaladToppings, selectedSauceToppings, closeModal]);

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50'>
      <div className='relative w-full max-w-[600px] max-h-[600px] p-6 mx-4 overflow-y-auto bg-white border border-gray-300 rounded-lg shadow-lg'>
        <IoCloseOutline
          onClick={closeModal}
          className='absolute text-3xl text-black cursor-pointer top-4 right-4 hover:text-gray-800'
        />

        <div className='flex flex-col items-center'>
          <h2 className='text-2xl font-semibold text-center text-black md:text-3xl'>{item.name}</h2>
          <p className='mt-2 text-base text-center text-gray-800 md:text-lg'>{item.description}</p>
         
          {extras && (
            <>
              <Sizes
                setSelectedSize={setSelectedSize}
                selectedSize={selectedSize}
                extras={extras}
                item={item}
              />

              <Content
                extras={extras}
                item={item}
                selectedSize={selectedSize}
                setSelectedSaladToppings={setSelectedSaladToppings}
                selectedSaladToppings={selectedSaladToppings}
                setSelectedSauceToppings={setSelectedSauceToppings}
                selectedSauceToppings={selectedSauceToppings}
                handleAdd={handleAdd}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
