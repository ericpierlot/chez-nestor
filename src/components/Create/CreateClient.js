import React, { useState } from 'react';
import { FormClient } from './Client/FormClient';
import { Wrapper } from './StyledCreate';

export const CreateClient = ({ PostFetch }) => {
  const [newClient, setNewClient] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    nationality: '',
    birthDate: '',
  });
  const [hasError, setHasError] = useState('');
  const birthDateIsValid = (date) => {
    return /^\d{4}[\/.]\d{1,2}[\/.]\d{1,2}$/.test(date);
  };
  const handleForm = (e) => {
    e.preventDefault();
    setHasError('');
    if (
      newClient.firstName === '' ||
      newClient.lastName === '' ||
      newClient.email === '' ||
      newClient.phone === '' ||
      newClient.nationality === '' ||
      newClient.birthDate === ''
    ) {
      return setHasError('Veuillez remplir tous les champs');
    }

    if (!birthDateIsValid(newClient.birthDate))
      return setHasError(`La date doit être au format YYYY/MM/DD, merci.`);

    PostFetch('client', newClient).then((response) => {
      if (response.message) {
        setHasError('Une erreur est survenue');
      } else {
        setHasError('Ce client a bien été créé.');
      }
    });
  };

  const onChangeValue = (e) => {
    setNewClient({
      ...newClient,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Wrapper>
      <FormClient
        handleForm={handleForm}
        newClient={newClient}
        onChangeValue={onChangeValue}
        hasError={hasError}
      />
    </Wrapper>
  );
};
