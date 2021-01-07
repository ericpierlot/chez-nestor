import { AddRoom } from '../Apartment/AddRoom';
import styled from 'styled-components';
const Formulaire = styled.form`
  width: 90%;
  display: flex;
  flex-direction: column;
  @media (min-width: 1400px) {
    width: 100%;
  }
`;

export const FormRoom = ({ newRoom, setNewRoom, handleForm, hasError }) => {
  return (
    <Formulaire onSubmit={(e) => handleForm(e)}>
      <AddRoom
        createFromRoom={true}
        setNewRoom={setNewRoom}
        newRoom={newRoom}
      />
      {hasError}
    </Formulaire>
  );
};
