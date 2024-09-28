import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import newDoner from "../../assets/img/newDoner.jpeg";
import new2 from "../../assets/img/FireBurger.jpg";
import wp from "../../assets/img/FirePizza.jpg";
import homePage from "../../assets/img/Fire.jpg"

const Slider = () => {
  return (
    <div className="w-full h-full">
      <Carousel
        autoPlay={true}
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        transitionTime={500}
        interval={2000}
        showArrows={false}
      >
        <div className="relative h-full">
          <img
            src={homePage}
            alt="FireFly"
            className="object-cover w-full h-screen bg-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
        </div>
        <div className="relative h-full">
          <img
            src={new2}
            alt="FireBurger"
            className="object-cover w-full h-screen"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
        </div>
        <div className="relative h-full">
          <img
            src={wp}
            alt="FirePizza"
            className="object-cover w-full h-screen bg-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;
