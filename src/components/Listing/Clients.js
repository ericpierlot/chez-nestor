import React, { useEffect, useState } from 'react';
import { ListingComponent } from '../ListingComponent';

const Clients = ({ GetFetch, choice }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    GetFetch('client').then((data) => {
      setData({
        data: data.clients || [],
        total: data.clients.length,
      });
      setIsLoading(false);
    });
  }, [GetFetch]);

  return <ListingComponent data={data} type={choice} isLoading={isLoading} />;
};

export default Clients;
