import Home from '../pages/home';
import About from '../pages/about';
import Menus from '../pages/menu';
import Contact from '../pages/contact';

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
