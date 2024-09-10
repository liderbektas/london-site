import axios from 'axios';
import { useEffect, useState } from 'react';
import { IoCloseOutline } from 'react-icons/io5';
import Sizes from './components/content/sizes';
import Content from './components';

const Modal = ({ item, closeModal }) => {
  const [extras, setExtras] = useState(null);
  const [selectedSize, setSelectedSize] = useState('');

  const getInfo = async () => {
    try {
      const { data } = await axios.get(
        `http://127.0.0.1:8000/api/item/${item.id}`
      );
      setExtras(data);
      if (data.sizes && data.sizes.length > 0) {
        setSelectedSize(data.sizes[0].size_id);
      } else {
        setSelectedSize('standart');
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getInfo();
  }, [item.id]);

  console.log(extras);

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50'>
      <div className='relative w-[800px] h-[400px] p-6 mx-4 overflow-y-auto bg-black border-[0.5px] border-white rounded-lg'>

        <IoCloseOutline
          onClick={closeModal}
          className='absolute text-3xl top-2 right-2'
        />
        
        <div className='flex flex-col'>
          <h2 className='text-3xl font-semibold text-center'>{item.name}</h2>
          <p className='mt-2 text-xl text-center'>{item.description}</p>

          {extras && (
            <>
              <Sizes
                setSelectedSize={setSelectedSize}
                selectedSize={selectedSize}
                extras={extras}
              />

              <Content
                extras={extras}
                item={item}
                selectedSize={selectedSize}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
