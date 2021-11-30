import styled from "styled-components";

export const Container = styled.div`
  background: #101522;
  width: 100%;
  padding: 30px;
`;

export const Nav = styled.div`
  max-width: 1250px;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media(max-width: 768px) {
    flex-direction: column;
    gap: 30px;
  }
`;

export const Links = styled.ul`
  display: flex;
  height: 100%;

  @media(max-width: 768px) {
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
      color: #6C63FF;
    }
  }
`;
