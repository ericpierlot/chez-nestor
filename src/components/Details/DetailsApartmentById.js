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

export const DetailsApartmentById = () => {
  const [details, setDetails] = useState([]);
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState('');
  let history = useHistory();

  useEffect(() => {
    GetFetch('apartment', id).then((data) => {
      if (data === 'Request failed with status code 404') {
        setIsLoading(false);
        return setHasError('ID Introuvable');
      }
      setDetails(data.test || []);
      setIsLoading(false);
    });
  }, [id]);

  return (
    <Section>
      <Back onClick={() => history.push('/list/apartments')}>Retour</Back>

      <Container>
        {isLoading
          ? 'Chargement..'
          : hasError
          ? hasError
          : details.map((item, index) => {
              const { number, area, price } = item;
              return (
                <Card key={index}>
                  <CardTop>ID : {id}</CardTop>
                  <CardContainer>
                    <p>number : {number}</p>
                    <p>Chambre : {area} m²</p>
                    <p>Prix de la chambre : {price} </p>
                  </CardContainer>
                </Card>
              );
            })}
      </Container>
    </Section>
  );
};
