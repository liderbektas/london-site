import React from 'react';
import { useNavigate } from 'react-router-dom';

const Success = () => {
  const navigate = useNavigate();

  const returnHome = () => {
    navigate('/');
  };

  return (
    <div className='w-screen h-screen'>
      <div>Sipraiş başarılı</div>
      <button onClick={returnHome}>Anasayfaya dön</button>
    </div>
  );
};

export default Success;
