import React, { useEffect, useState } from 'react';
import { ListingComponent } from '../ListingComponent';

const Bookings = ({ GetFetch, choice }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    GetFetch('booking').then((data) => {
      setData({
        data: data.bookings || [],
        total: data.bookings.length,
      });
      setIsLoading(false);
    });
  }, [GetFetch]);

  return <ListingComponent data={data} type={choice} isLoading={isLoading} />;
};

export default Bookings;
