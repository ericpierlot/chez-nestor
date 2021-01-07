import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  h1 {
    text-align: center;
  }
`;

export const Container = styled.article`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (min-width: 840px) {
    width: 60vw;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    margin: auto;
  }
  @media (min-width: 1000px) {
    width: 55vw;
  }
  @media (min-width: 1200px) {
    width: 65vw;
  }
`;
export const Card = styled.div`
  width: 80%;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 2rem;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.main};
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.1);
  transition: all 330ms ease;
  &:hover {
    background-color: teal;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.4);
    transform: scale(1.02, 1.02);
  }
  a {
    color: white;
    font-size: 1.2rem;
    text-decoration: none;
  }
  @media (min-width: 840px) {
    width: 250px;

    margin-right: 1rem;
  }
`;
