import React from "react";

import {
  Container,
  Content,
  Links,
  GithubIcon,
  LinkedinIcon,
  DiscordIcon,
} from "./styles";

import { format } from "date-fns";

const Footer: React.FC = () => {
  const year = format(new Date(), "yyyy");

  return (
    <Container>
      <Content>
        <span>
          © {year} Luan Silva, construído com ♡{" "}
          <a href="https://github.com/luansilvae/portfolio" target="_blank">
            Código no GitHub
          </a>
        </span>

        <Links>
          <li>
            <a
              href="http://github.com/luansilvae"
              title="Perfil no github"
              target="_blank"
            >
              <GithubIcon />
            </a>
          </li>
          <li>
            <a
              href="http://linkedin.com/in/luansilvae"
              title="Perfil no linkedin"
              target="_blank"
            >
              <LinkedinIcon />
            </a>
          </li>
          <li>
            <a
              href="https://discord.gg/Qg8VpSPx9z"
              title="Servidor no discord"
              target="_blank"
            >
              <DiscordIcon />
            </a>
          </li>
        </Links>
      </Content>
    </Container>
  );
};

export default Footer;
