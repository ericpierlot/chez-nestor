import React, { useState } from 'react';
import { FormApartment } from './Apartment/FormApartment';
import { AddRoom } from './Apartment/AddRoom';
import { Wrapper } from './StyledCreate';

export const CreateApartment = ({ PostFetch }) => {
  const [newApartment, setNewApartment] = useState({
    number: '',
    name: '',
    rooms: '',
  });
  const [numberRoom, setNumberRoom] = useState(1);
  const [hasError, setHasError] = useState('');

  const checkingRoomValidate = () => {
    if (numberRoom >= newApartment.rooms.length + 1) {
      return true;
    } else {
      return false;
    }
  };

  const handleForm = (e) => {
    e.preventDefault();
    setHasError('');
    if (
      newApartment.number === '' ||
      newApartment.name === '' ||
      newApartment.rooms === ''
    ) {
      return setHasError('Veuillez remplir tous les champs');
    }

    PostFetch('apartment', newApartment).then((response) => {
      if (response.message) {
        setHasError('Une erreur est survenue');
      } else {
        setHasError('Cet appartement a bien été créé.');
      }
    });
    console.log(newApartment);
  };

  const onChangeValue = (e) => {
    setNewApartment({
      ...newApartment,
      [e.target.name]: e.target.value,
    });
  };

  const renderAddRoom = () => {
    const nb_rooms = [];
    for (let i = 0; i < numberRoom; i++) {
      nb_rooms.push(1);
    }

    const totalAddRoom = nb_rooms.map((index) => {
      return (
        <AddRoom
          key={index}
          newApartment={newApartment}
          setNewApartment={setNewApartment}
        />
      );
    });

    return totalAddRoom;
  };

  return (
    <Wrapper>
      <FormApartment
        setNumberRoom={setNumberRoom}
        numberRoom={numberRoom}
        renderAddRoom={renderAddRoom}
        handleForm={handleForm}
        checkingRoomValidate={checkingRoomValidate}
        newApartment={newApartment}
        onChangeValue={onChangeValue}
        hasError={hasError}
      />
    </Wrapper>
  );
};
