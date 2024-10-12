import Image from "../../../../../assets/img/alibabadukkan.jpeg";

const Content = () => {
  return (
    <div className='w-full md:w-[800px] h-auto overflow-hidden rounded-lg px-4 md:px-8'>
      <img
        className='object-cover w-full bg-center h-[500px] md:h-[900px] rounded-lg'
        src={Image}
        alt='image'
      />
    </div>
  );
};

export default Content;
