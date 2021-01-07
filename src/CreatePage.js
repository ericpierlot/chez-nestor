import React from 'react';
import { CreateApartment } from './components/Create/CreateApartment';
import { CreateRoom } from './components/Create/CreateRoom';
import { CreateClient } from './components/Create/CreateClient';
import { CreateBooking } from './components/Create/CreateBooking';
import { PostFetch } from './api/PostFetch';
import { useParams } from 'react-router-dom';
import { Section, Container } from './assets/styled';

const CreatePage = () => {
  const { choice } = useParams();

  return (
    <Section>
      <h1>Création d'un {choice}</h1>
      <Container>
        {choice === 'apartment' && <CreateApartment PostFetch={PostFetch} />}
        {choice === 'room' && <CreateRoom PostFetch={PostFetch} />}
        {choice === 'client' && <CreateClient PostFetch={PostFetch} />}
        {choice === 'booking' && <CreateBooking PostFetch={PostFetch} />}
      </Container>
    </Section>
  );
};

export default CreatePage;
