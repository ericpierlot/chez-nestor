import React from 'react';
import { Link } from 'react-router-dom';
import { Section, Container, Card } from './assets/styled';

export const Home = () => {
  return (
    <Section>
      <h1>Dashboard - index</h1>
      <Container>
        <Card>
          <Link to='/list/apartments'>Liste des appartements</Link>
        </Card>
        <Card>
          <Link to='/list/rooms'>Liste des chambres par appartement</Link>
        </Card>
        <Card>
          <Link to='/list/clients'>Liste des clients</Link>
        </Card>
        <Card>
          <Link to='/list/bookings'>Liste des réservations</Link>
        </Card>
        <Card>
          <Link to='/create/apartment'>Créer un appartement</Link>
        </Card>
        <Card>
          <Link to='/create/room'>Créer une chambre d'un appartement</Link>
        </Card>
        <Card>
          <Link to='/create/client'>Créer un client</Link>
        </Card>
        <Card>
          <Link to='/create/booking'>Créer une réservation</Link>
        </Card>
      </Container>
    </Section>
  );
};
