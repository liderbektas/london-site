import { Link } from 'react-router-dom';
import Logo from "../../../assets/img/D.png"

const Logos = () => {
  return (
    <Link to='/'>
      <img src={Logo} alt="" className='h-16' />
    </Link>
  );
};

export default Logos;
