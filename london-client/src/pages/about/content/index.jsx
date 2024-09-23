import Image from '../../../assets/img/alibabadukkan.jpeg';

const Content = () => {
  return (
    <div className='w-[900px] h-[900px] overflow-hidden rounded-lg'>
      <img
        className='object-cover w-full h-full'
        src={Image}
        alt='image'
      />
    </div>
  );
};

export default Content;
