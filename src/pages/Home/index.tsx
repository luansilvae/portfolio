import React from "react";
import About from "../../components/About";
import Intro from "../../components/Intro";

import {
  Container
} from "./styles";

const Home: React.FC = () => {
  return (
    <Container>
      <Intro />
      <About />
    </Container>
  );
};

export default Home;
