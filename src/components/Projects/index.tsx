import React from "react";

import repos from "../../repos.json";
import RepoCard from "../RepoCard";

import { Container, RepoContainer, GithubButton, GithubIcon } from "./styles";

const Projects: React.FC = () => {
  return (
    <Container id="projects">
      <h2 data-aos="fade-up">Projetos</h2>

      <RepoContainer>
        {repos.map((repo) => (
          <RepoCard
            key={repo.name}
            name={repo.name}
            description={repo.description}
            github={repo.github}
            languages={repo.languages}
            external={repo.external}
          />
        ))}
      </RepoContainer>

      <GithubButton data-aos="fade-up" data-aos-delay="400">
        <a
          href="https://github.com/luansilvae?tab=repositories"
          target="_blank"
        >
          <GithubIcon />
          Ver mais no github
        </a>
      </GithubButton>
    </Container>
  );
};

export default Projects;
