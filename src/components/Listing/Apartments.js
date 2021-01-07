import React, { useEffect, useState } from 'react';
import { ListingComponent } from '../ListingComponent';
const Apartments = ({ choice, GetFetch }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    GetFetch('apartment').then((data) => {
      setData({
        data: data.apartments || [],
        total: data.apartments.length,
      });
      setIsLoading(false);
    });
  }, [GetFetch]);

  return <ListingComponent data={data} type={choice} isLoading={isLoading} />;
};

export default Apartments;
