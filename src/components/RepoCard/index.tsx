import React from "react";

import {
  Container,
  TopSide,
  Title,
  Links,
  GithubIcon,
  ExternalIcon,
  BottomSide,
} from "./styles";

interface RepoProps {
  name: string;
  description: string;
  github: string;
  external?: string;
  languages: string[];
}

const RepoCard: React.FC<RepoProps> = ({
  name,
  description,
  github,
  external,
  languages,
}) => {
  return (
    <Container data-aos="fade-up">
      <TopSide>
        <header>
          <Title href={github} target="_blank">{name}</Title>
          <Links>
            <li>
              <a href={github} target="_blank">
                <GithubIcon />
              </a>
            </li>

            {external && (
              <li>
                <a href={external} target="_blank">
                  <ExternalIcon />
                </a>
              </li>
            )}
          </Links>
        </header>

        <p>{description}</p>
      </TopSide>

      <BottomSide>
        {languages.map((language, index) => (
          <li key={index}>{language}</li>
        ))}
      </BottomSide>
    </Container>
  );
};

export default RepoCard;
