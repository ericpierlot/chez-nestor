import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
`;
export const Container = styled.article`
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Card = styled.div`
  width: 80%;
  background-color: white;
  border-radius: 5px;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.main};
`;

export const CardTop = styled.div`
  background-color: ${({ theme }) => theme.main};
  color: white;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  padding: 1rem;
  font-weight: bold;
`;

export const CardContainer = styled.div`
  padding: 1rem;
`;

export const Back = styled.button`
  text-align: center;
  width: 100px;
  padding: 0.5rem 0;
  outline: none;
  background-color: white;
  border: 1px solid black;
  border-radius: 5px;
  margin: 1rem 0;
`;
