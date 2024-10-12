import { Link } from 'react-router-dom';
import MenuPDF from '../../../../assets/img/alibabamenu.pdf';
import Button from '../../../../components/button';
import MenuPhoto from '../../../../assets/img/alibaba.png';

const Menus = () => {
  return (
    <div className='grid min-h-[500px] bg-black place-items-center p-4'>
      <div className='flex flex-col items-center justify-center max-w-5xl p-8 bg-black rounded-lg shadow-lg md:flex-row'>
        <div className='flex-shrink-0 mb-6 md:mb-0 md:mr-8'>
          <img
            src={MenuPhoto}
            alt='Menu Photo'
            className='w-full h-auto max-w-xs rounded-lg shadow-md md:h-80'
          />
        </div>

    
        <div className='text-center text-white'>
          <h3 className='text-4xl font-bold sm:text-5xl md:text-6xl'>Menu</h3>
          <p className='mt-4 text-lg sm:text-xl'>
            Our menu offers a wide variety of delicious dishes to satisfy your
            cravings. From appetizers to desserts, we have something for
            everyone!
          </p>
          <div className='flex flex-col items-center gap-4 mt-6 md:flex-row md:items-center md:justify-center'>
            <Button
              as={Link}
              to='/order/Kebab'
              variant='primary'
              size='large'
            >
              Order
            </Button>
            <Button
              as='a'
              href={MenuPDF}
              target='_blank'
              variant='primary'
              size='large'
            >
              Menu as PDF
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menus;
