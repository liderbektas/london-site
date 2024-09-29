import React from 'react';
import { useNavigate } from 'react-router-dom';

const Success = ({ setIsOrderCompleted }) => {
  const navigate = useNavigate();

  const returnHome = () => {
    navigate('/');
    setIsOrderCompleted(false);
  };

  return (
    <div className='w-screen h-screen'>
      <div>Sipraiş başarılı</div>
      <button onClick={returnHome}>Anasayfaya dön</button>
    </div>
  );
};

export default Success;
