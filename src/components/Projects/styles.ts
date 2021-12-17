import styled from "styled-components";

import { FaGithub } from "react-icons/fa";

export const Container = styled.section`
  background: #101522;
  padding: 30px 0;
  width: 100%;

  h2 {
    color: #fff;
    font-size: 28px;
    text-align: center;
  }
`;

export const RepoContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  max-width: 1300px;
  margin: 0 auto;
  padding: 30px;
  gap: 30px;

  @media (max-width: 768px) {
    padding: 30px 20px;
  }

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`;

export const GithubButton = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    padding: 15px 50px;
    background: #040404;
    color: #fff;
    font-size: 17px;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    border-radius: 10px;

    transition: background-color 200ms ease-in-out;

    &:hover {
      background-color: #1f2937;
    }
  }
`;

export const GithubIcon = styled(FaGithub)`
  fill: #fff;
  width: 22px;
  height: 22px;
  flex-shrink: 0;
`;
