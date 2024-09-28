import Desc from './components/desc';
import Content from './content';

const About = () => {
  return (
    <div className='w-screen h-full pb-32 bg-black'>
      <div className='flex flex-col items-center gap-y-24'>
        <div className='w-[660px] flex flex-col gap-y-2 mx-auto'>
          <h2 className='pt-32 text-3xl text-center'>About Our Story</h2>
          <p className='text-md'>
            Located in the heart of London at 330 Kilburn Lane, Queen’s Park,
            this family-run restaurant has been a cherished part of the
            community since 1993. Owned and operated by four brothers, the
            restaurant has built a reputation for serving delicious, authentic
            Turkish cuisine, including kebabs, doner, pizzas, burgers, and more.
            From its humble beginnings, this restaurant has grown into a beloved
            neighborhood spot where customers are treated like family. Every
            dish is crafted with fresh ingredients and traditional recipes that
            reflect the rich culinary heritage of Turkey. The warm and inviting
            atmosphere makes it the perfect place for anything from a quick meal
            to a relaxed family gathering. With a commitment to quality and a
            passion for great food, this restaurant continues to be a favorite
            for locals and visitors alike. Come and experience the tastes and
            hospitality that have made this family business a staple in the
            community for over three decades.
          </p>
        </div>
        <Content />
      </div>
    </div>
  );
};

export default About;
