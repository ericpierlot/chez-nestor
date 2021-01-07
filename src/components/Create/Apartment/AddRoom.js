import React, { useState } from 'react';
import { Label, Input, Button, ContainerRoom } from '../StyledCreate';

export const AddRoom = ({
  newApartment,
  setNewApartment,
  index,
  createFromRoom,
  setNewRoom,
}) => {
  const [area, setArea] = useState('');
  const [price, setPrice] = useState('');
  const [number, setNumber] = useState('');
  const [apartmentId, setApartmentId] = useState('');

  const [isClicked, setIsClicked] = useState(false);

  const handleValidateRoom = () => {
    if (createFromRoom) {
      const room = {
        number,
        area,
        price,
        apartmentId,
      };
      return setNewRoom(() => room);
    }
    setIsClicked(true);
    const room = {
      area,
      price,
      number,
    };

    setNewApartment({
      ...newApartment,
      rooms: [...newApartment.rooms, room],
    });

    // setNewApartment({
    //   ...newApartment,
    //   rooms: [...newApartment.rooms, room],
    // });
  };

  return (
    <ContainerRoom key={index}>
      {createFromRoom && (
        <>
          <Label>Appartement ID :</Label>
          <Input
            type='text'
            name='apartmentId'
            value={apartmentId}
            onChange={(e) => setApartmentId(e.target.value)}
          />
        </>
      )}
      <h2>Chambre :</h2>
      <Label htmlFor='price'>Number : </Label>
      <Input
        type='text'
        name='number'
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        disabled={isClicked}
      />
      <Label htmlFor=''>M² : </Label>
      <Input
        type='text'
        name='area'
        value={area}
        onChange={(e) => setArea(e.target.value)}
        disabled={isClicked}
      />
      <Label htmlFor='price'>Prix : </Label>
      <Input
        type='text'
        name='price'
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        disabled={isClicked}
      />
      <Button type='submit' onClick={handleValidateRoom} disabled={isClicked}>
        Valider
      </Button>
    </ContainerRoom>
  );
};
