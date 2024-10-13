import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import burger from '../../assets/img/burger-1.jpg';
import pizza from '../../assets/img/pizza-1.jpg';
import doner from '../../assets/img/doner-1.jpg';
import homePage from '../../assets/img/Fire.jpg';

const Slider = () => {
  return (
    <div className='w-full h-full'>
      {/* First Slider */}
      <Carousel
        autoPlay={true}
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        transitionTime={500}
        interval={2000}
        showArrows={false}
        showIndicators={false}
      >
        <div className='relative h-full'>
          <img
            src={homePage}
            alt='FireFly'
            className='object-cover w-full bg-center h-[700px] md:object-cover'
          />
          <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent'></div>
        </div>
        <div className='relative h-full'>
          <img
            src={burger}
            alt='FireBurger'
            className='object-cover w-full bg-center h-[700px] md:object-cover'
          />
          <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent'></div>
        </div>
        <div className='relative h-full'>
          <img
            src={pizza}
            alt='FirePizza'
            className='object-cover w-full bg-center h-[700px] md:object-cover'
          />
          <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent'></div>
        </div>
        <div className='relative h-full'>
          <img
            src={doner}
            alt='FireDoner'
            className='object-cover w-full bg-center h-[700px] md:object-cover'
          />
          <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent'></div>
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;
