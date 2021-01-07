import { Formulaire, Label, Input, Button } from '../StyledCreate';

export const FormApartment = ({
  handleForm,
  checkingRoomValidate,
  newApartment,
  onChangeValue,
  renderAddRoom,
  setNumberRoom,
  hasError,
}) => {
  return (
    <Formulaire onSubmit={(e) => handleForm(e)}>
      <Label htmlFor='name'>Nom :</Label>
      <Input
        type='text'
        id='name'
        name='name'
        value={newApartment.name}
        onChange={(e) => onChangeValue(e)}
      />
      <Label htmlFor='number'>Number :</Label>
      <Input
        type='text'
        id='number'
        name='number'
        value={newApartment.number}
        onChange={(e) => onChangeValue(e)}
      />
      {renderAddRoom()}
      <Button
        type='Button'
        onClick={() => {
          setNumberRoom((prevNumber) => prevNumber + 1);
        }}
        disabled={checkingRoomValidate()}
      >
        Ajouter une autre autre chambre
      </Button>
      <Button
        disabled={
          newApartment.rooms.length > 0 && newApartment.name !== ''
            ? false
            : true
        }
      >
        Valider la création
      </Button>
      {newApartment.name === '' && 'Veuillez indiquer le nom.'}
      {hasError}
    </Formulaire>
  );
};
