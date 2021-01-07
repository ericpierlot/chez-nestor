import styled from 'styled-components';
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border: 2px solid ${({ theme }) => theme.main};
  border-radius: 10px;
  width: 60%;
`;

export const Formulaire = styled.form`
  width: 90%;
  display: flex;
  flex-direction: column;
  @media (min-width: 1400px) {
    width: 100%;
  }
`;
export const Label = styled.label`
  font-size: 1.2rem;
`;
export const Input = styled.input`
  padding: 0.5rem 0.25rem;
  font-size: 1.2rem;
  outline: none;
  border: none;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-bottom: 1px solid ${({ theme }) => theme.main};
  &:focus {
    border-bottom: 1px solid teal;
  }
`;
export const Button = styled.button`
  padding: 1rem 0;
  background-color: ${({ theme }) => theme.main};
  color: white;
  font-size: 1.2rem;
  margin: 0.5rem 0;
  outline: none;
  border: none;
  border-radius: 5px;
  transition: all 330ms ease;
  &:hover {
    background-color: teal;
  }
  &:disabled {
    opacity: 0.2;
    pointer-events: none;
  }
`;

export const ContainerRoom = styled.div`
  h2 {
    text-align: center;
  }
  display: flex;
  flex-direction: column;
`;
