import React, { useState } from 'react';
import { ListingApartments } from './Listing/ListingApartments';
import { ListingClients } from './Listing/ListingClients';
import { ListingRooms } from './Listing/ListingRooms';
import { ListingBookings } from './Listing/ListingBookings';
import { ChangePage } from './SwitchPage/ChangePage';
import { Container } from '../assets/styled';

// apartment or room or user or booking,
export const ListingComponent = ({ type, data, isLoading }) => {
  const [page, setPage] = useState({
    start: 0,
    next: 10,
  });

  // Mes functions pour quelques logique
  const checkingEndList = (data) => {
    if (page.next >= data.total) return true;
    return false;
  };
  const checkingStartList = () => {
    if (page.start === 0) return true;
    return false;
  };

  return (
    <>
      <h1>
        Liste des {type} ({data && data.total})
      </h1>
      <ChangePage
        setPage={setPage}
        page={page}
        checkingEndList={checkingEndList}
        checkingStartList={checkingStartList}
        data={data}
      />
      <Container>
        {type === 'apartments' && (
          <ListingApartments
            type={type}
            data={data}
            page={page}
            isLoading={isLoading}
          />
        )}
        {type === 'rooms' && (
          <ListingRooms
            type={type}
            data={data}
            page={page}
            isLoading={isLoading}
          />
        )}
        {type === 'clients' && (
          <ListingClients
            type={type}
            data={data}
            page={page}
            isLoading={isLoading}
          />
        )}
        {type === 'bookings' && (
          <ListingBookings
            type={type}
            data={data}
            page={page}
            isLoading={isLoading}
          />
        )}
      </Container>
    </>
  );
};
