import React from "react";
import About from "../../components/About";
import Intro from "../../components/Intro";
import Projects from "../../components/Projects";

import {
  Container
} from "./styles";

const Home: React.FC = () => {
  return (
    <Container>
      <Intro />
      <About />
      <Projects />
    </Container>
  );
};

export default Home;
