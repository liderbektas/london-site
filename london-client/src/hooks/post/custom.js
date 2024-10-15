import { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

const usePost = (url, message) => {
  const postData = async (data) => {
    try {
      const response = await axios.post(url, data);
      toast.success(message, {
        duration: 3000,
        position: 'top-center',
      });
      return response.data;
    } catch (err) {
      toast.error(err.message);
    }
  };

  return { postData };
};

export default usePost;
