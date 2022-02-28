import styled, { css } from "styled-components";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const Container = styled.div`
  width: 100%;
  background: #101522;
`;

export const Content = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  gap: 30px;
  padding: 30px;

  @media (min-width: 768px) {
    flex-direction: row;
    max-width: 1300px;
    min-height: calc(100vh - 74px);
  }
`;

export const Img = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 350px;
`;

export const Left = styled.div`
  h1 {
    font-size: 52px;
    color: #f7f8f9;
  }

  h2 {
    color: #f7f8f9;
    font-size: 30px;
    font-weight: 500;
    margin: 10px 0;
  }

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const Socials = styled.ul`
  display: flex;
  gap: 20px;
  margin-top: 20px;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const icons = css`
  fill: #f7f8f9;
  width: 40px;
  height: 40px;
`;

export const LinkedinIcon = styled(FaLinkedin)`
  ${icons}
`;

export const GithubIcon = styled(FaGithub)`
  ${icons}
`;
