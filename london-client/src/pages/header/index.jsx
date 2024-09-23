import { useLocation } from 'react-router-dom';
import Card from './card';
import Logos from './logo';
import Navbar from './navbar';
import { NavLink } from 'react-router-dom';
import useFetch from '../../hooks/custom';

const Header = () => {
  const { data } = useFetch('http://127.0.0.1:8000/api/categories');
  const location = useLocation();

  const categories = data ? data.slice(0, 9) : [];

  return (
    <div className='flex items-center justify-between w-[1200px] mx-auto pt-2'>
      <Logos />
      {location.pathname === '/' ? (
        <Navbar />
      ) : (
        <div className='flex items-center gap-x-8'>
          {categories?.map((category) => (
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? 'flex items-center justify-center transition duration-200 border-b'
                  : ''
              }
              to={`/order/${category.name}`}
              key={category.id}
            >
              {category.name}
            </NavLink>
          ))}
        </div>
      )}
      <Card />
    </div>
  );
};

export default Header;
