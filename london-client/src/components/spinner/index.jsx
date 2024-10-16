import Logo from '../../assets/img/D.png';

const Spinner = () => {
  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center pb-64 bg-[#0a0a0b]'>
      <img src={Logo} alt='Loading...' className='rounded-full shadow-lg h-60 w-60 animate-bounce' />
    </div>
  );
};

export default Spinner;
