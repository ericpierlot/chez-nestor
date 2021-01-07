import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { GetFetch } from '../../api/GetFetch';
import {
  Section,
  Back,
  Card,
  CardContainer,
  CardTop,
  Container,
} from './StyledDetails';

export const DetailsBookingById = () => {
  const [details, setDetails] = useState([]);
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState('');
  let history = useHistory();

  useEffect(() => {
    GetFetch('booking', id).then((data) => {
      if (data === 'Request failed with status code 404') {
        setIsLoading(false);
        return setHasError('ID Introuvable');
      }
      setDetails([data.booking]);
      setIsLoading(false);
    });
  }, [id]);

  return (
    <Section>
      <Back onClick={() => history.push('/list/bookings')}>Retour</Back>

      <Container>
        {isLoading
          ? 'Chargement..'
          : hasError
          ? hasError
          : details.map((item) => {
              const {
                createdAt,
                updatedAt,
                client: { firstName, lastName, phone },
              } = item;
              return (
                <Card key={id}>
                  <CardTop>ID de la réservation : {id}</CardTop>
                  <CardContainer>
                    <p>Prénom : {firstName}</p>
                    <p>Nom de famille: {lastName}</p>
                    <p>Téléphone : {phone}</p>
                    <p>Réservé le {new Date(createdAt).toLocaleString()}</p>
                    <p>Modifié le {new Date(updatedAt).toLocaleString()}</p>
                  </CardContainer>
                </Card>
              );
            })}
      </Container>
    </Section>
  );
};
