import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Card = styled.div`
  padding: 1rem;
  width: 80%;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: whitesmoke;
  font-size: 1.2rem;
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
    font-weight: bold;
    font-size: 1.2rem;
    text-decoration: none;
  }
  @media (min-width: 840px) {
    width: 250px;

    margin-right: 1rem;
  }
  p {
    text-align: center;
  }
  div > span {
    font-size: 1.2rem;
    text-decoration: underline;
  }
`;
export const ListingClients = ({ data, page, type, isLoading }) => {
  return (
    <>
      {isLoading
        ? 'Chargement..'
        : data.data &&
          data.data.slice(page.start, page.next).map((item) => {
            const { id, firstName, lastName } = item;
            return (
              <Card key={id}>
                <div>ID : {id}</div>
                <div>Prénom : {firstName}</div>
                <div>Nom : {lastName}</div>
                <Link key={id} to={`/list/${type}/${type}/${id}`}>
                  <p>Voir les détails</p>
                </Link>
              </Card>
            );
          })}
    </>
  );
};
