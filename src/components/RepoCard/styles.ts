import styled, { css } from "styled-components";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export const Container = styled.div`
  background: #1f2937;
  padding: 20px;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const TopSide = styled.div`
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  p {
    color: #a9b3c1;
    font-size: 18px;
    margin: 20px 0;
  }
`;

export const Title = styled.a`
  color: #fff;
  font-size: 20px;

  transition: color 200ms ease-in-out;

  &:hover {
    color: #6c63ff;
  }
`;

export const Links = styled.ul`
  display: flex;
  gap: 20px;
`;

const icon = css`
  fill: #fff;
  width: 22px;
  height: 22px;
  flex-shrink: 0;

  transition: fill 200ms ease-in-out;

  &:hover {
    fill: #6c63ff;
  }
`;

export const GithubIcon = styled(FaGithub)`
  ${icon}
`;

export const ExternalIcon = styled(FaExternalLinkAlt)`
  ${icon}
`;

export const BottomSide = styled.div`
  display: flex;
  gap: 10px;

  display: flex;
  flex-wrap: wrap;

  li {
    background: #47436b;
    padding: 2px 5px;
    border-radius: 5px;
    color: #fff;

    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
`;
