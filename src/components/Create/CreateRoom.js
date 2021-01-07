import React, { useState } from 'react';
import { FormRoom } from './Room/FormRoom';
import { Wrapper } from './StyledCreate';

export const CreateRoom = ({ PostFetch }) => {
  const [newRoom, setNewRoom] = useState({
    number: '',
    area: '',
    price: '',
    apartmentId: '',
  });
  const [hasError, setHasError] = useState('');

  const handleForm = (e) => {
    e.preventDefault();
    setHasError('');
    if (
      newRoom.number === '' ||
      newRoom.area === '' ||
      newRoom.price === '' ||
      newRoom.apartmentId === ''
    ) {
      return setHasError('Veuillez remplir tous les champs');
    }
    PostFetch('room', newRoom).then((response) => {
      if (response.message) {
        setHasError(`L'ID de l'appartement est introuvable.`);
      } else {
        setHasError('Cet chambre a bien été créé.');
      }
    });
    console.log(newRoom);
  };

  const onChangeValue = (e) => {
    setNewRoom({
      ...newRoom,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Wrapper>
      <FormRoom
        handleForm={handleForm}
        newRoom={newRoom}
        setNewRoom={setNewRoom}
        onChangeValue={onChangeValue}
        hasError={hasError}
      />
    </Wrapper>
  );
};
