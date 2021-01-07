import { Link } from 'react-router-dom';
import { Formulaire, Label, Input, Button } from '../StyledCreate';

export const FormBooking = ({
  handleForm,
  newBooking,
  handleOnChange,
  hasError,
}) => {
  return (
    <Formulaire
      onSubmit={(e) => {
        handleForm(e);
      }}
    >
      <Label htmlFor='clientId'>
        Client ID : <Link to='/list/clients'>(voir)</Link>
      </Label>
      <Input
        type='text'
        name='clientId'
        value={newBooking.clientId}
        onChange={handleOnChange}
      />
      <Label htmlFor='roomId'>
        Room ID : <Link to='/list/rooms'>(voir)</Link>
      </Label>
      <Input
        type='text'
        name='roomId'
        value={newBooking.roomId}
        onChange={handleOnChange}
      />

      <Button>Créer</Button>
      {hasError}
    </Formulaire>
  );
};
