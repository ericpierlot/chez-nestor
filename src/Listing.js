import React from 'react';

import { useParams } from 'react-router-dom';
import Apartments from './components/Listing/Apartments';
import Rooms from './components/Listing/Rooms';
import Clients from './components/Listing/Clients';
import Bookings from './components/Listing/Booking';
import { GetFetch } from './api/GetFetch';
import { Section } from './assets/styled';

const Listing = () => {
  const { choice } = useParams();

  return (
    <Section>
      {choice === 'apartments' && (
        <Apartments GetFetch={GetFetch} choice={choice} />
      )}
      {choice === 'rooms' && <Rooms GetFetch={GetFetch} choice={choice} />}
      {choice === 'clients' && <Clients GetFetch={GetFetch} choice={choice} />}
      {choice === 'bookings' && (
        <Bookings GetFetch={GetFetch} choice={choice} />
      )}
    </Section>
  );
};

export default Listing;
