import { useState, useEffect } from 'react';
import axios from 'axios';

export const useGetFetch = (type, id) => {
  const [state, setState] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState('');

  const fetchData = async (type, id) => {
    if (id === undefined) {
      try {
        const { data } = await axios.get(
          `https://app-booking-christ.herokuapp.com/api/${type}`
        );
        setIsLoading(false);
        return data;
      } catch (error) {
        console.error(error);
        setIsLoading(false);
        return error.message;
      }
    }

    try {
      const { data } = await axios.get(
        `https://app-booking-christ.herokuapp.com/api/client/${id}`
      );
      setIsLoading(false);
      return data;
    } catch (error) {
      console.error(error);
      setIsLoading(false);
      return error.message;
    }
  };

  useEffect(() => {
    fetchData(type, id).then((data) => {
      setState({
        data: data,
        //need to access to data.CLIENTS.length
        // If back-end can do the total in the data that would be great, because I want this total
        // total: data.clients/apartments/ etc..
      });
    });
  }, []);

  return [state, isLoading, hasError];
};
