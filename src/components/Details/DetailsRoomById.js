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

export const DetailsRoomById = () => {
  const [details, setDetails] = useState([]);
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState('');

  let history = useHistory();

  useEffect(() => {
    GetFetch('room', id).then((data) => {
      if (data === 'Request failed with status code 404') {
        setIsLoading(false);
        return setHasError('ID Introuvable');
      }
      setDetails([data.room] || []);
      setIsLoading(false);
    });
  }, [id]);

  return (
    <Section>
      <Back onClick={() => history.push('/list/rooms')}>Retour</Back>

      <Container>
        {isLoading
          ? 'Chargement..'
          : hasError
          ? hasError
          : details.map((item) => {
              const {
                area,
                number,
                price,
                apartment: { name },
              } = item;
              return (
                <Card key={id}>
                  <CardTop>ID chambre : {id}</CardTop>
                  <CardContainer>
                    <p>Number : {number}</p>
                    <p>Area: {area}</p>
                    <p>Price: {price}</p>
                    <div>Appartement : </div>
                    <p>Number : {item.apartment.number}</p>
                    <p>Name : {name}</p>
                  </CardContainer>
                </Card>
              );
            })}
      </Container>
    </Section>
  );
};
