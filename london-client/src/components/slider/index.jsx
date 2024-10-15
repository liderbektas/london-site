import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import burger from '../../assets/img/burger-1.jpg';
import pizza from '../../assets/img/pizza-1.jpg';
import doner from '../../assets/img/doner-1.jpg';
import homePage from '../../assets/img/Fire.jpg';
import otherImage1 from '../../assets/img/FireBurger.jpg'; 
import otherImage2 from '../../assets/img/FirePizza.jpg'; 
import otherImage3 from '../../assets/img/doner.jpg';

const Slider = () => {
  const isLg = window.innerWidth >= 768; 

  return (
    <div className='w-full h-full'>
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
            className='object-cover w-full bg-center h-[700px] lg:object-cover'
          />
          <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent'></div>
        </div>
        <div className='relative h-full'>
          <img
            src={isLg ? otherImage1 : burger}
            alt='FireBurger'
            className='object-cover w-full bg-center h-[700px] lg:object-cover'
          />
          <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent'></div>
        </div>
        <div className='relative h-full'>
          <img
            src={isLg ? otherImage2 : pizza} 
            alt='FirePizza'
            className='object-cover w-full bg-center h-[700px] lg:object-cover'
          />
          <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent'></div>
        </div>
        <div className='relative h-full'>
          <img
            src={isLg ? otherImage3 : doner}
            alt='FireDoner'
            className='object-cover w-full bg-center h-[700px] lg:object-cover'
          />
          <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent'></div>
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;
