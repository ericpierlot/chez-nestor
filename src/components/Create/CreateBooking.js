import React, { useState } from 'react';
import { FormBooking } from './Booking/FormBooking';
import { Wrapper } from './StyledCreate';

export const CreateBooking = ({ PostFetch }) => {
  const [newBooking, setNewBooking] = useState({
    clientId: '',
    roomId: '',
  });
  const [hasError, setHasError] = useState('');

  const handleOnChange = (e) => {
    setNewBooking({
      ...newBooking,
      [e.target.name]: e.target.value,
    });
  };
  const handleForm = (e) => {
    e.preventDefault();
    setHasError('');
    if (newBooking.clientId === '' || newBooking.roomId === '') {
      return setHasError('Veuillez remplir tous les champs');
    }

    PostFetch('booking', newBooking).then((response) => {
      if (response.message) {
        setHasError(
          'Client ID ou Room ID, introuvable / You have already booked one or more rooms for the chosen date.'
        );
      } else {
        setHasError('Cette réservation a bien été créée.');
      }
    });
  };

  return (
    <Wrapper>
      <FormBooking
        handleForm={handleForm}
        newBooking={newBooking}
        handleOnChange={handleOnChange}
        hasError={hasError}
      />
    </Wrapper>
  );
};
