import React, { useEffect, useState } from 'react';
import { ListingComponent } from '../ListingComponent';

const Rooms = ({ GetFetch, choice }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    GetFetch('room').then((data) => {
      setData({
        data: data.rooms || [],
        total: data.rooms.length,
      });
      setIsLoading(false);
    });
  }, [GetFetch]);

  return <ListingComponent data={data} type={choice} isLoading={isLoading} />;
};

export default Rooms;
