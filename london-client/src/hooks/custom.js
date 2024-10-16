import { useState, useEffect } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        await new Promise(resolve => setTimeout(resolve, 1000)); 
        const response = await axios.get(url);
        setData(response.data);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading };
};

export default useFetch;
