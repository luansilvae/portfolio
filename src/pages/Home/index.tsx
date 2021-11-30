import React from "react";
import Illustration from "../../assets/images/developer.svg";

import {
  Container,
  Intro,
  Left,
  Socials,
  LinkedinIcon,
  Img,
  GithubIcon,
} from "./styles";

const Home: React.FC = () => {
  return (
    <Container>
      <Intro>
        <Left>
          <h1>Luan Silva</h1>
          <h2>Desenvolvedor Front-End</h2>
          <Socials>
            <li>
              <a href="https://linkedin.com/in/luansilvae" target="_blank">
                <LinkedinIcon />
              </a>
            </li>
            <li>
              <a href="https://github.com/luansilvae" target="_blank">
                <GithubIcon />
              </a>
            </li>
          </Socials>
        </Left>

        <Img src={Illustration} alt="Ilustração" />
      </Intro>
    </Container>
  );
};

export default Home;
