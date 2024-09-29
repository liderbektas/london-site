import { Link } from 'react-router-dom';
import MenuPDF from '../../../../assets/img/menu1.pdf';
import Button from '../../../../components/button';

const Menus = () => {
  return (
    <div className='h-[400px] bg-black grid place-items-center'>
      <h3 className='text-6xl text-center'>Menu</h3>
      <div className='flex items-center justify-between gap-x-12'>
        <Button as={Link} to='/order/Kebab' variant='primary' size='xlarge'>
          Order
        </Button>

        <Button
          as='a'
          href={MenuPDF}
          target='_blank'
          variant='primary'
          size='xlarge'
        >
          Menu as PDF
        </Button>
      </div>
    </div>
  );
};

export default Menus;
