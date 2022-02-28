import styled from "styled-components";

export const Container = styled.div`
  background: #101522;
  margin: 0 auto;
  padding: 20px 0;
`;

export const Nav = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  gap: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 0;
    max-width: 1250px;
  }
`;

export const Links = styled.ul`
  display: flex;
  height: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }

  a {
    color: #ffffff;
    font-size: 20px;
    padding: 20px 30px;

    transition: color 200ms ease-in-out;

    &:hover {
      color: #6c63ff;
    }
  }
`;
