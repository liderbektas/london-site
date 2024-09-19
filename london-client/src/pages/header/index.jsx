import { useLocation } from 'react-router-dom';
import Card from './card';
import Logos from './logo';
import Navbar from './navbar';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    try {
      const { data } = await axios.get('http://127.0.0.1:8000/api/categories');
      setCategories(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  const newCategory = categories.slice(0, 9);

  return (
    <div className='flex items-center justify-between w-[1200px] mx-auto pt-2'>
      <Logos />
      {location.pathname === '/' ? (
        <Navbar />
      ) : (
        <div className='flex items-center gap-x-8'>
          {newCategory.map((category) => (
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
