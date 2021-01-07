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

export const DetailsClientById = () => {
  const [details, setDetails] = useState([]);
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState('');
  let history = useHistory();

  useEffect(() => {
    GetFetch('client', id).then((data) => {
      if (data === 'Request failed with status code 404') {
        setIsLoading(false);
        return setHasError('ID Introuvable');
      }
      setDetails([data.client] || []);
      setIsLoading(false);
    });
  }, [id]);

  return (
    <Section>
      <Back onClick={() => history.push('/list/clients')}>Retour</Back>

      <Container>
        {isLoading
          ? 'Chargement..'
          : hasError
          ? hasError
          : details.map((item) => {
              const {
                firstName,
                lastName,
                phone,
                birthDate,
                nationality,
              } = item;
              return (
                <Card key={id}>
                  <CardTop>ID : {id}</CardTop>
                  <CardContainer>
                    <p>Prénom : {firstName}</p>
                    <p>Nom : {lastName}</p>
                    <p>Téléphone : {phone}</p>
                    <p>Nationalité : {nationality}</p>
                    <p>
                      Date de naissance : {new Date(birthDate).toLocaleString()}
                    </p>
                  </CardContainer>
                  <CardTop
                    style={{ borderRadius: '0', backgroundColor: '#3f5c96' }}
                  >
                    Bookings{' '}
                  </CardTop>
                  <div>
                    {item.bookings.length > 0 &&
                      item.bookings.map((item, index) => {
                        const {
                          createdAt,
                          updatedAt,
                          room: { area, number, price },
                        } = item;
                        return (
                          <Card key={index}>
                            <CardContainer
                              style={{ borderBottom: '1px solid #c0c0c0' }}
                            >
                              <p>Chambre : </p>
                              <p>area : {area}</p>
                              <p>number: {number}</p>
                              <p>price: {price}</p>
                              <p>
                                Booké le {new Date(createdAt).toLocaleString()}
                              </p>
                              <p>
                                Modifié le{' '}
                                {new Date(updatedAt).toLocaleString()}
                              </p>
                            </CardContainer>
                          </Card>
                        );
                      })}
                  </div>
                </Card>
              );
            })}
      </Container>
    </Section>
  );
};
