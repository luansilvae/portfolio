import styled, { css } from "styled-components";
import { FaGithub, FaLinkedin, FaDiscord } from "react-icons/fa";

export const Container = styled.div`
  background: #101522;
  width: 100%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;
  padding: 30px 20px;

  border-top: solid 1px #1f2937;

  span {
    color: #a9b3c1;
    text-align: center;

    a {
      color: #6C63FF;

      transition: filter 200ms ease-in-out;

      &:hover {
        filter: brightness(90%);
      }
    }
  }

  @media(min-width: 768px) {
    flex-direction: row;
    padding: 30px 30px;
    max-width: 1300px;
  }
`;
export const Links = styled.ul`
  display: flex;
  gap: 20px;
`;

const icon = css`
  fill: #fff;
  width: 28px;
  height: 28px;
`;

export const GithubIcon = styled(FaGithub)`
  ${icon}
`;
export const LinkedinIcon = styled(FaLinkedin)`
  ${icon}
`;
export const DiscordIcon = styled(FaDiscord)`
  ${icon}
`;
