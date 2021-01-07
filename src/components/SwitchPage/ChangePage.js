import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  margin-right: 1rem;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
`;

const Button = styled.button`
  width: 180px;
  outline: none;
  border: 1px solid ${({ theme }) => theme.main};
  background-color: #fff;
  color: ${({ theme }) => theme.main};
  padding: 1rem 0;
  cursor: pointer;
  border-radius: 5px;
  margin-right: 1rem;
  font-size: 1.2rem;
  &:disabled {
    opacity: 0.2;
    pointer-events: none;
  }
`;
export const ChangePage = ({
  setPage,
  page,
  checkingEndList,
  checkingStartList,
  data,
}) => {
  return (
    <Wrapper>
      <Button
        onClick={() =>
          setPage({
            start: page.start - 10,
            next: page.next - 10,
          })
        }
        disabled={checkingStartList()}
      >
        Page précédente
      </Button>
      <Button
        onClick={() =>
          setPage({
            start: page.start + 10,
            next: page.next + 10,
          })
        }
        disabled={checkingEndList(data)}
      >
        Page suivante
      </Button>
    </Wrapper>
  );
};
