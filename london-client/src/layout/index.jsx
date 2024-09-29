import Home from '../pages/home';
import About from '../pages/home/components/about';
import Menus from '../pages/home/components/menu';
import Contact from '../pages/home/components/contact';

const Layout = () => {
  return (
    <>
      <section id='home' className='section'>
        <Home />
      </section>
      <section id='about' className='section'>
        <About />
      </section>
      <section id='menu' className='section'>
        <Menus />
      </section>
      <section id='contact' className='section'>
        <Contact />
      </section>
    </>
  );
};

export default Layout;
