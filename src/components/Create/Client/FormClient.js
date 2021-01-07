import { Formulaire, Label, Input, Button } from '../StyledCreate';

export const FormClient = ({
  handleForm,
  newClient,
  onChangeValue,
  hasError,
}) => {
  return (
    <Formulaire onSubmit={(e) => handleForm(e)}>
      <Label htmlFor='name'>Prénom :</Label>
      <Input
        type='text'
        name='firstName'
        value={newClient.firstName}
        onChange={onChangeValue}
      />
      <Label htmlFor='number'>Nom de famille :</Label>
      <Input
        type='text'
        name='lastName'
        value={newClient.lastName}
        onChange={onChangeValue}
      />
      <Label htmlFor='email'>Email :</Label>
      <Input
        type='email'
        name='email'
        value={newClient.email}
        onChange={onChangeValue}
      />
      <Label htmlFor='phone'>Téléphone :</Label>
      <Input
        type='text'
        name='phone'
        value={newClient.phone}
        onChange={onChangeValue}
      />
      <Label htmlFor='nationality'>Nationalité</Label>
      <Input
        type='text'
        name='nationality'
        value={newClient.nationality}
        onChange={onChangeValue}
      />
      <Label htmlFor='birthDate'>Date de naissance :</Label>
      <Input
        type='text'
        name='birthDate'
        value={newClient.birthDate}
        onChange={onChangeValue}
      />

      <Button>Créer</Button>
      {hasError}
    </Formulaire>
  );
};
